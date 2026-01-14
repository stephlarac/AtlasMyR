import React from 'react';
import Header from './Header';
import Welcome from './Welcome';
import Servicios from './Servicios';
import Metales from './Metales';
import Beneficios from './Beneficios';
import Contacto from './Contacto';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <Header />
      <Welcome />
      <Servicios />
      <Metales />
      <Beneficios />
      <Contacto />
      <Footer />
    </div>
  );
}

export default Home;