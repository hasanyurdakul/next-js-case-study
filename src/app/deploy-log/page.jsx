"use client";
import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import OverviewCard from "@/components/OverviewCard";
import BuildCard from "@/components/BuildCard";
import { Container } from "@/components/styledComponents/Container";

const DeployLog = () => {
  return (
    <Container>
      <OverviewCard />
      <BuildCard />
    </Container>
  );
};

export default DeployLog;
