import Head from 'next/head';
import { useEffect } from 'react';

export default function MapExample() {

    useEffect( () => {
        const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        const options = { //지도를 생성할 때 필요한 기본 옵션
            //@ts-ignore
            center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
        };

        //@ts-ignore
        new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    }, [])


    return (
        <>
            <Head>
                <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=52c079a2821b29491ec6470e2b957f3e"></script>
            </Head>
            <div id='map' style={{ "width" : "500px", "height" : "400px", 'textAlign' : 'center' }}></div>
        </>
    )
}