export const shortenTitle = (title:string) => {
    return title
    .split(' ')
    .slice(0, 15)
    .join('-')
    .toLowerCase()
   ;
}