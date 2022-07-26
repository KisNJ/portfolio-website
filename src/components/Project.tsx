import React, { useState } from "react";
import { Card, SimpleGrid, Title, Text, Spoiler, Modal, Group } from "@mantine/core";
interface Props {
  img: string;
  title: string;
  descirption: string;
}
const Project: React.FC<Props> = ({ img, title, descirption }) => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal size="95vw" opened={opened} onClose={() => setOpened(false)}>
        <Group position="center">
        <img  src={require(`${img}`)} style={{ maxWidth: "95vw" }} alt="" />

        </Group>
      </Modal>
      <Card style={{ width: "fit-content" }}>
        <Card.Section>
          <img
            onClick={() => setOpened(true)}
            className="pointer"
            src={require(`${img}`)}
            style={{ maxWidth: "clamp(50px,100%,15000px)" }}
            alt=""
          />
        </Card.Section>
        <Title order={3}>{title}</Title>

        <Spoiler maxHeight={149} showLabel="Show more" hideLabel="Hide">
          <Text align="justify" size="lg">{descirption}</Text>
        </Spoiler>
      </Card>
    </>
  );
};

export default Project;
