import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux/es/exports';
import { toast } from 'react-toastify';

const AddContact = () => {

   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [number, setNumber] = useState("")

   // grap data from state 
   const contacts = useSelector((state)=>state);
   console.log(contacts);

   // send data to array using useDispatch
   const dispatch = useDispatch();
   // console.log(dispatch);

   // navigate use for navigate page after submit
   const navigate = useNavigate()

     


   // add validation on input value

   const handleSubmit=(e)=>{
      e.preventDefault();

      // check email is present or not in given contacts
      const checkEmail = contacts.find(contact=> contact.email === email && contact);

      // check number
      const checkNumber = contacts.find((contact)=> contact.number === parseInt(number) && contact);
      

      
      if(!email || !number || !name){
         return toast.warning("Please fill in all fields")
      }

      if(checkEmail){
         return toast.error("This email is already exist! ")
      }
       
      if(checkNumber){
         return toast.error("This Number is already exist! ")
      }

      const data = {
         id:contacts[contacts.length -1].id+1,
         name,
         email,
         number
      }
      // console.log(data)
      // send data to store state 
      dispatch({type:"ADD_CONTACT",payload:data});
      toast.success("Student added success")
      navigate("/")
   }

  return (


     <>
     <div className='container'> 
        <div className='row' >
            <h1 className='display-3   text-center  '>
              Add Student
            </h1>
            <div className='col-md-6 py-5 shadow mx-auto'>
             <form onSubmit={handleSubmit} >
                <div className='form-group py-2'>
                <input type="text" placeholder='Name' value={name}
                onChange={e=> setName(e.target.value)}
                className='form-control'/>
                </div>
                <div className='form-group py-2'>
                <input type="email" placeholder='Email'
                value={email}
                onChange={e=> setEmail(e.target.value)}
                className='form-control'/>
                </div>
                <div className='form-group py-2'>
                <input type="number" placeholder='Number' 
                value={number}
                onChange={e=> setNumber(e.target.value)}
                className='form-control'/>
                </div>
                <div className='form-group'>
                <input type="submit"  value="Add Student" className='btn py-2 btn-block btn-dark '/>
                </div>

                <Link to="/" className='btn py-2 mt-2  btn-danger '>Cancle</Link>
             


                
             </form>
              
            </div>
        </div>
    </div>
     </>
  )
}

export default AddContact