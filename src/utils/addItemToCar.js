export let arrayItemsId = [];

export const addItemToCar = () => {
  const addBtnList = [...document.getElementsByClassName('Add-car')];
  const carCount = document.getElementById('car-count');
  let itemsCar = 0;

  addBtnList.map(clic => {
    clic.addEventListener('click', (e) => {
      carCount.style.display = 'flex';
      carCount.style.justifyContent = 'center';
      carCount.style.alignItems = 'center';
      carCount.style.color = '#fff';
      carCount.style.fontWeight = 'bold';
      itemsCar = itemsCar + 1;
      carCount.innerHTML = itemsCar;

      arrayItemsId.push(e.target.dataset.idItem)
    });
  })
}