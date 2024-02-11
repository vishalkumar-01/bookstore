import React,{useState} from 'react'
import BackButton from '../Components/BackButton'
import Spinner from '../Components/Spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateBook = () => {
  const [title,setTitle]=useState();
  const [author,setAuthor]=useState();
  const [publishedYear,setPublishedYear]=useState();
  const [loading,setLoading]=useState(false);


  const handleSaveBook=()=>{
    const book={
      title,author,publishedYear
    }
    axios.post('https://bookstore-be-kvvw.onrender.com/books').then(()=>{
      setLoading(false);
      useNavigate('/');
    })
    .catch((err)=>{
      console.log(err);
      alert("Error in saving data.Check Console");
    })
  }
  
//   return (
//     <div className='p-4'>
//       <BackButton/>
//       <h1 className='text-3xl'>Add new Book</h1>
//       {loading?<Spinner/>:''}
//       <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px]'>
//         <div className='my-4'>
//           <label className='text-xl mr-4 text-gray-500'>Title</label>
//           <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} 
//           className='border-2 border-gray-500 px-4 py-2 w-full'/>
//       </div>
//       <div className='my-4'>
//           <label className='text-xl mr-4 text-gray-500'>Author</label>
//           <input type='text' value={title} onChange={(e)=>setAuthor(e.target.value)} 
//           className='border-2 border-gray-500 px-8 py-2 w-full'/>
//       </div>
//       <div className='my-4'>
//           <label className='text-xl mr-4 text-gray-500'>Published Year</label>
//           <input type='text' value={title} onChange={(e)=>setPublishedYear(e.target.value)} 
//           className='border-2 border-gray-500 px-4 py-2 w-[80%] ml-5'/>
//       </div>
//       <button className='p-3 bg-sky-300 m-8' onClick={handleSaveBook}>Save</button>
//     </div>

//     </div>
//   )
// }

return (
  <div className='p-4'>
    <BackButton />
    <h1 className='text -3xl my-4'>Create Book</h1>
    {loading ? <Spinner /> : ''}
    <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
      <div className='my-4'>
        <label className='text-xl mr-4 text-gray-500'>Title</label>
        <input
          type='text' 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
        />
      </div>
      <div className='my-4'>
        <label className='text-xl mr-4 text-gray-500'>Author</label>
        <input
          type='text'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2  w-full '
        />
      </div>
      <div className='my-4'>
        <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
        <input
          type='number'
          value={publishedYear}
          onChange={(e) => setPublishedYear(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2  w-full '
        />
      </div>
      <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBook}>
        Save
      </button>
    </div>
  </div>
);
}

export default CreateBook