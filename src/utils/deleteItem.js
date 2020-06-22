import { getHash } from "./getHash";

const url = 'http://localhost:8080/products/delete/product/:id';

export const deleteItem = () => {
  const id = getHash();
  const deleteBtn = document.getElementById('delete');

  deleteBtn.addEventListener('click', () => {
    fetch(url.replace(':id', id), {method: 'DELETE'})
    .then(response => response.json())
    .catch(err => console.log(err));
  })
}