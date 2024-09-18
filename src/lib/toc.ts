import { MarkdownHeading } from "astro"

/** table-of-content */
export type TOCSection = TOCSubSection & {
  subSections: TOCSubSection[]
} | MarkdownHeading[]

export type TOCSubSection = {
  slug: string
  text: string
}

// export const parseToc = (source: string) => {
//   return source
//     .split('\n')
//     .filter((line) => line.match(/(^#{1,3})\s/))
//     .reduce<TOCSection[]>((ac, rawHeading) => {
//       const nac = [...ac]
//       const removeMdx = rawHeading
//         .replace(/^##*\s/, '')
//         .replace(/[\*,\~]{2,}/g, '')
//         .replace(/(?<=\])\((.*?)\)/g, '')
//         .replace(/(?<!\S)((http)(s?):\/\/|www\.).+?(?=\s)/g, '')

//       const section = {
//         slug: removeMdx
//           .trim()
//           .toLowerCase()
//           .replace(/[^a-z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣 -]/g, '')
//           .replace(/\s/g, '-'),
//         text: removeMdx,
//       }

//       const isSubTitle = rawHeading.split('#').length - 1 === 3

//       if (ac.length && isSubTitle) {
//         nac.at(-1)?.subSections.push(section)
//       } else {
//         nac.push({ ...section, subSections: [] as TOCSubSection[] })
//       }

//       return nac
//     }, [])
// }

export const contentToDescription = (content: string) => {
  const parsedContent = content
    .replace(/(?<=\])\((.*?)\)/g, '')
    .replace(/(?<!\S)((http)(s?):\/\/|www\.).+?(?=\s)/g, '')
    .replace(/[#*\|\[\]]|(\-{3,})|(`{3})(\S*)(?=\s)/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 157)

  return `${parsedContent}...`
}
