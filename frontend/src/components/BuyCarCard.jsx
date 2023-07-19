import { Box, Button, Flex, GridItem, Image, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, UnorderedList } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
    <GridItem boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" p={5} rounded={10}>
      <Image src={image} alt="car" w={"100%"} height={300} />
      <Text>{title}</Text>
      <Text mt={2}>Price: ₹{price}</Text>
      <Button mt={2} onClick={openModal}>View Details</Button>
      <Flex mt={2} justifyContent={"space-around"}>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </Flex>
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
