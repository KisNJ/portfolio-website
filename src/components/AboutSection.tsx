import React, { useEffect, useRef } from "react";
import {
  Card,
  Group,
  Image,
  Text,
  Title,
  Stack,
  Container,
  Grid,
} from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";
interface Props {
  setS: any;
}
const AboutSection: React.FC<Props> = ({ setS }) => {
  const aboutRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setS(aboutRef);
  }, []);
  return (
    <Container ref={aboutRef}>
      <Card withBorder>
        <Group style={{ flexWrap: "nowrap" }} position="center">
          <Grid align="center" gutter="xs">
            <Grid.Col xs={12} sm={5} md={5}>
              <Group position="center">
                <Image
                  style={{ maxWidth: "clamp(50px,100%,300px)" }}
                  radius="md"
                  src={require(`./stock-face.jpg`)}
                  alt="Person image"
                />
              </Group>
            </Grid.Col>
            <Grid.Col xs={12} sm={7} md={7}>
              <Stack>
                <Title order={2}>About Me</Title>
                <Text>That's not me it's just a stock photo.</Text>
                <Text align="justify">
                  I'm 17 years old and I'm doing 'The Odin Project' because i
                  want to be a software engineer in the futre. I wish to work at
                  Google in &#x1F1E8;&#127469; Zürich, but I would try working
                  in London, Germany or maybe in the US.
                </Text>
              </Stack>
            </Grid.Col>
          </Grid>
        </Group>
      </Card>
    </Container>
  );
};

export default AboutSection;
