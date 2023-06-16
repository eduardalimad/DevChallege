import axios from "axios";

const app = axios.create({
    baseURL: "https://challenge-seven-zeta.vercel.app/api",
    timeout: 5000,
});

export {app};