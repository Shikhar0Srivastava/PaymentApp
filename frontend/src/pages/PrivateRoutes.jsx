import axios from "axios";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {

    const validateToken = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                return false;
            }

            const response = await axios.get("https://paymentapp-backend-vrtx.onrender.com/v1/validate", {
                headers: {
                    Authorization: "Bearer " + token
                }
            });

            return response.status === 200
        } catch {
            return false;
        }
    };

    const validating = validateToken();

   if (validating) {
    return <Outlet/>
   } else {
    return <Navigate to={"/signin"}/>
   }
}