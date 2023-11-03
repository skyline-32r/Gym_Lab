import { useState } from 'react'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Box } from '@mui/material'
import Link from 'next/link'

export default function MyComponent() {
  const [expanded, setExpanded] = useState(false)

  const handleChange = () => {
    setExpanded(!expanded)
  }

  return (
    <Box sx={{ width: '15%' }}>
      <Link href="#">基本資料</Link>
      <Accordion expanded={expanded} onChange={handleChange}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ color: 'black' }}>Accordion Title</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Link href="#" style={{ color: 'black' }}>
            Accordion Content
          </Link>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}
