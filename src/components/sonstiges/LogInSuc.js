
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import '../design/sonstiges/LogInSuc.css'
import {Route, Link} from "react-router-dom";
import cardfly from '../../assets/Images/CardShowvertival.png'



function LogInSuc() {
  return (
    <div className="LogIn">
        <div class="mobileWrapper">
            <div id="LogInSucContent">
                <h2 id="welcomeh2">
                    Das war erfolgreich!
                </h2>
                <Link to="/dashboard">
                    <div id="zuDBBut">
                    <h2 id="wttrophiebuttonh4">Zu meinem Dashboard</h2>
                    </div>
                </Link>
                <img src={cardfly} id="cardfly"/>
                
            </div>
        </div>
      
    </div>
  );
}

export default withAuthenticator(LogInSuc);
