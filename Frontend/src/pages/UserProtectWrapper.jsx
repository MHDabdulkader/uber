import React, { useContext, useEffect, useState } from "react";
import { UserDataContext } from "@/context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserProtectWrapper = ({ children }) => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate(UserDataContext);
    const {user, setUser} = useContext(UserDataContext);
    const [isLoading, setIsloading] = useState(true);
    useEffect( () =>{
        if(!token){
            navigate("/login")
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`,{
            headers:{
                Authorization: `bearer ${token}`
            }
        }).then(response => {
            if(response.status === 200){
                setUser(response.data.user);
                setIsloading(false);
            }
        }).catch(error =>{
            console.log(error);
            localStorage.removeItem("token");
            navigate("/login")
        }).finally(()=>{
            setIsloading(false);
        })
    }, [token, navigate, setUser])

    
    if(isLoading){
        return <div>isLoading .... </div>
    }

    return <div>{children}</div>;
};

export default UserProtectWrapper;
