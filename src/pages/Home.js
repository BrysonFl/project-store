import { NotFound } from './NotFound';
import { getData } from '../utils/getData';

export const Home = async () => {
  const items = await getData();

  if(items.length === 0) {
    return NotFound();
  } else {
    const view = `
      <div class="Items">
        ${items.map(item => {
          return `
            <article class="Item-card">
              <a href="#/${item.id}">
                <div class="Container-img">
                  <img src="${item.image_url}" alt="${item.product_name}"/>
                </div>
                <div class="Container-description">
                  <p><strong>Product Name:</strong> ${item.product_name}</p>
                  <p><strong>Product Price:</strong> $${item.price}</p>
                  <p><strong>On Stock:</strong> ${item.stock}</p>
                  <p><strong>Description:</strong> ${item.description}</p>
                </div>
              </a>
              <div class="Container-button">
                <button class="Add-car" data-id-item=${item.id}>
                  <img src="../../public/assets/carrito-de-compras.png" />
                </button>
              </div>
            </article>
          `
        }).join('')}
      </div>
    `;
    return view;
  }
}