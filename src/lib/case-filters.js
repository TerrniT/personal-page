export const CASE_FILTER_ALL = 'all'

/**
 * @typedef {{ industry?: string, taskType?: string }} CaseFilterData
 * @typedef {{ data: CaseFilterData }} CaseFilterItem
 */

/**
 * @param {string | null | undefined} value
 */
export function normalizeCaseFilter(value) {
  const trimmed = value?.trim()
  return trimmed || CASE_FILTER_ALL
}

/**
 * @param {CaseFilterItem[]} cases
 */
export function getCaseFilterOptions(cases) {
  const industries = new Set()
  const taskTypes = new Set()

  for (const item of cases) {
    if (item?.data?.industry)
      industries.add(item.data.industry)

    if (item?.data?.taskType)
      taskTypes.add(item.data.taskType)
  }

  const sort = (left, right) => left.localeCompare(right, 'ru')

  return {
    industries: [...industries].sort(sort),
    taskTypes: [...taskTypes].sort(sort),
  }
}

/**
 * @param {CaseFilterItem[]} cases
 * @param {URLSearchParams} searchParams
 */
export function getCaseFilterState(cases, searchParams) {
  const { industries, taskTypes } = getCaseFilterOptions(cases)

  const requestedIndustry = normalizeCaseFilter(searchParams.get('industry'))
  const requestedTaskType = normalizeCaseFilter(searchParams.get('taskType'))

  const industry = industries.includes(requestedIndustry) ? requestedIndustry : CASE_FILTER_ALL
  const taskType = taskTypes.includes(requestedTaskType) ? requestedTaskType : CASE_FILTER_ALL

  const items = cases.filter((item) => {
    const matchesIndustry = industry === CASE_FILTER_ALL || item.data.industry === industry
    const matchesTaskType = taskType === CASE_FILTER_ALL || item.data.taskType === taskType
    return matchesIndustry && matchesTaskType
  })

  return {
    industries,
    taskTypes,
    industry,
    taskType,
    items,
    isFiltered: industry !== CASE_FILTER_ALL || taskType !== CASE_FILTER_ALL,
  }
}

/**
 * Build an href that toggles a single filter while keeping the other one.
 *
 * @param {string} pathname
 * @param {URLSearchParams} searchParams
 * @param {'industry' | 'taskType'} key
 * @param {string} value
 */
export function buildCaseFilterHref(pathname, searchParams, key, value) {
  const nextParams = new URLSearchParams(searchParams)
  const currentValue = normalizeCaseFilter(nextParams.get(key))

  if (currentValue === value && value !== CASE_FILTER_ALL)
    nextParams.delete(key)
  else if (value === CASE_FILTER_ALL)
    nextParams.delete(key)
  else
    nextParams.set(key, value)

  const query = nextParams.toString()
  return query ? `${pathname}?${query}` : pathname
}
