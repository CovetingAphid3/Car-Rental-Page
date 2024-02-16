import  { useState } from "react";
import axios from "axios";
import { Typography, TextField, Button, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import "./Contact.css";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleClose = () => {
    setError("");
    setSubmitted(false);
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        // replace this with your own unique endpoint URL
        "https://formcarry.com/s/XXXXXXX",
        {
          email: email,
          message: message,
        },
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.data.code === 200) {
        setSubmitted(true);
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError("An error occurred while submitting the form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact">
      <div className="contact-details">
        <Typography variant="h3">Contact Details</Typography>
        <Typography>
          <strong>Address:</strong> 123 Main Street, Cityville, State, Zip Code
        </Typography>
        <Typography>
          <strong>Phone:</strong> (555) 123-4567
        </Typography>
        <Typography>
          <strong>Email:</strong> info@zoomwheels.com
        </Typography>
      </div>

      <form onSubmit={submit} id="contact-section">
        <TextField
          id="email"
          label="Email"
          type="email"
          placeholder="user@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
        />

        <TextField
          id="message"
          label="Message"
          multiline
          rows={4}
          placeholder="Let us know what's on your mind..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          fullWidth
        />

        <Button type="submit" variant="contained" color="primary" disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </Button>
      </form>

      <Snackbar open={submitted || !!error} autoHideDuration={6000} onClose={handleClose}>
        <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity={submitted ? "success" : "error"}>
          {submitted ? "We have received your message. Thank you for contacting us!" : error}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default ContactUs;
