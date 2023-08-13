export const getData = () => {
    fetch('https://dummyjson.com/comments')
    .then((response) => response.json())
}