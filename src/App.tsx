import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";
import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import PDP from "./pages/PDP/PDP";

function App() {
  return (
    <div>
    <ApolloProvider client={client}>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<PDP />} />
        </Routes>
      </Router>
    </ApolloProvider>
    </div>
  );
}

export default App;
