import { useState } from 'react';
import Pdf1 from './files/Forprosjektrapport.pdf';
import Pdf2 from './files/Prosjektskisse gruppe 20.pdf';
import Pdf3 from './files/STATUS RAPPORT Gruppe  20 (1).pdf';
import Logo from './Img/intility_u_byline_hvit_RGB.svg';
import React from 'react';
import "./Home.css";
import Halvor from './Img/halvor.png';
import Ada from './Img/Ada.png';
import Ersan from './Img/Ersan.png';
import Hallvard from './Img/Hallvard.png';
import Kristine from './Img/Kristine.png';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/ListItem';
import Image from '@mui/material/ImageListItem';

function Home() {
  const [cards] = useState([
    {
      title: 'Sluttrapport',
      text: 'Sluttrapporten gir en fullstendig oversikt over bacheloroppgaven og fungerer som en oppsummering av arbeidet som er gjort. Trykk på knappen for å lese vår sluttrapport',
      button: 'Last ned',
      type: 'sluttrapportpdf'
    },
    {
      title: 'Forprosjektsrapport',
      text: 'Forprosjektsrapporten ble skrevet i starten av prosjektet og inneholder en beskrivelse av prosjektet og dets mål, samt en analyse av hva som må gjøres for å oppnå disse målene. Trykk på knappen for å lese vår forprosjektsrapport',
      button: 'Last ned',
      type: 'forprosjektpdf'
    },
    {
      title: 'Prosjektskisse',
      text: 'Prosjektskissen presiserer og definerer bachelorprosjektet på en mest mulig presis måte, og brukes til å bestemme rammebetingelser, krav til utviklingsplattform og andre relevante krav. Trykk på knappen for å lese vår prosjektskisse',
      button: 'Last ned',
      type : 'prosjektskisse'
    },
    {
      title: 'Statusrapport',
      text: 'Statusrapporten består av informasjon tilknyttet hva vi ønsker å oppnå med bacheloroppgaven. Den består også av diverse annet som hvem vi ønsket å jobbe med og hvilke type arbeid som er optimalt. Trykk på knappen for å lese vår statusrapport',
      button: 'Last ned',
      type: 'statusrapport'
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
      <div className='logo'><img src={Logo} alt='logo'/>
      </div>
      <section>
        <div className='container'>
          <h1>Utvikling av en stand alone webløsning for dokumentering, kalkulering og fakturering av konsulenttjenester
</h1>
<div className='innledning'>
  <a>Intility AS er en bedrift som tilbyr kunden en komplett  plattform tjeneste for multi-cloud IT-miljøer. 
    Som flere andre bedrifter trenger Intility å holde oversikt på konsulentarbeid. 
    Vår bacheloroppgave gitt ut på å utvikle et fullt integrert system for å enkelt kunne vedlikeholde og overstyre Intility sine konsulentoppdrag.
    Utfors diverse dokumenter tilknyttet oppgaven, samt mer informasjon om gruppemedlemmene.</a>
</div>
          <div className='cards'>
            {
              cards.map((card, i) => (

              <div key={i} className='card'>
            <h3>
              {card.title}
            </h3>
            <p>
              {
              card.text
              }
            </p>
            <button className='btn' onClick={() => handleButtonClick(card.type)}>
              {card.button}
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
                </section>
    </div>
    
  );
}

export default Home;