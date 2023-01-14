import logo from './logo.svg';
import { useState,useEffect } from 'react';
import './App.css';
import axios from "axios";
import app from './data_setup.js';
import './data_setup.js'
import { get, getDatabase, ref, set } from "firebase/database";
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

  const [profileData, setProfileData] = useState(null)

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

  function getData() {
    axios({
      method: "GET",
      url:"/profile",
    })
    .then((response) => {
      const res =response.data
      setProfileData(({
        extracted: res.extract}))
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })}

  
//i kind of searched for info, didn't got any, so I am gone to learn some flask and to do a small project on it

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
          <p> {profileData.extracted}.</p>
            <Button colorScheme='blue' mr={3}  onClick={() => {
          Push();
          getData();
        }}>
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
