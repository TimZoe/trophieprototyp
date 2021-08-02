import TopMenue from '../components/sonstiges/topMenue';
import DashboardLanding from '../components/dashboard/dashboardLanding';
import Stats from '../components/dashboard/dashboardStatistiken';
import DashboardSammlung from '../components/dashboard/dashboardSammlung';
import home from '../assets/Images/Home.png';
import statsimg from '../assets/Images/Stats.png';
import sammlung from '../assets/Images/Sammlung.png';
import packs from '../assets/Images/Packs.png';
import {Route, Link} from "react-router-dom";
import { useState, useEffect } from 'react';
import './design/dashboard.css';
import Amplify, { Auth } from 'aws-amplify';
import awsExports from "../aws-exports";



Amplify.configure(awsExports);


function Dashboard() {


    const [ButtonSammlung, setSammlung] = useState(false);
    const [ButtonLanding, setButtonLanding] = useState(true);
    const [ButtonStats, setButtonStats] = useState(false);
    const [UserName, setUserName] = useState(0);

    //Diese speichert den UserNamen in const UserName
    async function getUserName() {     
     
        const session = await Auth.currentSession();  
        setUserName(session.idToken.payload['cognito:username']);
    }


    //Funktionen fürs Menü

        function sammlungShow() {

        setButtonLanding(false);
        setSammlung(true);
        setButtonStats(false);
       }
      
       function LandingShow() {
      
        setButtonLanding(true);
        setSammlung(false);
        setButtonStats(false);
       }
       
       function StatsShow() {
      
        setButtonLanding(false);
        setSammlung(false);
        setButtonStats(true);
       }
















  return (
    <div className="App">
        
        <div class="mobileWrapper">

            <div id="dashboardWrapper">

                <TopMenue title="Dashboard"/>
                <div id="dashboardContent">

                    <DashboardLanding 
                        trigger={ButtonLanding} setTrigger={setButtonLanding}
                    />
                    <DashboardSammlung
                    trigger={ButtonSammlung} setTrigger={setSammlung}
                    />
                    <Stats 
                    trigger={ButtonStats} setTrigger={setButtonStats}
                    />

                </div>

                <div id="dbMenueWrapper">

                    <button onClick= {() => LandingShow()}>

                    <div class="dbMenueEintrag">
                        <img src={home} class="dbMenueEintragimg"/>
                        <h3 class="dbMenueEintragh3">Home</h3>
                    </div>  

                    </button>
          


                    <button onClick= {() => sammlungShow()}>

                    <div class="dbMenueEintrag">
                    <img src={sammlung} class="dbMenueEintragimg"/>
                    <h3 class="dbMenueEintragh3">Sammlung</h3>
                    </div>           


                    </button>




                    <button onClick= {() => StatsShow()}>

                    <div class="dbMenueEintrag">
                    <img src={statsimg} class="dbMenueEintragimg"/>
                    <h3 class="dbMenueEintragh3">Statistiken</h3>
                    </div>           
                    </button>





                    <Link to="/Packs">
                        <div class="dbMenueEintrag">
                        <img src={packs} class="dbMenueEintragimg"/>
                        <h3 class="dbMenueEintragh3">Packs</h3>
                        </div>           
                    </Link>




</div>

            </div>
            


        </div>
      
     
    </div>
  );
}

export default Dashboard;
