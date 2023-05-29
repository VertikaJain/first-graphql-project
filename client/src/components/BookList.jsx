import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_BOOKS = gql`
  {
    books {
      name
      id
    }
  }
`;

const BookList = (props) => {
  const { loading, error, data } = useQuery(GET_BOOKS);

  return (
    <div>
      <h1>Peek-a-Book</h1>
      <ul>
        <li>Book1</li>
      </ul>
    </div>
  );
};

export default BookList;
