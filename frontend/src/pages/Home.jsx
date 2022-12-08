import React from 'react';
import { Box, Flex, Spacer } from '@chakra-ui/react';
import Map from './../components/HomePage/Map';
import DeviceMenu from '../components/HomePage/DeviceMenu';

const Home = () => {
	return (
		<div className='home'>
			<Flex>
				<Box flex={'1'}>
					<Map />
				</Box>

				<Box flex={'2'} position={'relative'}>
					<DeviceMenu />
				</Box>
			</Flex>
		</div>

		/* <div>
			<Flex>
				<Box w='70px' h='10' bg='red.500' />
				<Spacer />
				<Box w='170px' h='10' bg='red.500' />
				<Spacer />
				<Box w='180px' h='10' bg='red.500' />
			</Flex>
		</div> */
		// <HStack spacing='10px'>
		// 	<Box w='100px' h='40px' bg='yellow.200'>
		// 		<Map />
		// 	</Box>

		// 	<Box w='50px' h='40px' bg='tomato'>
		// 		<DeviceMenu />
		// 	</Box>
		// </HStack>
	);
};

export default Home;
