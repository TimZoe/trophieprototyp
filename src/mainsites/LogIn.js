
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import LogInSuc from '../components/sonstiges/LogInSuc';



Amplify.configure(awsconfig);


function LogIn() {
  return (
    <div className="LogIn">
        <div class="mobileWrapper">
        <LogInSuc />

         </div>
      
    </div>
  );
}

export default withAuthenticator(LogIn);
