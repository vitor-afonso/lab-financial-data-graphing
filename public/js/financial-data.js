//jshint esversion:8
//const ctx = document.getElementById('myChart').getContext('2d'); 
const apiUrl = 'http://api.coindesk.com/v1/bpi/historical/close.json';

axios
    .get(apiUrl)
    .then(apiData => {
        console.log(apiData.data);
        const dataKeys = Object.keys(apiData.data.bpi);
        const dataValues = dataKeys.map(date => apiData.data.bpi[date]);
        //console.log(dataKeys,dataValues);

        const ctx = document.getElementById('my-chart').getContext('2d');
        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: dataKeys,
                datasets: [
                    {
                        label: 'Financial Chart',
                        backgroundColor: 'rgb(50, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        tension: 0.1,
                        data: dataValues
                    }
                ]
            }
        });
        
    })
    .catch(err => console.log( 'Something went wrong while triying to get data from API =>', err));

