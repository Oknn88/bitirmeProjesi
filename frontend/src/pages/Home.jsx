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
	);
};

export default Home;
