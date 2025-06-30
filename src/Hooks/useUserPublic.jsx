import axios from "axios";

const userPublic = axios.create({
  baseURL: "http://localhost:5000",
});

const useUserPublic = () => {
  return userPublic;
};

export default useUserPublic;
