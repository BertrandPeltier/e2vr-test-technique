import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  timeout: 5000, // Si la requete met plus de 3s, alors ça plante
});
