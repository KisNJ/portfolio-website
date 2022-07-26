import React from "react";
import {Container,Title,Group,Button,ActionIcon,useMantineColorScheme} from "@mantine/core"
import { IconSun, IconMoonStars } from '@tabler/icons'
const HeaderP = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';
  return (
    <Container>
      <Group position="apart">
        <Title order={1}>Kis Nándor</Title>
        <Group>
          <Button variant="light" size="lg">
            About
          </Button>
          <Button variant="light" size="lg">
            Projects
          </Button>
          <Button variant="light" size="lg">
            Contact
          </Button>
      <ActionIcon
        variant="outline"
        color={dark ? "yellow" : "blue"}
        onClick={() => toggleColorScheme()}
        title="Toggle color scheme"
      >
        {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
      </ActionIcon>
        </Group>
      </Group>
    </Container>
  );
};

export default HeaderP;
