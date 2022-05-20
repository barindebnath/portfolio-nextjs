import { ReactNode } from "react";
import Head from "next/head";
import styled from "styled-components";

type TSEO = {
  title: string;
  children: ReactNode;
};

const SEO = ({ title, children }: TSEO) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Container>{children}</Container>
      </main>
    </>
  );
};

export default SEO;

const Container = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  /* min-height: 100vh; */
  transition: background 0.5s;
  padding: 0 2rem;
  flex: 1;
`;