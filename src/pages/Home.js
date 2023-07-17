import React from "react";
import { Box, styled } from "@mui/material";
import Sunset from "../assets/images/sunset.jpg";
import Form from "../components/Form";
import Info from "../components/Info";
import { useState } from "react";

const Component = styled(Box)({
  height: "100vh",
  width: "65%",
  display: "flex",
  alignItems: "center",
  margin: "0 auto",
});

const Image = styled(Box)({
  backgroundImage: `url(${Sunset})`,
  width: "27%",
  height: "80%",
  backgroundSize: "cover",
  borderRadius: "20px 0 0 20px",
});

const Home = () => {
  const [result, setResult] = useState({});

  return (
    <Component>
      <Image></Image>
      <Box style={{ width: "73%", height: "80%" }}>
        <Form setResult={setResult}></Form>
        <Info result={result}></Info>
      </Box>
    </Component>
  );
};

export default Home;
