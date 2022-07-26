import React from "react";
import {
  Card,
  Group,
  Image,
  Text,
  Title,
  Stack,
  Container,
} from "@mantine/core";
const AboutSection = () => {
  return (
    <Container>
      <Card withBorder>
        <Group style={{ flexWrap: "nowrap" }} position="center">
          <Image
            style={{ maxWidth: "clamp(50px,50%,300px)" }}
            radius="md"
            src={require(`./stock-face.jpg`)}
            alt="Random unsplash image"
          />
          <Stack>
            <Title order={2}>About Me</Title>
            <Text>That's not me it's just a stock photo.</Text>
            <Text align="justify">
              I'm 17 years old and I'm doing 'The Odin Project' because i want
              to be a software engineer in the futre. I wish to work at Google
              in &#x1F1E8;&#127469; Zürich, but I would try working in London,
              Germany or maybe in the US.
            </Text>
          </Stack>
        </Group>
      </Card>
    </Container>
  );
};

export default AboutSection;
