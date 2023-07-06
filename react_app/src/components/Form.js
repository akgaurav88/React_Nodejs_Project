import React from 'react'
import logo from "../assets/images/in_the_office.svg";
import { useState } from 'react'
const Form = () => {
  const [data, setData] = useState({})

  const updateData = e => {
    console.log(e.target.name);
    setData({
        ...data,
        [e.target.name]: e.target.value
    })
}
  const clickEvent=(e)=>{
 console.log("hii there")
 e.preventDefault();
 console.log(data.email);
 console.log(data.name);
  }
  return (
    <div>
      <nav>
        <img
          src={logo}
          alt="img"
          className="logo"
          height="60px"
          width="60px"
        ></img>
      </nav>
      <div  
      style={{
        textAlign: "center",
        border: '1px solid red'
      }}
      >

        <form >
          <label>Please Fill the Form </label><br></br>
          <label>Enter your name:-
            <input type="text"  name="name" onChange={updateData}  />
          </label><br></br>


          <label>Enter your mail:-
            <input type="text"  name="email" onChange={updateData} />
          </label><br></br><br></br>

          <button type="button" className="btn btn-hero" onClick={clickEvent} >Register</button><br></br><br></br>
        </form>


      </div>
    </div>
  )
}

export default Form