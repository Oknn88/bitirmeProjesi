import React from 'react';
import {
	Img,
	SimpleGrid,
	Card,
	CardHeader,
	Heading,
	CardBody,
	Text,
	CardFooter,
	Button,
	Image,
	Stack,
	ButtonGroup,
	IconButton,
	Select,
	Input,
	Textarea, 
	Center,
} from '@chakra-ui/react';

import './Styles/AboutUs.css';


const Contact = () => {
	return( 
	<div>
		<Stack class={'about-section'} spacing={3} justifyContent={'center'} alignContent={'center'}>
			<Text fontSize='5xl' as='b' textAlign={'center'}>
				Contact Us
			</Text>
		</Stack>
		<Stack spacing={3} justifyContent={'center'} alignContent={'center'}>
			<Text fontSize='5xl' as='b' textAlign={'center'}>
				Swing by for a cup of coffee, or leave us a message:
			</Text>
		</Stack>
		<SimpleGrid spacing={20} templateColumns='repeat(auto-fill, minmax(500px, 1fr))'>
				<Stack spacing={2} justifyContent={'center'} alignContent={'center'}>
					<Image
							src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
							alt='Green double couch with wooden legs'
							borderRadius='lg'
						/>
				</Stack>
			<Stack spacing={2} justifyContent={'center'} alignContent={'center'}>
				<Text>Fist Name</Text>
        		<Input  size='md' />
        		<Text>Last Name</Text>
        		<Input size='md' />
        		<Text>Country</Text>
        		<Select placeholder='Select option'>
  					<option value='option1'>USA</option>
  					<option value='option2'>Canada</option>
  					<option value='option3'>Australia</option>
  					<option value='option3'>Turkey</option>
				</Select>
        		<Text>Subject</Text>
        		<Textarea placeholder='Some text that describes me lorem ipsum ipsum lorem.' />
				<ButtonGroup pt={'1rem'}>
					<Button colorScheme={'teal'} type='submit'>
						Submit
					</Button>
			</ButtonGroup>
			</Stack>	
				
		</SimpleGrid>
				
      			


	</div>
	);
};

export default Contact;
