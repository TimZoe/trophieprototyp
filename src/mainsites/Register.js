
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import LogInSuc from '../components/sonstiges/LogInSuc';



Amplify.configure(awsconfig);


function register() {
  return (
    <div className="register">
         <div class="mobileWrapper">
            <LogInSuc />
        </div>
         

    </div>
  );
}

export default withAuthenticator(register);
