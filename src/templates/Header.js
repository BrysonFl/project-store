export const Header = () => {
	const view = `
		<div class="Container-header">
			<a href="">
				<h1>Bryson's Shop</h1>
			</a>
			<a href="#/shoping-car" id="car">
				<div class="Container-header__img">
					<img src="../../public/assets/supermercado.png" />
					<div class="Car-count" id="car-count"></div>
				</div>
			</a>
		</div>
	`;

	return view;
}