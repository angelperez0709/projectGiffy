import { API_KEY,API_URL } from "./setting"

const fromApiResponseToGifs = apiResponse =>{
    const {data = []} = apiResponse
    return data.slice(0,5)
}
export default function getTrendingGifs(){
 const url = `${API_URL}trending/searches?api_key=${API_KEY}` 
 return fetch(url)
 .then(res=> res.json())
 .then(fromApiResponseToGifs)

}