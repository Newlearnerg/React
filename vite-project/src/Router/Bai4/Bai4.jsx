import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom"
import Dashboard from "./Dashboard.jsx"
import Orders from "./Orders.jsx"
import Profile from "./Profile.jsx"
import Settings from "./Settings.jsx"

function Bai4(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/dashboard"/>}/>
                <Route path="/dashboard" element={<Dashboard/>}>
                    <Route path="profile" element={<Profile/>}/>
                    <Route path="Orders" element={<Orders/>}/>
                    <Route path="Settings" element={<Settings/>}/>
                </Route>
            </Routes> 
        </BrowserRouter>
    )
}
export default Bai4;