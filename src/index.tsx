import React from "react";
import ReactDOM from "react-dom";
import reactToWebComponent from "react-to-webcomponent";
import {
  Box,
  Button,
  Heading,
  Input,
  Stack,
  inputButton,
  Flex,
  Label,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import {
  ChakraProvider,
  ColorModeProvider,
  useColorMode,
  Flex,
  Button,
} from '@chakra-ui/react';
interface State {
  count: number;
}
interface Props {}

export default class MyCounter extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {

    const styles = `.my-counter * 
          font-size: 150%;
        }

        .my-counter span {
          width: 4rem;
          display: inline-block;
          text-align: center;
        }

`;
const MyButton = (props) => <Button py={6} m={10} bg="blue.600" fontWeight="normal" textColor="white">{props.children}</Button>;
const MyButtonMath = (props) => <Button py={4} m={10} bg="green.600" fontWeight="normal" textColor="white">{props.children}</Button>;
const MyInput = () => <Input w={350} py={5} my={2} type="email" bg="gray.50"></Input>
    return (
      <div className="my-counter">
        <style>{styles}</style>
             <ChakraProvider resetCSS>
        <Flex w="100%" h="100%" flexDirection="column" alignItems="center">
        <Heading mt={50} fontWeight="normal">Chakra-UI Web Components Made by Sean Modd</Heading>
        <Heading mt={50} fontSize="16px" fontWeight="normal">react-chakra-webcomponents-seanmodd</Heading>
        <Flex h="100%" my={100} flexDirection="column" align="center">
        <MyInput />
        <MyInput />
        <MyInput />
        <MyButton>Submit!!</MyButton>
        </Flex>
        <Box w="100%" h="500px" alignItems="center" align="center" >
        <MyButtonMath onClick={() => this.setState({ count: this.state.count - 1 })}>
          -
        </MyButtonMath>
        <span>{this.state.count}</span>
        
        
        <MyButtonMath onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </MyButtonMath>
        </Box>
        </Flex>
              </ChakraProvider>
      </div>
    );
  }
}

customElements.define(
  "my-counter",
  reactToWebComponent(MyCounter, React, ReactDOM)
);
