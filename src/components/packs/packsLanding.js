import '../design/packs/packsLanding.css';


function packsLanding(props) {
    return (props.trigger) ?(
      <div>

        <div id="packsLandingWrapper">
        {props.children}

            <h2 id="countdownHeader">
            Du kannst deine nächste Box in:
            </h2>      
            <div id="CountdownStreifen">
                <h2 id="Countdown">
                05:24:01
                </h2>
            </div>
            <h2 id="countdownHeader">
                öffnen.
            </h2> 
        </div>

           
             
       </div>
    ):""; 
    }
   
  export default packsLanding;
  