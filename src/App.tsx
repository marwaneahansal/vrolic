import React from 'react';
import { Button, Center, ChakraProvider } from '@chakra-ui/react';

function App() {
	return (
		<ChakraProvider>
			<Center height={'100vh'}>
				<Button colorScheme={'teal'}>Button</Button>
			</Center>
		</ChakraProvider>
	);
}

export default App;
