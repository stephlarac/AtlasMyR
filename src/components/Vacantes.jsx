import React from "react";
import Header from './Header';
import Footer from "./Footer";
import Jobs from "./Jobs";
import VacanciesForm from "./VacanciesForm";

function Vacantes(){

    return(
    <main>
        <Header />
        <Jobs />
        <VacanciesForm />
        <Footer />
    </main>
    )
}

export default Vacantes;