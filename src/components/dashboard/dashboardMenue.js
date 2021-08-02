import '../design/dashboard/dashboardMenue.css';
import home from '../../assets/Images/Home.png';
import statsimg from '../../assets/Images/Stats.png';
import sammlung from '../../assets/Images/Sammlung.png';
import packs from '../../assets/Images/Packs.png';
import {Route, Link} from "react-router-dom";
import { useState, useEffect } from 'react';
import DashboardLanding from './dashboardLanding';




function DashboardMenue(props) {

  const [ButtonLanding, setButtonLanding] = useState();



    return (
      <div>
          <div id="dbMenueWrapper">

<Link to="dashboard">

  <div class="dbMenueEintrag">
      <img src={home} class="dbMenueEintragimg"/>
      <h3 class="dbMenueEintragh3">Home</h3>
  </div>  
  </Link>

           


  <Link to="dashboard">

  <div class="dbMenueEintrag">
      <img src={sammlung} class="dbMenueEintragimg"/>
      <h3 class="dbMenueEintragh3">Sammlung</h3>
  </div>           
  </Link>






  <Link to="dashboard">

  <div class="dbMenueEintrag">
      <img src={statsimg} class="dbMenueEintragimg"/>
      <h3 class="dbMenueEintragh3">Statistiken</h3>
  </div>           
  </Link>






<Link to="packs">
  <div class="dbMenueEintrag">
      <img src={packs} class="dbMenueEintragimg"/>
      <h3 class="dbMenueEintragh3">Packs</h3>
  </div>           
</Link>




</div>
        

      </div>
    ); 
    }
   
  export default DashboardMenue;
  

