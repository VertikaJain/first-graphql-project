import { ApolloClient, ApolloProvider } from "@apollo/client";
import BookList from "./components/BookList";

// setup apollo client
const client = new ApolloClient({ uri: "http://localhost:5000/graphql" });

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;
