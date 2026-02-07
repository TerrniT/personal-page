const MONTHS = {
  jan: 0,
  january: 0,
  feb: 1,
  february: 1,
  mar: 2,
  march: 2,
  apr: 3,
  april: 3,
  may: 4,
  jun: 5,
  june: 5,
  jul: 6,
  july: 6,
  aug: 7,
  august: 7,
  sep: 8,
  sept: 8,
  september: 8,
  oct: 9,
  october: 9,
  nov: 10,
  november: 10,
  dec: 11,
  december: 11,
}

function monthIndexFromDate(date) {
  return date.getUTCFullYear() * 12 + date.getUTCMonth()
}

function parseMonthYear(input) {
  const trimmed = input.trim()
  const match = /^([A-Za-z]+)\s+(\d{4})$/.exec(trimmed)
  if (!match)
    return null

  const monthKey = match[1].toLowerCase()
  const month = MONTHS[monthKey]
  if (month === undefined)
    return null

  const year = Number.parseInt(match[2], 10)
  if (!Number.isFinite(year))
    return null

  return { year, month }
}

function parseDurationToMonthRange(duration, now) {
  const parts = duration.split('-').map(part => part.trim()).filter(Boolean)
  if (parts.length !== 2)
    return null

  const start = parseMonthYear(parts[0])
  if (!start)
    return null

  const endRaw = parts[1]
  const end = /^present$/i.test(endRaw) ? null : parseMonthYear(endRaw)
  if (endRaw && !end && !/^present$/i.test(endRaw))
    return null

  const startIndex = start.year * 12 + start.month
  const endIndex = end ? (end.year * 12 + end.month) : monthIndexFromDate(now)

  if (startIndex > endIndex)
    return null

  return [startIndex, endIndex]
}

function mergeMonthRanges(ranges) {
  const sorted = [...ranges].sort((a, b) => a[0] - b[0])
  /** @type {Array<[number, number]>} */
  const merged = []

  for (const range of sorted) {
    const last = merged.at(-1)
    if (!last) {
      merged.push([...range])
      continue
    }

    if (range[0] <= last[1] + 1) {
      last[1] = Math.max(last[1], range[1])
      continue
    }

    merged.push([...range])
  }

  return merged
}

/**
 * @param {Array<{duration?: string | null}>} experiences
 * @param {{ now?: Date }} [options]
 */
export function calculateTotalExperienceMonths(experiences, options = {}) {
  const now = options.now ?? new Date()

  /** @type {Array<[number, number]>} */
  const ranges = []
  for (const experience of experiences) {
    const duration = experience?.duration?.trim()
    if (!duration)
      continue

    const range = parseDurationToMonthRange(duration, now)
    if (!range)
      continue

    ranges.push(range)
  }

  const merged = mergeMonthRanges(ranges)
  return merged.reduce((sum, [start, end]) => sum + (end - start + 1), 0)
}

function pluralizeRu(count, one, few, many) {
  const mod10 = count % 10
  const mod100 = count % 100

  if (mod100 >= 11 && mod100 <= 14)
    return many

  if (mod10 === 1)
    return one

  if (mod10 >= 2 && mod10 <= 4)
    return few

  return many
}

function getUnitLabel(unit, count, lang) {
  switch (lang) {
    case 'ru': {
      if (unit === 'year')
        return pluralizeRu(count, 'год', 'года', 'лет')
      return pluralizeRu(count, 'месяц', 'месяца', 'месяцев')
    }
    case 'ko':
      return unit === 'year' ? '년' : '개월'
    case 'zh':
      return unit === 'year' ? '年' : '个月'
    case 'nl':
      return unit === 'year' ? (count === 1 ? 'jaar' : 'jaren') : (count === 1 ? 'maand' : 'maanden')
    case 'da':
      return unit === 'year' ? 'år' : (count === 1 ? 'måned' : 'måneder')
    case 'en':
    default:
      return unit === 'year' ? (count === 1 ? 'year' : 'years') : (count === 1 ? 'month' : 'months')
  }
}

/**
 * @param {number} totalMonths
 * @param {string} lang
 */
export function formatTotalExperience(totalMonths, lang) {
  const safeMonths = Number.isFinite(totalMonths) && totalMonths > 0 ? Math.floor(totalMonths) : 0
  const years = Math.floor(safeMonths / 12)
  const months = safeMonths % 12

  /** @type {string[]} */
  const parts = []
  if (years > 0)
    parts.push(`${years} ${getUnitLabel('year', years, lang)}`)
  if (months > 0 || parts.length === 0)
    parts.push(`${months} ${getUnitLabel('month', months, lang)}`)

  return parts.join(' ')
}

