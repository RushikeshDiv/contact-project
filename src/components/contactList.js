import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const  ContactList=(props)=>{
  const {contact,removeContact}=props;
  const contactList=contact.map((value,i)=>{
    return(
      
         <div  className="list_style" key={i}>
          
            <div style={{marginLeft:"2px"}}>{value.name}</div> 
            <div className="email">{value.email}</div>
          <span onClick={()=>
            removeContact(i)}><DeleteIcon /></span>
           
           
      
        </div>
    )
  }
   
  )
  return(
    <>
    <div>{contactList}</div>
    </>
  )

}
export default ContactList;