import styled from '@emotion/styled';
import { useState, useEffect, useRef } from 'react';

import LayoutHeader from './Header/LayoutHeader.container'; 
import LayoutNavigation from './Navigation/LayoutNavigation.container'; 

import { useRouter } from 'next/router';

export const Wrapper = styled.div`
  width: 100%;
  height : 100%;

    .FixedLogo {
        position : fixed !important;
        z-index : 2000;
        width : 100%;
        background-color : white;
        /* border-bottom : solid 1px black; */
        box-shadow: 10px 4px 20px rgba(0, 0, 0, 0.2);
    }
`;

const Layout = ({ children }) => {
    const router = useRouter();
    const [ScrollY, setScrollY] = useState(0);
    const logoDiv = useRef<HTMLHeadingElement>();

    const handleFollow = () => {
        const offsetY = Math.trunc(window.pageYOffset);
        // setScrollY(Math.trunc(window.pageYOffset)); // window 스크롤 값을 ScrollY에 저장

        if(logoDiv.current !== null) {
            if(offsetY >= 100) {
                logoDiv.current.classList.add('FixedLogo');

            } else {
                logoDiv.current.classList.remove('FixedLogo');
            }
        }
    }

    useEffect(() => {
        const watch = () => {
            window.addEventListener('scroll', handleFollow);
        }

        watch(); // addEventListener 함수를 실행
        return () => {
            window.removeEventListener('scroll', handleFollow); // addEventListener 함수를 삭제
        }
    })

    // useEffect(() => {
    //     if(logoDiv.current !== undefined) {
    //         if(ScrollY >= 100) {
    //             logoDiv.current.classList.add('FixedLogo');

    //         } else {
    //             logoDiv.current.classList.remove('FixedLogo');
    //         }
    //     }

    // }, [ScrollY])

    // console.log(logoDiv)
            


    // 홈으로 이동
    const moveUrl = (url : string) => {
        router.push(url);
    }

    return(
        <div>
            <Wrapper>
                {(router.pathname !== '/login' && router.pathname !== '/signup')
                    &&
                    <div>
                        <LayoutHeader moveUrl={moveUrl} logoDiv={logoDiv} />
                        <LayoutNavigation moveUrl={moveUrl} />
                    </div>
                }

                <div style={{ 'height' : '100%' }}> {children} </div>
            </Wrapper>
        </div>
    )
}

export default Layout;