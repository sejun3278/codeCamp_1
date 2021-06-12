import {
    Map
} from './Map.style';
import Head from 'next/head';
  
  const MapPresenter: React.FC = () => {
    return (
      <div>
        <Head>
          <script
            type="text/javascript"
            src="//dapi.kakao.com/v2/maps/sdk.js?appkey=52c079a2821b29491ec6470e2b957f3e&autoload=false"
          ></script>
                    <script
            dangerouslySetInnerHTML={{
              __html: `
                  var container = document.getElementById('map');
                    kakao.maps.load(function() {
                        var options = {
                        center: new kakao.maps.LatLng(37.48534283502681, 126.89509534007323),
                        level: 3
                        };
                        var map = new kakao.maps.Map(container, options);
        
                        var markerPosition  = new kakao.maps.LatLng(37.48534283502681, 126.89509534007323); 
                        var marker = new kakao.maps.Marker({
                            position: markerPosition
                        });
                        marker.setMap(map);
                  })
                `,
            }}
          ></script>
        </Head>

        <div>
            <Map id="map" />
        </div>
      </div>
    );
  };
  
  export default MapPresenter;
  