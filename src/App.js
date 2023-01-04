import logo from './logo.svg';
import './App.css';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

import { useDisclosure,Button,FormLabel,Input,FormControl } from '@chakra-ui/react'

function App() {
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
              <FormLabel>Type your location:</FormLabel>
              <Input  placeholder='Location...' />
            </FormControl>

          
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
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
