import axios from "axios";

const searchImages= async(term)=>{
  const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization: "Client-ID autgKh1-ydbwWDHrcNvONv5Ecw-wJ0kio0fEs7Qt8-8"
        },
        params:{
            query:term,
        }
    })
    

    return response.data.results;
}
export default searchImages