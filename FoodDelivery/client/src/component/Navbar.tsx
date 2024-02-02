"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import { PermIdentitySharp, ShoppingBasketSharp } from "@mui/icons-material";
import { Pineconeblack } from "@/utils/allicons";
import SearchAppBar from "./Search";
import React from "react";
import Dialog from "@/component/Dialog"


export default function Navbar() {
  const pages = ['НҮҮР', 'ХООЛНЫ ЦЭС', 'ХҮРГЭЛТИЙН БҮС'];
  const styles = {
    btn: {
      color: "black",
      "&:hover": {
        backgroundColor: "transparent",
      },
      ungu: {
       color: "green"
      }
    } 
  };
  return (
    <Stack  alignItems={"center"}>
      <Stack  width={"1440px"} direction={"row"} justifyContent={"space-between"} padding={"20px 100px 10px"} >

        <Stack direction={"row"} gap={"24px"} >    
          <Pineconeblack />
          <Stack direction={"row"} gap={"20px"}>
         {   /*
                 {pages.map((menu) => ( <Typography  key={menu} >  {menu} </Typography>
                   ))}

  */}           <Typography color={"green"}>НҮҮР</Typography>
            <Typography>ХООЛНЫ ЦЭС</Typography>
            <Typography>ХҮРГЭЛТИЙН БҮС</Typography>  
          </Stack>
        </Stack>

        <Stack direction={"row"} gap={"24px"} >
          <SearchAppBar />
          <Button sx={styles.btn} children="Сагс" startIcon={<ShoppingBasketSharp />} disableRipple />             
          <Dialog></Dialog>
        { /* <Button sx={styles.btn} children="Нэвтрэх" startIcon={<PermIdentitySharp />} onClick={handleClickOpen} disableRipple/>
  */}
        </Stack>

      </Stack>
    </Stack>
  );
}
