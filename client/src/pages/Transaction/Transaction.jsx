import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from "@chakra-ui/react";

const Transaction = () => {
  return (
    <>
      <Button
        position={"absolute"}
        right={"100px"}
        top={"20px"}
        colorScheme="orange"
      >
        ADD
      </Button>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Transaction Date</Th>
              <Th>Category</Th>
              <Th>Desc</Th>
              <Th isNumeric>Income/Expense</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td isNumeric>1</Td>
              <Td>Study mat</Td>
              <Td>Reaceived from Bapa</Td>
              <Td isNumeric>5000</Td>
              <Td>
                <Button>Edit</Button>
              </Td>
              <Td>
                <Button>Delete</Button>
              </Td>
            </Tr>
            <Tr>
              <Td isNumeric>2</Td>
              <Td>Gala Khia</Td>
              <Td>Paid to Riki</Td>
              <Td isNumeric>-2000</Td>
              <Td>
                <Button>Edit</Button>
              </Td>
              <Td>
                <Button>Delete</Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Transaction;
