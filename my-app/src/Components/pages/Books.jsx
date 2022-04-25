import React from "react";
import { useEffect, useState } from "react";
import { BookCard } from "./BookCard";
import styled from "styled-components";

export const Grid = styled.div`
 display: grid;
 grid-template-columns: repeat(4, 370px);
`;

const Books = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // make a GET request to http://localhost:8080/books to get all the books data
    const getData = async () => {
      let res = await fetch("http://localhost:8080/books");
      let resdata = await res.json();

      console.log(resdata);
      setData(resdata);
    };
    getData();
  }, []);

  return (
    <>
      <h1>Books</h1>
      <Grid data-testid="books-container">
        {/* {!!data && 
          // map thorugh the data and use <BookCard/> component to display each book
          
          } */}
        {data.map((item) => {
          return <BookCard key={item.id} {...item} />;
        })}
      </Grid>
    </>
  );
};
export default Books;