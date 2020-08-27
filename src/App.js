import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Layout>
        <Navbar />
      </Layout>

      <GlobalStyles />
    </>
  );
}

export default App;
