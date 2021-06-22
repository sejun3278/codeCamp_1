import axios from 'axios';

const getAccessToken = async ({ setAccessToken }) => {
    // axios 를 사용하는 이유는 아폴로 클라이언트가 렌더 전에 이뤄지므로 axios 를 대용으로 사용한다. (useApolloClient 사용 불가)
    const response = await axios.post(
        "https://backend.codebootcamp.co.kr/graphql",
        {
            query : `
                mutation restoreAccessToken {
                    restoreAccessToken {
                        accessToken
                    }
                }
            `
        },
        { 
        headers : { "Content-Type" : "application/json" },
        withCredentials : true
        // 리프레쉬 토큰이 있는 쿠키를 같이 전송하는 부분 (반드시 설정)
        }
    )

    if(response.data.data === null) return null;
    const newAccessToken = response.data.data.restoreAccessToken.accessToken;
    setAccessToken(newAccessToken);

    return newAccessToken;
}

export default getAccessToken;