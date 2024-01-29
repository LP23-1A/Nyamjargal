import Image from "next/image";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";

export default function Home() {
  return (
    <Stack className="">
         <Button variant="text">Text</Button>
         <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </Stack>
  );
}
