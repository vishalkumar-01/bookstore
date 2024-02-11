import React,{useState,useEffect} from 'react'
import Spinner from '../Components/Spinner'
import BackButton from '../Components/BackButton'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useSnackbar } from "notistack";

const DeleteBook = () => {
const [loading,setLoading]=useState(false);
const navigate=useNavigate();
const {id}=useParams();
const { enqueueSnackbar } = useSnackbar();

const handleDeleteBook=()=>{
  setLoading(true);
 axios.delete(`https://bookstore-be-kvvw.onrender.com/books/${id}`).then(()=>{
    setLoading(false);
    enqueueSnackbar("Book Deleted Successfully ",{variant:'success'});
    navigate('/')
  })
  .catch((err)=>{
    setLoading(false);
    enqueueSnackbar('An error',{variant:'error'})
    // alert("Error");
    console.log(err);
  })
}
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading?<Spinner/>:
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-{600px} p-8 mx-auto' >
        <h3 className='text-2xl'>Are you sure you want to delete it</h3>
        <button onClick={handleDeleteBook} className="bg-red-600 text-white m-8 w-full">Yes,Delete it!</button>
      </div>
      }
      
    </div>
  )
}

export default DeleteBook