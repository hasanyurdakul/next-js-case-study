import { Accordion } from "@mui/material";
import { styled } from "@mui/system";

export const StyledAccordion = styled(Accordion)({
  backgroundColor: "#09090B",
  color: "white",

  boxShadow: "none",
  "&:before": {
    display: "none",
  },
});
