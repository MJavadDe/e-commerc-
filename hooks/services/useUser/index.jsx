import axios from "axios";
import { useQuery } from "react-query";

const fetchUser = async (action) => {
  
  return courses;
};


const useUser = (Params) => {
  return useQuery(["User", action], () => fetchUser(action));
};

export { useUser, fetchUser };
