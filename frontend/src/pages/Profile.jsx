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
	AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDisclosure } from '@chakra-ui/react'

const Profile = () => {

	const { isOpen, onOpen, onClose } = useDisclosure();
	  const cancelRef = React.useRef();
	const changeEmailClick = () => {
		onOpen();
	}
	const confirmChangeEmail = () => {
		onClose();
	}

	const formik = useFormik({
		initialValues: { email: '', },
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
				.email('Email must be valid email'),
		}),
		onSubmit: async (values, actions) => {
			console.log(values);
			actions.resetForm();
		},
	});


  return (
    <div>
        <VStack w={{ base: '100%', md: '500px' }} m='auto' h='100vh' spacing={'1rem'}>
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
				<FormControl isInvalid={formik.errors.email && formik.touched.email}>
					<FormLabel fontSize={'lg'}>Email</FormLabel>
					<Input name='email' type={'text'} {...formik.getFieldProps('email')}></Input>
					<FormErrorMessage>{formik.errors.email}</FormErrorMessage>
				</FormControl>

				<FormControl isInvalid={formik.errors.confirmEmail && formik.touched.confirmEmail}>
					<FormLabel fontSize={'lg'}>Confirm Email</FormLabel>
					<Input name='confirmEmail' type={'text'} {...formik.getFieldProps('confirmEmail')}></Input>
					<FormErrorMessage>{formik.errors.confirmEmail}</FormErrorMessage>
				</FormControl>

					
							

				<ButtonGroup pt={'1rem'}>
					<Button type='submit' colorScheme={'teal'} onClick={changeEmailClick}>
						Change Email
					</Button>
					 <AlertDialog
        				isOpen={isOpen}
        				leastDestructiveRef={cancelRef}
        				onClose={onClose}
      				>
        				<AlertDialogOverlay>
          					<AlertDialogContent>
           				 		<AlertDialogHeader fontSize='lg' fontWeight='bold'>
              						Change Email
            					</AlertDialogHeader>

            					<AlertDialogBody>
              						Are you sure? You can't undo this action afterwards.
            					</AlertDialogBody>

            					<AlertDialogFooter>
              						<Button ref={cancelRef} onClick={onClose}>
                						Cancel
              						</Button>
              						<Button colorScheme='green' onClick={confirmChangeEmail} ml={3}>
                						Change
              						</Button>
            					</AlertDialogFooter>
          					</AlertDialogContent>
        				</AlertDialogOverlay>
      				</AlertDialog>
				</ButtonGroup>
			</VStack>
            </div>
  )
}

export default Profile