const https = require('https');

const apiUrl = 'https://api.chucknorris.io/jokes/random';

const getQuote = () => {
  const request = https.get(apiUrl, (response) => {
    let data = '';

    response.on('data', (response) => {
      data += response;
      const chuckNorrisJoke = JSON.parse(data).value;
      console.log('Chuck Norris quote:', chuckNorrisJoke);
    });
  });

  request.on('error', (error) => {
    console.error('An error occurred when making the request:', error);
  });

  request.end();
};

getQuote();
