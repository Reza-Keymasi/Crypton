import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      height="15vh"
      width="100%"
      sx={{
        backgroundColor: "#2c2c6c",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 5,
        position: "absolute",
        bottom: "0",
      }}
    >
      <Typography color="#2ccccc" my={3}>
        Crypton
      </Typography>
      <Typography color="#2c2c">&copy; All Rights Reserved ,2023</Typography>
    </Box>
  );
}
