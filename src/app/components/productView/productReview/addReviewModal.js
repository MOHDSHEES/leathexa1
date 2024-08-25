import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Rating, Slide, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Joi from "joi";
import { closeMessage, openMessage } from "../../functions/message";
import { MyContext } from "@/src/context";
import DOMPurify from "dompurify";
import axios from "axios";

export default function AddReviewModal({ open, setOpen, productId }) {
  //   const [open, setOpen] = React.useState(false);
  const { messageApi, user } = useContext(MyContext);
  const [state, setState] = useState({
    rating: 4,
    review: "",
  });
  const [disable, setDisable] = useState(false);
  // const Inputchange = (event) => {
  //   const { name, value } = event.target;
  //   setState({
  //     ...state,
  //     [name]: value,
  //   });
  // };
  const handleClose = () => {
    setState({
      rating: 4,
      review: "",
    });
    setOpen(false);
  };
  async function submitHandler() {
    const { error } = review.validate({
      review: state.review,
    });
    if (error) {
      closeMessage(messageApi, error.details[0].message, "error");
      return;
    }

    setDisable(true);
    openMessage(messageApi, "Adding Review...");
    const { data } = await axios.post("/api/product/review/add", {
      state: {
        ...state,
        review: state.review.trim(),
        user: user._id,
        product: productId,
      },
    });
    // console.log(data);
    if (data && data.status === 200) {
      closeMessage(messageApi, "Review added successfully.", "success");
      //   navigate("/edit", { replace: true });
      handleClose();
    }
    setDisable(false);
  }

  return (
    <React.Fragment>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Dialog
        open={open}
        fullWidth={true}
        maxWidth="sm"
        // onClose={handleClose}
        TransitionComponent={Transition}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            submitHandler();
            // handleClose();
          },
        }}
      >
        <DialogTitle>Leave a Review</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText> */}

          <Grid container spacing={1}>
            <Grid xs={12} sx={{ textAlign: "center", mb: 2, mt: 2 }}>
              <Box
                sx={{
                  // width: 200,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Rating
                  name="product-rating"
                  defaultValue={4}
                  precision={0.2}
                  size="large"
                  value={state.rating}
                  onChange={(event, newValue) => {
                    if (newValue) setState({ ...state, rating: newValue });
                  }}
                />
                {state.rating !== null && (
                  <Box sx={{ ml: 2 }}>{state.rating}</Box>
                )}
              </Box>
              <div>
                <Typography variant="caption">Rating</Typography>
              </div>
            </Grid>
          </Grid>

          <TextField
            id="review"
            label="Review"
            multiline
            autoFocus
            fullWidth
            placeholder="Please write your comment/Review here"
            rows={4}
            variant="outlined"
            value={state.review}
            onChange={(e) =>
              setState({ ...state, review: DOMPurify.sanitize(e.target.value) })
            }
          />
          {/* <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" disabled={disable}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const review = Joi.object({
  review: Joi.string().allow(""),
});
