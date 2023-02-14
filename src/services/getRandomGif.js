import { API_KEY,API_URL } from "./setting";
export default function getRandomGif(){
    const url = `${API_URL}gifs/random?api_key=${API_KEY}`
    console.log(url)
    return fetch(url)
    .then(res=>res.json())
    .then(data=>{
        return data
    })
}