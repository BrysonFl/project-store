import { getHash } from '../utils/getHash';
import { getData } from '../utils/getData';

export const Items = async () => {
	const id = getHash();
	const item = await getData(id);

	const view = `
		<div class="Item">
			<article class="Container-img__item">
				<img src="${item.image_url}" alt="${item.product_name}" />
			</article>
			<form id="editForm" class="Container-item__description">
				<p><strong>Name:</strong></p>
				<input name="product-name" class="Input" value="${item.product_name}"/>
				<p><strong>Price:</strong></p>
				<input name="product-price" class="Input" value="$${item.price}"/>
				<p><strong>Stock:</strong></p>
				<input name="product-stock" class="Input" value="${item.stock}"/>
				<p><strong>Description:</strong></p>
				<input name="product-description" class="Input" value="${item.description}"/>
				<p><strong>Image URL:</strong></p>
				<input name="product-url" class="Input" value="${item.image_url}"/>
			</form>
		</div>
	`;

	return view;
}