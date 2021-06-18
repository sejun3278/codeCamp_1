import MyProfileUI from './myProfile.presenter';
import { useContext } from 'react';
import { GlobalContext } from '../../../../../pages/_app';

export default function myProfilePage() {
    const { userInfo } = useContext(GlobalContext)

    return(
        <MyProfileUI 
            userInfo={userInfo}
        />
    )
}