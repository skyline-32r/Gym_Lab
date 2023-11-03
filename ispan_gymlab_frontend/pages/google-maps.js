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
export default function GoogleMaps() {
  // const [lat, setLat] = useState(25.033198)
  // const [lng, setLng] = useState(121.543575)
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLEMAPS_API_KEY,
  })

  if (!isLoaded) return <div>Loading...</div>
  return <Map />
}

function Map() {
  // const center = useMemo(() => ({ lat: 25.033964, lng: 121.564468 }), [])
  const center = useMemo(
    () => ({ lat: 25.033964, lng: 121.564468 }),

    []
  )
  const zoom = 13
  // const [lat, setLat] = useState(25.033198)
  // const [lng, setLng] = useState(121.543575)

  const [selectedMarker, setSelectedMarker] = useState(null)

  const markers = [
    {
      id: 1,
      position: {
        lat: 25.033964,
        lng: 121.564468,
      },
      content: 'This is the info window content for Marker 1',
    },
    {
      id: 2,
      position: {
        lat: 25.08362,
        lng: 121.594382,
      },
      content: 'This is the info window content for Marker 2',
    },
    // Add more markers as needed
  ]

  const customIcon = {
    url: '/images/logo.png',
    scaledSize: new window.google.maps.Size(30, 30), // Adjust the size as needed
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
        mapContainerClassName="map-container"
        center={center}
        zoom={zoom}
      >
        {markers.map((marker) => (
          <MarkerF
            key={marker.id}
            position={marker.position}
            onClick={() => setSelectedMarker(marker)}
            icon={customIcon}
            animation={google.maps.Animation.DROP}
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
