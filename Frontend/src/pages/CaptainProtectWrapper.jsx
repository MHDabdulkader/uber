import { captainDataContext } from '@/context/CaptainContext';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CaptainProtectWrapper = ({children}) => {
    const captainToken = localStorage.getItem('captain-token');
    const {captain, setCaptain} = useContext(captainDataContext);
    const [isLoading, setIsloading] = useState(true);

    const navigate = useNavigate();
    useEffect(()=> {
        if(!captainToken){
            navigate("/captain-login");
        }
    },[captainToken , nagivate])

    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`,{
      headers:{
        Authorization: `bearer ${captainToken}`
      }
    }).then(response=>{
      if(response.status === 200){
        setCaptain(response.data.captain);
        setIsloading(false);
      }
    }).catch(error =>{
      console.log(error);
      localStorage.removeItem("captain-token");
      navigate("/captain-login");
    })

    if(isLoading){
      return(<div>
        loading....
      </div>)
    }
  return (
    <div>{children}</div>
  )
}

export default CaptainProtectWrapper