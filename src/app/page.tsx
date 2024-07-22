import Advisory from "@/components/root/advisory";
import Banner from "@/components/root/banner";
import Brand from "@/components/root/brand";
import Procedure from "@/components/root/procedure";
import Project from "@/components/root/project";
import Search from "@/components/root/search";
import React from "react";

export default async function Root() {
  return (
    <React.Fragment>
      <Banner />
      <Brand />
      <Search />
      <Procedure />
      <Project works />
      <Advisory />
    </React.Fragment>
  );
}
