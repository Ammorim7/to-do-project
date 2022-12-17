import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Header from './components/Header.js'
import TaskBar from './components/TaskBar.js'
import TaskAdd from './components/TaskAdd.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <Router>
        <Header />
        <TaskBar />
        <TaskAdd />
        <Footer />
    </Router>
  );
}

export default App;
