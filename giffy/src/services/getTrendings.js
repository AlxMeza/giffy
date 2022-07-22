import { apiKey, API_URL } from './settings'


const fromApiResponse = apiResponse => {
    const { data = [] } = apiResponse;
    return data;
}

export default function getTrendings(){
  const apiUrl = `${API_URL}/trending/searches?api_key=${apiKey}`

    return fetch(apiUrl)
      .then(response => response.json())
      .then(fromApiResponse)
}