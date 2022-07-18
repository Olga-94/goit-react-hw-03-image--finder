import axios from 'axios';
import { Pixabay } from './Constants';

axios.defaults.baseURL = Pixabay.BASE_URL;

export class Api {
  static async getImages(searchQuery, page) {
    const url = `?q=${searchQuery}&page=${page}&key=${Pixabay.KEY}&image_type=photo&orientation=horizontal&per_page=12
        `;
    const { data } = await axios.get(url);

    return data.hits;
  }
}

// async function fetchImages(searchQuery, page) {
//     const url = `/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${API_KEY}`
//     const { data } = await axios.get(url);
//     return data.hits;
// }

// export default fetchImages;
