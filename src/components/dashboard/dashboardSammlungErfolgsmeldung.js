import '../design/dashboard/Erfolgsmeldung.css'




function Erfolgsmeldung(props) {
      
          


    return (props.trigger) ?(
      <div id="Erfolgsmeldung" >
            <h4 id="Erfolgsmeldungh4">Erfolgreich</h4>
       </div>
    ):""; 
    }
   
  export default Erfolgsmeldung;
  