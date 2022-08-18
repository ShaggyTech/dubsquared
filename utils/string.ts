/**
 * Formats a string
 * - Splits string at space characters to get words.
 * - Capitalizes first char of each word and lowercases remainder of word
 * @param string string to format
 * @returns formatted string
 */
export const titleCase = (string: string): string => {
  return string
    .split(' ')
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLocaleLowerCase()
    })
    .join(' ')
}
