import supabase from './supabase';

export async function getMenu() {
  let { data: menu, error } = await supabase.from('menu').select('*');

  if (error) {
    console.log(error);
    throw new Error('Menu could not be loaded');
  }
  return menu;
}
