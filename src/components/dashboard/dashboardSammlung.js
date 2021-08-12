
import '../design/dashboard/dashboardSammlung.css';
import moreImg from '../../assets/Images/buttonImg.png'
import lilaCard from '../../assets/Images/CardLila.png'
import { useState, useEffect } from 'react';
import Amplify, { API, graphqlOperation } from "aws-amplify";
import {listKartes} from '../../graphql/queries';
import { Auth } from 'aws-amplify';
import { Link } from 'react-router-dom';
import DBSammlungMorePopUp from './DBSammlungMorePopUp'
import HandelsPopUpComp from '../Marktplatz/handelsPopUp'
import bigger from '../../assets/Images/bigger.png'






function DashboardSammlung(props) {

    const [UserName, setUserName] = useState(0);
    const [Kartes, setKartes] = useState ([]);
    const [userKarten, setuserKarten]= useState([]);
    const [WertUserKarten, setWertUserKarten] = useState(0);
    const [TrophieKartenUser, setTrophieKartenUser] = useState(0);
    const [RareKartenUser, setRareKartenUser] = useState(0);
    const [ClassicKartenUser, setClassicKartenUser] = useState(0);
    const [TrophieScore, setTrophieScore] = useState(0);
    const [UserKartenAnzahl, setuserKartenAnzahl] = useState(0);
    const [userTrophieKarten, setuserTrophieKarten] = useState([]);
    const [userRareKarten, setuserRareKarten] = useState([]);
    const [userClassicKarten, setuserClassicKarten] = useState([]);




  
   
        useEffect(() => {
          console.log("welcome to Sammlung")
          console.log(props.userrKarten)
          console.log(props.userrName)
          setUserName(props.userrName)
         
          
  
          
          console.log(props.userrTrophieKartenAnzahl)
          setTrophieKartenUser(props.userrTrophieKartenAnzahl)
          console.log(props.userrRareKartenAnzahl)
          setRareKartenUser(props.userrRareKartenAnzahl)
          console.log(props.userrClassicKartenAnzahl)
          setClassicKartenUser(props.userrClassicKartenAnzahl)


          console.log(props.userrClassicKartenUser)
          setuserClassicKarten(props.userrClassicKartenUser)
          console.log(props.userrRareKartenUser)
          setuserRareKarten(props.userrRareKartenUser)
          console.log(props.userrTrophieKartenUser)
          setuserTrophieKarten(props.userrTrophieKartenUser)
        })

     
  
        const OnSaleMarker = (Karte) => {
            if (Karte.onSale==true) {
              return (<h4> on Sale</h4>);
            } else {
              return (<h4>not sale</h4>);
            }
          }
       
      



      
        const [DBSammlungMorePopUp, setDBSammlungMorePopUp] = useState(false);
        const [HandelsPopUp, setHandelsPopUp] = useState(false);
        const [MorePopUpInhalt, setMorePopUpInhalt] =useState([])

        
  return (props.trigger) ?(
    <div >
        <div id="dbSammlungWrapper">
            <div id="dbOben">
            </div>

            <div id="dbSammlungCards">
            {props.children}
                <h2 class="dbSammlungMidh2">Deine Karten Sammlung</h2>
               



                <div id="dbSammlungMid">
                <div class="dbSammlungMidEintrag">
                    <h3 class="dbSammlungMidh2">
                        {ClassicKartenUser}
                    </h3>
                    <h4 class="dbSammlungMidh4">
                        Classic
                    </h4>
                </div>
                <div class="dbSammlungMidEintrag">
                    <h3 class="dbSammlungMidh2">
                        {RareKartenUser}
                    </h3>
                    <h4 class="dbSammlungMidh4">
                        Rare
                    </h4>
                </div>
                <div class="dbSammlungMidEintrag">
                    <h3 class="dbSammlungMidh2">
                    {TrophieKartenUser}

                    </h3>
                    <h4 class="dbSammlungMidh4">
                        Trophie
                    </h4>
                </div>
            </div>

             <ul id="dashboardSammlungKartenWrapperGrid">
                                {userTrophieKarten.map(Karte => (
                                <li class="dashboardSammlungKartenWrapperGridEintrag Trophie"
                                onClick={function(){setHandelsPopUp(true);setMorePopUpInhalt(Karte)} } 
                                
                                >
                                   
                                   <img src={Karte.Bild} id="dashboardSammlungKartenWrapperGridEintragBild"/>
                                    <div id="SammlungEintragEcclpise">
                                        <img src={bigger} id="Sammlungbiggerimg"/>
                                    </div>     

                                    {OnSaleMarker(Karte)}


                                  
                                </li> ))}

                                {userRareKarten.map(Karte => (
                                <li class="dashboardSammlungKartenWrapperGridEintrag Rare"
                                onClick={function(){setHandelsPopUp(true);setMorePopUpInhalt(Karte)} } 
                                >
                                   <img src={Karte.Bild} id="dashboardSammlungKartenWrapperGridEintragBild"/>
                                   <div id="SammlungEintragEcclpise">
                                        <img src={bigger} id="Sammlungbiggerimg"/>
                                    </div>  
                             
                                    {OnSaleMarker(Karte)}

                                </li> ))}

                                {userClassicKarten.map(Karte => (
                                <li class="dashboardSammlungKartenWrapperGridEintrag"
                                onClick={function(){setHandelsPopUp(true);setMorePopUpInhalt(Karte)} } 
                                >
                                   <img src={Karte.Bild} id="dashboardSammlungKartenWrapperGridEintragBild"/>
                                   <div id="SammlungEintragEcclpise">
                                        <img src={bigger} id="Sammlungbiggerimg"/>
                                    </div>  
                                  
                                    {OnSaleMarker(Karte)}


                                </li> ))}
               </ul>
             
              

        
               <div id="DashboardSammlungKartenMoreInfo">
               <HandelsPopUpComp
                    trigger={HandelsPopUp} 
                    setTrigger={setHandelsPopUp} 
                    Karte={MorePopUpInhalt}  
                    Kartee={MorePopUpInhalt}
                     
           
                         
        />
               

               </div>
                        
           
                   

            </div>

           

            
        </div>
    
     </div>
  ):""; 
  }
 
export default DashboardSammlung;
