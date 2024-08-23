import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import BlogList from './Components/BlogList';
import PostPage from './Components/Post';
import SignInPage from './Components/SignInPage';
import About from './Components/About';
import Saved from './Components/Saved';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={BlogList} />
        <Route path="/post" element={PostPage} />
        <Route path="/About" element={About} />
        <Route path="/SignIn" element={SignInPage} />
        <Route path="/Saved" element={Saved} />
        
      </Routes>
      <BlogList/>
      <Footer />
    </Router>
  );
}

export default App;
