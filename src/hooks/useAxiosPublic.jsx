import axios from "axios";

const axiosPublic = axios.create({
    // baseURL:'http://localhost:4000', 
    baseURL:'https://task-jet-server.vercel.app', 
})

function useAxiosPublic(props) {
    return axiosPublic;
}

export default useAxiosPublic;


