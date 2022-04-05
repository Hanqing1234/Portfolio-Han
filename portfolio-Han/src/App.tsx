import React, { FC, Suspense } from "react";
import Nav from "./sections/Nav";
import './App.css';


const App:FC = () => {
  return (
    <div id="app">
    <Suspense fallback={null}>
      <Nav />

      <main>
      
    
     
      </main>

    
    </Suspense>
    </div>
  );
}

export default App;
