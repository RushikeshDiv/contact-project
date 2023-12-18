import React from "react";
import { useState } from "react";
// import Card from "./UI/card";
// import ContactList from "./contactList";
// import Navigation from "./Navigation";


const Login=({addContact})=>{
   
    const[contactdata,setContactData]=useState({name:"",email:""});


    const handlerChange=(e)=>{
        e.preventDefault();
        if(e.target.name==="name"){
            setContactData({...contactdata,name:e.target.value})
        }else{
            setContactData({...contactdata,email:e.target.value})
        }
      
    }
  
  
    const handlerAdd=(e)=>{
        e.preventDefault();
        if(contactdata.name===" " || contactdata.email===""){
            alert("All fields are mandatory to fill")
         
            return
        }
         setContactData({name:"",email:""});
         addContact(contactdata);
         
    }
    return(
        <>
      
       
            <form >
            <div >
                <label className="form-label" ><h4>Name</h4> </label><br/>
                <input className="form-control " type="text" placeholder="Enter Name" name="name" value={contactdata.name
                } onChange={handlerChange}></input>


            </div>
            <div>
            <label className="form form-label form-bold "><h4>Email</h4></label>
                <input  className="form-control" type="text" placeholder="Enter email" name="email" value={contactdata.email} onChange={handlerChange}></input>
                 
            </div><br></br>
            <button type="submit" onClick={handlerAdd} className="btn btn-info"><h5>Add Contact</h5></button>
            </form>
        </>

    )
}
export default Login;