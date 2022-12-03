import {
	VStack,
	ButtonGroup,
	FormControl,
	FormLabel,
	Button,
	FormErrorMessage,
	Input,
	InputGroup,
	InputRightElement,
	Heading,
	useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../hooks/useLogin';

const Login = () => {
	const [show, setShow] = useState(false);
	const handleClick = () => setShow(!show);
	const navigate = useNavigate();
	const { login } = useLogin();
	  const toast = useToast();

	const formik = useFormik({
		initialValues: { email: '', password: '' },
		validationSchema: Yup.object({
			email: Yup.string()
				.required('Email required!')
				.min(6, 'Email too short!')
				.max(28, 'Email too long!')
				.email('Email must be valid email'),
			password: Yup.string()
				.required('Password required!')
				.min(6, 'Password too short!')
				.max(28, 'Password too long!'),
		}),
		onSubmit: async (values, actions) => {
			const vals = { ...values };
			const { hata } = await login(values);


			if (hata) {
				toast({
        title: hata,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
				//alert(hata);
			}

			actions.resetForm();
		},
	});

	return (
		<VStack
			as={'form'}
			w={{ base: '90%', md: '500px' }}
			m='auto'
			justify={'center'}
			h='100vh'
			spacing={'1rem'}
			onSubmit={formik.handleSubmit}
		>
			<Heading>Login</Heading>

			<FormControl isInvalid={formik.errors.email && formik.touched.email}>
				<FormLabel fontSize={'lg'}>Email</FormLabel>
				<Input name='email' placeholder='Enter Email' size={'lg'} {...formik.getFieldProps('email')} />
				<FormErrorMessage>{formik.errors.email}</FormErrorMessage>
			</FormControl>

			<FormControl isInvalid={formik.errors.password && formik.touched.password}>
				<FormLabel fontSize={'lg'}>Password</FormLabel>
				<InputGroup size='md'>
					<Input
						name='password'
						type={show ? 'text' : 'password'}
						placeholder='Enter password'
						size={'lg'}
						{...formik.getFieldProps('password')}
					/>
					<InputRightElement width='4.5rem'>
						<Button h='1.75rem' size='sm' mt={'0.7rem'} onClick={handleClick}>
							{show ? 'Hide' : 'Show'}
						</Button>
					</InputRightElement>
				</InputGroup>
				<FormErrorMessage>{formik.errors.password}</FormErrorMessage>
			</FormControl>

			<ButtonGroup pt={'1rem'}>
				<Button colorScheme={'teal'} type='submit'>
					Login
				</Button>
				<Button onClick={() => navigate('/register')}>Create Account</Button>
			</ButtonGroup>
		</VStack>
	);
};

export default Login;
