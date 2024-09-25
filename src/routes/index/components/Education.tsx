import { Typography } from "@mui/material"
import { InfoCard } from "./InfoCard"
import asuUrl from "@assets/logos/asu.png"

export const Education = () => {
  return (
    <InfoCard
      title="Education"
      img={<img src={asuUrl} alt="ASU logo" style={{ width: 200 }} />}
      description={
        <>
          <Typography variant="subtitle2">M.Ed Secondary Education</Typography>
          <Typography variant="subtitle2">
            BS Physics • BA Mathematics
          </Typography>
        </>
      }
    />
  )
}
