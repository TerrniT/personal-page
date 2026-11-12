import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

/**
 * Astro 4's @astrojs/vercel adapter (v7) hardcodes `nodejs18.x` as the
 * serverless function runtime, and Vercel has discontinued Node 18.
 * After `astro build` we rewrite the generated `.vc-config.json` files
 * to the runtime configured for the project (Node 26 by default).
 *
 * Remove this script once the project is migrated to a newer
 * @astrojs/vercel version that emits a supported runtime itself.
 */
const FUNCTIONS_DIR = '.vercel/output/functions'
const TARGET_RUNTIME = process.env.VERCEL_NODE_RUNTIME ?? 'nodejs26.x'

async function collectConfigs(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const fullPath = join(dir, entry.name)

    if (entry.isDirectory())
      files.push(...await collectConfigs(fullPath))
    else if (entry.name === '.vc-config.json')
      files.push(fullPath)
  }

  return files
}

try {
  const configs = await collectConfigs(FUNCTIONS_DIR)
  let patched = 0

  for (const file of configs) {
    const config = JSON.parse(await readFile(file, 'utf8'))

    if (typeof config.runtime !== 'string' || !config.runtime.startsWith('nodejs'))
      continue

    config.runtime = TARGET_RUNTIME
    await writeFile(file, `${JSON.stringify(config, null, '\t')}\n`)
    console.log(`[vercel-runtime] ${file} -> ${TARGET_RUNTIME}`)
    patched++
  }

  console.log(patched > 0
    ? `[vercel-runtime] patched ${patched} function config(s)`
    : '[vercel-runtime] nothing to patch')
}
catch (error) {
  if (error.code === 'ENOENT') {
    console.log('[vercel-runtime] no Vercel output found, skipped')
  }
  else {
    throw error
  }
}
