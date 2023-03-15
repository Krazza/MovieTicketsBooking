import { useState } from 'react';
import { myGlobalContext } from './components/GlobalContextProvider';
import { DayEntryContext } from './interfaces/DayEntryContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MovieList } from './components/MovieList';
import Layout from './pages/Layout';
import '../src/styles/App.css';
import SeatSelectScreen from './components/SeatSelectScreen';

function App() {

    const initialContext : DayEntryContext = 
{
    dayEntries : [{
        id: "0",
        date : "15.03.2023",
        movies : 
            [
                {
                    id: "1",
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
                    ],
                    tempSeats : [
                        [false, false, false, false, false, false, false, false], 
                        [false, false, false, false, false, false, false, false, false, false, false, false], 
                        [false, false, false, true, true, false, false, false, false, false, false, false], 
                        [false, false, false, false, false, false, false, false, false, false, false, false], 
                        [false, false, false, false, false, false, false, false]
                    ],
                    userBookedTickets : [{}]
                }
            ],
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
                        <Route path="/tickets/:id" element={<SeatSelectScreen/>}/>
                    </Route>
                </Routes>
        </BrowserRouter>
        </myGlobalContext.Provider>
    );
}

export default App;
