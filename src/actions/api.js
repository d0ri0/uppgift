export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST'
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS'
export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE'

export const loadProducts = () => ({
    types: [GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE],
    callAPI: () => fetch('http://apoteket-uppgift-fe.ginzburg.it/api/products'),
    shouldCallAPI: state => {
        // Only fetch data if we dont have any
        return ! state.api.data.length;
    }
})

export const loadCartSummary = () => ({
    types: [GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE],
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

export const addToCart2 = data => {
    // console.log('abc', data);

    return {
        types: [POST_CART_REQUEST, POST_CART_SUCCESS, POST_CART_FAILURE],
        callAPI: () => fetch('http://apoteket-uppgift-fe.ginzburg.it/api/cart', {
            method: 'POST',
            credentials: 'include',
            headers: {
                // 'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Key': 'qwerty'
            },
            body: JSON.stringify({
                "Id": data.product.Id,
                "Quantity": data.amount
            })
        }),
        // We dont get back any body data from this call
        // So nothing to parse
        parse: () => {},
        payload: data
    }
}


export function addToCart(data) {
    return dispatch => {
        dispatch(addToCart2(data)).then(response => {
            // console.log(response);
            // dispatch(getCart());
            if (response.type === POST_CART_SUCCESS) {
                dispatch(getCart( true ));
            }
        })
        //   return fetchPost().then(
        //     response => dispatch({ type: 'GET_POST_SUCCESS', id,  response }),
        //     error => {
        //       dispatch({ type: 'GET_POST_FAILURE', id,  error })
        //       throw error
        //     }
        //   )
    }
}

// export const validateAndAddToCart = () => {
//     return (dispatch, getState) => {
//         let formData = getState().formData

//         if (isValid(formData)) {
//             dispatch({type: "VALIDATION_PASSED"})
//             dispatch({type: "SUBMISSION_STARTED"})

//             submit(formData)
//                 .then(() => dispatch({type: "SUBMITTED" /* additional data */}))
//                 .catch((e) => dispatch({type: "SUBMISSION_FAILED", e}))
//         }
//         else {
//             dispatch({type: "VALIDATION_FAILED" /* additional data */})
//         }
//     }
// }


// // Now we can combine them
// export function getUserAndTheirFirstPost(userId) {
//     // Again, Redux Thunk will inject dispatch here.
//     // It also injects a second argument called getState() that lets us read the current state.
//     return (dispatch, getState) => {
//       // Remember I told you dispatch() can now handle thunks?
//       return dispatch(getUser(userId)).then(() => {
//         // Assuming this is where the fetched user got stored
//         const fetchedUser = getState().usersById[userId]
//         // Assuming it has a "postIDs" field:
//         const firstPostID = fetchedUser.postIDs[0]
//         // And we can dispatch() another thunk now!
//         return dispatch(getPost(firstPostID))
//       })
//     }
//   }


export const GET_CART_REQUEST = 'GET_CART_REQUEST'
export const GET_CART_SUCCESS = 'GET_CART_SUCCESS'
export const GET_CART_FAILURE = 'GET_CART_FAILURE'

export const getCart = ( force = false  ) => ({
    types: [GET_CART_REQUEST, GET_CART_SUCCESS, GET_CART_FAILURE],
    callAPI: () => fetch('http://apoteket-uppgift-fe.ginzburg.it/api/cart', {
        method: 'GET',
        credentials: 'include',
        headers: {
            'X-Key': 'qwerty'
        }
    }),
    shouldCallAPI: state => {
        // Only fetch data on first load
        // Or adding new items to cart
        return ! state.cart.hasLoaded || force;
    }
})


export const DELETE_CART_REQUEST = 'DELETE_CART_REQUEST'
export const DELETE_CART_SUCCESS = 'DELETE_CART_SUCCESS'
export const DELETE_CART_FAILURE = 'DELETE_CART_FAILURE'

export const deleteCart = () => ({
    types: [DELETE_CART_REQUEST, DELETE_CART_SUCCESS, DELETE_CART_FAILURE],
    callAPI: () => fetch('http://apoteket-uppgift-fe.ginzburg.it/api/cart', {
        method: 'DELETE',
        credentials: 'include',
        headers: {
            'X-Key': 'qwerty',
            // 'Cookie': 'gpjldhbeuv0xtebx0nc0gvkm',
        }
    }),
    parse: () => {}
})

// We often need both of these as Cart json data is dependent on Products data
export const getProductsAndCart = () =>{
    return dispatch => {
        dispatch(loadProducts());
        dispatch(getCart());
    }
}
