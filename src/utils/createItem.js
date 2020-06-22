const url = 'http://localhost:8080/products/';

export const createItem = async () => {
  const send = document.getElementById('send');
  const form = document.getElementById('create');

  send.addEventListener('click', () => {
    const data = new FormData(form);
    fetch(url, { method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        product_name: data.get('product-name'),
        price: data.get('product-price'),
        description: data.get('product-description'),
        stock: data.get('product-stock'),
        image_url: data.get('product-url'),
    })})
      .then(response => response.json())
      .catch(err => console.log(err))
  });
}