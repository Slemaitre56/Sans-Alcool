//  !!!!!---- GAME ----!!!!!


// Pour toutes les pages (sauf App), il faut importer React
// POur manipuler les données/states, il faut importer useState(hook)
import React, { useState } from "react";
// Pour créer un lien avec ReactJs, il faut l'installer via votre terminal et importer une extention appeler react-router-dom.
// Voir la documentation https://reactrouter.com/web/guides/quick-start
import audio from "../../audio/une-poule-sur-un-mur-version-instrumentale.mp3";


// En ReactJs, quand on crée une fonction, constante, class il faut toujours un return()
const Game = () => {

    // Pour manipuler/modifier une donnée/state
    // number = nom du state
    // setNumber = nom pour indiquer que le state est modifié
    // useState() = on indique la nature du state
    const [number, setNumber] = useState("");
    const [numbers, setNumbers] = useState(number);
    
    // number est relié à l'input. Il récupére la valeur qui est une chaîne de caractére (useState(""))
    // numbers est relié à number. Je modifie number pour crée numbers

    // Pour crée cette application j'ai besoin ...

        // 1 - D'événements
            // Fonction appliquée au bouton avec un événement onClick()
            // Fonction qui modifie via setNumbers la valeur number récupérée et ajoute un style à la div selectionnée
            const addSong = () => {
                setNumbers( number - 1);
                let song = document.querySelector(".blocParoles");
                song.style.display = "block";
            };

            // Fonction qui fait disparaître les paroles via un événement onClick() sur input
            const displaySong = () =>{
                let song = document.querySelector(".blocParoles");
                setTimeout(() =>{
                    song.style.display = 'none';
                },1000)
            };

        // 2 - De paroles
            // J'utilise les states number et numbers que j'affiche avec {}
            function Song99() {
                return <p>🎵 {number} shooters sans alcool sur le mur, {number} shooters sans alcool.<br/>
                Bois en un et au suivant ! {numbers} shooters sans alcool sur le mur. 🎵</p>;
            }

            function Song1() {
                return <p>🎵 {number} shooter sans alcool sur le mur, {number} shooter sans alcool.<br/>
                Bois en un et au suivant ! Plus de shooters sans alcool sur le mur. 🎵</p>;
            }

            function Song0() {
                return <p>🎵 Plus de shooters sans alcool sur le mur, plus de shooters sans alcool.<br/>
                Vas au supermarché pour en acheter, 99 shooters sans alcool sur le mur. 🎵</p>;
            }
    
        // 3 - Des si...
            // A chaques conditions, j'affiche le texte correspondant
            function AllSong() {  
                if (number >= 2 && number < 100) {    
                    return <Song99 />;  
                }if(number == 1){
                    return <Song1 />
                }if(number == 0){
                    return <Song0 />
                }else{
                    return "Vous devez rentrer un nombre entre 0 et 99 !"
                }
            }
                
        // 4 - Un template
            return (
                <div className="blocGames">     
                    <div className="blocNumber">

                        <h1> 🍸 La petite chanson de Nico ! 🍸</h1>

                        <input 
                        className="inputNumber"
                        // On récupére la valeur de l'input avec la onChange, en utulisant le useState de number
                        onChange={(e) => setNumber(e.target.value)}
                        value={number}
                        // On applique l'événement onClick de la fonction displaySong pour effacer les paroles
                        onClick={displaySong}
                        type="text"/>

                        {/* On applique l'événement onClick de la fonction addSong pour faire apparaître les paroles */}
                        <button onClick={addSong}> 
                            Afficher le couplet !
                        </button>
                        <audio controls loop src={audio} type="audio/mp3"> 
                        </audio> 
                        
                    </div>    

                    {/* Ici, on importe la fonction AllSong qui affichera les paroles correspondantes aux conditions */}
                    <div className="blocParoles">
                        <AllSong/>
                    </div>
 

                </div>
            )
}

// class, const ou function, il faut exporter chaque fichier sinon impossible de l'importer
export default Game
