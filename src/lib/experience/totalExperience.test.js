import assert from 'node:assert/strict'
import test from 'node:test'

import { calculateTotalExperienceMonths, formatTotalExperience } from './totalExperience.js'

test('calculateTotalExperienceMonths merges ranges and does not double count overlaps', () => {
  const now = new Date('2026-02-07T00:00:00.000Z')

  const months = calculateTotalExperienceMonths(
    [
      { duration: 'April 2022 - July 2024' },
      { duration: 'July 2024 - Present' },
    ],
    { now },
  )

  assert.equal(months, 47)
})

test('formatTotalExperience formats months into years+months (ru)', () => {
  assert.equal(formatTotalExperience(47, 'ru'), '3 года 11 месяцев')
})

