// import axios from 'axios';
// import React, { useState } from 'react'

// const Create = () => {
//     const [Name, SetName] = useState("");
//     const [Email, SetEmail] = useState("");
//     const handle = (e) => {
//         e.prventDefault();
//         console.log("done")
//         axios.post("https://63105ae4826b98071a3ef0e9.mockapi.io/CRUD",{
//             Name:Name, 
//             Email:Email,
//         })

//     }


//     return (
//         <>
//             <h3>Create Data</h3>
//             <form>
//                 <div className="mb-3">
//                     <label for="exampleInputEmail1" className="form-label">Name</label>
//                     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
//                         onChange={(e) => SetName(e.target.value)}
//                     />

//                 </div>
//                 <div className="mb-3">
//                     <label for="exampleInputPassword1" className="form-label">Email</label>
//                     <input type="text" className="form-control" id="exampleInputPassword1"
//                         onChange={(e) => SetEmail(e.target.value)}
//                     />
//                 </div>


//                 <button type="submit" className="btn btn-primary" onClick={handle}>Submit</button>
//             </form>

//         </>
//     )
// }

// export default Create


import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";


const Create = () => {
    const navigate= useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("clciekd");
        axios
            .post("https://63105ae4826b98071a3ef0e9.mockapi.io/CRUD", {
                name: name,
                email: email,
            })

    };
    const navigateHome = () => {
        navigate('/Home');
      };
    

    return (
        <>
            <div className="d-flex justify-content-between m-2">
                <h2>Create</h2>

            </div>
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        aria-describedby="emailHelp"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <button 
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                >
                    Submit
                </button>

               

            </form>
            <br></br>
            <button onClick={navigateHome}>View Data</button>
        </>
    );
};

export default Create;