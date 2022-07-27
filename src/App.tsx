import React, { useState } from "react";
import "./App.css";
import {
  MantineProvider,
  AppShell,
  Header,
  Global,
  ColorScheme,
  ColorSchemeProvider,
  Stack,
} from "@mantine/core";
import HeaderP from "./components/HeaderP";
import AboutSection from "./components/AboutSection";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
export default function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  const  [scrollToAbout, setScrollToAbout] = useState<any>({})
  const  [scrollToProjects, setScrollToProjects] = useState<any>({})
  const  [scrollToContact, setScrollToContact] = useState<any>({})
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          fontFamily: "Raleway, sans-serif",
          primaryColor: "indigo",
          colorScheme,
        }}
        styles={{
          Title: (theme) => ({
            root: {
              fontFamily: "Roboto Mono, monospace",
              color:
                theme.colorScheme === "dark"
                  ? theme.colors.indigo[9]
                  : theme.colors.gray[1],
            },
          }),
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Global
          styles={(theme) => ({
            h1: {
              fontSize: "clamp(30px,60px,5vw) !important",
            },
            h2: {
              fontSize: "clamp(2vw,40px,4vw) !important",
            },
          })}
        />
        <AppShell
          padding="md"
          style={{ display: "flex", flexDirection: "column", height: "100vh" }}
          header={
            <>
              <Header
                styles={(theme) => ({
                  root: {
                    background:
                      theme.colorScheme === "dark"
                        ? theme.colors.dark[9]
                        : theme.colors.dark[5],
                  },
                })}
                height={"fit-content"}
                p="md"
              >
                <HeaderP aboutS={scrollToAbout} projectsS={scrollToProjects} contactS={scrollToContact}/>
              </Header>
            </>
          }
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}
        >
          <MantineProvider
            theme={{
              fontFamily: "Raleway, sans-serif",
              primaryColor: "indigo",
               colorScheme ,   
               breakpoints: {
                xs: 100,
                sm: 800,
                md: 1000,
                lg: 1275,
                xl: 1800,
              },         
            }}
            styles={{
              Title: (theme) => ({
                root: {
                  fontFamily: "Roboto Mono, monospace",
                  color:
                    theme.colorScheme === "dark"
                      ? theme.colors.indigo[9]
                      : theme.colors.dark[5],
                  width:"fit-content",
                },
              }),
              Text:(theme)=>({
                root:{
                  width:"fit-content",
                },
              })
            }}
            withGlobalStyles
          >
            <Stack>
              <AboutSection setS={setScrollToAbout}/>
              <Projects setS={setScrollToProjects}/>
              <Contact setS={setScrollToContact}/>
            </Stack>
          </MantineProvider>
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
