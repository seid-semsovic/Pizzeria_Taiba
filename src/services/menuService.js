import supabase from './supabase';

export async function getMenu() {
  let { data: menu, error } = await supabase.from('menu').select('*');

  if (error) {
    console.log(error);
    throw new Error('Menu could not be loaded');
  }
  return menu;
}

export async function createNewOrder(newOrder) {
  const { data, error } = await supabase
    .from('order')
    .insert([newOrder])
    .select();
  if (error) {
    console.error(error);
    throw new Error('Order could not be created');
  }

  return data;
}

export async function getAllOrders() {
  let { data: orders, error } = await supabase.from('order').select('*');

  if (error) {
    console.log(error);
    throw new Error('Menu could not be loaded');
  }
  return orders;
}
