import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

export default function AddNote() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  //   const [alldta,setAlldata] = useState(JSON.parse(localStorage.getItem('datatask')) || [])

  function addNotes() {
    let num = Math.random();
    num = String(num);
    console.log(num);
    let obj = { title, description, date, id: num };
    let alldta = JSON.parse(localStorage.getItem("datatask")) || [];
    localStorage.setItem("datatask", JSON.stringify([...alldta, obj]));
    onClose();
    alert("Successfuly add note");
    window.location.reload();
  }
  return (
    <>
      <Button
        colorScheme={"blue"}
        mt={"10px"}
        ml={"40%"}
        w={"250px"}
        onClick={onOpen}
      >
        Add Note
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                ref={initialRef}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Input
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Date</FormLabel>
              <Input
                type={"date"}
                onChange={(e) => setDate(e.target.value)}
                ref={initialRef}
                placeholder="Date"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={addNotes} colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
