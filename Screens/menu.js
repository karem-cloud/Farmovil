import React from "react";
import { Menu, HamburgerIcon, Box, Pressable, Center, NativeBaseProvider } from "native-base";

function Example() {
  return <Box w="90%" alignItems="center">
      <Menu w="190" trigger={triggerProps => {
      return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
              <HamburgerIcon />
            </Pressable>;
    }}>
        <Menu.Item>Perfil</Menu.Item>
        <Menu.Item>Promociones </Menu.Item>
        <Menu.Item>Notificaciones</Menu.Item>
        <Menu.Item>Contactos</Menu.Item>
        <Menu.Item>Pagos</Menu.Item>
        <Menu.Item>Instrucciones</Menu.Item>
        <Menu.Item isDisabled>Sofia</Menu.Item>
        <Menu.Item>Configuraciones</Menu.Item>
      </Menu>
    </Box>;
}

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example />
            </Center>
          </NativeBaseProvider>
        );
    };
    