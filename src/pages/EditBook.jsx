import React,{useState,useEffect} from 'react'
import BackButton from '../Components/BackButton'
import Spinner from '../Components/Spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useSnackbar } from "notistack";

const EditBook = () => {
  const [title,setTitle]=useState();
  const [author,setAuthor]=useState();
  const [publishedYear,setPublishedYear]=useState();
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();
  const { enqueueSnackbar } = useSnackbar();

const {id}=useParams();

useEffect(()=>{
  axios.get(`https://bookstore-be-kvvw.onrender.com/books/${id}`).then((res)=>{
    setLoading(false);
    setTitle(res.data.title);
    setAuthor(res.data.author);
    setPublishedYear(res.data.publishedYear);
    console.log(res.data);
  })
  .catch((err)=>{
    setLoading(false);
    enqueueSnackbar('An error',{variant:'error'})
    console.log(err);
    // alert("An error occured .Please Check console");
  })
},[])
  const handleEditBook=()=>{
    const book={
      title,author,publishedYear
    }
    setLoading(true); 
    axios.put(`https://bookstore-be-kvvw.onrender.com/books/${id}`,book).then((res)=>{
      console.log(res);
      setLoading(false);
      enqueueSnackbar("Book Edited Successfully ",{variant:'success'});
      navigate('/');
    })
    .catch((err)=>{
      setLoading(false);
      console.log(err);
      alert("Error in saving data.Check Console");
    })
  }

  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Edit Book</h1>
      {loading?<Spinner/>:
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} 
          className='border-2 border-gray-500 px-4 py-2 w-full'/>
      </div>
      <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Author</label>
          <input type='text' value={author} onChange={(e)=>setAuthor(e.target.value)} 
          className='border-2 border-gray-500 px-4 py-2 w-full'/>
      </div>
      <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Published Year</label>
          <input type='number' value={publishedYear} onChange={(e)=>setPublishedYear(e.target.value)} 
          className='border-2 border-gray-500 px-4 py-2 w-full'/>
      </div>
      <button className='p-3 bg-sky-300 m-8' onClick={handleEditBook}>Save</button>
    </div>}

    </div>
  )
}



export default EditBook