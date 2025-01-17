import axios from "axios";

const axiosinstance=axios.create({
    baseURL:'http://localhost:5001/api',
    withCredentials:true
})

export default axiosinstance
