import { Button, FormControl, FormErrorMessage, FormLabel, Input, Link, Stack, Text, VStack, useToast } from '@chakra-ui/react'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {useLocation} from 'react-router-dom';
import { useEmailVerification } from '../hooks/useEmailVerification';
import { useNavigate } from 'react-router-dom';
import { useResendEmail } from '../hooks/useResendEmail';


const EmailVerification = () => {
	const location = useLocation();
	const { emailVerification } = useEmailVerification();
	const toast = useToast();
	const navigate = useNavigate();
	const {resendEmail} = useResendEmail();

    const formik = useFormik({
		initialValues: { code: ''},
		validationSchema: Yup.object({
			code: Yup.string().required('Code required!').min(6, 'Code too short!').max(6, 'Code too long!'),
		}),
		onSubmit: async (values, actions) => {
			var email = location.state.email;
			const { hata, okey } = await emailVerification(email, values.code);
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
			if (okey) {
				toast({
					title: okey,
					status: 'success',
					duration: 5000,
					isClosable: true,
					position: 'bottom',
				});
			}
			navigate('/');
			actions.resetForm();
		},
	});

	const resendEmailLink = async () =>{
		var email = location.state.email;
		const {hata} = await resendEmail(email);
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
	}


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
			        You will receive a verification code in your mail after you register. Enter that code below
		        </Text>
            </Stack>
            
            <Stack>
                <FormControl isInvalid={formik.errors.code && formik.touched.code}>
				    <FormLabel fontSize={'lg'}>Enter the verification code</FormLabel>
				    <Input name='code' type={'text'} {...formik.getFieldProps('code')}></Input>
				    <FormErrorMessage>{formik.errors.code}</FormErrorMessage>
			    </FormControl>

            </Stack>


			    <Button type='submit' colorScheme={'teal'}>
				    Submit
			    </Button>


        	<Stack>
            	<Text fontSize='5xm' as='b' textAlign={'center'}>
					If somehow, you did not receive the verification email then{' '}
            		<Link color='teal.500' onClick={resendEmailLink}>
                		resend the verification email
            		</Link>
				</Text>
        	</Stack>

            
        </VStack>
        
    </div>
  )
}

export default EmailVerification