import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Container } from "@mui/material";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="xl">
        <Typography variant="h4" textAlign="center" my={3} fontFamily="'Rubik Distressed', cursive" fontSize="80px">
          BIENVENIDO A MI APLICACION
        </Typography>

        <CardMedia
          component="img"
          height="400"
          image="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="home.jpg"
          
        />
      </Container>
    </>
  );
};

export default Home;
