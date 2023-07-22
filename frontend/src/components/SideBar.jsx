import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  HStack,
  Heading,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const SideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialColor = searchParams.getAll("color");
  const [color, setColor] = useState(initialColor || []);

  const initialminPrice = searchParams.getAll("minPrice");
  const [minPrice, setMinPrice] = useState(initialminPrice || "");

  const initialmaxPrice = searchParams.getAll("maxPrice");
  const [maxPrice, setMaxPrice] = useState(initialmaxPrice || "");

  const initialminMileage = searchParams.getAll("minMileage");
  const [minMileage, setMinMileage] = useState(initialminMileage || "");

  const initialmaxMileage = searchParams.getAll("maxMileage");
  const [maxMileage, setMaxMileage] = useState(initialmaxMileage || "");
  useEffect(() => {
    let params = {
      color,
    };
    maxPrice && (params.maxPrice = maxPrice);
    minPrice && (params.minPrice = minPrice);
    maxMileage && (params.maxMileage = maxMileage);
    minMileage && (params.minMileage = minMileage);
    setSearchParams(params);
  }, [color, maxPrice, minPrice, maxMileage, minMileage]);

  const handleColor = (e) => {
    const { value } = e.target;
    let newColor = [...color];
    if (newColor.includes(value)) {
      newColor = newColor.filter((el) => el !== value);
    } else {
      newColor.push(value);
    }
    setColor(newColor);
    console.log(value);
  };

  const handlePrice = (value) => {
    if (value == "1") {
      setMaxPrice("");
      setMinPrice("");
    } else if (value == "2") {
      setMaxPrice("1000000");
      setMinPrice("");
    } else {
      setMaxPrice("");
      setMinPrice("1000000");
    }
  };

  const handleMileage = (value) => {
    if (value == "1") {
      setMaxMileage("");
      setMinMileage("");
    } else if (value == "2") {
      setMaxMileage("15");
      setMinMileage("");
    } else {
      setMaxMileage("");
      setMinMileage("15");
    }
  };
  console.log();
  return (
    <Box ml={{ base: "10px", md: "15px", lg: "50px" }} mr={10}>
      <HStack>
        <Heading
          fontSize={{ base: "15px", md: "15px", lg: "24px" }}
          textAlign="left"
          mt={10}
          mb={10}
        >
          Filters
        </Heading>
      </HStack>

      <Accordion allowToggle w={{ base: "150px", md: "150px", lg: "300px" }}>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontSize={14}>
                Price
              </Box>
              <AccordionIcon fontSize={25} />
            </AccordionButton>
          </h2>
          <AccordionPanel textAlign="left">
            <RadioGroup
              onChange={(value) => handlePrice(value)}
              defaultValue="1"
            >
              <Stack>
                <Radio value="1">Default</Radio>
                <Radio value="2">{"< 10L"}</Radio>
                <Radio value="3">{"> 10L"}</Radio>
              </Stack>
            </RadioGroup>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontSize={14}>
                Colors
              </Box>
              <AccordionIcon fontSize={25} />
            </AccordionButton>
          </h2>
          <AccordionPanel textAlign="left">
            <Stack>
              <Checkbox
                value={"white"}
                onChange={handleColor}
                defaultChecked={color.includes("white")}
              >
                White
              </Checkbox>
              <Checkbox
                value={"silver"}
                onChange={handleColor}
                defaultChecked={color.includes("silver")}
              >
                Silver
              </Checkbox>
              <Checkbox
                value={"red"}
                onChange={handleColor}
                defaultChecked={color.includes("red")}
              >
                Red
              </Checkbox>
              <Checkbox
                value={"blue"}
                onChange={handleColor}
                defaultChecked={color.includes("blue")}
              >
                Blue
              </Checkbox>
              <Checkbox
                value={"black"}
                onChange={handleColor}
                defaultChecked={color.includes("black")}
              >
                Black
              </Checkbox>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontSize={14}>
                Mileage
              </Box>
              <AccordionIcon fontSize={25} />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <RadioGroup
              onChange={(value) => handleMileage(value)}
              defaultValue="1"
            >
              <Stack>
                <Radio value="1">Default</Radio>
                <Radio value="2">{"< 15"}</Radio>
                <Radio value="3">{"> 15"}</Radio>
              </Stack>
            </RadioGroup>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};
