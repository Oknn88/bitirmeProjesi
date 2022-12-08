import React from 'react';
import {
	Text,
	Button,
	Stack,
	ButtonGroup,
	Input,
	VStack,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Tabs, 
	TabList, 
	TabPanels, 
	Tab, 
	TabPanel,
	useToast,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuthContext } from "../hooks/useAuthContext";
import { useChangeEmail } from '../hooks/useChangeEmail';
import { useChangePassword } from '../hooks/useChangePassword';

const Profile = () => {
	const { kullanici } = useAuthContext();
	const { changeEmail } = useChangeEmail();
	const { changePassword } = useChangePassword();
	const toast = useToast();

	const formik = useFormik({
		initialValues: { email: '', confirmEmail: ''},
		validationSchema: Yup.object({
			email: Yup.string()
				.required('Email required!')
				.min(6, 'Email too short!')
				.max(28, 'Email too long!')
				.email('Email must be valid email'),
				confirmEmail: Yup.string()
				.required('Email required!')
				.min(6, 'Email too short!')
				.max(28, 'Email too long!')
				.email('Email must be valid email')
				.oneOf([Yup.ref('email'), null], 'Email must match')
		}),
		onSubmit: async (values, actions) => {
			const { hata } = await changeEmail(kullanici.email, values.email, values.confirmEmail);

			if (hata) {
				toast({
					title: hata,
					status: 'error',
					duration: 5000,
					isClosable: true,
					position: 'bottom',
				});
			}
			
			actions.resetForm();
		},
	});
	const formik1 = useFormik({
		initialValues: {password: '', confirmPassword: ''},
		validationSchema: Yup.object({
				password: Yup.string()
				.required('Password required!')
				.min(6, 'Password too short!')
				.max(28, 'Password too long!'),
				confirmPassword: Yup.string()
				.required('Password required!')
				.min(6, 'Password too short!')
				.max(28, 'Password too long!')
				.oneOf([Yup.ref('password'), null], 'Passwords must match'),
		}),
		onSubmit: async (values, actions) => {
			const { hata } = await changePassword(kullanici.email, values.password, values.confirmPassword);

			if (hata) {
				toast({
					title: hata,
					status: 'error',
					duration: 5000,
					isClosable: true,
					position: 'bottom',
				});
			}
			
			actions.resetForm();
		},
	});


  return (
    <div>

<Tabs orientation='vertical' size={'lg'} >
  <TabList>
    <Tab>Email Change</Tab>
    <Tab>Password Change</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
		<VStack as={'form'} w={{ base: '100%', md: '500px' }} m='auto' h='50vh' spacing={'1rem'} onSubmit={formik.handleSubmit}>
		<Stack spacing={3} justifyContent={'center'} alignContent={'center'}>
					<Text fontSize='5xl' as='b' textAlign={'center'}>
						Settings
					</Text>
				</Stack>
				<Stack spacing={3} justifyContent={'center'} alignContent={'center'}>
					<Text fontSize='3xl' as='b' textAlign={'center'}>
						Change Email:
					</Text>
				</Stack>
				<FormControl isInvalid={formik.errors.email && formik.touched.email}>
					<FormLabel fontSize={'lg'}>Email</FormLabel>
					<Input name='email' type={'text'} {...formik.getFieldProps('email')}></Input>
					<FormErrorMessage>{formik.errors.email}</FormErrorMessage>
				</FormControl>
				{!formik.errors.email && formik.touched.email && (
					<FormControl isInvalid={formik.errors.confirmEmail && formik.touched.confirmEmail}>
					<FormLabel fontSize={'lg'}>Confirm Email</FormLabel>
					<Input name='confirmEmail' type={'text'} {...formik.getFieldProps('confirmEmail')}></Input>
					<FormErrorMessage>{formik.errors.confirmEmail}</FormErrorMessage>
				</FormControl>
				)}
				<ButtonGroup pt={'1rem'}>
					<Button type='submit' colorScheme={'teal'}>
						Submit
					</Button>
				</ButtonGroup>
			</VStack>
    </TabPanel>
    <TabPanel>
			<VStack as={'form'} w={{ base: '100%', md: '500px' }} m='auto' h='50vh' spacing={'1rem'} onSubmit={formik1.handleSubmit}>
					<Stack spacing={3} justifyContent={'center'} alignContent={'center'}>
					<Text fontSize='5xl' as='b' textAlign={'center'}>
						Settings
					</Text>
				</Stack>
				<Stack spacing={3} justifyContent={'center'} alignContent={'center'}>
					<Text fontSize='3xl' as='b' textAlign={'center'}>
						Change Password:
					</Text>
				</Stack>
				
				<FormControl isInvalid={formik1.errors.password && formik1.touched.password}>
					<FormLabel fontSize={'lg'}>Password</FormLabel>
					<Input name='password' type={'password'} {...formik1.getFieldProps('password')}></Input>
					<FormErrorMessage>{formik1.errors.password}</FormErrorMessage>
				</FormControl>
				{!formik1.errors.password && formik1.touched.password && (
					<FormControl isInvalid={formik1.errors.confirmPassword && formik1.touched.confirmPassword}>
					<FormLabel fontSize={'lg'}>Confirm Email</FormLabel>
					<Input name='confirmPassword' type={'password'} {...formik1.getFieldProps('confirmPassword')}></Input>
					<FormErrorMessage>{formik1.errors.confirmPassword}</FormErrorMessage>
				</FormControl>
				)}

				<ButtonGroup pt={'1rem'}>
					<Button type='submit' colorScheme={'teal'}>
						Submit
					</Button>
				</ButtonGroup>
			</VStack>
    </TabPanel>
  </TabPanels>
</Tabs>


        
				

			
            </div>
  )
}

export default Profile