export const currencyFormat = value =>  new Intl.NumberFormat('sv-SE', { style: 'currency', currency: 'SEK' }).format(value);
