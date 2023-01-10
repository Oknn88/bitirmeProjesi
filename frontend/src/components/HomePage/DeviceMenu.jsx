import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
	ButtonGroup,
	useColorMode,
	IconButton,
	Text,
	Flex,
} from '@chakra-ui/react';
import { FaHistory } from 'react-icons/fa';
import { BiCurrentLocation } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import env from 'react-dotenv';
import axios from 'axios';

const DeviceMenu = (props) => {
	const { colorMode } = useColorMode();
	const [date, setDate] = useState(new Date());

	const handleHistoryClick = async () => {
		const response = await axios.get(`http://${env.LOCATION_API_URL}`, {
			params: {
				from: JSON.stringify(date.from),
				to: JSON.stringify(date.to),
			},
		});

		const locations = response.data.locs;

		props.func(locations);
	};

	const handleCurrentLocationClick = () => {
		props.delFunc();
	};

	return (
		<div display={'flex'} width={'100vw'}>
			<Accordion>
				<AccordionItem width={'16vw'}>
					<h2>
						<AccordionButton>
							<Box flex='1' textAlign='left'>
								<Text>1.Araba</Text>
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						<Flex>
							<Box w='70px'>
								<Text>Brand:</Text>
							</Box>
							<Box>
								<Text>Ford</Text>
							</Box>
						</Flex>
						<Flex>
							<Box w='70px'>
								<Text>Model:</Text>
							</Box>
							<Box>
								<Text>Mustang</Text>
							</Box>
						</Flex>
						<Flex>
							<Box w='70px'>
								<Text>Year</Text>
							</Box>
							<Box>
								<Text>2022</Text>
							</Box>
						</Flex>
						<Flex>
							<Box ml={'-20px'}>
								<DayPicker
									styles={{
										tbody: { fontSize: '10px' },
									}}
									mode='range'
									selected={date}
									onSelect={setDate}
									footer={<p></p>}
								/>
							</Box>
						</Flex>

						<ButtonGroup pt={2}>
							<IconButton bg={colorMode === 'light' ? '#49be25' : '#49be25'} size={'xs'}>
								<BiCurrentLocation onClick={handleCurrentLocationClick} />
							</IconButton>
							<IconButton bg={colorMode === 'light' ? '#FF8C00' : '#FFA500'} size={'xs'}>
								<FaHistory onClick={handleHistoryClick} />
							</IconButton>
							<IconButton bg={'#FF0000'} size={'xs'}>
								<AiFillDelete />
							</IconButton>
						</ButtonGroup>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</div>
	);
};

export default DeviceMenu;
