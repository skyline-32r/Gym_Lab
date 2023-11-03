import PropTypes from 'prop-types'
import React from 'react'
import styles from '@/styles/btns.module.css'


export const Btn = ({ className, divClassName, text = '資料確認' }) => {
  return (
    <>
      {/* <style jsx>{`
        .btn {
          all: unset;
          align-items: center;
          background-color: var(--x-69dz-lk);
          border: 2.07px solid;
          border-color: #ffffff;
          border-radius: 5px;
          box-shadow: 0px 0px 0px #00efff, 0px 0px 0px #ff00b7;
          box-sizing: border-box;
          display: flex;
          gap: 6.89px;
          justify-content: center;
          overflow: hidden;
          padding: 12.4px 16.54px;
          position: relative;
          width: 235px;
        }

        .btn .text-wrapper {
          color: #ffffff;
          font-family: var(--p3-font-family);
          font-size: var(--p3-font-size);
          font-style: var(--p3-font-style);
          font-weight: var(--p3-font-weight);
          letter-spacing: var(--p3-letter-spacing);
          line-height: var(--p3-line-height);
          margin-top: -2.07px;
          position: relative;
          text-align: center;
          width: fit-content;
        }

        .btn:hover {
          background-color: #19142f;
          box-shadow: -4px -4px 0px #00efff, 4px 4px 0px #ff00b7;
        }
      `}</style> */}
      <button className={styles.btn}>
        <div className={styles.textWrapper}>{text}</div>
        {/* <div className="text-wrapper">下一步</div> */}
      </button>
    </>
  )
}

Btn.propTypes = {
  text: PropTypes.string,
}
