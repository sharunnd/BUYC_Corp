import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const Edit = () => {
  const allCars = useSelector((store) => store.carsReducer.allCars);

  const token = Cookies.get("token");
  const [color, setColor] = useState("");
  const [km, setKM] = useState(0);
  const [scratch, setScratch] = useState(0);
  const [mileage, setMileage] = useState(0);
  const [accidents, setAccidents] = useState(0);
  const [orgPaint, setPaint] = useState("");
  const [image, setImage] = useState("");
  const [previous_buyers, setPreviousBuyers] = useState(0);
  const [price, setPrice] = useState(0);
  const [registration_place, setRegPlace] = useState("");
  const [model, setModel] = useState("");
  const { id } = useParams();
  const toast = useToast();

  function convertToBase64(e) {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result); //base64 encoded string
      setImage(reader.result);
    };
    reader.onerror = (error) => {
      console.log("error", error);
    };
  }
  useEffect(() => {
    try {
      axios
        .get(`https://buycars-gksq.onrender.com/cars`)
        .then((res) => {
          let item = res.data.cars.find((element) => element._id == id);
          setColor(item.color);
          setKM(item.kilometers);
          setAccidents(item.number_of_accidents);
          setMileage(item.mileage);
          setModel(item.title);
          setPaint(item.original_paint);
          setPreviousBuyers(item.previous_buyers);
          setRegPlace(item.registration_place);
          setScratch(item.major_scratches);
          setPrice(item.price);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  const handleDetails = () => {
    const carObj = {
      color,
      image,
      title: model,
      kilometers: +km,
      major_scratches: +scratch,
      mileage: +mileage,
      number_of_accidents: +accidents,
      original_paint: orgPaint,
      previous_buyers: +previous_buyers,
      registration_place,
      price: +price,
    };
    axios
      .patch(`https://buycars-gksq.onrender.com/cars/update/${id}`, carObj, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        toast({
          position: "top",
          title: `${res.data.msg}`,
          status: "success",
          duration: 1000,
          isClosable: true,
        });
      })
      .catch((err) => {
        toast({
          position: "top",
          title: `${err.response.data.msg}`,
          status: "error",
          duration: 1000,
          isClosable: true,
        });
        console.log(err);
      });
  };

  return (
    <Box>
      <Box width="40%" m={"auto"}>
        <FormControl>
          <FormLabel>Model</FormLabel>
          <Input
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
          <FormLabel>color</FormLabel>
          <Input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <FormLabel>price</FormLabel>
          <Input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <FormLabel>Kilometers</FormLabel>
          <Input
            type="number"
            value={km}
            onChange={(e) => setKM(e.target.value)}
          />
          <FormLabel>Major scratches</FormLabel>
          <Input
            type="number"
            value={scratch}
            onChange={(e) => setScratch(e.target.value)}
          />
          <FormLabel>Mileage</FormLabel>
          <Input
            type="number"
            value={mileage}
            onChange={(e) => setMileage(e.target.value)}
          />
          <FormLabel>Number of accidents</FormLabel>
          <Input
            type="number"
            value={accidents}
            onChange={(e) => setAccidents(e.target.value)}
          />
          <FormLabel>original_paint</FormLabel>
          <Input
            type="text"
            value={orgPaint}
            onChange={(e) => setPaint(e.target.value)}
          />
          <FormLabel>previous_buyers</FormLabel>
          <Input
            type="number"
            value={previous_buyers}
            onChange={(e) => setPreviousBuyers(e.target.value)}
          />
          <FormLabel>Registration place</FormLabel>
          <Input
            type="text"
            value={registration_place}
            onChange={(e) => setRegPlace(e.target.value)}
          />
          <FormLabel>Select Image</FormLabel>
          <Input type="file" onChange={convertToBase64} />
        </FormControl>
        <Button
          onClick={handleDetails}
          mt={10}
          mb={100}
          bg="#673ab7"
          _hover={{ bg: "#620cf6" }}
          color="white"
        >
          Add Details
        </Button>
      </Box>
    </Box>
  );
};
