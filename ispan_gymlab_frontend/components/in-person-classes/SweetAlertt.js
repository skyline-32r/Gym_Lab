// pages/index.js

import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import Swal from 'sweetalert2'

// const SweetAlert = dynamic(() => import('sweetalert2'), { ssr: false })

export default function SweetAlertt(
  class_name,
  instructor_name,
  class_date,
  time,
  enroll_id,
  reloadEnroll,
  class_id,
  data
) {
  const [select1Value, setSelect1Value] = useState('')
  const [select2Value, setSelect2Value] = useState('')

  const openModal = () => {
    Swal.fire({
      html: (
        <div>
          <select
            value={select1Value}
            // onChange={(e) => setSelect1Value(e.target.value)}
          >
            <option value="option1">{class_name}</option>
            <option value="option2">{class_date}</option>
            <option value="option3">Option 3</option>
          </select>
          <br />
          <select
            value={select2Value}
            // onChange={(e) => setSelect2Value(e.target.value)}
          >
            <option value="optionA">Option A</option>
            <option value="optionB">Option B</option>
            <option value="optionC">Option C</option>
          </select>
        </div>
      ),
      showCancelButton: true,
      confirmButtonText: 'Submit',
      cancelButtonText: 'Cancel',
      showLoaderOnConfirm: true,
      preConfirm: () => {
        console.log('Selected values:', select1Value, select2Value)
      },
    })
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
    </div>
  )
}
