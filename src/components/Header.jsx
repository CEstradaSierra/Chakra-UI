import { Box, Flex, Heading, Button, Stack } from "@chakra-ui/react";

function Header() {
  return (
    <Box
      h="47vh"
      bg="gray"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgImage={
        'url("https://th.bing.com/th/id/R.5df41b412a6ab99b9c714bd0ac3d5110?rik=PX1kzUHHLhIufw&riu=http%3a%2f%2fhq-oboi.ru%2fphoto%2fodinokiy_bayker_1600x1200.jpg&ehk=hLWgQMB4rM0PZquNLgqMdkG0UDvaKWlWUuB%2fa%2fbJa1o%3d&risl=&pid=ImgRaw&r=0")'
      }
    >
      <Flex h="100%" direction="column" alignItems="center" justify="center" p={["0 10%",null,"0 20%"]}>
        <Heading
          color="white"
          textTransform="upperCase"
          textAlign="center"
          fontWeight="light"
          letterSpacing="5px"
        >
          domina el terreno
        </Heading>
        <Stack direction={{sm:"column",md:"row"}} spacing="30px" mt="30px" w={["100%",null,"auto"]}>
          <Button
            variant="outline"
            size="lg"
            fontWeight="light"
            color="white"
            textTransform="upperCase"
            borderRadius="0px"
            letterSpacing="2px"
            _hover={{
              color: "black",
              bg: "white",
            }}
          >
            ver detalles
          </Button>
          <Button
            variant="outline"
            size="lg"
            fontWeight="light"
            color="white"
            textTransform="upperCase"
            borderRadius="0px"
            letterSpacing="2px"
            _hover={{
              color: "black",
              bg: "white",
            }}
          >
            ver video
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}

export default Header;
