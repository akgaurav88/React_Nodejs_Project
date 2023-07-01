import React from "react";
import Office from '../assets/images/in_the_office.svg'

const Register = () => {
  return (
    <>
      <nav>
        <img src={Office} ></img>
      </nav>
      <h1>Register page</h1>
      <p>  HR/Project Managers are requested to cascade this 
          communication to respective teams and colleagues at 
          client location/onsite location, in case they do not
          receive this communication. Employees transferred to onsite /
          GEO locations during the current financial year will also be able 
          to upload and submit investment proof through IT declaration
      </p>
        
        <button type="button" className="btn btn-primary" >Login/Register </button>       
    </>
  );
};

export default Register;
