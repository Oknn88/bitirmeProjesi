import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Button, useColorMode } from '@chakra-ui/react';

const ToggleColorMode = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Button onClick={() => toggleColorMode()} width={'30px'} height={'30px'}>
			{colorMode === 'dark' ? <SunIcon color={'orange.200'} /> : <MoonIcon color={'blue.700'} />}
		</Button>
	);
};

export default ToggleColorMode;
