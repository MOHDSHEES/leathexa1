import React, { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Unstable_Grid2";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import DOMPurify from "dompurify";
import { MyContext } from "@/src/context";
import axios from "axios";
import { closeMessage } from "../functions/message";

export default function AddressModel({
  open,
  setOpen,
  name,
  newAddress = false,
  address = null,
}) {
  const [checked, setChecked] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const { messageApi, user, setBackDropOpen, setUser } = useContext(MyContext);

  const [state, setState] = useState({
    address: "",
    city: "",
    country: "",
    postCode: "",
    mobileNo: "",
  });

  useEffect(() => {
    if (address) {
      setState({
        address: address.address,
        city: address.city,
        country: address.country,
        postCode: address.postCode,
        mobileNo: address.mobileNo,
      });
    }
  }, [address]);
  //   const [open, setOpen] = React.useState(false);

  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };

  const Inputchange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: DOMPurify.sanitize(value),
    });
  };

  const handleCheckBox = (e) => {
    setChecked(e.target.checked);
  };
  const handleClose = () => {
    setOpen(false);
  };

  async function handleSubmit() {
    setDisabled(true);
    setBackDropOpen(true);
    const { data } = await axios.post("/api/user/addAddress", {
      userId: user._id,
      details: state,
      name: name,
      checked: checked,
    });
    if (data.status === 200) {
      setUser(data.data);
      closeMessage(messageApi, "Updated Successfully", "success");
      setOpen(false);
    } else if (data.status === 501) {
      closeMessage(messageApi, data.msg, "error");
      signOut();
    } else {
      closeMessage(messageApi, data.msg, "error");
    }
    setDisabled(false);
    setBackDropOpen(false);
  }

  return (
    <React.Fragment>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}

      <Dialog
        open={open}
        fullWidth={true}
        maxWidth="md"
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            handleSubmit();
            // const formData = new FormData(event.currentTarget);
            // const formJson = Object.fromEntries(formData.entries());
            // const email = formJson.email;
            // console.log(email);
            // handleClose();
          },
        }}
      >
        <fieldset disabled={disabled}>
          <div className="dark:bg-gray-100">
            <DialogTitle>{name} Address</DialogTitle>
            <DialogContent>
              {/* <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText> */}
              <Grid container spacing={2}>
                <Grid xs={12} md={12}>
                  <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="address"
                    name="address"
                    label="Address"
                    onChange={Inputchange}
                    value={state.address}
                    type="text"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid xs={12} md={4}>
                  <TextField
                    sx={{ margin: 0 }}
                    required
                    margin="dense"
                    id="city"
                    name="city"
                    label="City"
                    onChange={Inputchange}
                    value={state.city}
                    type="text"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid xs={12} md={4}>
                  <FormControl fullWidth>
                    <InputLabel id="country-select">Country</InputLabel>
                    <Select
                      labelId="country-select"
                      id="countrySelect"
                      name="country"
                      onChange={Inputchange}
                      value={state.country}
                      // value={age}
                      label="Country"
                      // onChange={handleChange}
                    >
                      <MenuItem value="India">India</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid xs={12} md={4}>
                  <TextField
                    required
                    margin="dense"
                    sx={{ margin: 0 }}
                    id="postCode"
                    name="postCode"
                    label="PostCode"
                    onChange={Inputchange}
                    value={state.postCode}
                    type="text"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid xs={12} md={4}>
                  <TextField
                    required
                    margin="dense"
                    sx={{ margin: 0 }}
                    id="mobileNo"
                    name="mobileNo"
                    label="Mobile No."
                    onChange={Inputchange}
                    value={state.mobileNo}
                    type="text"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              {!newAddress && (
                <FormGroup>
                  <FormControlLabel
                    sx={{ mt: 1 }}
                    control={
                      <Checkbox checked={checked} onChange={handleCheckBox} />
                    }
                    label="Check if you want to use the same address for both shipping and billing."
                  />
                </FormGroup>
              )}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button disabled={disabled} type="submit">
                Save
              </Button>
            </DialogActions>
          </div>
        </fieldset>
      </Dialog>
    </React.Fragment>
  );
}
