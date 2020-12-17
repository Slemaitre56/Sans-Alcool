//  !!!!!---- SONG ----!!!!!


import React from 'react';
// Pour créer un lien avec ReactJs, il faut l'installer via votre terminal et importer une extention appeler react-router-dom.
// Voir la documentation https://reactrouter.com/web/guides/quick-start
import { Link } from "react-router-dom";
import audio from '../../audio/une-poule-sur-un-mur-version-instrumentale.mp3';


// En ReactJs, quand on crée une fonction, constante, class il faut toujours un return()
// Animation pour faire défiler les paroles ambiance karaoké
function Song() {
    return (
        <div className="body">
            <div class="fade"></div>

            <section class="star-wars">
            <audio autoplay controls  loop>
                <source src={audio} type="audio/ogg" />
            </audio>
                <div class="crawl">

                    <div class="title">
                        <p>Allez on chante !</p>
                        <h1>La petite chanson de Nico</h1>
                    </div>

                    <p>🎶99 shooters sans alcool sur le mur, 99 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 98 shooters sans alcool sur le mur.🎶
                    </p>
                    <p>🎶98 shooters sans alcool sur le mur, 98 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 97 shooters sans alcool sur le mur.🎶
                    </p>
                    <p>🎶97 shooters sans alcool sur le mur, 97 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 96 shooters sans alcool sur le mur.🎶
                    </p>
                    <p>🎶96 shooters sans alcool sur le mur, 96 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 95 shooters sans alcool sur le mur.🎶
                    </p>
                    <p>🎶95 shooters sans alcool sur le mur, 95 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 94 shooters sans alcool sur le mur.🎶
                    </p>
                    <p>🎶94 shooters sans alcool sur le mur, 94 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 93 shooters sans alcool sur le mur.🎶
                    </p>
                    <p>🎶93 shooters sans alcool sur le mur, 93 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 92 shooters sans alcool sur le mur.🎶
                    </p>
                    <p>🎶92 shooters sans alcool sur le mur, 92 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 91 shooters sans alcool sur le mur.🎶
                    </p>
                    <p>🎶91 shooters sans alcool sur le mur, 91 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 90 shooters sans alcool sur le mur.🎶
                    </p>
                    <p>🎶90 shooters sans alcool sur le mur, 90 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 89 shooters sans alcool sur le mur.🎶
                    </p>
                    <p>🎶89 shooters sans alcool sur le mur, 89 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 88 shooters sans alcool sur le mur.🎶
                    </p>
                    <p>🎶88 shooters sans alcool sur le mur, 88 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 87 shooters sans alcool sur le mur.🎶
                    </p>
                    <p>🎶87 shooters sans alcool sur le mur, 87 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 86 shooters sans alcool sur le mur.🎶
                    </p>
                    <p>🎶86 shooters sans alcool sur le mur, 86 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 85 shooters sans alcool sur le mur.🎶
                    </p>
                    <p>🎶85 shooters sans alcool sur le mur, 85 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 84 shooters sans alcool sur le mur.🎶
                    </p>
                    <p>🎶84 shooters sans alcool sur le mur, 84 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 83 shooters sans alcool sur le mur.🎶
                    </p>
                    <p>🎶83 shooters sans alcool sur le mur, 83 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 82 shooters sans alcool sur le mur.🎶
                    </p>
                    <p>🎶82 shooters sans alcool sur le mur, 82 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 81 shooters sans alcool sur le mur.🎶
                    </p>
                    <p>🎶81 shooters sans alcool sur le mur, 81 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 80 shooters sans alcool sur le mur.🎶
                    </p>
                    <p>🎶80 shooters sans alcool sur le mur, 80 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 79 shooters sans alcool sur le mur.🎶
                    </p>
                    <p>🎶79 shooters sans alcool sur le mur, 79 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 78 shooters sans alcool sur le mur.🎶
                    </p>
                    <p>🎶78 shooters sans alcool sur le mur, 78 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 77 shooters sans alcool sur le mur.🎶
                    </p>
                    <p>🎶77 shooters sans alcool sur le mur, 77 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 76 shooters sans alcool sur le mur.🎶
                    </p>
                    <p>🎶76 shooters sans alcool sur le mur, 76 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 75 shooters sans alcool sur le mur.🎶
                    </p>
                    <p>🎶75 shooters sans alcool sur le mur, 75 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 74 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶74 shooters sans alcool sur le mur, 74 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 73 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶73 shooters sans alcool sur le mur, 73 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 72 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶72 shooters sans alcool sur le mur, 72 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 71 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶71 shooters sans alcool sur le mur, 71 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 70 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶70 shooters sans alcool sur le mur, 70 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 69 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶69 shooters sans alcool sur le mur, 69 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 68 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶68 shooters sans alcool sur le mur, 68 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 67 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶67 shooters sans alcool sur le mur, 67 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 66 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶66 shooters sans alcool sur le mur, 66 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 65 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶65 shooters sans alcool sur le mur, 65 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 64 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶64 shooters sans alcool sur le mur, 64 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 63 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶63 shooters sans alcool sur le mur, 63 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 62 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶62 shooters sans alcool sur le mur, 62 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 61 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶61 shooters sans alcool sur le mur, 61 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 60 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶60 shooters sans alcool sur le mur, 60 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 59 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶59 shooters sans alcool sur le mur, 59 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 58 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶58 shooters sans alcool sur le mur, 58 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 57 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶57 shooters sans alcool sur le mur, 57 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 56 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶56 shooters sans alcool sur le mur, 56 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 55 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶55 shooters sans alcool sur le mur, 55 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 54 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶54 shooters sans alcool sur le mur, 54 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 53 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶53 shooters sans alcool sur le mur, 53 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 52 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶52 shooters sans alcool sur le mur, 52 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 51 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶51 shooters sans alcool sur le mur, 51 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 50 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶50 shooters sans alcool sur le mur, 50 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 49 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶49 shooters sans alcool sur le mur, 49 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 48 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶48 shooters sans alcool sur le mur, 48 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 47 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶47 shooters sans alcool sur le mur, 47 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 46 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶46 shooters sans alcool sur le mur, 46 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 45 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶45 shooters sans alcool sur le mur, 45 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 44 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶44 shooters sans alcool sur le mur, 44 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 43 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶43 shooters sans alcool sur le mur, 43 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 42 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶42 shooters sans alcool sur le mur, 42 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 41 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶41 shooters sans alcool sur le mur, 41 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 40 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶40 shooters sans alcool sur le mur, 40 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 39 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶39 shooters sans alcool sur le mur, 39 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 38 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶38 shooters sans alcool sur le mur, 38 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 37 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶37 shooters sans alcool sur le mur, 37 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 36 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶36 shooters sans alcool sur le mur, 36 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 35 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶35 shooters sans alcool sur le mur, 35 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 34 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶34 shooters sans alcool sur le mur, 34 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 33 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶33 shooters sans alcool sur le mur, 33 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 32 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶32 shooters sans alcool sur le mur, 32 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 31 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶31 shooters sans alcool sur le mur, 31 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 30 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶30 shooters sans alcool sur le mur, 30 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 29 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶29 shooters sans alcool sur le mur, 29 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 28 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶28 shooters sans alcool sur le mur, 28 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 27 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶27 shooters sans alcool sur le mur, 27 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 26 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶26 shooters sans alcool sur le mur, 26 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 25 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶25 shooters sans alcool sur le mur, 25 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 24 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶24 shooters sans alcool sur le mur, 24 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 23 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶23 shooters sans alcool sur le mur, 23 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 22 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶22 shooters sans alcool sur le mur, 22 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 21 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶21 shooters sans alcool sur le mur, 21 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 20 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶20 shooters sans alcool sur le mur, 20 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 19 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶19 shooters sans alcool sur le mur, 19 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 18 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶18 shooters sans alcool sur le mur, 18 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 17 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶17 shooters sans alcool sur le mur, 17 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 16 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶16 shooters sans alcool sur le mur, 16 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 15 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶15 shooters sans alcool sur le mur, 15 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 14 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶14 shooters sans alcool sur le mur, 14 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 13 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶13 shooters sans alcool sur le mur, 13 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 12 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶12 shooters sans alcool sur le mur, 12 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 11 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶11 shooters sans alcool sur le mur, 11 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 10 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶10 shooters sans alcool sur le mur, 10 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 9 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶9 shooters sans alcool sur le mur, 9 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 8 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶8 shooters sans alcool sur le mur, 8 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 7 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶7 shooters sans alcool sur le mur, 7 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 6 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶6 shooters sans alcool sur le mur, 6 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 5 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶5 shooters sans alcool sur le mur, 5 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 4 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶4 shooters sans alcool sur le mur, 4 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 3 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶3 shooters sans alcool sur le mur, 3 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 2 shooters sans alcool sur le mur.🎶</p>

                    <p>🎶2 shooters sans alcool sur le mur, 2 shooters sans alcool.<br/>
                        Bois en un et au suivant ! 1 shooter sans alcool sur le mur.🎶</p>

                    <p>🎶1 shooter sans alcool sur le mur, 1 shooter sans alcool.<br/>
                        Bois en un et au suivant ! plus de shooters sans alcool sur le mur.🎶😭</p>

                    <p>🎶Plus de shooters sans alcool sur le mur, plus de shooters sans alcool.<br/>
                        Vas au supermarché pour en acheter, 99 shooters sans alcool sur le mur.🎶😊</p>

                </div>

            </section>

            <div className="btn">
                <Link to="/"><button>Retour à l'accueil</button></Link>
            </div>

        </div>
    )
}

// class, const ou function, il faut exporter chaque fichier sinon impossible de l'importer
export default Song
