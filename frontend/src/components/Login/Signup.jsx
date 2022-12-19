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
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useSignup } from '../../hooks/useSignup';

const Signup = () => {
	const [show, setShow] = useState(false);
	const handleClick = () => setShow(!show);
	const navigate = useNavigate();
	const { signup } = useSignup();
	const toast = useToast();

	const formik = useFormik({
		initialValues: { username: '', password: '', email: '', confirmPassword: '' },
		validationSchema: Yup.object({
			username: Yup.string()
				.required('Username required!')
				.min(6, 'Username too short!')
				.max(28, 'Username too long!'),
			email: Yup.string()
				.required('Email required!')
				.min(6, 'Email too short!')
				.max(50, 'Email too long!')
				.email('Email must be valid email'),
			password: Yup.string()
				.required('Password required!')
				.min(6, 'Password too short!')
				.max(28, 'Password too long!'),
			confirmPassword: Yup.string()
				.required('Confirm Password required!')
				.min(6, 'Password too short!')
				.max(28, 'Password too long!')
				.oneOf([Yup.ref('password'), null], 'Passwords must match'),
		}),
		onSubmit: async (values, actions) => {
			const { hata } = await signup(values.email, values.password);
			if (hata) {
				toast({
					title: hata,
					status: 'error',
					duration: 5000,
					isClosable: true,
					position: 'bottom',
				});
				return;
			}

			navigate('/email-verification', {state:{email: values.email}});

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
			<Heading>Signup</Heading>

			<FormControl isInvalid={formik.errors.username && formik.touched.username}>
				<FormLabel fontSize={'lg'}>Username</FormLabel>
				<Input name='username' placeholder='Enter Username' size={'lg'} {...formik.getFieldProps('username')} />
				<FormErrorMessage>{formik.errors.username}</FormErrorMessage>
			</FormControl>

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

			<FormControl isInvalid={formik.errors.confirmPassword && formik.touched.confirmPassword}>
				<FormLabel fontSize={'lg'}>Confirm Password</FormLabel>
				<InputGroup size='md'>
					<Input
						name='confirmPassword'
						type={show ? 'text' : 'password'}
						placeholder='Enter password'
						size={'lg'}
						{...formik.getFieldProps('confirmPassword')}
					/>
					<InputRightElement width='4.5rem'>
						<Button h='1.75rem' size='sm' mt={'0.7rem'} onClick={handleClick}>
							{show ? 'Hide' : 'Show'}
						</Button>
					</InputRightElement>
				</InputGroup>
				<FormErrorMessage>{formik.errors.confirmPassword}</FormErrorMessage>
			</FormControl>

			<ButtonGroup pt={'1rem'}>
				<Button colorScheme={'teal'} type='submit'>
					Create Account
				</Button>
				<Button onClick={() => navigate('/')} leftIcon={<ArrowBackIcon />}>
					Back
				</Button>
			</ButtonGroup>
		</VStack>
	);
};

export default Signup;
