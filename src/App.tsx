import { useState } from 'react';
import { myGlobalContext } from './components/GlobalContextProvider';
import { DayEntryContext } from './interfaces/DayEntryContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MovieList } from './components/MovieList';
import Layout from './pages/Layout';
import '../src/styles/App.css';

function App() {

    const initialContext : DayEntryContext = 
{
    dayEntries : [{
        date : "15.03.2023",
        movies : 
            [
                {
                    title : "Avatar: Way of Water",
                    price : 15.5,
                    length : "3h 12m",
                    location : "Helsinki movie theater",
                    isSoldOut : false,
                    seats : [
                        [false, false, false, false, false, false, false, false], 
                        [false, false, false, false, false, false, false, false, false, false, false, false], 
                        [false, false, false, true, true, false, false, false, false, false, false, false], 
                        [false, false, false, false, false, false, false, false, false, false, false, false], 
                        [false, false, false, false, false, false, false, false]
                    ]
                }
            ]
        }
    ],
    setDayEntries : () => {}
}

    const [data, setData] = useState<DayEntryContext>(initialContext);

    return (
        <myGlobalContext.Provider value={data}>
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<MovieList/>}/>
                    </Route>
                </Routes>
        </BrowserRouter>
        </myGlobalContext.Provider>
    );
}

export default App;
