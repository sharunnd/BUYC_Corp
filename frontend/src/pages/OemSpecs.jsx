import {
  Box,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import { getAllOemSpecs } from "../redux/oemReducer/action";
import { OemSpecCard } from "../components/OemSpecCard";

export const OemSpecs = () => {
  const dispatch = useDispatch();
  const oemSpecs = useSelector((store) => store.oemReducer.oemSpecs);
  const isLoading = useSelector((store) => store.oemReducer.isLoading);
  useEffect(() => {
    dispatch(getAllOemSpecs);
  }, []);
  console.log(isLoading);
  return (
    <Box mb={300}>
      <TableContainer p={10}>
        <Table variant="striped" colorScheme="gray">
          <TableCaption>
            Original Equipment Manufacturers Specifications
          </TableCaption>
          <Thead>
            <Tr>
              <Th textAlign="center">model</Th>
              <Th textAlign="center">Year of Model</Th>
              <Th textAlign="center">Price</Th>
              <Th textAlign="center">Available Colors</Th>
              <Th textAlign="center">Mileage</Th>
              <Th textAlign="center">Power (in BHP)</Th>
              <Th textAlign="center">Max Speed</Th>
            </Tr>
          </Thead>
          {isLoading ? (
            <Spinner mt={50} ml={700} />
          ) : (
            <Tbody>
              {oemSpecs &&
                oemSpecs.map((item) => (
                  <OemSpecCard key={item._id} {...item} />
                ))}
            </Tbody>
          )}
        </Table>
      </TableContainer>
    </Box>
  );
};
