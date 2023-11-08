const https = require('https');

const apiUrl = 'https://api.chucknorris.io/jokes/random';

const getQuote = () => {
  const request = https.get(apiUrl, (response) => {
    let data = '';

    response.on('data', (response) => {
      data += response;
    });

    response.on('end', () => {
      try {
        const chuckNorrisJoke = JSON.parse(data).value;
        console.log('Chuck Norris quote:', chuckNorrisJoke);
      } catch (error) {
        console.error('An error occurred when parsing the response:', error);
      }
    });
  });

  request.on('error', (error) => {
    console.error('An error occurred when making the request:', error);
  });

  request.end();
};

getQuote();
