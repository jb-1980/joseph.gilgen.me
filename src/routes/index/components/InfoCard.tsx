import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

export const InfoCard = (props: {
  title: string
  img: JSX.Element
  description: React.ReactNode
}) => {
  return (
    <Stack
      sx={{
        padding: 2,
        border: 2,
        borderRadius: 2,
        borderColor: "primary.light",
        flex: 1,
      }}
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h5">{props.title}</Typography>

      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {props.img}
      </div>
      <Typography variant="subtitle2">{props.description}</Typography>
    </Stack>
  )
}
