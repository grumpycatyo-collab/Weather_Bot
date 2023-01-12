import logo from './logo.svg';
import { useState,useEffect } from 'react';
import './App.css';
import app from './data_setup.js';
import './data_setup.js'
import { getDatabase, ref, set } from "firebase/database";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'


import { useDisclosure,Button,FormLabel,Input,FormControl,Textarea,Text } from '@chakra-ui/react'

function App() {
 

  const [message, setMessage] = useState('');
  const [updated, setUpdated] = useState(message);
  const [extracted, setExtracted] = useState('');
  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const handleClick = () => {
    setUpdated(message);  
  };

  console.log(message)
  const Push = () => {  
    const db = getDatabase();
    set(ref(db, 'users/'), {
      message : message
    });
  }

  useEffect(() => {
    fetch('/data').then(res => res.json()).then(data => {
      setExtracted(data.extract);
    });
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button  align='center' width='300px'  height = '60px'  py={5} marginTop = '200'
      marginLeft='auto' marginRight='auto' position = '' display = 'flex' onClick={onOpen}>Open BOT</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Weather Forecast Bot:</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <FormControl>
            
              <FormLabel>Input your location:</FormLabel>
          <Input  type="text"
                  id="message"
                  name="message"
                  onChange={handleChange}
                  value={message}
                  placeholder='Your location'/>
            </FormControl>

          
          </ModalBody>

          <ModalFooter>
          <p> {extracted}.</p>
            <Button colorScheme='blue' mr={3} onClick={Push}>
              Send
            </Button>
            <Button onClick = {onClose} variant='ghost'>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default App;
