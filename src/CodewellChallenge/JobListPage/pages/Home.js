import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Sidebar, JobCard, JobInfo } from "../components/index";

const Home = () => {
  return (
    <Container>
      <InnerContainer>
        <Sidebar />
        <JobCard />
        <JobInfo />
      </InnerContainer>
    </Container>
  );
};

const Container = styled.section`
  ${tw`
    w-full
    flex
    items-center
    justify-center
    bg-gray-900
    overflow-y-hidden
    scrollbar-hide
  `}
`;

const InnerContainer = styled.div`
  ${tw`
    mx-auto
    pt-20
    px-4
    lg:px-0
    h-full
    w-full
    md:max-w-6xl
    flex
    items-start
    justify-between
    overflow-y-hidden
  `}
`;

export default Home;
