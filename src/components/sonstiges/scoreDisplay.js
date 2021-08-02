import '../design/sonstiges/scoreDisplay.css';


function scoreDisplay(props) {
    return (
       <div>
            <div id="scoreDisplayWrapper">

            <div class="outterRing">
                <div class="innerRing">
                    <h3 id="TrophieScoreValue">{props.value}</h3>
                </div>
            </div>

            <h3 id="scoreDisplayh3">
                {props.title}
            </h3>
            </div>
         

           

       </div>
    ); 
    }
   
  export default scoreDisplay;
  