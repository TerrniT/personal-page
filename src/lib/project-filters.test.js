import assert from 'node:assert/strict'
/* eslint-disable test/no-import-node-test */
import test from 'node:test'

import { getProjectFilterState } from './project-filters.js'

const projects = [
  {
    href: '/projects/agency-dashboard',
    data: {
      title: 'Agency Dashboard',
      type: 'commercial',
      stack: ['vue', 'nodejs'],
    },
  },
  {
    href: '/projects/kit-starter',
    data: {
      title: 'Kit Starter',
      type: 'open-source',
      stack: ['svelte', 'nodejs'],
    },
  },
  {
    href: '/projects/design-system',
    data: {
      title: 'Design System',
      type: 'commercial',
      stack: ['react'],
    },
  },
]

test('builds filter state, dedupes query values and groups filtered projects by type', () => {
  const state = getProjectFilterState(
    projects,
    new URLSearchParams([
      ['type', 'commercial'],
      ['type', 'commercial'],
      ['type', 'unknown'],
      ['stack', 'nodejs'],
      ['stack', 'missing'],
    ]),
  )

  assert.deepEqual(state.availableTypes, ['commercial', 'open-source'])
  assert.deepEqual(state.availableStacks, ['nodejs', 'react', 'svelte', 'vue'])
  assert.deepEqual(state.selectedTypes, ['commercial'])
  assert.deepEqual(state.selectedStacks, ['nodejs'])
  assert.equal(state.totalProjects, 1)
  assert.deepEqual(state.sections, [
    {
      type: 'commercial',
      items: [projects[0]],
    },
  ])
})

test('returns both sections when no filters are selected', () => {
  const state = getProjectFilterState(projects, new URLSearchParams())

  assert.equal(state.totalProjects, 3)
  assert.deepEqual(state.sections, [
    {
      type: 'commercial',
      items: [projects[0], projects[2]],
    },
    {
      type: 'open-source',
      items: [projects[1]],
    },
  ])
})
