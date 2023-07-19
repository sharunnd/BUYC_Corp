import { Td, Tr } from "@chakra-ui/react"



export const OemSpecCard = ({Max_Speed,Power,Year_of_Model,mileage,model,price,_id,available_colors})=>{
    return(
            <Tr>
              <Td textAlign="center">{model}</Td>
              <Td textAlign="center">{Year_of_Model}</Td>
              <Td textAlign="center">{price}</Td>
              <Td textAlign="center">{available_colors.join(",")}</Td>
              <Td textAlign="center">{mileage}</Td>
              <Td textAlign="center">{Power}</Td>
              <Td textAlign="center">{Max_Speed}</Td>
            </Tr>
    )
}