import { Button } from "@mui/material";

export default function MoreButton({ children, variant, color, onClick }) {
  return (
    <Button
      sx={{
        color: color,
        borderColor: color,
      }}
      variant={variant}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
