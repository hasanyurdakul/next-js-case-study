import React from "react";
import { Box, Divider, Paper, Typography } from "@mui/material";
import { ChevronRight, ContentCopy } from "@mui/icons-material";
import CodeIcon from "@mui/icons-material/Code";
import { StyledPaper } from "./styledComponents/StyledPaper";

function OverviewCard() {
  return (
    <StyledPaper sx={{ bgcolor: "#090a0a" }}>
      <Box>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 2,
          }}
        >
          <Typography variant="h5" color={"white"}>
            Overview
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",
            }}
          >
            <Typography variant="h6" color={"white"} fontWeight={"regular"}>
              Web service
            </Typography>
            <CodeIcon
              fontSize="medium"
              sx={{
                bgcolor: "#25B26D",
                borderRadius: 1.5,
                padding: 1 / 3,
                color: "white",
              }}
            />
          </Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          sx={{
            gap: 1,
          }}
        >
          <Box display={"flex"} flexDirection={"column"}>
            <Typography variant="body1" color={"grey"} gutterBottom>
              Public URL
            </Typography>
            <Box
              sx={{
                color: "#25B26D",
                display: "flex",
                flexWrap: "wrap",
                wordBreak: "break-all",
                gap: 2,
              }}
            >
              <Typography variant="body1" sx={{ cursor: "pointer" }}>
                raw-pony-personal-recep-13309e3c...
              </Typography>
              <Typography
                variant="body2"
                color={"grey"}
                display={"inline-flex"}
                gap={1}
              >
                (forwarded to port 8000)
                <ContentCopy
                  fontSize="small"
                  sx={{ color: "white", cursor: "pointer" }}
                />
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              wordBreak: "break-all",
            }}
          >
            <Typography variant="body1" color={"grey"} gutterBottom>
              Private Address
            </Typography>

            <Box sx={{ display: "flex" }}>
              <Typography
                sx={{
                  cursor: "pointer",
                  wordBreak: "break-all",
                  color: "white",
                }}
              >
                nextjs.raw-pony.internal:8000
              </Typography>

              <ContentCopy
                fontSize="small"
                sx={{ color: "white", cursor: "pointer", marginLeft: 1 }}
              />
            </Box>
          </Box>
        </Box>
        <Divider
          orientation="horizontal"
          sx={{
            marginTop: 2,
            marginBottom: 2,
            marginX: "-20px",
            bgcolor: "#333",
          }}
        />
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography
            variant="body1"
            color={"white"}
            display={"inline-flex"}
            alignItems={"center"}
            sx={{ cursor: "pointer" }}
          >
            <ChevronRight fontSize="medium" sx={{ marginRight: 1 }} />
            Deployment details
          </Typography>
        </Box>
      </Box>
    </StyledPaper>
  );
}

export default OverviewCard;
