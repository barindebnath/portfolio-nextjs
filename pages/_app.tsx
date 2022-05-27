import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useState } from "react";
import Navigation from "../components/Navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

const darkTheme = {
  mode: "dark",
  primary: "#fff",
  secondary: "#053b56",
  hover: "#2684b4",
  stripR: 0,
  stripG: 25,
  stripB: 35,
};

const lightTheme = {
  mode: "light",
  primary: "#004568",
  secondary: "#f2f2f2",
  hover: "#e3e3e3",
  stripR: 213,
  stripG: 218,
  stripB: 221,
};

const topToBottom = {
  hidden: { opacity: 0, x: 0, y: "-100vh" },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: "100vh" },
};

type ThemeType = typeof lightTheme;
export type { ThemeType };

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [darkState, setDarkState] = useState(false);
  const router = useRouter();

  return (
    <ThemeProvider theme={darkState ? darkTheme : lightTheme}>
      <Navigation
        isDark={darkState}
        handleSwitch={() => {
          document.body.style.backgroundColor = !darkState ? darkTheme.secondary : lightTheme.secondary;
          setDarkState(!darkState);
        }}
      />
      <AnimatePresence exitBeforeEnter>
        <motion.main
          key={router.route}
          // initial='hidden'
          // animate='enter'
          exit='exit'
          variants={topToBottom}
          transition={{ type: "linear" }}
        >
          <Component {...pageProps} />
        </motion.main>
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default MyApp;
