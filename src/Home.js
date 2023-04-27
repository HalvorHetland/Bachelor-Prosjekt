import { useState } from 'react';
import Pdf1 from './files/Forprosjektrapport.pdf'
import { Outlet, Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const [cards] = useState([
    {
      title: 'Sluttrapport',
      text: 'les om vår sluttrapport',
      button: 'Last ned',
      type: 'sluttrapportpdf'
    },
    {
      title: 'Forprosjektsrapport',
      text: 'les om vår forprosjektsrapport',
      button: 'Last ned',
      type: 'forprosjektpdf'
    },
    {
      title: 'Prosjekt',
      text: 'last ned og utforsk vårt prosjekt',
      button: 'Last ned',
      type : 'zip'
    },
    {
      title: 'Gruppemedlemmer',
      text: 'les mer om våre gruppemedlemmer',
      button: 'Les mer',
      type: 'page'
    }
  ]);

  const handleButtonClick = (type) => {
    if (type === 'page') {
      // Redirect to a new page
      window.location.href = '/Gruppe';
    } 
    else if(type === 'sluttrapportpdf'){
      alert('Ikke ferdig enda');
    } 
    else if(type === 'forprosjektpdf'){
      window.open(Pdf1);
    } 
    else if(type === 'zip'){
      alert('Ikke ferdig enda');
    }
  };

  return (
    <div>
      <section>
        <div className='container'>
          <h1>Bacheloroppgave Gruppe 20</h1>
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
      </section>
    </div>
  );
}

export default Home;