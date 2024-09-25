export const ProjectImage = (
  props: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
) => {
  const { style, ...rest } = props
  return (
    <img
      style={{
        width: "100%",
        borderRadius: 16,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        ...style,
      }}
      {...rest}
    />
  )
}
