import { atom, selector } from "recoil"
import axios from "axios"

export const meAtom = atom({
    key: "meAtom",
    default: selector({
        key: "meDefaultSelector",
        get: async () => {
            const response = await axios.get("http://localhost:3000/v1/user/me", {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            })
            return response.data;
        }
    })
})