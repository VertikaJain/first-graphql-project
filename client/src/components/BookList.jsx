import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../queries";
import ViewBookDetails from "./ViewBookDetails";

const BookList = () => {
  const { data, loading } = useQuery(GET_BOOKS);
  const [selectedBookId, setSelectedBookId] = useState(null);

  const displayBooks = () => {
    if (loading) {
      return <h3>Fetching books...</h3>;
    }
    return (
      <>
        <ul>
          {data.books.map((book) => (
            <li key={book.id} onClick={(e) => setSelectedBookId(book.id)}>
              {book.name}
            </li>
          ))}
        </ul>
        <ViewBookDetails selectedBookId={selectedBookId} />
      </>
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
