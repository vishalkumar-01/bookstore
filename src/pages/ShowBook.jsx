import React, { useEffect, useState } from "react";
import Spinner from "../Components/Spinner";
import BackButton from "../Components/BackButton";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { useSnackbar } from "notistack";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  // const { enqueueSnackbar } = useSnackbar();
  // console.log(id);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://bookstore-be-kvvw.onrender.com/books/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        // enqueueSnackbar('An error',{variant:'error'})
        setLoading(false);
      });
  }, []);
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my=4">
            <span className="text-xl mr-4 text=gray-500">Id</span>
            <span>{book._id}</span>
          </div>
          <div className="my=4">
            <span className="text-xl mr-4 text=gray-500">Title</span>
            <span>{book.title}</span>
          </div>
          <div className="my=4">
            <span className="text-xl mr-4 text=gray-500">Author</span>
            <span>{book.author}</span>
          </div>
          <div className="my=4">
            <span className="text-xl mr-4 text=gray-500">Published Year</span>
            <span>{book.publishedYear}</span>
          </div>
          <div className="my=4">
            <span className="text-xl mr-4 text=gray-500">Created Time</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className="my=4">
            <span className="text-xl mr-4 text=gray-500">Updated time</span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
