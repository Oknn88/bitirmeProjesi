import React from 'react';
import { Box, Flex, Spacer } from '@chakra-ui/react';
import HistoryMap from './../components/HomePage/HistoryMap';
import CurrentMap from './../components/HomePage/CurrentMap';
import DeviceMenu from '../components/HomePage/DeviceMenu';

const Home = () => {
	return (
		<div className='home'>
			<Flex>
				<Box flex={'1'} position={'relative'}>
					<CurrentMap />
				</Box>

				<Box flex={'2'} position={'relative'}>
					<DeviceMenu />
				</Box>
			</Flex>
		</div>
	);
};

export default Home;
