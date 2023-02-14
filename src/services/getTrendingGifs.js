import { API_KEY,API_URL } from "./setting"

const fromApiResponseToGifs = apiResponse =>{
    const {data = []} = apiResponse
    const gifs = data.map(image=>{
        const {title,id} = image
        const {url} = image.images.downsized_medium
        return {title,id,url}
        });
        return gifs
      }
export default function getTrendingGifs({limit = 20}){
 const url = `${API_URL}gifs/trending?api_key=${API_KEY}&limit=${limit}` 
 return fetch(url)
 .then(res=> res.json())
 .then(fromApiResponseToGifs)

}