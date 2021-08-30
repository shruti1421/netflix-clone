import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import './Nav.css'

function Nav() {

    const [show, handleShow] = useState(false);

    const history = useHistory();

    const transitionNavbar = () =>{
        if(window.scrolly<100){
            handleShow(false);
        }
        else
        handleShow(true);
    }


    useEffect(() => {

        window.addEventListener("scroll",transitionNavbar);
       
        return () => {
            window.removeEventListener("scroll",transitionNavbar);
            
        }
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
          <div className="nav__content">
            <img 
               onClick={()=>history.push("/")}
               className="nav__logo"
               src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
               alt="" 
            />
            <img 
               onClick={()=>history.push("/profile")}
               className="nav__avatar"
               src="https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png" 
               alt="" 
            />
          </div>
        </div>
    )
}

export default Nav
