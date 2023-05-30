import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../queries";

const BookList = () => {
  const { loading, data } = useQuery(GET_BOOKS);

  const displayBooks = () => {
    if (loading) {
      return <h3>Fetching books...</h3>;
    }
    return (
      <ul>
        {data.books.map((book) => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h1>Peek-a-Book</h1>
      {displayBooks()}
    </div>
  );
};

export default BookList;
