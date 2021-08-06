import './design/packs.css';
import DbMenue from '../components/dashboard/dashboardMenue';
import TopMenue from '../components/sonstiges/topMenue';
import PacksLanding from '../components/packs/packsLanding';
import PacksAvailable from '../components/packs/packAvailable';
import PacksInhalt from '../components/packs/packInhalt';
import { useState, useEffect } from 'react';
import B2 from '../components/packs/b2'
import B1 from '../components/packs/b1'




function PacksWrapper() {

  const [ButtonLand, setButtonLand] = useState(true);
  const [ButtonAva, setButtonAva] = useState(false);
  const [ButtonInhalt, setButtonInhalt] = useState(false);
  const [ButtonB2, setButtonB2] = useState(false);
  const [ButtonB1, setButtonB1] = useState(true);

  function AvaShow() {

    setButtonLand(false);
    setButtonAva(true);
    setButtonInhalt(false);
    setButtonB2(true);
    setButtonB1(false);

   }
   function InhaltShow() {

    setButtonLand(false);
    setButtonAva(false);
    setButtonInhalt(true);
    setButtonB2(false);

   }

 

    return (
      <div>
          
          <div class="mobileWrapper">
            <div id="dashboardWrapper">
                      
                 <TopMenue title="Dashboard"/>
                 <div id="dashboardContent">

                    <PacksLanding
                    trigger={ButtonLand} setTrigger={setButtonLand}
                    />
                    <PacksAvailable
                    trigger={ButtonAva} setTrigger={setButtonAva}                    
                    />
                    <PacksInhalt
                    trigger={ButtonInhalt} setTrigger={setButtonInhalt}                    
                    />
                    <div id="statehandle">

                    <button onClick= {() => AvaShow()}>
                    <div id="b22">
                           <B1
                    trigger={ButtonB1} setTrigger={setButtonB1}                    
                           />
                      </div>                    </button>

                    <button onClick= {() => InhaltShow()}>
                      <div id="b22">
                           <B2
                    trigger={ButtonB2} setTrigger={setButtonB2}                    
                           />
                      </div>
                    </button>
  
                  
                    </div>

                 </div>
                 <DbMenue/>
                                              
            </div>       
          </div>
             
       </div>
    ); 
    }
   
  export default PacksWrapper;
  