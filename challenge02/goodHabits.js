function calculadora(p, q) {
  let result = 0;
  for (let i = 0; i <= p; i += 1) {
    result += q[i];
  }
  return result;
}

function calculateTotal(p, q) {
  let total = 0;
  for (let i = 0; i < p.length; i += 1) {
    total += q[i];
  }
  return total;
}

const API_KEY = 'YOUR_API_KEY';
const apiEndpoint = 'https://api.example.com';

function callAPI() {
  fetch(`${apiEndpoint}/data?key=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

// Este é um bloco de código inativo
if (false) {
  console.log('Este bloco nunca será executado');
}

function calculateDiscount(price) {
  const discount = 0.1;
  return price - discount * price;
}
