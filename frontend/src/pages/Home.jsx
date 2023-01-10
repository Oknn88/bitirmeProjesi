import React, { useState } from 'react';
import { Box, Flex, Spacer } from '@chakra-ui/react';
import HistoryMap from './../components/HomePage/HistoryMap';
import CurrentMap from './../components/HomePage/CurrentMap';
import DeviceMenu from '../components/HomePage/DeviceMenu';

const Home = () => {
	const [locations, setLocations] = useState(null);

	const pullData = (data) => {
		var locDatas = [];
		data.forEach((element) => {
			locDatas.push({
				latitude: element.flat,
				longitude: element.flon,
			});
		});

		setLocations(locDatas);
	};
	const delData = () => {
		setLocations(null);
	};

	return (
		<div className='home'>
			<Flex>
				<Box flex={'1'}>{locations === null ? <CurrentMap /> : <HistoryMap data={locations} />}</Box>

				<Box flex={'2'} position={'relative'}>
					<DeviceMenu func={pullData} delFunc={delData} />
				</Box>
			</Flex>
		</div>
	);
};

export default Home;
