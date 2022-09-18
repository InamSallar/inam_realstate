import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"


export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '3eaeab0b30mshda1e6280e47058bp1872e8jsn093c6fa4ca63',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })

    return data
}

