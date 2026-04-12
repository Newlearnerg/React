import { Outlet } from "react-router-dom"

function Dashboard(){
    return(
        <div>
            <h1>DashBoard</h1>
            <Outlet/>
        </div>
    )
}
export default Dashboard;