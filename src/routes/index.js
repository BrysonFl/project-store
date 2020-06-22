import { Header } from '../templates/Header';
import { Home } from '../pages/Home';
import { Items } from '../pages/Items';
import { CreateItem } from '../pages/CreateItem';
import { Error } from '../pages/Error';
import { Button } from '../templates/Button';
import { resolveRoutes } from '../utils/resolveRoutes';
import { getHash } from '../utils/getHash';
import { createItem } from '../utils/createItem';
import { editItem } from '../utils/editItem';
import { deleteItem } from '../utils/deleteItem';
import { addItemToCar } from '../utils/addItemToCar';

const routes = {
  '/': Home,
  '/:id': Items,
  '/create': CreateItem
}

export const router = async () => {
  const header = null ||document.getElementById('header');
  const content = null || document.getElementById('store');
  const add = null || document.getElementById('add-item');

  header.innerHTML = await Header();
  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error;
  content.innerHTML = await render();
  add.innerHTML = Button(route);

  if(route === '/create') {
    createItem();
  } else if (route === '/:id') {
    editItem();
    deleteItem();
  } else {
    addItemToCar();
  }

}