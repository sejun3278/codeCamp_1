import { useRouter } from "next/router"
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../pages/_app";
import getAccessToken from "../../../commons/libraries/getAccessToken";

const withAuth = (Component) => (props) => { // 컴포넌트
        const router = useRouter();
        const { accessToken, setAccessToken } = useContext(GlobalContext) ;
        
        // 토큰 체크
        useEffect( () => {
            // AccessToken 이 있으면 바로 리턴한다.
            if(accessToken) return;
            
            // refreshToken 으로 accessToken 을 재발급 받기
            const restoreAccessToken = async () => {
                const newAccessToken = await getAccessToken({ setAccessToken });

                // 그래도 accessToken 이 없으면 로그인 화면으로 이동하기
                if(!newAccessToken) router.push('/login');
            }

            restoreAccessToken();
        }, []);

        if(!accessToken) return <></>;
        return <Component {...props} />
        // 컴포넌트 리턴
}

export default withAuth

// const withAuth = () => {
    

// }

// export default withAuth;