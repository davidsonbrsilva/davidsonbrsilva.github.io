export const mapKebabeCaseToSentence = (text: string) =>
  text
    .split('-')
    .map((word) => `${word[0].toUpperCase()}${word.substring(1)}`)
    .join(' ');

export const mapProjectNameToCamelCase = (text: string) => mapToCamelCase(mapToCamelCase(text, '-'), '.');

export const mapToCamelCase = (text: string, splitter: string) =>
  text
    .split(splitter)
    .map((word, index) => (index > 0 ? `${word[0].toUpperCase()}${word.substring(1)}` : word))
    .join('');
