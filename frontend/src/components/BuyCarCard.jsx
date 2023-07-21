import { Box, Button, Flex, GridItem, Image, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, UnorderedList, useToast } from "@chakra-ui/react";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CARS_DELETE_SUCCESS } from "../redux/carsReducer/actionTypes";

export const BuyCarCard = ({
  color,
  description,
  image,
  mileage,
  price,
  title,
  _id,
  userID,
  kilometers,
  major_scratches,
  number_of_accidents,
  original_paint,
  previous_buyers,
  registration_place
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toast = useToast()
    const dispatch = useDispatch()
    const userRole = Cookies.get("role")

    const openModal = () => {
    setIsModalOpen(true);
    };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const token = Cookies.get("token")
  
const handleDelete = ()=>{
    
      axios.delete(`https://buycars-gksq.onrender.com/cars/delete/${_id}`,{
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
        }).then((res)=>{
          dispatch({type:CARS_DELETE_SUCCESS})
            toast({
                position: "top",
                title: `${res.data.msg}`,
                status: "success",
                  duration: 1000,
                isClosable: true,
              });
              
    })
    .catch((err)=>{
        toast({
            position: "top",
            title: `${err.response.data.msg}`,
            status: "error",
            duration: 1000,
            isClosable: true,
          });
        console.log(err,"ajhadka");
    })
    
    
  }
  
  return (
    <>
    <GridItem boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" p={5} rounded={10}>
      <Image src={image} alt="car" w={"100%"} height={300} />
      <Text>{title}</Text>
      <Text mt={2}>Price: ₹{price}</Text>
      <Button mt={2} onClick={openModal}>View Details</Button>
      {userRole=="dealer" ? <Flex mt={2} justifyContent={"space-around"}>
        <Button><Link to={`/edit/${_id}`}>Edit</Link></Button>
        <Button onClick={handleDelete}>Delete</Button>
      </Flex>: ""}
    </GridItem>
    <Modal isOpen={isModalOpen} onClose={closeModal}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>{title}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Text>Price: ₹{price}</Text>
        <Box mt={5}>
          <UnorderedList textAlign={'left'}>
            {description.map((item) => (
              <ListItem>{item}</ListItem>
            ))}
          </UnorderedList>
        </Box>
        <Text mt={5}>Color: {color}</Text>
        <Text mt={5}>Mileage: {mileage}</Text>
        <Text mt={5}>Kilometers: {kilometers}</Text>
        <Text mt={5}>Major scratches: {major_scratches}</Text>
        <Text mt={5}>Number of accidents: {number_of_accidents}</Text>
        <Text mt={5}>Original paint: {original_paint}</Text>
        <Text mt={5}>Previous buyers: {previous_buyers}</Text>
        <Text mt={5}>Registration place: {registration_place}</Text>

      </ModalBody>
      <ModalFooter>
        <Button colorScheme="blue" onClick={closeModal}>
          Close
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
  </>
  );
};
