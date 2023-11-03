import React from 'react'
import { useMemo, useState } from 'react'
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoBoxF,
  InfoWindowF,
} from '@react-google-maps/api'
// import GeocodeSearch from '@/components/GeocodeSearch'
import styles from '@/styles/landing.module.css'
export default function GoogleMaps({ location, zoomPoint }) {
  // const [lat, setLat] = useState(25.033198)
  // const [lng, setLng] = useState(121.543575)
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLEMAPS_API_KEY,
  })

  if (!isLoaded) return <div>Loading...</div>
  return <Map location={location} zoomPoint={zoomPoint} />
}
const customMapStyle = [
  // {
  //   elementType: 'geometry.',
  //   stylers: [{ color: '#578277' }],
  // },

  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#756c7a',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [
      {
        color: '#6b6b6b',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative.neighborhood',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [
      {
        color: '#5d515b',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.business',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.medical',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#653e5d',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'simplified',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text',
    stylers: [
      {
        color: '#b0b0b0',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#534650',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#52424d',
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry',
    stylers: [
      {
        color: '#685e68',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'geometry',
    stylers: [
      {
        color: '#544d5c',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [
      {
        color: '#c9c7c5',
      },
      {
        weight: 1,
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'labels.text.fill',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'transit.station.airport',
    elementType: 'geometry',
    stylers: [
      {
        color: '#927c8d',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#00f0ff',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },

  // {
  //   featureType: 'poi.park',
  //   stylers: [{ color: '#578277' }],
  // },
  // {
  //   featureType: 'poi.school',
  //   stylers: [{ color: '#514f59' }],
  // },
  // {
  //   elementType: 'labels.text.fill',
  //   stylers: [{ color: '#f9f9f9' }],
  // },
  // {
  //   elementType: 'labels.text.stroke',
  //   stylers: [{ color: '#140f2a' }],
  // },
  // {
  //   featureType: 'water',
  //   stylers: [{ color: '#00f0ff' }],
  // },
  // {
  //   featureType: 'road',
  //   stylers: [{ color: '#140f2a' }],
  // },
  // {
  //   featureType: 'landscape',
  //   stylers: [{ color: '#3b3847' }],
  // },
  // {
  //   featureType: 'administrative',
  //   stylers: [{ color: '#66a1ff' }],
  // },
  // {
  //   featureType: 'transit.line',
  //   elementType: 'geometry',
  //   stylers: [
  //     { color: '#FF5733' }, // 设置地铁线的颜色
  //     { weight: 3.0 }, // 设置地铁线的线条粗细
  //   ],
  // },
  // {
  //   featureType: 'transit.line',
  //   elementType: 'geometry.stroke',
  //   stylers: [
  //     { color: '#e0d9e0' }, // 设置地铁线的轮廓颜色
  //     { weight: 0.5 }, // 设置轮廓的线条粗细
  //   ],
  // },
]

function Map({ location, zoomPoint }) {
  // const center = useMemo(() => ({ lat: 25.033964, lng: 121.564468 }), [])
  // const center = useMemo(
  //   () => location,

  //   []
  // )
  const center = location
  console.log(location, zoomPoint)
  const zoom = zoomPoint
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
      content: '內湖摩天輪分店',
    },
    {
      id: 3,
      position: {
        lat: 25.053114281870496,
        lng: 121.52132437576518,
      },
      style: { color: '#ff008b' },
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

  const customIcon = {
    url: '/images/Group1.png',
    scaledSize: new window.google.maps.Size(25, 30), // Adjust the size as needed
  }

  const MapStyle = {
    width: '100%',
    height: '100vh',
  }

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
        mapContainerClassName={styles.mapContainer}
        center={center}
        zoom={zoom}
        options={{ styles: customMapStyle }}
        // style={MapStyle}
      >
        {markers.map((marker) => (
          <MarkerF
            key={marker.id}
            position={marker.position}
            onClick={() => setSelectedMarker(marker)}
            icon={customIcon}
            animation={google.maps.Animation.BOUNCE}
          />
        ))}
        {selectedMarker && (
          <InfoWindowF
            position={selectedMarker.position}
            onCloseClick={() => setSelectedMarker(null)}
            // style={{ width: '50%' }}
          >
            <div
              style={{
                color: 'black',
                // width: '50%',
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
