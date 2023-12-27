// services/checkUserExists.js

import axios from 'axios';

const API_URL = 'http://localhost:8080/users'; // Backend API URL'niz

async function checkUserExists(email) {
  try {
    const response = await axios.get(`${API_URL}/exists/${email}`);
    return response.data.exists; // true veya false döner
  } catch (error) {
    console.error("Kullanıcı kontrol edilirken bir hata oluştu:", error);
    return false;
  }
}

export default checkUserExists;
