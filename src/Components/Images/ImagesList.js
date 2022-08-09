import React from "react";
import { useSelector } from "react-redux";
import { selectImages } from "../../features/slices/imageSlice";
import SearchBar from "../Search/SearchBar";
const ImagesList = () => {
  const images = useSelector(selectImages);
  return (
    <>
      <SearchBar />

      <div className="row">
        {images.map((image) => {
          console.log(image[0]);
          return (
            <div className="col-12 col-md-4">
              <div className="card">
                <img
                  src={image.urls.regular}
                  alt={image.alt_description ?? ""}
                  key={image.id}
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {" "}
                    By:{image.user.first_name} {image.user.last_name}
                  </h5>
                  <p className="card-text">
                    {image.description ?? "description not found"}{" "}
                  </p>
                  <button type="button" className="btn btn-primary">
                    Image Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ImagesList;
