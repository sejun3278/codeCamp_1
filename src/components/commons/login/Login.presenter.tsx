import {
    LoginDiv, LoginBackDiv
} from './Login.style';

import Login from '../../units/login/Login.container';
import Signup from '../../units/signup/Signup.container';

export default function LoginLayoutUIPage({ 
    router
}) {
    
    return(
        <LoginDiv>
            <LoginBackDiv>
            {router.pathname === '/login'
                && <Login />
            }

            {router.pathname === '/signup'
                && <Signup />
            }
            </LoginBackDiv>
        </LoginDiv>
    )
}