import React from 'react'
export default function Logo({ type }) {
  if (type == 1) {
    return (
      <svg
        width="100"
        height="97"
        viewBox="0 0 100 97"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 95.3292L49.1305 61.8168V0L0 95.3292ZM100 95.3292L50.8646 61.8168V0L100 95.3292ZM96.8184 96.0103L50 64.2106L3.17678 96.0103H96.8184Z"
          fill="white"
        />
      </svg>
    )
  } else {
    return (
      <svg
        width="180"
        height="173"
        viewBox="0 0 180 173"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 171.593L88.435 111.27V0L0 171.593ZM180 171.593L91.5563 111.27V0L180 171.593ZM174.273 172.819L90 115.579L5.71821 172.819H174.273Z"
          fill="white"
        />
      </svg>
    )
  }
}
