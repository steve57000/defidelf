import React from 'react';

import {ContainerHomePage, TitleHomePage } from './StylesHomePage';

function HomePage() {
    // State (état, données)
    // Comportement
    // affichage (render)
    return (
        <ContainerHomePage id="homePage">
            <TitleHomePage id="title-logo">Apprendre le français pour s'intégrer</TitleHomePage>
            <p>L'association <span className="TxtBlue">Défi-Delf</span> vous propose une formation à l'apprentissage du français et à la préparation aux examens du Delf</p>
            <p>Niveaux A1, A2, B1 et B2</p>
            <p>
                Nouvelle association, <span className="TxtBlue">Défi Delf</span> constitue une offre complémentaire, en matière d’apprentissage du français, de préparation à la certification DELF- Diplôme d’études en langue française.
                En complémentarité aux différents dispositifs existants, Défi-Delf souhaite aider des adultes étrangers à s’insérer dans la société. <br/>
                <br/>
                <strong>Trois spécificités qui complètent l’offre des autres structures existant dans l’Aube :</strong> <br/>
                -	Les cours sont donnés en soirée, ce qui permet plus de possibilités aux apprenants de se libérer. <br/>
                -	Défi Delf est signé une convention avec France Education International pour devenir le centre officiel de préparation aux diplômes DELF dans l’Aube. FEI propose des sujets blancs du Delf et corrige les travaux. Défi Delf se charge d’organiser la passation de ces examens blancs. Ce dispositif est ouvert à tous les volontaires venant de toutes les autres associations. L’intérêt est de placer les futurs candidats au Delf dans les conditions réelles d’examen. Des relations étroites existent avec l’ADDPS-Yschools qui est le centre départemental de passation du DELF. <br/>
                -	Son modèle est exclusivement basé sur le bénévolat des formateurs et sur le volontariat des « apprenants » étrangers. <br/>
                <br/>
                <strong>Education nationale et éducation populaire, de précieux partenaires : </strong><br/>
                -	l’<strong>URCA</strong> (Université Reims Champagne Ardenne) et l’<strong>Inspé</strong> (Institut supérieur du professorat) mettent à sa disposition les locaux et matériels de l’Inspé, au 6 avenue des Lombards à Troyes. <br/>
                -	<strong>France éducation international</strong> (FEI est l’opérateur du ministère de l’Education nationale et de la jeunesse) et le Centre international d’études françaises (CIEF) de l’URCA ont agréé l’association Défi Delf pour l’organisation des épreuves de préparation officielle au DELF. <br/>
                -	<strong>La ligue de l’enseignement :</strong> association affiliée<br/>
                <br/>
                <strong>Des adultes étrangers très motivés, qui viennent après le travail</strong><br/>
                Le groupe constitué depuis septembre 2022 (officiellement devenu Défi Delf en janvier 2023) a déjà accueilli une trentaine d’adultes étrangers très motivés, de 19 nationalités différentes. La plupart viennent après le travail. Vie quotidienne, travail, loisirs, transports, … Trois soirs par semaine, tous les thèmes de la société sont abordés pour les aider à communiquer dans le monde réel, et à s’insérer davantage. Et pour préparer au DELF, ceux qui souhaitent valoriser leurs compétences dans la langue. <br/>
                Effectifs à la rentrée 2023 : 28 apprenants inscrits, 6 formateurs bénévoles, 12 élus administrateurs.<br/>
                <br/>
                <strong>En 2023 : 18 premiers lauréats du DELF, sésame pour l’avenir</strong><br/>
                Reconnu dans le monde entier, le DELF (diplôme d’études en langue française) est valable à vie. <br/>
                A Troyes, Défi Delf prépare au DELF dit « tout public » et organise des examens blancs ouverts à tous, pour 3 niveaux de diplôme, sur 4 (les trois niveaux supérieurs : A2, B1 et B2). <br/>
                La première « promotion » de Défi Delf se réunit ce 29 juin autour des 14 premiers lauréats à avoir décroché le DELF (8 A2 et  6 B1). <br/>
                « 100% de réussite qui ne sont pas seulement dus aux formateurs de Défi Delf mais, aussi aux efforts de chacun - et de tous ceux qui les ont déjà accompagnés depuis le début de leur apprentissage du français. <br/>
            </p>
        </ContainerHomePage>
    );
}

export default HomePage;
