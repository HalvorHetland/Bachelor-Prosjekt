import { useState } from 'react';
import Pdf1 from './files/Forprosjektrapport.pdf';
import Pdf2 from './files/Prosjektskisse gruppe 20.pdf';
import Pdf3 from './files/STATUS RAPPORT Gruppe  20 (1).pdf';
import Logo from './Img/intility_logo_sea-green_RGB.png';
import Logo2 from './Img/Logomedsignatur_gul_OsloMet-01.png';
import React from 'react';
import "./Home.css";
import Navbar from 'react-bootstrap/Navbar';
import Halvor from './Img/halvor.png';
import Ada from './Img/Ada.png';
import Ersan from './Img/Ersan.png';
import Hallvard from './Img/Hallvard.png';
import Kristine from './Img/Kristine.png';
import './Gruppe.css';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/ListItem';
import Image from '@mui/material/ImageListItem';
import { Link } from 'react-scroll';

function Home() {
  const [cards] = useState([
    {
      title: 'Statusrapport',
      text: 'Statusrapporten består av informasjon tilknyttet hva vi ønsker å oppnå med bacheloroppgaven. Den består også av diverse annet som hvem vi ønsket å jobbe med og hvilke type arbeid som er optimalt.',
      button: 'Last ned',
      type: 'statusrapport'
    },
    {
      title: 'Prosjektskisse',
      text: 'Prosjektskissen presiserer og definerer bachelorprosjektet på en mest mulig presis måte, og brukes til å bestemme rammebetingelser, krav til utviklingsplattform og andre relevante krav.',
      button: 'Last ned',
      type : 'prosjektskisse'
    },
    {
      title: 'Forprosjektsrapport',
      text: 'Forprosjektsrapporten ble skrevet i starten av prosjektet og inneholder en beskrivelse av prosjektet og dets mål, samt en analyse av hva som må gjøres for å oppnå disse målene.',
      button: 'Last ned',
      type: 'forprosjektpdf'
    },
    {
      title: 'Sluttrapport',
      text: 'Sluttrapporten gir en fullstendig oversikt over bacheloroppgaven og fungerer som en oppsummering av arbeidet som er gjort.',
      button: 'Last ned',
      type: 'sluttrapportpdf'
    }
  ]);

  const handleButtonClick = (type) => {
    if(type === 'sluttrapportpdf'){
      alert('Ikke ferdig enda');
    } 
    else if(type === 'forprosjektpdf'){
      window.open(Pdf1);
    } 
    else if(type === 'prosjektskisse'){
      window.open(Pdf2);
    }
    else if(type === 'statusrapport'){
      window.open(Pdf3);
    }
  };

  return (
    
    <div>
      <div className='nav'>
        <Navbar>
        <div className='navItems'>
          <Navbar.Brand className='group'>Gruppe 20</Navbar.Brand>
          <Link className='omOss' to="sektor2" smooth={true} duration={500}>Dokumenter</Link>
          <Link className='dokumenter' to="sektor3" smooth={true} duration={500}>Gruppemedlemmer</Link>
          </div>
          </Navbar>
          </div>

      <section>
        <div className='container'>

        <div className='sektor1' id="sektor1">
          
<div className='intro'>
<h1>Bachelorprosjekt 2023 - Gruppe 20</h1>
<h2>Consultant Services</h2>
  <a>Utvikling av en stand alone webløsning for dokumentering, kalkulering og fakturering av konsulenttjenester</a>
  
</div>
<div className='it-logo'><img src={Logo} alt='logo' style={{ alignSelf: 'center' }}/></div>
</div>


<div className="horizontal-line"></div>
<div className='sektor2' id="sektor2">
<div className='card-title' style={{ alignSelf: 'center' }}>
  <h1>Dokumenter</h1>
  </div>
          <div className='cards'>

            {
              cards.map((card, i) => (

              <div key={i} className='card'>
            <h3>
              {card.title}
            </h3>
            <p>{card.text}</p>
            <button className='btn' onClick={() => handleButtonClick(card.type)}>
              Last ned
            </button>
          </div>
          ))
        }
        </div>
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
                </div>
                </section>
    </div>

    
  );
}

export default Home;