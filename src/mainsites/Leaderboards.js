import TopMenue from '../components/sonstiges/topMenue';
import LeaderboardsLanding from '../components/leaderboards/LeaderboardsLanding'
import LeaderboardsTrophieScore from '../components/leaderboards/leaderboardsTrophieScore'
import { useState, useEffect } from 'react';



function LeaderboardWrapper() {
   
  const [ButtonTrophieScore, setButtonTrophieScore] = useState(false);
  const [ButtonLanding, setButtonLanding] = useState(true);

  return (
      <div>
          
        <TopMenue title="Leaderboard"/>

        <LeaderboardsLanding
        trigger={ButtonLanding} setTrigger={setButtonLanding}      
        />

           
       </div>
    ); 
    }
   
  export default LeaderboardWrapper;
  