import axios from "axios";

const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3"
    // baseURL:"https://developers.themoviedb.org/3"
});
export default instance