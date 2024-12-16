import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";
import { Fin } from "./pages/Fin";
import { Profile } from "./pages/Profile";
import { PrivateRoutes } from "./pages/PrivateRoutes";
import { Homepage } from "./pages/Homepage";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
          <Route element={<PrivateRoutes/>}>
            <Route index path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/send" element={<SendMoney/>}></Route>
            <Route path="/fin" element={<Fin/>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
