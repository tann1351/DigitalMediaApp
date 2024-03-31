import axios from 'axios';

// สร้าง axios instance กับ baseURL ที่เซ็ตไว้ล่วงหน้า
const api = axios.create({
  baseURL: 'https://uatapi-shop.petsploy.com/api',
});

export default api;
