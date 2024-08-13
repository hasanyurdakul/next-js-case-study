"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Paper,
  LinearProgress,
  Chip,
  CircularProgress,
  Divider,
} from "@mui/material";
import { styled } from "@mui/system";
import ReplayIcon from "@mui/icons-material/Replay";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PauseIcon from "@mui/icons-material/Pause";
import { Container } from "@/components/styledComponents/Container";
import { StyledPaper } from "@/components/styledComponents/StyledPaper";
import { LogAreaGrey } from "../../components/styledComponents/LogAreaGrey";
import { logMessagesObj } from "@/constants/logMessagesObj";
import { CustomChip } from "@/components/styledComponents/CustomChip";
import { CheckCircle } from "@mui/icons-material";

const Result = () => {
  const [logsObj, setLogsObj] = useState([]);

  useEffect(() => {
    // setLogs(logMessages);
    setLogsObj(logMessagesObj);
  }, []);

  return (
    <Container>
      <StyledPaper sx={{ bgcolor: "#090a0a" }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 2,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography variant="h5" color={"white"}>
                Front-end
              </Typography>
              <ReplayIcon
                sx={{
                  cursor: "pointer",
                  backgroundColor: "#E9E8F1",
                  color: "#553884",
                  borderRadius: "50%",
                }}
                fontSize="small"
              />
              <CustomChip size="small" label="APP" />
              <CustomChip size="small" label="STATIC" />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <OpenInNewIcon
                fontSize="small"
                sx={{ color: "grey", cursor: "pointer" }}
              />
              <Typography
                variant="subtitle1"
                color={"grey"}
                sx={{ textDecoration: "underline", cursor: "pointer" }}
              >
                https://hostservice.site
              </Typography>
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  bgcolor: "white",
                  marginY: 0.5,
                }}
              />
              <LocationOnIcon
                sx={{
                  cursor: "pointer",
                  color: "grey",
                  borderRadius: "50%",
                }}
                fontSize="small"
              />
              <Typography variant="subtitle1" color={"grey"}>
                San Francisco{" "}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",
            }}
          >
            <PauseIcon
              fontSize="large"
              sx={{
                bgcolor: "#333",
                borderRadius: 1.5,
                padding: 1 / 3,
                color: "white",
                cursor: "pointer",
              }}
            />
            <ReplayIcon
              fontSize="large"
              sx={{
                bgcolor: "#333",
                borderRadius: 1.5,
                padding: 1 / 3,
                color: "white",
                cursor: "pointer",
              }}
            />
          </Box>
        </Box>
        <Divider
          orientation="horizontal"
          sx={{
            bgcolor: "#333",
            marginBottom: "20px",
            marginTop: "20px",
          }}
        />
        <Typography
          variant="h6"
          color={"white"}
          display={"inline-flex"}
          gap={1}
        >
          Deploy log for commit
          <Typography
            variant="inherit"
            sx={{ cursor: "pointer", textDecoration: "underline" }}
          >
            c4ca4238a
          </Typography>
        </Typography>
        <Typography variant="body1" color={"grey"} gutterBottom>
          June 30, 2024, 10:26AM
        </Typography>
        <Box>
          <Box
            sx={{
              bgcolor: "#47464C",
              borderRadius: "4px",
              padding: 1 / 2,
              px: 1,
              marginBottom: 2,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
         
            <CheckCircle sx={{ color: "#4CAF50" }} />
            <Typography variant="subtitle1" color={"white"}>
              Deployed successfully
            </Typography>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ backgroundColor: "#333" }}
            />
            <Typography variant="subtitle1" color={"white"}>
              Merge pull request #22 from rayspace
            </Typography>
          </Box>

          <LogAreaGrey>
              {logsObj.map((log, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    fontSize: "0.9rem",
                    color: "white",
                  }}
                >
                  <Typography sx={{ fontFamily: "monospace" }}>
                    {log.timeStamp}{" "}
                  </Typography>
                  <Typography
                    sx={{ color: "#DB4749", fontFamily: "monospace" }}
                  >
                    {log.stream}
                  </Typography>
                  <Typography sx={{ fontFamily: "monospace" }}>
                    {log.message}
                  </Typography>
                </Box>
              ))}
          </LogAreaGrey>
        </Box>
      </StyledPaper>
    </Container>
  );
};

export default Result;
