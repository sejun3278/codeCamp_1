import MyPageProfile from './myProfile/myProfile.container';
import { useRouter } from 'next/router';
import styled from '@emotion/styled'

const MyPageMainDiv = styled.div`
    display : grid;
    grid-template-columns : 10% 20% auto;
    padding-top : 50px;

    @media (max-width : 700px) {
        display : block;
    }
`

export default function Mypage() {
    const router = useRouter();
    const pathname = router.pathname;

    console.log(router)

    return(
        <MyPageMainDiv>
            <div> </div>
            <MyPageProfile />
        </MyPageMainDiv>
    )

}