import { getData } from "../utils/getData"
import { arrayItemsId } from '../utils/addItemToCar';

export const ShoppingCar = async () => {
  const arrayData = [];
  for(let i = 0; i < arrayItemsId.length; i++) {
    const data = await getData(arrayItemsId[i]);
    arrayData.push(data);
  }

  if(arrayData.length > 0) {
    return `
      <div class="Container-shop">
        ${arrayData.map(item => {
          let arrayIds = [];
          arrayIds.push(item.id);

          return `
            <div class="Card-shop">
              <div class="Container-img__shop">
                <img src="${item.image_url}" alt="${item.product_name}"/>
              </div>
              <div class="Container-description__shop">
                <p><strong>Name:</strong> ${item.product_name}</p>
                <p><strong>Stock:</strong> ${item.stock - 1}</p>
                <p><strong>Description:</strong> ${item.description}</p>
                <p><strong>Price:</strong> ${item.price}</p>
              </div>
            </div>
        `;
          })
        }
      </div>`
    } else {
    return `
      <h1>No hay productos en el carrito</h1>
    `;
  }
}