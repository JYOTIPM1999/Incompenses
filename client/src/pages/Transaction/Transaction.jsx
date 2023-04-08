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
  // const [database, setDatabase] = useState([]);

  // useEffect(() => {
  //   setDatabase(data.data);
  // }, []);

  const groupedData = data.data.reduce((acc, item) => {
    if (!acc[item.date]) {
      acc[item.date] = [];
    }
    acc[item.date].push(item);
    return acc;
  }, {});

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
        {Object.keys(groupedData).map((date) => {
          return (
            <Table
              key={date}
              variant="striped"
              bgGradient="linear(to-r, red.400,orange.400,yellow.500)"
              // bgClip="text"
            >
              <Thead>
                <Tr>
                  <Th>Date:-{date}</Th>
                  <Th>Category</Th>
                  <Th>Desc</Th>
                  <Th isNumeric>Income/Expense</Th>
                  <Th>Edit</Th>
                  <Th>Delete</Th>
                </Tr>
              </Thead>
              <Tbody>
                {groupedData[date].map((el, i) => (
                  <Tr key={i}>
                    <Td isNumeric>{el.id}</Td>
                    <Td>
                      {el.category} ({el.account})
                    </Td>
                    <Td>{el.description}</Td>
                    <Td isNumeric>{el.amount}</Td>
                    <Td>
                      <Button colorScheme="green">Edit</Button>
                    </Td>
                    <Td>
                      <Button colorScheme="red">Delete</Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          );
        })}
      </TableContainer>
    </>
  );
};

export default Transaction;
