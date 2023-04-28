import React from 'react';
import Halvor from './Img/halvor.png';
import Ada from './Img/Ada.png';
import Ersan from './Img/Ersan.png';
import Hallvard from './Img/Hallvard.png';
import Kristine from './Img/Kristine.png';
import Logo from './Img/intility_u_byline_hvit_RGB.svg'
import './Gruppe.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/ListItem';
import Image from '@mui/material/ImageListItem';
/*import {
    useNavigate
  } from "react-router-dom";*/

function Gruppe() {
       // const navigate = useNavigate();
    return(
        <>
        <div>
        <div className='logo'><img src={Logo} alt='logo'/></div>
       
        </div>
        <div className='container'>
            <h1>Gruppemedlemmer</h1>
            <div className='intromedlemmer'><a>Totalt var vi fem medlemmer som jobbet sammen på et bachelorprosjekt hos Intility AS. 
                Det har vært en svært positiv opplevelse å samarbeide med disse menneskene, da vi alle var svært dedikerte og engasjerte i å utvikle en stand alone webløsning for dokumentering, kalkulering og fakturering av konsulenttjenester. 
                Vi har lært mye av hverandre og har hatt en god arbeidsprosess gjennom hele prosjektet.
                Under finner man alle gruppemedlemmer med navn.
            </a></div>
        
            <Grid container spacing={2} columns={{ xs: 1, sm: 2, md: 12 }} className='grid' justifyContent='center'>
          <Grid item xs={12} sm={6} md={4}>
            <Image className='halvor'><img src={Halvor} alt='halvor' /></Image>
            <Item><h3>Halvor Hetland</h3></Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Image className='halvor'><img src={Ada} alt='halvor' /></Image>
            <Item><h3>Ada Ruud</h3></Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Image className='halvor'><img src={Ersan} alt='halvor' /></Image>
            <Item><h3>Ersan Sinani</h3></Item>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
            <Image className='halvor'><img src={Hallvard} alt='halvor' /></Image>
            <Item><h3>Hallvard Tjosås Drønen</h3></Item>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
            <Image className='halvor'><img src={Kristine} alt='halvor' /></Image>
            <Item><h3>Kristine Opsal</h3></Item>
  </Grid>
</Grid> 
                </div>
                
                </>
    );
}

// <FontAwesomeIcon icon={faArrowLeft} onClick={() => navigate(-1)} className='arrowBack'/>

export default Gruppe;
