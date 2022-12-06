import React from 'react';
import {
	SimpleGrid,
	Text,
	Button,
	Stack,
	ButtonGroup,
	Input,
	Textarea,
	VStack,
	FormControl,
	FormLabel,
	FormErrorMessage,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Profile = () => {

    
	const formik = useFormik({
		initialValues: { firstName: '', lastName: '', country: '', subject: '', message: '' },
		validationSchema: Yup.object({
			firstName: Yup.string().required('Name required!').min(3, 'Name too short!').max(28, 'Name too long!'),
			lastName: Yup.string()
				.required('Surname required!')
				.min(3, 'Surname too short!')
				.max(28, 'Surname too long!'),
			country: Yup.string().ensure().required('Country required!'),
			subject: Yup.string()
				.required('Subject required!')
				.min(6, 'Subject too short!')
				.max(30, 'Subject too long!'),
			message: Yup.string()
				.required('Message required!')
				.min(6, 'Message too short!')
				.max(150, 'Message too long!'),
		}),
		onSubmit: async (values, actions) => {
			console.log('Gonderildi');
			actions.resetForm();
		},
	});


  return (
    <div>
        <VStack w={{ base: '100%' }} m='auto' justify={'center'} spacing={'1rem'} pl={'1rem'} pr={'1rem'}>
				<Stack spacing={3} justifyContent={'center'} alignContent={'center'}>
					<Text fontSize='5xl' as='b' textAlign={'center'}>
						Profile
					</Text>
				</Stack>
				<Stack spacing={3} justifyContent={'center'} alignContent={'center'}>
					<Text fontSize='5xl' as='b' textAlign={'center'}>
						Edit your profile:
					</Text>
				</Stack>

				<SimpleGrid spacing={20} columns={[1, null, 2]}>
					<Stack>
						<FormControl isInvalid={formik.errors.firstName && formik.touched.firstName}>
							<FormLabel fontSize={'lg'}>First Name</FormLabel>
							<Input name='firstName' type={'text'} {...formik.getFieldProps('firstName')}></Input>
							<FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
						</FormControl>

						<FormControl isInvalid={formik.errors.lastName && formik.touched.lastName}>
							<FormLabel fontSize={'lg'}>Last Name</FormLabel>
							<Input name='lastName' type={'text'} {...formik.getFieldProps('lastName')}></Input>
							<FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
						</FormControl>

						<FormControl isInvalid={formik.errors.subject && formik.touched.subject}>
							<FormLabel fontSize={'lg'}>Subject</FormLabel>
							<Input
								name='subject'
								type={'text'}
								placeholder={'Max 30 character'}
								{...formik.getFieldProps('subject')}
							></Input>
							<FormErrorMessage>{formik.errors.subject}</FormErrorMessage>
						</FormControl>

						<FormControl isInvalid={formik.errors.message && formik.touched.message}>
							<FormLabel fontSize={'lg'}>Message</FormLabel>
							<Textarea
								name='message'
								type={'text'}
								placeholder={'Max 150 character'}
								{...formik.getFieldProps('message')}
							></Textarea>
							<FormErrorMessage>{formik.errors.message}</FormErrorMessage>
						</FormControl>

						<ButtonGroup pt={'1rem'}>
							<Button type='submit' colorScheme={'teal'}>
								Submit
							</Button>
						</ButtonGroup>
					</Stack>
				</SimpleGrid>
			</VStack>
            </div>
  )
}

export default Profile