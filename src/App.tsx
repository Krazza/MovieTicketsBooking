import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MovieList } from './components/MovieList';
import Layout from './pages/Layout';
import '../src/styles/App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<MovieList/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
