import React, { FC, Suspense } from "react";
import Nav from "./sections/Nav";
import './App.css';

const Home = React.lazy(() => import("./sections/Home"));


const App:FC = () => {
  return (
    <div id="app">
    <Suspense fallback={null}>
      <Nav />

      <main>
        <Home />

    
     
      </main>

    
    </Suspense>
    </div>
  );
}

export default App;
