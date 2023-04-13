import { apiKey, API_URL } from './settings'

export default function getGifs({keyword = 'morty', limit = 25, page = 0} = {}){
  const apiUrl = `${API_URL}/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=${page * limit}&rating=g&lang=en;`

    return fetch(apiUrl)
      .then(response => response.json())
      .then(response => {
        const {data = []} = response;
        const gifs = data.map(image => {
          const {images, title, id} = image
          const {url} = images.downsized_medium
          return {url, title, id}
        });
        return gifs;
      })
}