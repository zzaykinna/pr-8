import { $authHost, $host } from "./index";

export const createType = async (type) => {
  const { data } = await $authHost.post('api/type', type);
  return data;
};

export const fetchTypes = async () => {
  const { data } = await $host.get('api/type');
  return data;
};

export const createBrand = async (brand) => {
  const { data } = await $authHost.post('api/brand', brand);
  return data;
};

export const fetchBrands = async () => {
  const { data } = await $host.get('api/brand');
  return data;
};

export const createProduct = async (product) => {
  const { data } = await $authHost.post('api/product', product);
  return data;
};

export const fetchProducts = async (typeId, brandId, page, limit = 5) => {
  const { data } = await $host.get('api/product', {
    params: {
      typeId,
      brandId,
      page,
      limit
    }
  });
  return data;
};

export const fetchOneProduct = async (id) => {
  const { data } = await $host.get('api/product/' + id);
  return data;
};

export const addToCart = async (productData) => {
  const { data } = await $authHost.post("api/basket/add-to-cart", productData);
  return data;
};

export const fetchUserBasket = async (id) => {
  const { data } = await $host.get("api/basket/" + id);
  console.log(data)
  return data;
};

export const fetchBaskets = async () => {
  const { data } = await $authHost.get("api/basket");
  return data;
};

export const updateStatus = async (status, userId) => {
  const { data } = await $authHost.post("api/basket/status", {
    status: status,
    userId: userId
  });
  return data;
};

export const findBasketByStatus = async (status) => {
  const { data } = await $authHost.post("api/basket/user-basket", {
    status: status,
  });
  return data;
};