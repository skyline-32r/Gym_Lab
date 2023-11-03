import React from 'react'
import { useMemo, useState } from 'react'
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoBoxF,
  InfoWindowF,
} from '@react-google-maps/api'

// const customMapStyle = [
//   {
//     featureType: 'poi',
//     elementType: 'geometry',
//     stylers: [{ visibility: 'on', invert_lightness: 'true' }],
//   },
//   // 添加更多地图样式规则
// ]
// import GeocodeSearch from '@/components/GeocodeSearch'
export default function GoogleMaps() {
  // const [lat, setLat] = useState(25.033198)
  // const [lng, setLng] = useState(121.543575)
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLEMAPS_API_KEY,
  })

  if (!isLoaded) return <div>Loading...</div>
  return <Map />
}
// customMapStyle={customMapStyle}
function Map() {
  // const center = useMemo(() => ({ lat: 25.033964, lng: 121.564468 }), [])
  const center = useMemo(
    () => ({ lat: 25.033964, lng: 121.564468 }),

    []
  )
  const zoom = 12
  // const [lat, setLat] = useState(25.033198)
  // const [lng, setLng] = useState(121.543575)

  const [selectedMarker, setSelectedMarker] = useState(null)

  const markers = [
    {
      id: 1,
      position: {
        lat: 25.03393428061258,
        lng: 121.54328233895815,
      },
      content: '大安資展旗艦店 臺北市大安區復興南路一段390號',
    },
    {
      id: 2,
      position: {
        lat: 25.083490415729816,
        lng: 121.55745094795886,
      },
      content: '內湖摩天輪分店喔喔喔喔喔',
    },
    {
      id: 3,
      position: {
        lat: 25.16996621968865,
        lng: 121.4454600831409,
      },
      content: '中山美美分店',
    },
    {
      id: 4,
      position: {
        lat: 25.034258270703255,
        lng: 121.56403192546597,
      },
      content: '信義101分店',
    },
    {
      id: 5,
      position: {
        lat: 24.97365296651875,
        lng: 121.53933485430048,
      },
      content: '新店新的分店',
    },
    {
      id: 6,
      position: {
        lat: 25.00999948901109,
        lng: 121.46170105430134,
      },
      content: '板橋耶誕城分店',
    },
    // Add more markers as needed
  ]

  // const customIcon = {
  //   url: '/images/logo.png',
  //   scaledSize: new window.google.maps.Size(30, 30), // Adjust the size as needed
  // }

  return (
    <>
      {/* <GeocodeSearch setLat={setLat} setLng={setLng} /> */}
      {/* <GoogleMap
        zoom={15}
        center={center[0]}
        mapContainerClassName="map-container"
      >
        <MarkerF
          key={'map-1'}
          position={center[0]}
          label="A"
          animation="BOUNCE"
          clickable="true"
        ></MarkerF>
        <MarkerF key={'map-2'} position={center[1]} label="B" />
      </GoogleMap> */}
      <GoogleMap
        mapContainerClassName="map-container"
        center={center}
        zoom={zoom}
        // options={{ styles: customMapStyle }}
      >
        {markers.map((marker) => (
          <MarkerF
            key={marker.id}
            position={marker.position}
            onClick={() => setSelectedMarker(marker)}
            // icon={customIcon}
            animation={google.maps.Animation.BOUNCE}
          />
        ))}

        {selectedMarker && (
          <InfoWindowF
            position={selectedMarker.position}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <div
              style={{
                color: 'black',
              }}
            >
              {selectedMarker.content}
            </div>
          </InfoWindowF>
        )}
      </GoogleMap>
    </>
  )
}
