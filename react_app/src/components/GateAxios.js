import React, { useEffect, useState } from 'react'
import Axios from 'axios'

//const BaseURL='https://jsonplaceholder.typicode.com/posts';
const BaseURL="https://63105ae4826b98071a3ef0e9.mockapi.io/CRUD";

const GateAxios = () => {
    const [my_data,setData]=useState([]);

    useEffect(()=>{
        Axios.get(BaseURL).then((response)=>{
            setData(response.data);
        })
    },[])

  return (
    <>
    {/* <h1>{my_data.id}</h1> */} 
    {
        my_data.map((item)=>{
            const {id,name,email}=item;
            return(
                <div>
                    <h1>{id}</h1>
                    {/* <h2>{title}</h2>
                    <h2>{body}</h2> */}
                    <h2>{name}</h2>
                    <h2>{email}</h2>
                </div>
            )
        })
    }
      
    </>
  )
}

export default GateAxios
