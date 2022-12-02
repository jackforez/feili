import axios from "axios";

const ktsRequest = axios.create({
  baseURL: "http://api.ktscorp.vn/api",
});

// export const ktsPost = async(api,option={})=>{
//     const response = await ktsrequest.post(api,option);
//     return response.data;
// }

export default ktsRequest;
