

export default async function apiCall(req, res, next) {
    
    const apiKey = process.env.Movie_DB_API_KEY;
    const apiUrl = `http://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`

    try{
        const response = await fetch(apiUrl);
        const json = await response.json();

        console.log(data);

    }catch(error){
        console.error('This is the error', error);
    }

}