import React, { useEffect,useRef } from "react";
import { Title, Container, Group, Box, Card, SimpleGrid } from "@mantine/core";
import data from "../datag";
import Project from "./Project";
import { useScrollIntoView } from "@mantine/hooks";
type ProjectType = {
  img: string;
  title: string;
  description: string;
  id: number;
};
interface Props {
  setS: any;
}
const Projects: React.FC<Props> = ({ setS }) => {
  let nesw: ProjectType[] = [...data];
  const projectsRef=useRef<HTMLDivElement>(null)
  useEffect(() => {
    setS(projectsRef);
  }, []);
  return (
    <Container style={{ width: "100%" }} ref={projectsRef}>
      <Box mb="xl" ml="lg">
        <Title order={2}>My Projects</Title>
      </Box>
      <Card withBorder>
        <Title order={3}>Techonologies</Title>
        <div className="imgs">
          <SimpleGrid
            cols={4}
            spacing="lg"
            breakpoints={[
              { maxWidth: "md", cols: 4, spacing: "md" },
              { maxWidth: "sm", cols: 4, spacing: "sm" },
              { maxWidth: "xs", cols: 2, spacing: "sm" },
            ]}
          >
            <Group position="center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            </Group>
            <Group position="center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
            </Group>
            <Group position="center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
            </Group>
            <Group position="center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            </Group>
          </SimpleGrid>
        </div>
        <SimpleGrid
          cols={2}
          spacing="lg"
          breakpoints={[
            { maxWidth: "md", cols: 2, spacing: "md" },
            { maxWidth: "sm", cols: 1, spacing: "sm" },
            { maxWidth: "xs", cols: 1, spacing: "sm" },
          ]}
        >
          {nesw.map((x) => (
            <Project
              key={x.id}
              title={x.title}
              descirption={x.description}
              img={x.img}
            />
          ))}
        </SimpleGrid>
      </Card>
    </Container>
  );
};

export default Projects;
