//  !!!!!---- LE ROUTER ----!!!!!



// Pour créer un router avec ReactJs, il faut l'installer via votre terminal et importer une extention appeler react-router-dom.
// Voir la documentation https://reactrouter.com/web/guides/quick-start
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

// Si on veut afficher le contenu d'une page créer, il faut l'importer.
import Game from './components/Game';
import Song from "./components/Song";
import './App.css';


// App() est chargé automatiquement par ReactJs
// En allant sur src/index.js, on voit que App.js est importer puis   envoyé dans la div "root" dans public/index.html

// En ReactJs, quand on crée une fonction, constante, class il faut toujours un return()
function App() {
  return (
    <div className="App">

      {/* Le Router se crée troujour dans cette ordre Router Switch Route Switch Router */}
      <Router>
        <Switch>

          {/* Route crée un accès, un chEmin vers le contenu d'une page
           Il faut un path = chemin qui sera afficher dans l'URL, et un component = nom choisi quand on importe le fichier */}
          <Route exact path="/" component={Game}/>
          <Route path="/chanson" component={Song}/>

        </Switch>
      </Router>

    </div>
  );
}

// class, const ou function, il faut exporter chaque fichier sinon impossible de l'importer
export default App;
