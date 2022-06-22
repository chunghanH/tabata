import './Tabata.css';
import react, {useState} from 'react';
import TabataForm from './tabata-form/TabataForm';
import TabataTimer from './tabata-timer/TabataTimer';
import { Link, Outlet } from "react-router-dom";


const Tabata = () => {
    return (
        <div>
            {/* <TabataForm /> */}
            <Link to="/tabata-form">TabataForm</Link>
            <Outlet />
        </div>
    );
};

export default Tabata;
