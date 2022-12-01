import axios from "axios";
export  default axios.create({
    baseURL:"http://localhost:8000/api",
    headers:{
        "Content-type":"applicatio/json"
    }

    // method: 'get',
    // url: `http://localhost:8000/api`,
    // withCredentials: false,
    // params: {
    //   access_token: SECRET_TOKEN,
    // },
});