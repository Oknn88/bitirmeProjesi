import React, { useState } from 'react';
import { Box, Flex, Spacer } from '@chakra-ui/react';
import HistoryMap from './../components/HomePage/HistoryMap';
import CurrentMap from './../components/HomePage/CurrentMap';
import DeviceMenu from '../components/HomePage/DeviceMenu';

const Home = () => {
	const [locations, setLocations] = useState();

	const pullData = (data) => {
		setLocations(data);
	};

	return (
		<div className='home'>
			<Flex>
				<Box flex={'1'}>
					<CurrentMap />
				</Box>

				<Box flex={'2'} position={'relative'}>
					<DeviceMenu func={pullData} />
				</Box>
			</Flex>
		</div>
	);
};

export default Home;
