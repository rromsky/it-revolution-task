import { Box, useTheme } from "@mui/material";

const ProgressCircle = ({ progress = 0.75, size = "48", number = 0 }) => {
  const angle = progress * 360;
  return (
    <Box
      sx={{
        background: `radial-gradient(#999 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, #aaf ${angle}deg 360deg),
            #afa`,
        borderRadius: "50%",
        display: "flex",
        position: "absolute",
        bottom: "2%",
        color: "white",
        fontWeight: "bold",
        fontSize: "1.2rem",
        left: "40%",
        width: `${size}px`,
        alignItems: "center",
        justifyContent: "center",
        height: `${size}px`,
      }}
    >
      {number}
    </Box>
  );
};

export default ProgressCircle;
