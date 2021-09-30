import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Spinner,
  SimpleGrid,
  GridItem,
  useToast,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function BranchCreationForm() {
  // const [loginInput, setLoginInput] = useState({ email: '', password: '' });
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      branchName: '',
      branchAddress: '',
      branchManager: '',
      branchPhone: '',
    },
    validationSchema: Yup.object({
      branchName: Yup.string()
        .required('Es un campo obligatorio')
        .min(3, 'Requiere minimo 3 caracteres'),
      branchAddress: Yup.string()
        .required('Es un campo obligatorio')
        .min(3, 'Requiere minimo 3 caracteres'),
      branchManager: Yup.string()
        .required('Es un campo obligatorio')
        .min(3, 'Requiere minimo 3 caracteres'),
      branchPhone: Yup.number()
        .required('Es un campo obligatorio')
        .positive()
        .integer()
        .min(3, 'Requiere minimo 3 caracteres'),
    }),
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        console.log('%c Alta Sucursal -->', 'color: #FFEE57', values);
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 1000);
      toast({
        title: 'Submitted!',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    },
  });
  console.log('values ->', formik.values);
  return (
    <Box bg={useColorModeValue('gray.50', 'inherit')} p={10}>
      <Box mt={[10, 0]}>
        <SimpleGrid
          display={{ base: 'initial', md: 'grid' }}
          columns={1}
          spacing={10}
        >
          <GridItem colSpan={{ md: 1 }}>
            <Box px={[4, 0]}>
              <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
                Alta de Nueva Sucursal eCommerce
              </Heading>
              <Text
                mt={1}
                fontSize="sm"
                color={useColorModeValue('gray.600', 'gray.400')}
              >
                Complete la información con los datos de la nueva sucursal del
                eCommerce.
              </Text>
            </Box>
          </GridItem>
          <GridItem mt={[5, null, 0]} colSpan={{ md: 2 }}>
            <form
              method="POST"
              shadow="base"
              rounded={[null, 'md']}
              overflow={{ sm: 'hidden' }}
              onSubmit={formik.handleSubmit}
            >
              <Stack
                px={4}
                py={5}
                p={[null, 6]}
                bg={useColorModeValue('white', 'gray.700')}
                spacing={6}
              >
                <SimpleGrid columns={6} spacing={6}>
                  <FormControl as={GridItem} colSpan={[6]}>
                    <FormLabel
                      htmlFor="branchName"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      Nombre sucursal:
                    </FormLabel>
                    <Input
                      type="text"
                      name="branchName"
                      id="branchName"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.branchName}
                    />
                    {formik.touched.branchName && formik.errors.branchName ? (
                      <div>
                        <Text color="tomato">{formik.errors.branchName}</Text>
                      </div>
                    ) : null}
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6]}>
                    <FormLabel
                      htmlFor="branchManager"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      Responsable:
                    </FormLabel>
                    <Input
                      type="text"
                      name="branchManager"
                      id="branchManager"
                      autoComplete="branchManager"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.branchManager}
                    />
                    {formik.touched.branchManager &&
                    formik.errors.branchManager ? (
                      <div>
                        <Text color="tomato">
                          {formik.errors.branchManager}
                        </Text>
                      </div>
                    ) : null}
                  </FormControl>

                  <FormControl as={GridItem} colSpan={6}>
                    <FormLabel
                      htmlFor="branchAddress"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      Dirección:
                    </FormLabel>
                    <Input
                      type="text"
                      name="branchAddress"
                      id="branchAddress"
                      autoComplete="branchAddress"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.branchAddress}
                    />
                    {formik.touched.branchAddress &&
                    formik.errors.branchAddress ? (
                      <div>
                        <Text color="tomato">
                          {formik.errors.branchAddress}
                        </Text>
                      </div>
                    ) : null}
                  </FormControl>

                  <FormControl as={GridItem} colSpan={6}>
                    <FormLabel
                      htmlFor="branchPhone"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      Telefono:
                    </FormLabel>
                    <Input
                      type="number"
                      name="branchPhone"
                      id="branchPhone"
                      autoComplete="branchPhone"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.branchPhone}
                    />
                    {formik.touched.branchPhone && formik.errors.branchPhone ? (
                      <div>
                        <Text color="tomato">{formik.errors.branchPhone}</Text>
                      </div>
                    ) : null}{' '}
                  </FormControl>
                </SimpleGrid>
              </Stack>
              <Box
                px={{ base: 4, sm: 6 }}
                py={3}
                bg={useColorModeValue('gray.50', 'gray.900')}
                textAlign="right"
              >
                <Button
                  type="submit"
                  disabled={!formik.isValid || formik.isSubmitting}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  _focus={{ shadow: '' }}
                  fontWeight="md"
                >
                  {!formik.isSubmitting && 'Crear Sucursal'}
                  {formik.isSubmitting && <Spinner color="white" />}{' '}
                </Button>
              </Box>
            </form>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default BranchCreationForm;
