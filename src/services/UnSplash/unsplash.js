import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID d2crXK8Q5HBzdBV3tzcOj12TpGwbRNR3D-Oo_bHCXfU",
  },
});
