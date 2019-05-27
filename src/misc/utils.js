export const currencyFormat = value =>  new Intl.NumberFormat('sv-SE', { style: 'currency', currency: 'SEK' }).format(value);

export const isObject = item => {
    return (!!item) && (item.constructor === Object);
};

export const callAPIWrapper = ({
    path    = '',
    method  = 'GET',
    headers,
    ...rest
}) => {
    return fetch(process.env.REACT_APP_API_ENDPOINT + path, {
        method:      method,
        // This is a session based api
        // Send browser cookies
        credentials: 'include',
        headers: {
            'X-Key': process.env.REACT_APP_API_X_KEY,
            ...headers
        },
        ...rest
    });
}
