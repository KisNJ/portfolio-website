import React from "react";
import {
  Container,
  Title,
  Group,
  Button,
  ActionIcon,
  useMantineColorScheme,
} from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons";
import { useScrollIntoView } from "@mantine/hooks";

interface Props {
  aboutS: any;
  projectsS: any;
  contactS: any;
}
const HeaderP: React.FC<Props> = ({ aboutS, contactS, projectsS }) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <Container>
      <Group position="apart">
        <Title order={1}>Kis Nándor</Title>
        <Group>
          <Button
            variant="light"
            size="lg"
            onClick={() =>
              aboutS.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            About
          </Button>
          <Button
            variant="light"
            size="lg"
            onClick={() =>
              projectsS.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            Projects
          </Button>
          <Button
            variant="light"
            size="lg"
            onClick={() =>
              contactS.current.scrollIntoView({ behavior: "smooth" })
            }
          >
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
