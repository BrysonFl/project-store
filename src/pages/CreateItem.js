export const CreateItem = () => {
  const createItem = `
    <form class="Create-form" id="create">
      <h2>Ingresa los datos correspondientes</h2>
      <div>
        <label for="name">Product Name:</label>
        <input id="name" name="product-name"/>
      </div>
      <div>
        <label for="price">Product Price:</label>
        <input id="price" name="product-price"/>
      </div>
      <div>
        <label for="description">Product Description:</label>
        <input id="description" name="product-description"/>
      </div>
      <div>
        <label for="stock">Product Stock:</label>
        <input id="stock" name="product-stock"/>
      </div>
      <div>
        <label for="url">Product Image URL:</label>
        <input id="url" name="product-url"/>
      </div>
    </form>
  `;

  return createItem;
}