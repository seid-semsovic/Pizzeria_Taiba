import { useLoaderData } from 'react-router-dom';
import MenuItem from './MenuItem';
import { useEffect, useState } from 'react';
import { getMenu } from '../../services/menuService';

function Menu() {
  const [pizza, setPizza] = useState([]);

  useEffect(() => {
    getAllPizzas();
  }, []);

  const getAllPizzas = async () => {
    const menuItems = await getMenu();
    setPizza(menuItems);
    return menuItems;
  };

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {pizza.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}
export default Menu;
