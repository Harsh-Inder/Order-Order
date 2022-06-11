import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"; 
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const TOKEN = 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWNiYzg1ZWE3ODU4YWVmNmYyY2RlZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NDc4NzQyOX0.EnW2IFHb9j4AvnvEOlNttXn2ywY8GFreyW_snke00mo";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});