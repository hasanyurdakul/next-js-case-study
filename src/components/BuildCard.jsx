import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  AccordionSummary,
  AccordionDetails,
  Divider,
  CircularProgress,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  ChevronRight,
  ContentCopy,
  CropFree,
  Download,
  HistoryToggleOff,
  KeyboardArrowDown,
  MoreHoriz,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { StyledPaper } from "./styledComponents/StyledPaper";
import { LogAreaBlack } from "./styledComponents/LogAreaBlack";
import { LogAreaWrapper } from "./styledComponents/LogAreaWrapper";
import { StyledAccordion } from "./styledComponents/StyledAccordion";
import { logMessagesObj } from "@/constants/logMessagesObj";

const BuildCard = () => {
  const [logsObj, setLogsObj] = useState([]);
  const [progress, setProgress] = useState(0);
  const [expanded, setExpanded] = useState(true);
  const router = useRouter();
  const logEndRef = useRef(null);

  useEffect(() => {

    logMessagesObj.forEach((message, index) => {
      setTimeout(() => {
        setLogsObj((prevLogs) => [...prevLogs, message]);
        setProgress(((index + 1) / logMessagesObj.length) * 100);
        if (index === logMessagesObj.length - 1) {
          setTimeout(() => router.replace("/result"), 1000);
        }
      }, (index + 1) * 1000);
    });
  }, []);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logsObj]); 

  const handleChange = (event, isExpanded) => {
    setExpanded(isExpanded);
  };

  return (
    <StyledPaper>
      {/* Build */}
      <StyledAccordion expanded={expanded} onChange={handleChange}>
        <AccordionSummary
          sx={{
            display: "flex",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              {expanded ? <KeyboardArrowDown /> : <ChevronRight />}
              <Box>
                <Typography>Build</Typography>
                <Typography variant="body2" color="grey">
                  Running
                </Typography>
              </Box>
            </Box>
            <CircularProgress
              variant="determinate"
              size={30}
              value={progress}
              sx={{ color: "grey" }}
            />
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <LogAreaWrapper>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ padding: 3 }}>Logs</Typography>
              <CropFree
                sx={{
                  mr: 2,
                  bgcolor: "#25B26D",
                  borderRadius: 1.5,
                  padding: 2 / 3,
                  fontSize: "2.4rem",
                }}
              />
            </Box>
            <Divider
              orientation="horizontal"
              sx={{
                bgcolor: "#333",
              }}
            />
            <LogAreaBlack>
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
                <div ref={logEndRef} />

            </LogAreaBlack>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                alignItems: "center",
                justifyContent: "end",
                padding: 1,
                color: "#25B26D",
                backgroundColor: "#000",
                borderRadius: "8px",
              }}
            >
              <Box sx={{ display: "flex", gap: 1 / 2, cursor: "pointer" }}>
                <Download fontSize="small" />
                <Typography variant="body2">Download</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1 / 2, cursor: "pointer" }}>
                <ContentCopy fontSize="small" />
                <Typography variant="body2">Copy</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: 1 / 2,
                  color: "white",
                  cursor: "pointer",
                }}
              >
                <MoreHoriz fontSize="small" />
              </Box>
            </Box>
          </LogAreaWrapper>
        </AccordionDetails>
      </StyledAccordion>
      <Divider
        orientation="horizontal"
        sx={{
          marginTop: 2,
          marginBottom: 2,
          marginX: "-20px",
          bgcolor: "#333",
        }}
      />
      {/* Deployment */}
      <StyledAccordion disabled>
        <AccordionSummary
          sx={{
            display: "flex",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <ChevronRight />
              <Box>
                <Typography>Deploy</Typography>
                <Typography variant="body2" color="grey">
                  Not Running
                </Typography>
              </Box>
            </Box>
            <HistoryToggleOff fontSize="large" sx={{ color: "grey" }} />
          </Box>
        </AccordionSummary>
      </StyledAccordion>
    </StyledPaper>
  );
};

export default BuildCard;
