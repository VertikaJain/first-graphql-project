import React from "react";
import { useQuery } from "@apollo/client";
import { GET_AUTHORS } from "../queries";

const AddBook = () => {
  const { loading, data } = useQuery(GET_AUTHORS);

  const displayAuthors = () => {
    if (loading) return <option disabled>Loading authors...</option>;
    return data.authors.map((author) => (
      <option key={author.id}>{author.name}</option>
    ));
  };

  return (
    <div>
      <form id="add-book">
        <div className="field">
          <label>Book name:</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>Genre:</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>Author:</label>
          <select>
            <option>Select author</option>
            {displayAuthors()}
          </select>
        </div>
        <button>+</button>
      </form>
    </div>
  );
};

export default AddBook;
