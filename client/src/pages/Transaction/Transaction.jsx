import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  ModalFooter,
  Modal,
  Stack,
  Input,
  InputGroup,
  FormControl,
  FormLabel,
  Flex,
  Select,
} from "@chakra-ui/react";
import data from "../../data/db.json";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Transaction = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  console.log(selectedDate);
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        onClick={onOpen}
      >
        ADD TRANSACTION
      </Button>
      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        size={"xl"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Transaction</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="bold" mb="1rem">
              You can scroll the content behind the modal
            </Text>

            <Flex justify={"center"}>
              <Stack>
                <FormControl isRequired>
                  <FormLabel>Select Type</FormLabel>
                  <Select placeholder="Select option">
                    <option value="Income">Income</option>
                    <option value="Expense">Expense</option>
                  </Select>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Select Date</FormLabel>
                  <div>
                    <DatePicker
                      selected={selectedDate}
                      onChange={handleDateChange}
                      dateFormat="yyyy-MM-dd"
                      placeholderText="Ex:-2023-04-06"
                    />
                    {selectedDate && (
                      <div>
                        <select
                          value={selectedDate.getDate()}
                          onChange={(e) =>
                            setSelectedDate(
                              new Date(
                                selectedDate.getFullYear(),
                                selectedDate.getMonth(),
                                e.target.value
                              )
                            )
                          }
                        >
                          {[...Array(31).keys()].map((day) => (
                            <option key={day} value={day + 1}>
                              {day + 1}
                            </option>
                          ))}
                        </select>
                        <select
                          value={selectedDate.getMonth()}
                          onChange={(e) =>
                            setSelectedDate(
                              new Date(
                                selectedDate.getFullYear(),
                                e.target.value,
                                selectedDate.getDate()
                              )
                            )
                          }
                        >
                          {[
                            "January",
                            "February",
                            "March",
                            "April",
                            "May",
                            "June",
                            "July",
                            "August",
                            "September",
                            "October",
                            "November",
                            "December",
                          ].map((month, index) => (
                            <option key={index} value={index}>
                              {month}
                            </option>
                          ))}
                        </select>
                        <select
                          value={selectedDate.getFullYear()}
                          onChange={(e) =>
                            setSelectedDate(
                              new Date(
                                e.target.value,
                                selectedDate.getMonth(),
                                selectedDate.getDate()
                              )
                            )
                          }
                        >
                          {[...Array(10).keys()].map((year) => (
                            <option
                              key={year}
                              value={selectedDate.getFullYear() + year}
                            >
                              {selectedDate.getFullYear() + year}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>
                </FormControl>
                <FormControl>
                  <FormLabel>Mode of Transaction</FormLabel>
                  <Select placeholder="Select option">
                    <option value="Cash">Cash</option>
                    <option value="Account">Account</option>
                    <option value="Card">Card</option>
                  </Select>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Category</FormLabel>
                  <Select placeholder="Select Option">
                    <option value="Food">Food</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Recharge">Recharge</option>
                  </Select>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Amount</FormLabel>
                  <InputGroup>
                    <Input type="number" />
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Description</FormLabel>
                  <InputGroup>
                    <Input type="text" />
                  </InputGroup>
                </FormControl>
              </Stack>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="solid" colorScheme="green" onClick={onClose}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

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
