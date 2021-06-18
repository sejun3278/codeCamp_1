import { 
    MyProfileDiv, MyProfileInfoDiv, MyProfileNameDiv, MyPointDiv, MyPageOptionDiv, MyPageGridDiv,
    MyPageOptionNameDiv

} from './myProfile.style';
import { setComma } from '../../../../commons/libraries/validations';

export default function myProfileUI({
    userInfo
}) {
    return(
        <MyProfileDiv>
            <MyProfileInfoDiv>
                <h4> MYPAGE </h4>

                <img alt='' src='/images/profile.png' />
                <MyProfileNameDiv>
                    {userInfo?.name ? userInfo.name : '노원두'}
                </MyProfileNameDiv>

                <MyPointDiv title='포인트'>
                    <img alt='' src='/images/chargeIcon.png' />
                    <span> {setComma(userInfo?.userPoint?.amount)}  P </span>
                </MyPointDiv>
            </MyProfileInfoDiv>

            <MyPageOptionDiv>
                <MyPageGridDiv>
                    <div> <img alt='' src='/images/cart_gray.png'/> </div>
                    <MyPageOptionNameDiv> <span> 내 장터 </span> </MyPageOptionNameDiv>
                </MyPageGridDiv>

                <MyPageGridDiv>
                    <div> <img alt='' src='/images/charge.png'/> </div>
                    <MyPageOptionNameDiv> <span> 내 포인트 </span> </MyPageOptionNameDiv>
                </MyPageGridDiv>

                <MyPageGridDiv>
                    <div> <img alt='' src='/images/profile.png'/> </div>
                    <MyPageOptionNameDiv> <span> 내 프로필 </span> </MyPageOptionNameDiv>
                </MyPageGridDiv>
            </MyPageOptionDiv>
        </MyProfileDiv>
    )
}