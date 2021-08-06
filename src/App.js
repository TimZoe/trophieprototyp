import './allgemeinDesign.css';

import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import dashboard from './mainsites/dashboard';
import Home from './mainsites/home'
import Profil from './mainsites/öffentlichesProfil'
import Packs from './mainsites/Packs'
import Leaderboards from './mainsites/Leaderboards'
import Register from './mainsites/Register'
import LogIn from './mainsites/LogIn'
import {Route, Link} from "react-router-dom";
import TrophieScore from './components/leaderboards/leaderboardsTrophieScore'
import test from './mainsites/test'
import test2 from './mainsites/tesst'

import alleKarten from './mainsites/alleKarten'
import S1001 from './Spieler/1001';
import S1002 from './Spieler/1002';
import S1003 from './Spieler/1003';
import S1004 from './Spieler/1004';
import Cl1001 from './mainsites/Karten/1001-Cl';

Amplify.configure(awsconfig);


function App() {
  return (
    <div className="App">
      <header className="App-header">   
      
       <Route exact path="/" component={Home} />
       <Route exact path="/dashboard" component={dashboard} />
       <Route exact path="/Profil" component={Profil} />
       <Route exact path="/Packs" component={Packs} />
       <Route exact path="/Leaderboards" component={Leaderboards} />
       <Route exact path="/TrophieScore" component={TrophieScore} />
       <Route exact path="/LogIn" component={LogIn} />
       <Route exact path="/Register" component={Register} />
       <Route exact path="/test" component={test} />
       <Route exact path="/test2" component={test2} />
       <Route exact path="/alleKarten" component={alleKarten} />
       <Route exact path="/Spieler/1001" component={S1001} />
       <Route exact path="/Spieler/1002" component={S1002} />
       <Route exact path="/Spieler/1003" component={S1003} />
       <Route exact path="/Spieler/1004" component={S1004} />
       <Route exact path="/Karten/Cl1001" component={Cl1001} />


      </header>
    </div>
  );
}

export default App;
