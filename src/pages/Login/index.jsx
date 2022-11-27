import { post } from "../../services";
import { useState } from "react";
import { Box, Paper, Typography, TextField, Button } from "@mui/material";
import Swal from "sweetalert2";
import Navbar from "../../components/Navbar";
const Login = () => {
  const [values, setValues] = useState({
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
    const response = await post("users/login", values);
    if (response.ok) {
      Swal.fire({
        text: "Login correct! El usurio está registrado",
        icon: "success",
      });
    } else {
      Swal.fire({
        text: "Usuario o email no registrado",
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
              Login
            </Typography>
            <Box my={3}>
              <TextField
                name="email"
                type="email"
                label="Email"
                value={values.email}
                onChange={handleInputChange}
                fullWidth
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
              />
            </Box>
            <Box my={3}>
              <Button type="submit" fullWidth variant="contained">
                Login
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default Login;
