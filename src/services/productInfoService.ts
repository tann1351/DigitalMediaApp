import api from './api/api';



const ProductService = {
  async getProduct(productId) {
    try {
      const response = await api.get(`/product/${productId}/get-product-info`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};

export default ProductService;
