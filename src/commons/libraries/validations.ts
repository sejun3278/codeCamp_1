import { gql, useApolloClient } from '@apollo/client';
import { useContext } from 'react'
import { GlobalContext } from '../../../pages/_app';

export const checkImage = (image) => {
    if(!image) { 
        alert('이미지 파일을 등록해주세요');
        return false;
    }

    if(image.size > 1 * 1024 * 1024) {
        alert("파일의 크기가 5MB 미만까지 가능합니다.");
        return false;
    }

    if(!image.type.includes("png")) {
        alert("png 확장자만 가능합니다.");
        return false;
    }


    return true;
}

// 이메일 체크 함수
export const checkEmail = (email) => {
    if(!email.includes('.')) {
        return null;
    }

    const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    return email.match(regExp);
}

// 숫자 컴마 적용하기
export const setComma = (int) => {
    return String(int).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

// 회원 정보 최신화하기
export const InitUserInfo = async (accessToken) => {
    if(!accessToken) {
        return alert('AccessToken 이 올바르지 않습니다.');
    }

    const apolloClient = useApolloClient();
    const { setUserInfo } = useContext(GlobalContext);

    // 회원정보 가져오는 쿼리 작성하기
    const FETCH_USER_LOGGED_IN = gql`
        query {
            fetchUserLoggedIn {
            _id
            email
            name
            userPoint {
                amount
            }
        }
    }
    `;

    const userQuery = await apolloClient.query({
        query : FETCH_USER_LOGGED_IN,
        context : {
            headers : { authorization : accessToken }
        }
    });
    const userInfo = userQuery.data.fetchUserLoggedIn;

    return setUserInfo(userInfo);
}