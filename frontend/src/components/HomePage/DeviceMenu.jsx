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
import { AiFillDelete } from 'react-icons/ai';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';

const DeviceMenu = () => {
	const { colorMode } = useColorMode();
	const [date, setDate] = useState(new Date());

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
										caption: { color: 'red' },
										tbody: { fontSize: '10px' },
									}}
									mode='single'
									selected={date}
									onSelect={setDate}
									footer={<p>Sa kardes</p>}
								/>
							</Box>
						</Flex>

						<ButtonGroup pt={2}>
							<IconButton bg={colorMode === 'light' ? '#FF8C00' : '#FFA500'} size={'xs'}>
								<FaHistory />
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
