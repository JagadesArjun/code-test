/**
 * Mocking client-server processing
 */

export default {
  getProducts: (cb) =>
    fetch("https://dummyjson.com/products?limit=5")
      .then((res) => res.json())
      .then((json) => cb(json.products)),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout)
};
