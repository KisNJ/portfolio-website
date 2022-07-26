import React from "react";
import { Title, Container, Box,Card,SimpleGrid } from "@mantine/core";
import data from "../datag";
import Project from "./Project";
type ProjectType = {
  img: string;
  title: string;
  description: string;
  id:number;
};
const Projects = () => {
  let nesw: ProjectType[] = [...data];
  return (
    <Container style={{ width: "100%" }}>
      <Box mb="xl" ml="lg">
        <Title order={2}>My Projects</Title>
      </Box>
      <Card withBorder>
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
            <Project key={x.id}title={x.title} descirption={x.description} img={x.img} />
          ))}
        </SimpleGrid>
      </Card>
    </Container>
  );
};

export default Projects;
