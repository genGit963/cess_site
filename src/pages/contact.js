import { Box, Button, Divider, TextField, Typography, colors } from "@mui/material";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const service_id = "service_htzqyb4";
  const template_id = "template_t3co5u3";
  const public_key = "NnQe9oqgaQ0Z_H90l";

  const emailTemplate = {
    from_name: Name,
    from_email: email,
    to_name: "CESS",
    message: message,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(emailTemplate);
    try {
      setLoading(true);
      const response = await emailjs.send(
        service_id,
        template_id,
        emailTemplate,
        public_key
      );
      if (response) {
        alert("Thank You ! \n We will reply you soon. ");
      }
    } catch (err) {
      alert("Email Sending Failed !");
    } finally {
      setTimeout(() => setLoading(false), 400);
    }
  };
  return (
    <Box flexGrow={1} fontFamily={"Poppins"} sx={{ margin: "4% 1%" }}>
      <Typography
        variant="h4"
        sx={{
          margin: "1% 2% 0% 0",
          color: colors.blue[900],
          fontWeight: 500,
          textAlign: "center",
        }}
      >
        Contact
      </Typography>
      <Divider />
      <h2 style={{ margin: "1% 2% 2% 0" }}>We are just a mail away.</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          type="outlined"
          required
          sx={{ fontFamily: "Poppins", margin: "1% 4% 2% 0", width: "50%" }}
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          label="Email"
          type="outlined"
          required
          sx={{ fontFamily: "Poppins", margin: "1% 4% 2% 0", width: "70%" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label="Message"
          type="outlined"
          required
          fullWidth
          multiline
          sx={{
            margin: "1% 2% 2% 0",
            fontFamily: "Poppins",
          }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {loading ? (
          <Typography>Sending...</Typography>
        ) : (
          <Button
            variant="contained"
            type="submit"
            sx={{ margin: "1% 2% 2% 0" }}
          >
            Send Mail
          </Button>
        )}
      </form>
    </Box>
  );
};

export default Contact;
