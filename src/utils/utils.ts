export const shortenTitle = (title: string) => {
  return title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, '') // remove accents
    .replace(/[^\w\s-]/g, '') // remove non-word characters
    .trim()
    .split(/\s+/)
    .slice(0, 15)
    .join('-')
    .toLowerCase();
};
