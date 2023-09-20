import {
  Box,
  Button,
  Flex,
  GridItem,
  IconButton,
  Image,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  UnorderedList,
  useToast,
} from "@chakra-ui/react";
import Cookies from "js-cookie";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCarDetails } from "../redux/carsReducer/action";
import { DeleteIcon } from "@chakra-ui/icons";
import { AiOutlineEdit } from "react-icons/ai";

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
  registration_place,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toast = useToast();
  const dispatch = useDispatch();
  const userRole = Cookies.get("role");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const token = Cookies.get("token");

  const handleDelete = () => {
    dispatch(deleteCarDetails(_id, token))
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
          title: `Unauthorized Deletion Attempt!`,
          status: "error",
          duration: 1000,
          isClosable: true,
        });
      });
  };

  return (
    <>
      <GridItem p={3}>
        <Image src={image} alt="car" w="100%" height={{ base: "auto", sm: "300px" }} />
        <Text mt={2} fontWeight={500} fontSize={{ base: "sm", sm: "xl" }}>
          {title}
        </Text>
        <Text mt={2}>Price: ₹{price}</Text>

        <Flex mt={2} justifyContent={"space-around"} alignItems={"center"}>
          {userRole === "dealer" ? (
            <Link to={`/edit/${_id}`}>
              <IconButton
                bg={"white"}
                icon={<AiOutlineEdit fontSize={{ base: "20px", sm: "24px" }} />}
              />
            </Link>
          ) : (
            ""
          )}
          <Button mt={2} fontSize={{ base: "sm", sm: "md" }} onClick={openModal}>
            View Details
          </Button>

          {userRole === "dealer" ? (
            <IconButton
              onClick={handleDelete}
              bg={"white"}
              icon={<DeleteIcon />}
              fontSize={{ base: "15px", sm: "15px" }}
            />
          ) : (
            ""
          )}
        </Flex>
      </GridItem>
      <Modal isOpen={isModalOpen} onClose={closeModal} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Price: ₹{price}</Text>
            <Box mt={5}>
              <UnorderedList textAlign={"left"}>
                {description.map((item, index) => (
                  <ListItem key={index}>{item}</ListItem>
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
