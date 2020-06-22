import { getHash } from "./getHash"
const url = 'http://localhost:8080/products/update/product/:id';


export const editItem = () => {
  const id = getHash();

  const editBtn = document.getElementById('edit');
  const form = document.getElementById('editForm');

  editBtn.addEventListener('click', () => {
    const data = new FormData(form);

    fetch(url.replace(':id', id),
      {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          product_name: data.get('product-name'),
          price: data.get('product-price').substring(1, data.get('product-price').length),
          description: data.get('product-description'),
          stock: data.get('product-stock'),
          image_url: data.get('product-url')
        })
      }
    )
      .then(response => response.json())
      .catch(err => console.log(err))
  })
}