import React from 'react';
import Counter from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
}

export default App;

// import React, { Component } from 'react';
// import Counter from './features/counter/Counter';
// import './App.css';


// class App extends Component {
//   render() {
//     return (
//       <>
// <h1>ggg</h1>
//       <React.Fragment>
//         <Counter />
//       </React.Fragment>
//       </>
//     )
//   }
// }
// export default App;

