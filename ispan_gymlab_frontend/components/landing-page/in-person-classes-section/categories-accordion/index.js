import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState } from 'react'
import styles from '@/styles/landing.module.css'
export default function CategoriesAccordion({ expanded, handleChange }) {
  const listColor =
    ' radial-gradient(219.41% 111.91% at 90.35% 120.18%, #611459 0%, #57177E 27.65%, #140F2A 70.35%, #0F205D 99.42%)'
  // const [expanded, setExpanded] = useState('panel1')
  // const handleChange = (isExpanded, panel) => {
  //   setExpanded(isExpanded ? panel : false)
  // }

  return (
    <Box
      sx={{
        width: '35%',
        marginTop: '64px',
        '@media (max-width: 600px)': {
          width: '90%',
          marginTop: 0,
        },
      }}
    >
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={(e, isExpanded) => handleChange(isExpanded, 'panel1')}
        sx={{
          background: expanded == 'panel1' ? listColor : '#140f2a',
          color: '#F9F9F9',
        }}
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon sx={{ color: '#F9F9F9' }} />}
        >
          有氧
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              backgroundImage: 'url("/images/landing_page/ipclass4.jpg")',
              width: '100%',
              height: '250px',
              backgroundSize: 'cover',
              margin: '16px 0',
              backgroundPosition: 'center',
              display: 'none',
              '@media (max-width: 600px)': {
                display: 'block',
              },
            }}
          ></Box>
          <Typography>
            現代人生活模式的改變，生理機能退化，因為運動量的不足，導致肌肉量的不足，引起許多的慢性疾病，適當的有氧運動除了可以增加心肺訓練功能，增加肌力，還可讓關節液潤滑關節，提供軟骨所需的營養，保護關節，在團體有氧運動課程中，有各式各樣的有氧運動課程，讓身體藉由規律的訓練，達到身體心肺、肌力、體能的改善。
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={(e, isExpanded) => handleChange(isExpanded, 'panel2')}
        sx={{
          background: expanded == 'panel2' ? listColor : '#140f2a',
          color: '#F9F9F9',
        }}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMoreIcon sx={{ color: '#F9F9F9' }} />}
        >
          飛輪
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              backgroundImage: 'url("/images/landing_page/ipclass2.jpg")',
              width: '100%',
              height: '250px',
              backgroundSize: 'cover',
              margin: '16px 0',
              backgroundPosition: 'center',
              display: 'none',
              '@media (max-width: 600px)': {
                display: 'block',
              },
            }}
          ></Box>
          <Typography>
            室內飛輪車騎乘是在虛擬實境上，透過剎車片來控制阻力，模擬戶外單車爬坡路段，下坡路段，充分激發身體的運動細胞後，在消耗能量的同時達到減脂的目的，透過音樂訓練，雕塑大腿肌耐力及心肺功能的加強，並且使精力更加旺盛，將負面不好的情緒完全釋放出來，徹底的舒壓，是一項節奏性的運動，進而達到減脂、塑身的效果。
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={(e, isExpanded) => handleChange(isExpanded, 'panel3')}
        sx={{
          background: expanded == 'panel3' ? listColor : '#140f2a',
          color: '#F9F9F9',
        }}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMoreIcon sx={{ color: '#F9F9F9' }} />}
        >
          TRX懸吊
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              backgroundImage: 'url("/images/landing_page/ipclass3.jpg")',
              width: '100%',
              height: '250px',
              backgroundSize: 'cover',
              margin: '16px 0',
              backgroundPosition: 'center',
              display: 'none',
              '@media (max-width: 600px)': {
                display: 'block',
              },
            }}
          ></Box>
          <Typography>
            TRX是懸吊式阻抗訓練（Total Body Resistance
            Exercise）的簡稱，最早為美國海豹突擊隊受訓時所用的一套運動，是一種全身性的肌力訓練，利用體重作為阻力來進行，因此運動的強度也能夠透過傾斜角度和姿勢來做調整，靈活度相當高。除了可以鍛練到全身肌群外，TRX的繩索也會幫助核心穩定以及培養絕佳平衡感。
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={(e, isExpanded) => handleChange(isExpanded, 'panel4')}
        sx={{
          background: expanded == 'panel4' ? listColor : '#140f2a',
          color: '#F9F9F9',
        }}
      >
        <AccordionSummary
          id="panel4-header"
          aria-controls="panel4-content"
          expandIcon={<ExpandMoreIcon sx={{ color: '#F9F9F9' }} />}
        >
          綜合格鬥
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              backgroundImage: 'url("/images/landing_page/ipclass1.png")',
              width: '100%',
              height: '250px',
              backgroundSize: 'cover',
              margin: '16px 0',
              backgroundPosition: 'center',
              display: 'none',
              '@media (max-width: 600px)': {
                display: 'block',
              },
            }}
          ></Box>
          <Typography>
            綜合格鬥， 是一允許雙方選手使用「打擊技、摔技與地板技」的比賽。
            任何一種的武術在這極為靈活的規則之下， 都可以自由發揮，不受限制。
            總合格鬥 MMA 由於結合了許多武術，
            選手需具備肌耐力、肌力與極為強大的爆發力，
            還需具備異種武術融合、臨場反應、戰術策略模擬等等能力！
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}
