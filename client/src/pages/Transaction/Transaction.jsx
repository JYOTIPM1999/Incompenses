import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
} from "@chakra-ui/react";

import data from "../../data/db.json";

const Transaction = () => {
  const [database, setDatabase] = useState([]);

  useEffect(() => {
    setDatabase(data.data);
  }, []);

  for (let i = 0; i < database.length; i++) {
    console.log(database[i].date);
  }
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
            {database.map((el, i) => (
              <Tr key={i}>
                <Td isNumeric>{el.id}</Td>
                <Td>
                  {el.category} ({el.account})
                </Td>
                <Td>{el.description}</Td>
                <Td isNumeric>{el.amount}</Td>
                <Td>
                  <Button>Edit</Button>
                </Td>
                <Td>
                  <Button>Delete</Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Transaction;
