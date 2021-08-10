import '../design/packs/packAvailable.css';
import PackVorschau from '../../assets/Images/PackVorschau.png'

function packsAvailable(props) {
    return (props.trigger) ?(
      <div>
           
            <div id="packsAvailbaleWrapper">
            {props.children}

                <h2 id="countdownHeaders">
                Dein nächstes Pack wartet auf dich:                </h2>  
                <img src={PackVorschau} id="cardPackImg"/>
              

            </div>
       </div>
    ):""; 
    }
   
  export default packsAvailable;
  