import '../design/packs/packAvailable.css';
import cardPack from '../../assets/Images/Pack.png'

function packsAvailable(props) {
    return (props.trigger) ?(
      <div>

            <div id="packsAvailbaleWrapper">
            {props.children}

                <h2 id="countdownHeaders">
                Dein nächstes Pack wartet auf dich:                </h2>  
                <img src={cardPack} id="cardPackImg"/>
              

            </div>
       </div>
    ):""; 
    }
   
  export default packsAvailable;
  