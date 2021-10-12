import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    Button,
    ButtonGroup,
    IconButton
  } from "@chakra-ui/react";
  import { DeleteIcon } from "@chakra-ui/icons";

  import React from "react";
  import axios from "axios";
  import { useHistory } from "react-router";
import { socket } from "../../../socket";
  
  function AlertAssignOrder({ messID }) {
    const history = useHistory();
    const token = localStorage.getItem("token");

  
    const onAssign = (id) => {
        axios.put(`http://localhost:3001/api/order/${id}`, {}, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((data) => {
            console.log("PEDIDO ASIGNADO", data)
            socket.emit("change-orders");
        });
      };

    return (
      <Popover placement="bottom" closeOnBlur={false}>
        <PopoverTrigger>
          <Button variant="outline"
                        colorScheme="teal"
                        fontSize="12px"
                        size="xs"
                        mr={2}> Seleccionar Pedido</Button>
        </PopoverTrigger>
        <PopoverContent bg="gray.100" borderColor="teal.500">
          <PopoverHeader pt={4} fontWeight="bold" border="0" color="black">
            Confirmar Pedido
          </PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody color="black">
            ¿Estás seguro que deseas asignarte este pedido?
            
          </PopoverBody>
          <PopoverFooter
            border="0"
            d="flex"
            alignItems="center"
            justifyContent="space-between"
            pb={4}
          >
            <ButtonGroup size="sm">
              <Button bg="red.600" color="gray.50" onClick={() => history.go(0)}>
                Mejor, no
              </Button>
              <Button
                bg="teal"
                color="gray.50"
                onClick={() => onAssign(messID)}
              >
                Sí, yo lo entrego
              </Button>
            </ButtonGroup>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    );
  }
  
  export default AlertAssignOrder;
  