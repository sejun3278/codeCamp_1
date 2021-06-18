import styled from '@emotion/styled';
import Head from 'next/head';
import { useEffect } from 'react';
import { useState } from 'react';

export const Map = styled.div`
    width: 95%;
    height: 220px;
    border: 1px solid lightgray;
`

const init = {
  lat : 37.4848929702844,
  lon : 126.89537799629241
}

  const MapPresenter: React.FC = () => {
    const [ location, setLocation ] = useState(init);

    useEffect( () => {
      const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
      const options = { //지도를 생성할 때 필요한 기본 옵션
          // @ts-ignore
          center: new kakao.maps.LatLng(37.4848929702844, 126.89537799629241), //지도의 중심좌표.
          level: 3 //지도의 레벨(확대, 축소 정도)
      };

      //@ts-ignore
      const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

      // 마커가 표시될 위치입니다 
      // @ts-ignore
      const markerPosition  = new kakao.maps.LatLng(37.4848929702844, 126.89537799629241); 

      // 마커를 생성합니다
      // @ts-ignore
      const marker = new kakao.maps.Marker({
          position: markerPosition
      });

      // 마커가 지도 위에 표시되도록 설정합니다
      // @ts-ignore
      marker.setMap(map);

      // @ts-ignore
      // kakao.maps.event.addListener(map, 'click', function(mouseEvent) {        

      //   // 클릭한 위도, 경도 정보를 가져옵니다 
      //   const latlng = mouseEvent.latLng; 
        
      //   // 마커 위치를 클릭한 위치로 옮깁니다
      //   marker.setPosition(latlng);
        
      //   // const message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
      //   // message += '경도는 ' + latlng.getLng() + ' 입니다';
        
      //   // const resultDiv = document.getElementById('clickLatlng'); 
      //   // resultDiv.innerHTML = message;
      // })
    }, [])

    const onClickMap = () => {
      window.open(`https://map.kakao.com/link/map/${location.lat}, ${location.lon}, 'target:_blank`)
    }
  

    return (
      <div>
        <>
            <Head>
                <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=52c079a2821b29491ec6470e2b957f3e"></script>
            </Head>
            <Map id='map' onClick={onClickMap}></Map>
        </>
      </div>
    )
  }
  export default MapPresenter;