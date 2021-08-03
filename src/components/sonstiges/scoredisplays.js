import '../design/sonstiges/scoreDisplays.css';


function scoreDisplays(props) {
    return (
       <div>
            <div id="scoreDisplayWrapper">

            <div class="outterRings">
                <div class="innerRing">
                    <h3 id="TrophieScoreValues">{props.value}</h3>
                </div>
            </div>

            <h3 id="scoreDisplayh3s">
                {props.title}
            </h3>
            </div>
         

           

       </div>
    ); 
    }
   
  export default scoreDisplays;
  