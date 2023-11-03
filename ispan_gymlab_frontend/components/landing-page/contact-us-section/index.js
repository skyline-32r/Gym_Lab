import { Box } from '@mui/material'
import styles from '@/styles/landing.module.css'
import FmdGoodRoundedIcon from '@mui/icons-material/FmdGoodRounded'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
export default function ContactUs() {
  return (
    <>
      <Box className={styles.CAbody}>
        <Box className={styles.CAcard}>
          <h1>聯絡我們</h1>
          <ul className={styles.CAul}>
            <li className={styles.CAli}>
              <a href="/in-person-classes/location">
                <FmdGoodRoundedIcon fontSize="large" />
              </a>
            </li>
            <li>
              <a href="#">
                <TwitterIcon fontSize="large" />
              </a>
            </li>
            <li className={styles.CAli}>
              <a href="#">
                <InstagramIcon fontSize="large" />
              </a>
            </li>
            <li>
              <a href="#">
                <FacebookIcon fontSize="large" />
              </a>
            </li>
          </ul>
        </Box>
      </Box>
    </>
  )
}
