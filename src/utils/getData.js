const API = 'http://localhost:8080/products';

export const getData = async (id) => {
  const url = id ? `${API}/product/${id}` : `${API}/list`;

  try {
    const data = await fetch(url);
    const json = await data.json();
    return json;
  } catch {
    return 0;
  }
}