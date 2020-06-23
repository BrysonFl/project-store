export const CreateItem = () => {
  const createItem = `
    <h2>Ingresa los datos correspondientes</h2>
    <div class="Form-container">
      <form class="Create-form" id="create">
          <label for="name">Product Name:</label>
          <input id="name" name="product-name"/>

          <label for="price">Product Price:</label>
          <input id="price" name="product-price"/>

          <label for="description">Product Description:</label>
          <input id="description" name="product-description"/>

          <label for="stock">Product Stock:</label>
          <input id="stock" name="product-stock"/>

          <label for="url">Product Image URL:</label>
          <input id="url" name="product-url"/>
        </div>
      </form>
    </div>
  `;

  return createItem;
}