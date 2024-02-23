"use client";
import * as React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Navbar from "@/component/Navbar";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Footer from "@/component/Footer";

export default function Signup() {
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [showPassword, setShowPassword] = React.useState(false);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <Stack justifyContent={"center"} alignItems={"center"} >
      <Navbar />
      <Stack width={"448px"} padding={"32px"}>
        <Typography children="Бүртгүүлэх" sx={{fontSize:"28px", fontWeight:"700", textAlign:"center", color:"#0D1118"}}/>
        <Box>
          <InputLabel children="Нэр"></InputLabel>
          <TextField placeholder="Нэрээ оруулна уу" id="filled-multiline-flexible" variant="filled" fullWidth />
        </Box>
        <Box>
          <InputLabel children="И-мэйл"></InputLabel>
          <TextField placeholder="Имэйл хаягаа оруулна уу" id="filled-multiline-flexible" variant="filled" fullWidth />
        </Box>
        <Box>
          <InputLabel children="Утас"></InputLabel>
          <TextField placeholder="Утсаа оруулна уу" id="filled-multiline-flexible" variant="filled" fullWidth />
        </Box>

        
      </Stack>
      <Footer></Footer>
    </Stack>
  );
}
