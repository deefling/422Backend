const request = require('request');
request('http://localhost:3000/getLogins', function (error, response, body) {
    var data = JSON.parse(body);

    console.error('error:', error);
    console.log('statusCode:', response && response.statusCode); 
    console.log(data['stuff'][1]['email']); 
});


