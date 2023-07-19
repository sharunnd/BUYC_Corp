import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { addCarDetails } from "../redux/sellReducer/action";
import { useDispatch } from "react-redux";

export const SellCar = () => {
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
  const [descr, setDesc] = useState([]);
  const [model, setModel] = useState("");
  const [tempDescription, setTempDescription] = useState("");
  const toast = useToast()

 const dispatch = useDispatch()
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
  const handleDetails = () => {
    const carObj = {
      color,
      description: [...descr],
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
    dispatch(addCarDetails(carObj))
    toast({
      position: "top",
      title: `Car details uploaded`,
      status: "success",
      duration: 1000,
      isClosable: true,
    });
  };
  const addDescriptionItem = () => {
    if (tempDescription.trim() !== "") {
      setDesc([...descr, tempDescription]);
      setTempDescription("");
    }
  };
  return (
    <Box>
      <Box width="40%" m={"auto"}>
        <FormControl>
          <FormLabel>Model</FormLabel>
          <Input type="text" onChange={(e) => setModel(e.target.value)} />
          <FormLabel>color</FormLabel>
          <Input type="text" onChange={(e) => setColor(e.target.value)} />
          <FormLabel>price</FormLabel>
          <Input type="number" onChange={(e) => setPrice(e.target.value)} />
          <FormLabel>Kilometers</FormLabel>
          <Input type="number" onChange={(e) => setKM(e.target.value)} />
          <FormLabel>Major scratches</FormLabel>
          <Input type="number" onChange={(e) => setScratch(e.target.value)} />
          <FormLabel>Mileage</FormLabel>
          <Input type="number" onChange={(e) => setMileage(e.target.value)} />
          <FormLabel>Number of accidents</FormLabel>
          <Input type="number" onChange={(e) => setAccidents(e.target.value)} />
          <FormLabel>original_paint</FormLabel>
          <Input type="text" onChange={(e) => setPaint(e.target.value)} />
          <FormLabel>previous_buyers</FormLabel>
          <Input
            type="number"
            onChange={(e) => setPreviousBuyers(e.target.value)}
          />
          <FormLabel>Registration place</FormLabel>
          <Input type="text" onChange={(e) => setRegPlace(e.target.value)} />
          <FormLabel>Description</FormLabel>
          <Flex>
            <Input
              type="text"
              value={tempDescription}
              onChange={(e) => setTempDescription(e.target.value)}
            />
            <Button onClick={addDescriptionItem}>Add Description</Button>
          </Flex>
          <FormLabel>Select Image</FormLabel>
          <Input type="file" onChange={convertToBase64} />
        </FormControl>
        <Button onClick={handleDetails} mt={10} mb={100}>Add Details</Button>
      </Box>
    </Box>
  );
};
