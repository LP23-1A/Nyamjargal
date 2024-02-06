import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  PermIdentitySharp,
  ShoppingBasketSharp,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const styles = {
    btn: {
      color: "black",
      "&:hover": {
        backgroundColor: "transparent",
      },
      ungu: {
        color: "green",
      },
    },
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <Button
        startIcon={<PermIdentitySharp />}
        sx={styles.btn}
        onClick={handleClickOpen}
        disableRipple
      >
        Нэвтрэх
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Нэвтрэх</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Имэйл"
            type="email"
            fullWidth
            variant="standard"
          />
          <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
            <InputLabel htmlFor="filled-adornment-password">Нууц үг</InputLabel>
            <FilledInput
              id="filled-adornment-password"
              type={showPassword ? "text" : "password"}
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
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Stack
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Button type="submit">Нэвтрэх</Button>
            <Typography>Эсвэл</Typography>
            <Button onClick={handleClose}>
              <Link href={'/signup'}>Бүртгүүлэх</Link>
            </Button>
          </Stack>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
