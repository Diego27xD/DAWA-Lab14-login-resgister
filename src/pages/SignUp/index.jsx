import { Box, Paper, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import Swal from "sweetalert2";
import Navbar from "../../components/Navbar";
import { post, get } from "../../services";
const SignUp = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await post("users/signup", values);

    if (response.ok) {
      Swal.fire({
        text: "Usuario creado correctamente",
        icon: "success",
      });
    } else {
      Swal.fire({
        text: "Error",
        icon: "error",
      });
    }
  };

  return (
    <>
      <Navbar />
      <Box
        display="flex"
        height="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <Paper
          sx={{
            width: 400,
            border: "1px solid blue",
            boxShadow: "8px 8px 8px 4px rgba(38, 135, 211,0.2)",
          }}
        >
          <Box p={3} component="form" onSubmit={handleSubmit} method="post">
            <Typography
              textAlign="center"
              variant="h4"
              sx={{ fontFamily: "'Rubik Distressed', cursive" }}
              fontSize="50px"
            >
              Sign Up
            </Typography>
            <Box my={3}>
              <TextField
                name="name"
                label="Full name"
                value={values.name}
                onChange={handleInputChange}
                fullWidth
                required
              />
            </Box>
            <Box my={3}>
              <TextField
                name="email"
                type="email"
                label="E-mail"
                value={values.email}
                onChange={handleInputChange}
                fullWidth
                required
              />
            </Box>
            <Box my={3}>
              <TextField
                name="password"
                type="password"
                label="Password"
                value={values.password}
                onChange={handleInputChange}
                fullWidth
                required
              />
            </Box>
            <Box my={3}>
              <Button type="submit" fullWidth variant="contained">
                Register
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default SignUp;
