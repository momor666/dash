import React from 'react';
import './App.css';

import Weather from "./Weather";
import News from "./News";
import ToDo from "./ToDo";
import Sports from "./Sports";
import Clothes from "./Clothes";
import Photos from "./Photos";


function App() {
  return (
  <main>
    <h1>Greetings, Samay </h1>
    <Weather/>
    <section>
      <div>
        <h3>Latest headlines</h3>
        <News/>
      </div>
      <div>
        <h3>Today's Agenda</h3>
      <ToDo/>
      </div>
    </section>
  </main>
  );
}

export default App;