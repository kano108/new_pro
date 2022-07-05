import React, { useEffect } from "react";
import { useState } from "react";
// import { Box,} from "@chakra-ui/core";
import { Pagination } from "@material-ui/lab";
import usePagination from "./pagination";
import "./App.css";

function Register() {
  const [image, setImage] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 12;

  const count = Math.ceil(image.length / perPage);
  const Data = usePagination(image, perPage);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => {
        return setImage(data);
      });
  });

  const handleChange = (e, p) => {
    setPage(p);
    Data.jump(p);
  };

  return (
    <div>
      <h1 style={{color:"white"}}>Pagination Page</h1>
      <h2 style={{color:"white"}}>Kishan Patel </h2>
      <br />
      <div className="all_image">
        {Data.currentData().map((elem) => {
          return <img src={elem.url} alt="" className="singal_image" />;
        })}
      </div>
      <div className="page_number">
        <Pagination
          count={count}
          size="large"
          color="secondary"
           page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Register;
