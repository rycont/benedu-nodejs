export const concat = (key: string, dict: { [x: string]: string; }) => dict[key] + "|" + key;