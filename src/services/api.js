import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';
const ACCES_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmI5NTM0OWIxYTQ1ZjEzM2FmNGQyZDA3YjI3Y2JjZSIsIm5iZiI6MTczNzU1MTQ2Mi41MzksInN1YiI6IjY3OTBlZTY2YzkxMTVjOWUzZDI4YjRiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w5cYJoSeoBDfKHT2ocAG9ZjFxNpG1nULJsIOtoynddY';

const options = {
    headers: {
        Authorization: `Bearer ${ACCES_TOKEN}`,
    },
};


export const fetchData = async () => {
    try {
        const { data } = await axios.get(`${BASE_URL}/trending/movie/day`, options);
        console.log(data);
        return data;
        
        
    } catch (error) {
        console.log(error);
    }
};



