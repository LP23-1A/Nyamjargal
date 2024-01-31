"use client";
import * as React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {Box, Button, FormControl,IconButton,InputAdornment,InputLabel, OutlinedInput,Stack,TextField,} from "@mui/material";



export default function Login ()  {
    const [showPassword, setShowPassword] = React.useState(false);

    function handleClickShowPassword(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
        throw new Error("Function not implemented.");
    }

    function handleMouseDownPassword(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
        throw new Error("Function not implemented.");
    }

  return (
    <Stack sx={{width: "448px",padding: "32px", display: "flex",gap: "48px",flexDirection: "column",}} >
      <Box display={"flex"} justifyContent={"center"} fontSize={"28px"}>
        Нэвтрэх
      </Box>
      <Stack sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Stack sx={{ flex: "" }}>
          <Box fontSize={"14px"}>Имэйл</Box>
          <TextField sx={{ border: "1px solid gray", "&:focus": "none" }} id="filled-multiline-flexible" label="Имэйл хаягаа оруулна уу" multiline maxRows={4} variant="filled"/>
        </Stack>
        <Stack sx={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <Box fontSize={"14px"}>Нууц Үг</Box>

          
          <FormControl sx={{ width: "38ch", bgcolor: "#F7F7F8", borderRadius: "1ch", border: "none", }} variant="outlined" >
            <InputLabel htmlFor="outlined-adornment-password">  Нууц үг </InputLabel>
            <OutlinedInput id="outlined-adornment-password"
             
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Box fontSize={"12px"} display={"flex"} justifyContent={"flex-end"}>
            Нууц үг сэргээх
          </Box>
        </Stack>
      </Stack>
      <Stack sx={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        <Button sx={{paddingX: "16px", paddingY: "8px", borderRadius: "5px", cursor: "pointer",}} variant="contained" color="success" >
          Нэвтрэх
        </Button>
        <Box display={"flex"} justifyContent={"center"}>
          Эсвэл
        </Box>
        <Button
          sx={{
            color: "black",
            border: "1px solid green",
            paddingX: "16px",
            paddingY: "8px",
          }}
          variant="outlined"
          size="small"

        >
          Бүртгүүлэх
        </Button>
      </Stack>
    </Stack>
  );
};
