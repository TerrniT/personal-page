/**
 * @typedef {'commercial' | 'open-source'} ProjectType
 */

/**
 * @typedef {{
 *   href: string
 *   data: {
 *     type: ProjectType
 *     stack?: string[]
 *   }
 * }} ProjectLike
 */

/** @type {ProjectType[]} */
const PROJECT_TYPES = ['commercial', 'open-source']

/**
 * @template T
 * @param {T[]} values
 * @returns {T[]} Deduplicated values in insertion order.
 */
function getUniqueValues(values) {
  return [...new Set(values)]
}

/**
 * @param {ProjectLike[]} projects
 * @returns {string[]} Alphabetically sorted stack values used by the current project list.
 */
function getProjectStacks(projects) {
  return getUniqueValues(
    projects.flatMap(project => project.data.stack ?? []),
  ).sort((left, right) => left.localeCompare(right))
}

/**
 * @param {ProjectLike[]} projects
 * @returns {ProjectType[]} Project types present in the preferred display order.
 */
function getProjectTypes(projects) {
  const availableTypes = new Set(projects.map(project => project.data.type))
  return PROJECT_TYPES.filter(type => availableTypes.has(type))
}

/**
 * @template {string} T
 * @param {URLSearchParams} searchParams
 * @param {'type' | 'stack'} key
 * @param {T[]} allowedValues
 * @returns {T[]} Selected values from the query string after deduplication and validation.
 */
function parseSelectedValues(searchParams, key, allowedValues) {
  return getUniqueValues(searchParams.getAll(key)).filter(value => allowedValues.includes(value))
}

/**
 * @template {ProjectLike} T
 * @param {T[]} projects
 * @param {URLSearchParams} searchParams
 * @returns {{
 *   availableStacks: string[]
 *   availableTypes: ProjectType[]
 *   sections: { type: ProjectType, items: T[] }[]
 *   selectedStacks: string[]
 *   selectedTypes: ProjectType[]
 *   totalProjects: number
 * }} Filter metadata and grouped project results for the current query params.
 */
export function getProjectFilterState(projects, searchParams) {
  const availableTypes = getProjectTypes(projects)
  const availableStacks = getProjectStacks(projects)
  const selectedTypes = parseSelectedValues(searchParams, 'type', availableTypes)
  const selectedStacks = parseSelectedValues(searchParams, 'stack', availableStacks)

  const filteredProjects = projects.filter((project) => {
    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(project.data.type)
    const matchesStack = selectedStacks.length === 0
      || selectedStacks.some(stack => (project.data.stack ?? []).includes(stack))

    return matchesType && matchesStack
  })

  const sections = availableTypes
    .map(type => ({
      type,
      items: filteredProjects.filter(project => project.data.type === type),
    }))
    .filter(section => section.items.length > 0)

  return {
    availableStacks,
    availableTypes,
    sections,
    selectedStacks,
    selectedTypes,
    totalProjects: filteredProjects.length,
  }
}
