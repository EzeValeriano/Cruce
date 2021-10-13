import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  SimpleGrid,
  GridItem,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import getToken from '../utils/getToken';

const Order = () => {
  const history = useHistory();
  const token = localStorage.getItem('token');
  const location = useLocation();

  const user = useSelector((state) => state.user);

  const pathName = location.pathname;
  const orderId = pathName.slice(17);
  // const orderId = '1075992862440-01';
  // const orderId = '615ca50580e3bfe3823a1b86';

  const [order, setOrder] = useState({});

  console.log('ORDER ID --> ', orderId);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/order/${orderId}`, getToken())
      .then((res) => setOrder(res.data))
      .catch((e) => console.log(e));
  }, []);

  console.log("order", order)
  // order._id ? order.orderId : '',
  // orderStatus: order._id ? order.actualState : '',
  // firstName: order._id ? order.client.firstName : '',
  // lastName: order._id ? order.client.lastName : '',
  // phone: order._id ? order.client.lastName : '',
  // city: order._id ? order.client.address.city : '',
  // deliveredTo: order._id ? order.client.address.receiverName : '',
  // courier: order._id ? order.courierId.name : '',

  return (
    <>
      <Box bg={useColorModeValue('gray.50', 'inherit')} p={10}>
        <Box mt={[10, 0]}>
          <SimpleGrid
            display={{ base: 'initial', md: 'grid' }}
            columns={1}
            spacing={10}
          >
            <GridItem colSpan={{ md: 3 }}>
              <Box px={[4, 0]}>
                <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
                  Pedido {order._id ? `id#${order.orderId}` : ''}
                </Heading>
                <Text
                  mt={1}
                  fontSize="sm"
                  color={useColorModeValue('gray.600', 'gray.400')}
                >
                  Aqui podrás ver información sobre el pedido.
                </Text>
              </Box>
            </GridItem>
            <GridItem mt={[5, null, 0]} colSpan={{ md: 3 }}>
              {order._id ? (
                <Table
                  variant="simple"
                  px={4}
                  py={5}
                  bg={'white'}
                  spacing={6}
                  p={{ sm: 6 }}
                >
                  <TableCaption>
                    Estos datos no se pueden modificar{' '}
                  </TableCaption>
                  <Thead bg="blue.50">
                    <Tr>
                      <Th fontWeight="medium">Estado del pedido</Th>
                      <Th></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Estado</Td>
                      <Td>{order.actualState}</Td>
                    </Tr>
                    <Tr>
                      <Td>Pedido ha sido entregado a:</Td>
                      <Td>
                        {order.client.address.receiverName === ''
                          ? 'Pendiente de entrega'
                          : order.client.address.receiverName}
                      </Td>
                    </Tr>
                  </Tbody>

                  <Thead bg="blue.50">
                    <Tr>
                      <Th fontWeight="medium">Datos del Cliente</Th>
                      <Th></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Nombre</Td>
                      <Td>{order.client.firstName}</Td>
                    </Tr>
                    <Tr>
                      <Td>Apellido</Td>
                      <Td>{order.client.lastName}</Td>
                    </Tr>
                  </Tbody>
                  <Tbody>
                    <Tr>
                      <Td>Telefono</Td>
                      <Td>{order.client.phone}</Td>
                    </Tr>
                  </Tbody>
                  <Thead>
                    <Tr bg="blue.50">
                      <Th fontWeight="medium">Datos de la Mensajeria:</Th>
                      <Th></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Mensajeria</Td>
                      <Td>{order.courierId ? order.courierId.name : "Sin Asignar"}</Td>
                    </Tr>
                  </Tbody>
                  <Tbody>
                    <Tr>
                      <Td>Cadete:</Td>
                      <Td>{order.userId ? order.userId.fullName : "Sin Asignar"}</Td>
                    </Tr>
                  </Tbody>
                  <Thead bg="blue.50">
                    <Tr>
                      <Th fontWeight="medium">Detalle de productos:</Th>
                      <Th></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Productos:</Td>
                      <Td>{order.product[0].productName}</Td>
                    </Tr>
                  </Tbody>
                </Table>
              ) : (
                ''
              )}
            </GridItem>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};
export default Order;
