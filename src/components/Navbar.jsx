import {Link,useLocation} from "react-router-dom"
import{useState} from "react"
import Sidebar from "./Sidebar";
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";//you can change icons later
export default function Navbar(){
    const[showSidebar,setShowSidebar]=useState(false);
    const links = [
        {
            name:"Home",
            path:"/",
            icon: faHome
        },
        {
            name:"Recipes",
            path:"/recipes",
            icon: faList
        },
        {
            name: "Settings",
            path:"/settings",
            icon: faCog
        }
    ]
    function closeSidebar(){
        setShowSidebar(false)
    }
    const location = useLocation()

    return(
        <>        
            <div className="navbar container">
                <a href="#!"className = "logo">Grandma<span>'s </span>recipies</a>
                <div className="nav-links">
                    {links.map(link=>(
                        <Link to={link.path} className={location.pathname==link.path?"active":""}key={link.name}>{link.name}</Link>
                    ))}
                </div>
                <div onClick={()=>setShowSidebar(!showSidebar)} className={showSidebar?"sidebar-button active":"sidebar-button"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            {showSidebar && <Sidebar close ={closeSidebar}links={links}/>}
           
        </>

    )
}