const client = new Map<string, number>()

export async function getViewsBySlugFromMock(slug: string) {
  if (slug) {
    const prevValue = client.get(slug)
    let newValue = 1
    if (prevValue) {
      newValue = Number.parseInt(`${prevValue}`) + 1
      client.set(slug, newValue)
    }
    else {
      client.set(slug, 1)
    }
    return newValue
  }
  return 0
}
