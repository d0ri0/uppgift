export const GET_STUFF_REQUEST = 'GET_STUFF_REQUEST'
export const GET_STUFF_SUCCESS = 'GET_STUFF_SUCCESS'
export const GET_STUFF_FAILURE = 'GET_STUFF_FAILURE'
export const loadCartSummary = () => ({
    types: [ GET_STUFF_REQUEST, GET_STUFF_SUCCESS, GET_STUFF_FAILURE ],
    callAPI: () => fetch('https://jsonplaceholder.typicode.com/posts/1'),
})