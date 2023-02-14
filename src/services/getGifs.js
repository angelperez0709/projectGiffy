import { API_KEY,API_URL } from "./setting";
export default function getGifs({keyword = 'morty',limit=20}){
 const url = `${API_URL}gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=0&rating=g&lang=en`

   return fetch(url).then(res=>res.json()).then(response=>{ 
    const {data = []} = response
      const gifs = data.map(image=>{
        const {title,id} = image
        const {url} = image.images.downsized_medium
        return {title,id,url}
        });
      return gifs
  });
}