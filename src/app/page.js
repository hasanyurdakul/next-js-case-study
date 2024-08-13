"use client";
import { Container } from "@/components/styledComponents/Container";
import { Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <Container>
      <Button
        onClick={() => router.push("/deploy-log")}
        sx={{ border: "1px solid #333", borderRadius: "8px", padding: 2 ,color:"white"}}
      >
        <Typography variant="h6" sx={{color:"white"}}> Ship it 🚀</Typography>
      </Button>
    </Container>
  );
}
