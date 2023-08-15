export const getData = () => {
    return fetch('https://dummyjson.com/comments')
    .then(responce => responce.json())
}