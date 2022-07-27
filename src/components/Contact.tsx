import React,{useEffect,useRef} from "react";
import { useScrollIntoView } from '@mantine/hooks';
import {
  Title,
  Container,
  Box,
  Card,
  Text,
  Group,
  useMantineTheme,
  UnstyledButton,
} from "@mantine/core";
interface Props{
    setS:any;
  }
const Contact:React.FC<Props> = ({setS}) => {
  const contactRef=useRef<HTMLDivElement>(null)
  useEffect(()=>{
    setS(contactRef)
  },[])
  return (
    <Container style={{ width: "100%" }} ref={contactRef}>
      <Box mb="xl" ml="lg">
        <Title order={2}>Contact</Title>
      </Box>
      <Card withBorder>
        <Group position="apart">
          <UnstyledButton component="a" target="_blank"  href="https://github.com/KisNJ">
            <Group>
              <i className="devicon-github-original"></i>
              <Text color="indigo" size="xl">
                kisnj
              </Text>
            </Group>
          </UnstyledButton>
          <UnstyledButton component="a" target="_blank"  href="mailto:knandor407@gmail.com?subject=Found your website&body=This is what I think about it.">
            <Group>
              <i className="devicon-google-plain"></i>
              <Text color="indigo" size="xl">
                knandor407@gmail.com
              </Text>
            </Group>
          </UnstyledButton>
        </Group>
      </Card>
    </Container>
  );
};

export default Contact;
