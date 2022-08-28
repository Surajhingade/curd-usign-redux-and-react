import React, { useEffect,useState }  from 'react'
import { useSelector,useDispatch } from 'react-redux/es/exports';
import {Link,useParams,useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';

const EditContact = () => {

      const [name, setName] = useState("")
      const [email, setEmail] = useState("")
      const [number, setNumber] = useState("")


  // grap id from url bar
    const {id} = useParams();
    const navigate = useNavigate()


    const contacts = useSelector(state=>state)
    const dispatch = useDispatch()
    const currentContact = contacts.find(contact=>contact.id === parseInt(id));


    useEffect(()=>{
      if(currentContact){
        setName(currentContact.name);
        setEmail(currentContact.email);
        setNumber(currentContact.number);

      }
      
    },[currentContact]);




    const handleSubmit=(e)=>{
      e.preventDefault();

      // check email is present or not in given contacts
      const checkEmail = contacts.find(contact=>  contact.id !== parseInt(id) && contact.email === email && contact);

      // check number
      const checkNumber = contacts.find((contact)=> contact.id !== parseInt(id) &&  contact.number === parseInt(number) && contact);
      

      
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
         id:parseInt(id),
         name,
         email,
         number
      }
      // console.log(data)
      // send data to store state 
      dispatch({type:"UPDATE_CONTACT",payload:data});
      toast.success("Student Updated success")
      navigate("/")
   }



  



  return (
     
    <div className='container'> 
    {
      currentContact ? (
        <>
    <div className='row' >
        <h1 className='display-3   text-center  '>
          Edit Student {id}
        </h1>
        <div className='col-md-6 py-5 shadow mx-auto'>
         <form onSubmit={handleSubmit}>
            <div className='form-group py-2'>
            <input type="text" placeholder='Name' className='form-control' value={name}
                onChange={e=> setName(e.target.value)} />
            </div>
            <div className='form-group py-2'>
            <input type="email" placeholder='Email' className='form-control' value={email}
                onChange={e=> setEmail(e.target.value)} />
            </div>
            <div className='form-group py-2'>
            <input type="number" placeholder='Number' className='form-control  ' value={number}
                onChange={e=> setNumber(e.target.value)} />
            </div>
            <div className='form-group'>
            <input type="submit"  value="Update Student" className='btn py-2  btn-dark '/>
            </div>
            <div className='form-group'>
            <Link to="/" className='btn py-2 mt-2  btn-danger '>Cancle</Link>
            </div>




            
         </form>
          
        </div>
    </div>
    </>
      ): (
        <h2 className='display-3 my-5 text-center'> 
       Student contact with id {id} is not exist 
        </h2>
      )
    }
    
</div>
 
  )
}

export default EditContact