import React from 'react';
import Header from './Header';
import Welcome from './Welcome';
import Servicios from './Servicios';
import Metales from './Metales';
import Beneficios from './Beneficios';
import Contacto from './Contacto';
import Vacantes from './Vacantes';

function App() {
  return (
    <div>
      <Header />
      <Welcome />
      <Servicios />
      <Metales />
      <Beneficios />
      <Contacto />
      <Vacantes />
    </div>
  );
}

export default App;
