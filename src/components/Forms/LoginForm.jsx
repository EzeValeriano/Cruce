import React, { useEffect } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Spinner,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginUser } from '../../store/reducers/userReducer';

function LoginForm() {
  // const [loginInput, setLoginInput] = useState({ email: '', password: '' });
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Email invalido')
        .required('El email es requerido'),
      password: Yup.string()
        .required('El password es requerido')
        .min(4, 'Requiere minimo 4 caracteres'),
    }),

    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        console.log('%c Logging in -->', 'color: #FFEE57', values);
        // (JSON.stringify(values, null, 2));
        dispatch(loginUser(values));
        // props.dispatch(loginUser(values));
        setSubmitting(false);
      }, 1000);
    },
  });

  let history = useHistory();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user.loggedUser) history.push('/');
  }, [user, history]);

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} align={'center'}>
            Ingresa a tu cuenta de Cruce
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'} align={'center'}>
            Gestiona todos tus envíos desde un solo lugar ✌️
          </Text>
        </Stack>

        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
          as="form"
          onSubmit={formik.handleSubmit}
        >
          <Stack spacing={4}>
            <FormControl id="email" name="email">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                // isInvalid={!!formik.errors.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div>
                  <Text color="tomato">{formik.errors.email}</Text>
                </div>
              ) : null}
            </FormControl>
            <FormControl id="password" name="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                // isInvalid={!!formik.errors.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div>
                  <Text color="tomato">{formik.errors.password}</Text>
                </div>
              ) : null}
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
                <Checkbox>Recuerdame</Checkbox>
                <Link color={'blue.400'}>Olvide mi password</Link>
              </Stack>
              <Button
                type="submit"
                disabled={!formik.isValid || formik.isSubmitting}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                {!formik.isSubmitting && 'Ingresar'}
                {formik.isSubmitting && <Spinner color="white" />}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default LoginForm;
