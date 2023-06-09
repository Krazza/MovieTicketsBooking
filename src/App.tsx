import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MovieList } from './components/MovieList';
import Layout from './pages/Layout';
import '../src/styles/App.css';
import SeatSelectScreen from './components/SeatSelectScreen';
import { initialContext, myGlobalContext } from './components/GlobalContextProvider';

function App() {

    const currentContext = initialContext;

    return (
        <myGlobalContext.Provider value={currentContext}>
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<MovieList/>}/>
                        <Route path="/tickets/:screeningID" element={<SeatSelectScreen/>}/>
                    </Route>
                </Routes>
        </BrowserRouter>
        </myGlobalContext.Provider>
    );
}

export default App;
