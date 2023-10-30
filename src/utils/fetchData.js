export const exerciseOptions={
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': '18221015e5msh4f61851bb7bc0bcp1ffa99jsn47f1b8e5cd13',
    },
  };
  
  

export const fetchData = async (url,options) =>{
      
const response = await fetch(url,options);
const data = await response.json();
return data; 

}

