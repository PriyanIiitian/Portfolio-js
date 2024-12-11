// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ContactSection from './components/ContactSection';

const App = () => (
  <div className="App">
    <Header />
    <main>
      <About />
      <Projects />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default App;
