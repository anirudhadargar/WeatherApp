import React from "react";
import { useState, useEffect } from "react";
import { Box, InputBase, Button, styled } from "@mui/material";
import { getWeather } from "../services/api";

const Container = styled(Box)({
  background: "#445A6F",
  padding: 10,
});

const Input = styled(InputBase)({
  color: "#FFF",
  marginRight: 20,
  fontSize: 18,
});

const GetButton = styled(Button)({
  background: "#e67e22",
});

const Form = ({ setResult }) => {
  const [data, setData] = useState({ city: " ", country: " " });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value }); // using rest operator so that new data is appended and not overriden
    console.log(data);
  };

  const getWeatherInfo = async () => {
    var response = await getWeather(data.city, data.country);
    setResult(response);
  };

  return (
    <Container>
      <Input placeholder="City" name="city" onChange={(e) => handleChange(e)} />
      <Input
        placeholder="Country"
        name="country"
        onChange={(e) => handleChange(e)}
      />
      <GetButton variant="contained" onClick={() => getWeatherInfo()}>
        Get Weather
      </GetButton>
    </Container>
  );
};

export default Form;
