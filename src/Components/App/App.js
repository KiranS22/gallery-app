import React, { useEffect } from "react";
import "./App.css";
import ImagesList from "../Images/ImagesList";
import { fetchImages } from "../../features/slices/imageSlice";
import { useDispatch } from "react-redux/es/exports";
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchImages());
  }, []);

  return (
    <div className="container">
      <ImagesList />
    </div>
  );
}

export default App;
