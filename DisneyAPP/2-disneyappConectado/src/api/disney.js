

const API_HOST="http://192.168.104.68:300";
//http://192.168.104.68:300/peliculas/categoria/1
export async function getPokemonsApi() {
  try {
    // const url = `${API_HOST}/pokemon?limit=20&offset=0`;
    const url = `${API_HOST}/peliculas`;
    console.log(url);
    // http://localhost:300/peliculas/
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
}


