import process from 'node:process'

/**
 * Values that must come from the environment instead of the source tree.
 *
 * Personal requisites (full name, tax ID) are rendered on the legal and
 * privacy pages, so they are set per deployment rather than committed.
 *
 * The site runs with `output: 'server'`, so the serverless runtime reads
 * `process.env` directly and picks up values added after the build.
 */

function readEnv(key: string): string {
  const value = process.env[key] ?? ''

  return value.trim()
}

const legalName = readEnv('LEGAL_NAME')
const legalNameEn = readEnv('LEGAL_NAME_EN')
const taxId = readEnv('LEGAL_TAX_ID')

export const ENV = {
  /**
   * Full legal name of the self-employed contractor, e.g. "Котовский Глеб".
   */
  legalName: legalName || 'Котовский Глеб',
  /**
   * Latin spelling of the same name, used on the English pages. Falls back to
   * the legal name: transliterating it here would invent a spelling.
   */
  legalNameEn: legalNameEn || legalName || 'Gleb Kotovsky',
  /**
   * ИНН of the self-employed contractor.
   */
  taxId: taxId || 'не указан',
  taxIdEn: taxId || 'not specified',
}
