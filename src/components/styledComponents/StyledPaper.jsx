import { styled } from "@mui/system";
import { Paper } from "@mui/material";

export const StyledPaper = styled(Paper)({
  "@media(min-width: 320px)": {
    width: "95%",
  },
  "@media(min-width: 1024px)": {
    width: "60%",
  },
  padding: "20px",
  border: "1px solid #333",
  backgroundColor: "#09090B",
  borderRadius: "8px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
});
