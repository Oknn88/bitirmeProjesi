import { Button, FormControl, FormErrorMessage, FormLabel, Input, Stack, Text, VStack, useToast } from '@chakra-ui/react'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useResendEmail } from '../hooks/useResendEmail';


const EmailVerification = () => {
	const navigate = useNavigate();
    const {resendEmail} = useResendEmail();
    const toast = useToast();

    const formik = useFormik({
		initialValues: { email: ''},
		validationSchema: Yup.object({
			email: Yup.string()
				.required('Email required!')
				.min(6, 'Email too short!')
				.max(50, 'Email too long!')
				.email('Email must be valid email'),
		}),
		onSubmit: async (values, actions) => {
            const {hata, okey} = await resendEmail(values.email);
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
            if(okey){
                navigate('/email-verification', {state:{email: values.email}});
            }
			
			actions.resetForm();
		},
	});


  return (
    <div>
        <VStack 
			as={'form'}
			w={{ base: '100%' }}
			m='auto'
			justify={'center'}
			spacing={'1rem'}
			pl={'1rem'} 
			pr={'1rem'}
			onSubmit={formik.handleSubmit}>

            <Stack spacing={3} justifyContent={'center'} alignContent={'center'}>
                <Text fontSize='4xl' as='b' textAlign={'center'}>
			        Enter the email you want to confirm
		        </Text>
            </Stack>
            
            <Stack>
                <FormControl isInvalid={formik.errors.email && formik.touched.email}>
				    <FormLabel fontSize={'lg'}>Enter your email</FormLabel>
				    <Input name='email' type={'text'} {...formik.getFieldProps('email')}></Input>
				    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
			    </FormControl>

            </Stack>


			    <Button type='submit' colorScheme={'teal'}>
				    Submit
			    </Button>
        </VStack>
        
    </div>
  )
}

export default EmailVerification