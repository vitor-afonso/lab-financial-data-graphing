//jshint esversion:8

const apiUrl = 'https://api.coindesk.com/v1/bpi/currentprice.json';

axios
    .get(apiUrl)
    .then(apiData => {
        console.log(apiData);
    })
    .catch(err => console.log( 'Something went wrong while triying to get data from API =>', err));