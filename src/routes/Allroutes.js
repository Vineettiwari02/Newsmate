import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Listcard, Pagenotfound } from '../pages';

export const Allroutes = () => {
    return (
        < div className="dark:bg-slate-800">
            <Routes>
                <Route path="/" element={<Listcard apipath="general" title="General" />}></Route>
                <Route path="/business" element={<Listcard apipath="business" title="Business" />}></Route>
                <Route path="/entertainment" element={<Listcard apipath="entertainment" title="Entertainment" />}></Route>
                <Route path="/health" element={<Listcard apipath="health" title="Health" />}></Route>
                <Route path="/sports" element={<Listcard apipath="sports" title="Sports" />}></Route>
                <Route path="/technology" element={<Listcard apipath="tech" title="Technology" />}></Route>
                <Route path="*" element={<Pagenotfound />}></Route>
            </Routes>
        </div>
    )
}
