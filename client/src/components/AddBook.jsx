import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_AUTHORS, ADD_BOOK, GET_BOOKS } from "../queries";

const AddBook = () => {
  const { loading: loadingAuthors, data: AuthorData } = useQuery(GET_AUTHORS);

  const [bookName, setBookName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setauthorId] = useState("");

  const [addBook] = useMutation(ADD_BOOK, {
    ignoreResults: false, // If true, the mutation's data property is not updated with the mutation's result.
  });

  const displayAuthors = () => {
    if (loadingAuthors) return <option disabled>Loading authors...</option>;
    return AuthorData.authors.map((author) => (
      <option key={author.id} value={author.id}>
        {author.name}
      </option>
    ));
  };

  const submitForm = (e) => {
    e.preventDefault(); // in order to prevent automatic page refresh whenever we click the + button
    addBook({
      variables: {
        name: bookName,
        authorId: authorId,
        genre: genre,
      },
      refetchQueries: [GET_BOOKS],
    });
  };

  return (
    <div>
      <form id="add-book" onSubmit={(e) => submitForm(e)}>
        <div className="field">
          <label>Book name:</label>
          <input type="text" onChange={(e) => setBookName(e.target.value)} />
        </div>
        <div className="field">
          <label>Genre:</label>
          <input type="text" onChange={(e) => setGenre(e.target.value)} />
        </div>
        <div className="field">
          <label>Author:</label>
          <select onChange={(e) => setauthorId(e.target.value)}>
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
