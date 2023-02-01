const apiKey ='srRrOGYnXY2Y8uoZ0V1CPSjDwECDPKCO' 
export default function getGifs({keyword = 'morty'}){
 const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=15&offset=0&rating=g&lang=en`

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