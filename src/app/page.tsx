import Advisory from "@/components/app/advisory";
import Banner from "@/components/app/banner";
import Brand from "@/components/app/brand";
import Discover from "@/components/app/discover";
import Procedure from "@/components/app/procedure";
import Blog from "@/components/app/blog";
import Search from "@/components/app/search";
import React from "react";

export default async function Page() {
  return (
    <React.Fragment>
      <Banner />
      <Brand />
      <Discover />
      <Procedure />
      <Advisory />
      <Blog />
    </React.Fragment>
  );
}
