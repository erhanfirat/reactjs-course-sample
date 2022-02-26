import React, { Suspense } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { ToastContainer } from 'react-toastify';
import {
    Routes,
    Route
} from "react-router-dom";
import "./Main.css";
const HomePage = React.lazy(() => import('./../view/HomePage'));
const StudentsPage = React.lazy(() => import('./../view/StudentsPage'));
const StudentFormPage = React.lazy(() => import('./../view/StudentFormPage'));
const CounterPage = React.lazy(() => import('./../view/CounterPage'));


const Main = () => {
    return <div className="container-fluid" >
        <div className="row">
            <div className="col-12 header">
                <Header />
            </div>
        </div>
        <div className='row'>
            <div className='col-lg-2 col-md-3 col-sm-12 sidebar'>
                <Sidebar />
            </div>
            <div className='col-lg-10 col-md-9 col-sm-12' >
                <Suspense fallback={<p>Loading...</p>}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/counter" element={<CounterPage />} />
                        <Route path="/students" element={<StudentsPage />} />
                        <Route path="/student-form/:id" element={<StudentFormPage />} />
                        <Route path="/student-form" element={<StudentFormPage />} />
                    </Routes>
                </Suspense>
            </div>
        </div>
        <ToastContainer />
    </div>
}

export default Main;