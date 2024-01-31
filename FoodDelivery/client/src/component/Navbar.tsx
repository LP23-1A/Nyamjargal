'use client'
import { Box, Button, Stack } from "@mui/material";
import { PermIdentitySharp, ShoppingBasketSharp } from "@mui/icons-material";
import {Pineconeblack} from "@/utils/allicons";
import SearchAppBar from "./Search";
import React from "react";


export default function Navbar ()  {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
      <Stack sx={{ display: "flex", width: "1440px", justifyContent: "space-between", paddingY: "20px", paddingX: "200px", flexDirection: "row", }} >
        <Stack sx={{ display: "flex", gap: "24px", flexDirection: "row" }}>
          <Pineconeblack />
          <Stack sx={{ display: "flex", gap: "20px", flexDirection: "row" }}>
            <Box color={"green"}>НҮҮР</Box>
            <Box>ХООЛНЫ ЦЭС</Box>
            <Box>ХҮРГЭЛТИЙН БҮС</Box>
          </Stack>
        </Stack>
        <Stack sx={{ display: "flex", gap: "24px", flexDirection: "row" }}>
          <SearchAppBar />
          <Stack sx={{ display: "flex", gap: "12px", flexDirection: "row", alignItems: "center", }} >
            <ShoppingBasketSharp />
            <Box>Сагс</Box>
          </Stack>
          <Stack
            sx={{
              display: "flex",
              gap: "12px",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Button children = "Нэвтрэх" startIcon = {<PermIdentitySharp/>} disableFocusRipple disableElevation/>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

