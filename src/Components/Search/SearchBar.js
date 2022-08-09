import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchImagesByKeyword } from "./../../features/slices/imageSlice";
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleClick = () => {
    dispatch(searchImagesByKeyword(searchTerm));
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        className="input-group rounded w-50"
        style={{ margin: "15px 0", display: "flex", justifyContent: "center" }}
      >
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => handleChange(e)}
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <span
          className="input-group-text border-0"
          id="search-addon"
          onClick={() => handleClick()}
        >
          <i className="fas fa-search"></i>
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
