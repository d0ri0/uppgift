export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST'
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS'
export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE'

export const loadProducts = () => ({
    types: [ GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE ],
    callAPI: () => fetch('http://apoteket-uppgift-fe.ginzburg.it/api/products'),
})

export const loadCartSummary = () => ({
    types: [ GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE ],
    callAPI: () => fetch('https://jsonplaceholder.typicode.com/posts/1'),
})

// export const getDummyPosts = () => ({
//     types: [ GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS2, GET_PRODUCTS_FAILURE ],
//     callAPI: () => fetch('https://jsonplaceholder.typicode.com/posts'),
// })

// export const addToCart = product => ({ type: 'ADD_TO_CART', payload: product })


export const POST_CART_REQUEST = 'POST_CART_REQUEST'
export const POST_CART_SUCCESS = 'POST_CART_SUCCESS'
export const POST_CART_FAILURE = 'POST_CART_FAILURE'

// export const addToCart = product => {
//     console.log(product);
// };

export const addToCart = data => ({
    types: [ POST_CART_REQUEST, POST_CART_SUCCESS, POST_CART_FAILURE ],
    callAPI: () => fetch('http://apoteket-uppgift-fe.ginzburg.it/api/cart', { 
        method: 'POST',
        credentials: 'include',
        headers: {
            // 'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Key' : 'qwerty'
        },
        body: JSON.stringify({ 
            "Id": data.product.Id, 
            "Quantity": data.amount
        })
    }),
    // We dont get back any body data from this call
    // So nothing to parse
    parse: () => {}
})


export const GET_CART_REQUEST = 'GET_CART_REQUEST'
export const GET_CART_SUCCESS = 'GET_CART_SUCCESS'
export const GET_CART_FAILURE = 'GET_CART_FAILURE'

export const getCart = product => ({
    types: [ GET_CART_REQUEST, GET_CART_SUCCESS, GET_CART_FAILURE ],
    callAPI: () => fetch('http://apoteket-uppgift-fe.ginzburg.it/api/cart', { 
        method: 'GET',
        credentials: 'include',
        headers: {
            'X-Key' : 'qwerty',
            // 'Cookie': 'gpjldhbeuv0xtebx0nc0gvkm',
        }
    }),
})


export const DELETE_CART_REQUEST = 'DELETE_CART_REQUEST'
export const DELETE_CART_SUCCESS = 'DELETE_CART_SUCCESS'
export const DELETE_CART_FAILURE = 'DELETE_CART_FAILURE'

export const deleteCart = () => ({
    types: [ DELETE_CART_REQUEST, DELETE_CART_SUCCESS, DELETE_CART_FAILURE ],
    callAPI: () => fetch('http://apoteket-uppgift-fe.ginzburg.it/api/cart', { 
        method: 'DELETE',
        credentials: 'include',
        headers: {
            'X-Key' : 'qwerty',
            // 'Cookie': 'gpjldhbeuv0xtebx0nc0gvkm',
        }
    }),
    parse: () => {}
})
