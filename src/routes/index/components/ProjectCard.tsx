import { Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export const ProjectCard = (props: {
  title: string
  imgSrc: string
  description: React.ReactNode
  tags: string[]
  link: string
  date: string
}) => {
  return (
    <Stack
      flex={1}
      component={Link}
      to={props.link}
      sx={{ textDecoration: "none", minWidth: 300 }}
      color="inherit"
    >
      <img
        src={props.imgSrc}
        alt={props.title}
        style={{
          width: "100%",
          borderRadius: 16,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      />
      <Stack direction="row" alignItems="center">
        <Typography variant="h6" sx={{ flex: 1 }}>
          {props.title}
        </Typography>
        <Typography variant="subtitle2">{props.date}</Typography>
      </Stack>
      <Typography variant="caption">{props.description}</Typography>
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="flex-start"
        gap={2}
      >
        {props.tags.map((tag, index) => (
          <Typography
            key={index}
            variant="caption"
            sx={{
              padding: "1px 4px",
              borderRadius: 1,
              border: 2,
              borderColor: "primary.light",
            }}
          >
            {tag}
          </Typography>
        ))}
      </Stack>
    </Stack>
  )
}
