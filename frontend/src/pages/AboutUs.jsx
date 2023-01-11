import {
	SimpleGrid,
	Card,
	Heading,
	CardBody,
	Text,
	CardFooter,
	Image,
	Stack,
	ButtonGroup,
	IconButton,
	VStack,
	Box,
	GridItem,
} from '@chakra-ui/react';
import React from 'react';
import './Styles/AboutUs.css';
import { AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';

const AboutUs = () => {
	return (
		<div>
			<VStack w={{ base: '90%' }} m='auto' justify={'center'}>
				<Box spacing={3} justifyContent={'center'} alignContent={'center'}>
					<Text fontSize='5xl' as='b' textAlign={'center'}>
						Meet Our Team
					</Text>
				</Box>

				<Box>
					<SimpleGrid gap={4} columns={[1, 2, 3]}>
						{/* columns={[1, 2, 3] en kucuk boyutlu ekran icin 1, orta ekran icin 2, buyuk ekran icin 3 column yapiyor responsive */}
						<GridItem>
							<Card>
								<CardBody>
									<Image
										src='https://media.licdn.com/dms/image/D4D03AQFbMsj6YOyRMA/profile-displayphoto-shrink_800_800/0/1672406509414?e=1678924800&v=beta&t=ejgZ54405xG4O3XDxydzQOt1IOOZ4kJ-J7t6ETmvTnI'
										alt='Green double couch with wooden legs'
										borderRadius='lg'
										htmlWidth={'100%'}
										htmlHeight={'100%'}
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
						</GridItem>
						<GridItem w='100%'>
							<Card>
								<CardBody>
									<Image
										src='https://media.licdn.com/dms/image/D4D03AQHcGXGrK03H8A/profile-displayphoto-shrink_800_800/0/1672413215426?e=1678924800&v=beta&t=qz9AUKXnew0L-oDFQMD1HRYyJy__afkLXlp__C3lpgQ'
										alt='Green double couch with wooden legs'
										borderRadius='lg'
										htmlWidth={'100%'}
										htmlHeight={'100%'}
									/>
									<Stack mt='6' spacing='3'>
										<Heading size='md'>Okan Erciyas</Heading>
										<Heading color='gray' size='sm'>
											CEO & Founder
										</Heading>
										<Text>Some text that describes me lorem ipsum ipsum lorem.</Text>
										<Text>okanerciyas8@gmail.com</Text>
									</Stack>
								</CardBody>
								<CardFooter>
									<ButtonGroup>
										<a
											href='https://www.instagram.com/erciyas.okan/'
											target='_blank'
											rel='noreferrer'
										>
											<IconButton bgColor={'transparent'}>
												<AiOutlineInstagram size={'40px'} />
											</IconButton>
										</a>
										<a
											href='https://www.linkedin.com/in/okan-erciyas-006959192/'
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
						</GridItem>
						<GridItem w='100%'>
							<Card>
								<CardBody>
									<Image
										src='https://media.licdn.com/dms/image/D4D03AQEd1bsAbK1EtQ/profile-displayphoto-shrink_400_400/0/1669763327141?e=1677110400&v=beta&t=Z-D2ZxPS4cOMVt2BIKY8xkTGcPo93fM_BM1PVCzh3f4'
										alt='Green double couch with wooden legs'
										borderRadius='lg'
										htmlWidth={'100%'}
										htmlHeight={'100%'}
									/>
									<Stack mt='6' spacing='3'>
										<Heading size='md'>Kadir Can Tüfekci</Heading>
										<Heading color='gray' size='sm'>
											CEO & Founder
										</Heading>
										<Text>Some text that describes me lorem ipsum ipsum lorem.</Text>
										<Text>kctufekci@hotmail.com</Text>
									</Stack>
								</CardBody>
								<CardFooter>
									<ButtonGroup>
										<a href='https://www.instagram.com/kctuf/' target='_blank' rel='noreferrer'>
											<IconButton bgColor={'transparent'}>
												<AiOutlineInstagram size={'40px'} />
											</IconButton>
										</a>
										<a
											href='https://www.linkedin.com/in/kadir-can-t%C3%BCfekci-78b038230/'
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
						</GridItem>
					</SimpleGrid>
				</Box>
			</VStack>
		</div>
	);
};

export default AboutUs;
