"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import { PermIdentitySharp, ShoppingBasketSharp } from "@mui/icons-material";
import { Pineconeblack } from "@/utils/allicons";
import {styled} from "@mui/system";
import SearchAppBar from "./Search";
import React from "react";


export default function Navbar() {

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);         
  };
  const handleClose = () => {
    setOpen(false);
    console.log("working");
  };

  return (
    <Stack  alignItems={"center"}>
      <Stack  width={"1440px"} direction={"row"} justifyContent={"space-between"} padding={"20px 100px"} >
        <Stack direction={"row"} gap={"24px"} >
         
          <Pineconeblack />
          <Stack direction={"row"} gap={"20px"}>
            <Typography onClick={handleClose} color={"green"}>НҮҮР</Typography>
            <Typography>ХООЛНЫ ЦЭС</Typography>
            <Typography>ХҮРГЭЛТИЙН БҮС</Typography>
           
          </Stack>
        </Stack>
        <Stack direction={"row"} gap={"24px"} >
          <SearchAppBar />
          <Button children="Сагс" startIcon={<ShoppingBasketSharp />} />
          <Stack onClick={handleClose} direction={"row"} gap={"12px"} alignItems={"center"}  >
            <ShoppingBasketSharp />
            <Typography>Сагс</Typography>
          </Stack>      
            <Button children="Нэвтрэх" startIcon={<PermIdentitySharp />} />
        </Stack>
      </Stack>
    </Stack>
  );
}
