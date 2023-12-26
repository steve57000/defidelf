import React from 'react';

import {ContainerHomePage, TitleHomePage } from './StylesHomePage';

function HomePage() {
    // State (état, données)
    // Comportement
    // affichage (render)
    return (
        <ContainerHomePage id="homePage">
            <TitleHomePage id="title-logo">Page d'acceuil</TitleHomePage>
        </ContainerHomePage>
    );
}

export default HomePage;
