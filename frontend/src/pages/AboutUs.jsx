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
} from '@chakra-ui/react';
import React from 'react';
import './Styles/AboutUs.css';
import { AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';

const AboutUs = () => {
	return (
		<div>
			<Stack class={'about-section'} spacing={3} justifyContent={'center'} alignContent={'center'}>
				<Text fontSize='5xl' as='b' textAlign={'center'}>
					Who We Are
				</Text>
				<Text fontSize='xl'>Sa Kardesim </Text>
			</Stack>

			<Stack spacing={3} justifyContent={'center'} alignContent={'center'}>
				<Text fontSize='5xl' as='b' textAlign={'center'}>
					Meet Our Team
				</Text>
			</Stack>
			<SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(500px, 1fr))'>
				<Card>
					<CardBody>
						<Image
							src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
							alt='Green double couch with wooden legs'
							borderRadius='lg'
						/>
						<Stack mt='6' spacing='3'>
							<Heading size='md'>Cüneyt Uğur Öngün</Heading>
							<Heading color='gray' size='sm'>
								CEO & Founder
							</Heading>
							<Text>Some text that describes me lorem ipsum ipsum lorem.</Text>
							<Text>c.ugurongun@gmail.com</Text>
						</Stack>
					</CardBody>
					<CardFooter>
						<ButtonGroup>
							<a href='https://www.instagram.com/cinoxil' target='_blank' rel='noreferrer'>
								<IconButton bgColor={'transparent'}>
									<AiOutlineInstagram size={'40px'} />
								</IconButton>
							</a>
							<a
								href='https://www.linkedin.com/in/c%C3%BCneyt-u%C4%9Fur-%C3%B6ng%C3%BCn-650162131/'
								target='_blank'
								rel='noreferrer'
							>
								<IconButton bgColor={'transparent'}>
									<AiOutlineLinkedin size={'40px'} />
								</IconButton>
							</a>
						</ButtonGroup>
					</CardFooter>
				</Card>
				<Card>
					<CardBody>
						<Image
							src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
							alt='Green double couch with wooden legs'
							borderRadius='lg'
						/>
						<Stack mt='6' spacing='3'>
							<Heading size='md'>Cüneyt Uğur Öngün</Heading>
							<Heading color='gray' size='sm'>
								CEO & Founder
							</Heading>
							<Text>Some text that describes me lorem ipsum ipsum lorem.</Text>
							<Text>c.ugurongun@gmail.com</Text>
						</Stack>
					</CardBody>
					<CardFooter>
						<ButtonGroup>
							<a href='https://www.instagram.com/cinoxil' target='_blank' rel='noreferrer'>
								<IconButton bgColor={'transparent'}>
									<AiOutlineInstagram size={'40px'} />
								</IconButton>
							</a>
							<a
								href='https://www.linkedin.com/in/c%C3%BCneyt-u%C4%9Fur-%C3%B6ng%C3%BCn-650162131/'
								target='_blank'
								rel='noreferrer'
							>
								<IconButton bgColor={'transparent'}>
									<AiOutlineLinkedin size={'40px'} />
								</IconButton>
							</a>
						</ButtonGroup>
					</CardFooter>
				</Card>
				<Card>
					<CardBody>
						<Image
							src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
							alt='Green double couch with wooden legs'
							borderRadius='lg'
						/>
						<Stack mt='6' spacing='3'>
							<Heading size='md'>Cüneyt Uğur Öngün</Heading>
							<Heading color='gray' size='sm'>
								CEO & Founder
							</Heading>
							<Text>Some text that describes me lorem ipsum ipsum lorem.</Text>
							<Text>c.ugurongun@gmail.com</Text>
						</Stack>
					</CardBody>
					<CardFooter>
						<ButtonGroup>
							<a href='https://www.instagram.com/cinoxil' target='_blank' rel='noreferrer'>
								<IconButton bgColor={'transparent'}>
									<AiOutlineInstagram size={'40px'} />
								</IconButton>
							</a>
							<a
								href='https://www.linkedin.com/in/c%C3%BCneyt-u%C4%9Fur-%C3%B6ng%C3%BCn-650162131/'
								target='_blank'
								rel='noreferrer'
							>
								<IconButton bgColor={'transparent'}>
									<AiOutlineLinkedin size={'40px'} />
								</IconButton>
							</a>
						</ButtonGroup>
					</CardFooter>
				</Card>
			</SimpleGrid>
		</div>
	);
};

export default AboutUs;
