export const getData = async () => {
    const resp = await fetch('https://fakestoreapi.com/products');
    const data = await resp.json();
    return data;
}

export const getApiDataID = async (id) => {
    const resp = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await resp.json();
    return data;
}