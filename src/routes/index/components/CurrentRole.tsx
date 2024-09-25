import { InfoCard } from "./InfoCard"
import prendaUrl from "@assets/logos/prenda.png"

export const CurrentRole = () => {
  const started = new Date("2020-01-16").getTime()
  const now = new Date().getTime()
  const diff = now - started
  const years = Math.floor(diff / 31536000000)
  const months = Math.floor((diff % 31536000000) / 2628000000)
  return (
    <InfoCard
      title="Current Role"
      img={<img src={prendaUrl} alt="Prenda" style={{ width: 100 }} />}
      description={`Software Engineer - ${
        years > 0 ? `${years} year${years > 1 ? "s" : ""}` : ""
      } ${months > 0 ? `${months} month${months > 1 ? "s" : ""}` : ""}`}
    />
  )
}
