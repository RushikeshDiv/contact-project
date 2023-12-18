import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import ContactList from './components/contactList';
import Login from './components/login';
import ContactsIcon from '@mui/icons-material/Contacts';

// import Navigation from './components/Navigation';
function App() {
  const localStorageKey="contact";
  const[contact,setContact]=useState(()=>{
    return JSON.parse(localStorage.getItem(localStorageKey));
  });

  useEffect(()=>{
    
  localStorage.setItem(localStorageKey,JSON.stringify(contact));

  },[contact])
   const addContact=(data)=>{
      setContact([...contact,data]); 
   }
   const removeContact=(i)=>{
     const updatedList=contact.filter((elem,id)=>{
      return i!==id;

      
     })
     setContact(updatedList);

   }
   
  return (
  
    <>
   
    <div className="App">
      <h1 className='heading_style'>Manage The Contact
      <span><ContactsIcon/></span></h1>
  
      
      <Login addContact={addContact}/>
      <ContactList contact={contact}  removeContact={removeContact}/> 

   
      
       
    </div>
    </>
  

    
    


   
  )
  
}

export default App;
