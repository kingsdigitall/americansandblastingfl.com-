import Banner from "@/app/components/Home/Banner";
import React from "react";
import Service from "@/app/components/Home/Service";
import contentData from "@/components/Content/servicePage.json";
import { Metadata } from "next";
import ContactInfo from "@/components/Content/ContactInfo.json";

export const metadata: Metadata = {
  title: {
    absolute: contentData.metaTitle,
  },
  description: contentData.metaDescription,
  alternates: {
    canonical: `${ContactInfo.baseUrl}services/`,
  },
};
const page = () => {
  return (
    <div>
      <Banner
        h1={contentData.h1Banner}
        image={contentData.bannerImage}
        header={contentData.bannerQuote}
        p1={contentData.metaDescription}
      />

      {/* Content 1 */}
      <div className="">
        <div className=" mt-6 text-center text-4xl text-minor">
          {contentData?.serviceTitle}
        </div>
        {/* <Affordable /> */}
        <Service />
        {/* <TypeOfDumpster /> */}
      </div>
      {/* Content 1 */}
    </div>
  );
};

export default page;
