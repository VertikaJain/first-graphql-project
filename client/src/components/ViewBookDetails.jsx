import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOK } from "../queries";

const ViewBookDetails = ({ selectedBookId }) => {
  const { data, loading } = useQuery(GET_BOOK, {
    variables: { id: selectedBookId },
  });

  if (!selectedBookId) return <p>No Book Selected</p>;

  return (
    <div>
      <h2>Book Details</h2>
      {loading ? (
        <p>Fetching Books</p>
      ) : (
        <p>
          <div>Name: {data.book.name}</div>
          <div>Genre: {data.book.genre}</div>
          <div>Author's name: {data.book.author.name}</div>
          <div>Author's age: {data.book.author.age}</div>
          <div>Other books by this author:</div>
          <ul>
            {data.book.author.books.map((book) => (
              <li key={book.id}>{book.name}</li>
            ))}
          </ul>
        </p>
      )}
    </div>
  );
};

export default ViewBookDetails;
