import React from 'react';
import Halvor from './Img/halvor.png';
import './Gruppe.css';
import {
    useNavigate
  } from "react-router-dom";
  import ArrowBackIcon from '@mui/icons-material/ArrowBack';
function Gruppe() {
        const navigate = useNavigate();
    return(
        <>
        <div>
            <h1>Gruppemedlemmer</h1>
            </div>
            <div>
            <ArrowBackIcon onClick={() => navigate(-1)} className='arrowBack' style={{ fontSize: 48 }}/>
        </div>
            <div>
                <img src={Halvor} alt='halvor'/>
                </div></>
    );
}
export default Gruppe;