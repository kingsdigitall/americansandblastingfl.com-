import Image from "next/image";
import Banner from "./Banner";
import WhyChoose from "./WhyChoose";
import HourCta from "./HourCta";
import homeData from "@/components/Content/home.json";
import Faq from "./Faq";
import Service from "@/app/components/Home/Service";
import Affordable from "./Affordable";
import ProcessWidget from "../Widgets/ProcessWidget";
import AreaWeServe from "../Widgets/AreaWeServe";
import content from "@/components/Content/subDomainUrlContent.json";
import TypeOfDumpster from "../Widgets/TypeOfDumpster";
import ReviewWidget from "../Widgets/ReviewWidget";

const Hero = () => {
  const cityData: any = content;
  const slugs: any = Object.keys(cityData).map((key) => cityData[key]);
  return (
    <div className="w-screen overflow-hidden  md:flex md:w-full md:flex-col md:items-center md:justify-center">
      <div className="w-full overflow-hidden text-lg  print:hidden  dark:bg-white dark:text-black">
        {/* poster */}
        <Banner
          h1={homeData.h1Banner}
          image={homeData.bannerImage}
          header={homeData.bannerQuote}
          p1={homeData.metaDescription}
        />
        {/* poster */}
        {/* Section 1 */}
        <div className="my-10 grid  grid-cols-1 gap-6 px-4 md:grid-cols-2 md:px-24">
          <div className="flex flex-col justify-center    ">
            <h2 className="text-first text-3xl font-bold">{homeData.h2}</h2>
            <div
              className="mt-4  text-justify"
              dangerouslySetInnerHTML={{ __html: homeData.p2 }}
            ></div>
          </div>
          <div className="">
            <Image
              height={10000}
              width={10000}
              src={`/${homeData.h2Image}`}
              className=" h-full w-full rounded-lg object-cover shadow-lg"
              alt={homeData.h2Image.split(".")[0]}
              title={homeData.h2Image.split(".")[0]}
            />
          </div>
        </div>
        {/* Section 1 */}
        {/* TYPES */}
        {/* <TypeOfDumpster /> */}
        <Service />
        {/* TYPES*/}
        <Affordable />
        {/* Section 4 */}
        <WhyChoose data={homeData.whyChooseSection} />
        {/* Section 4 */}
        <ProcessWidget />
        {/* Area we Serve */}
        <div className="mx-auto mt-14 max-w-[95rem] md:mt-20">
          <div className="mt-10 flex h-96 rounded-xl  bg-minor  shadow-2xl md:mb-10">
            <div className="md:w-[87%]">
              <div className="mt-4 p-1 text-center text-2xl font-bold text-white">
                We Proudly Serve{" "}
                <span className="text-mai">The Following Areas</span>
              </div>
              <AreaWeServe slugs={slugs} />
            </div>
            <div className="hidden h-full w-full md:flex">
              <HourCta />
            </div>
          </div>
        </div>
        {/* Area we Serve */}
        {/* CTA */}
        <div className="mt-14 md:mt-20"></div>
        {/* CTA */}
        {/* FAQ */}
        <Faq />
        {/* FAQ */}
        {/* Review */}
        <ReviewWidget />
        {/* Review */}
        {/* -----------------------------------------Map End---------------------------- */}
        <div className="block w-full  ">
          <div className=" mt-20 overflow-hidden rounded-xl border">
            <iframe
              title="Google Map"
              height="350"
              width={"100%"}
              src={homeData?.mapLink}
              loading="lazy"
            ></iframe>
          </div>
        </div>
        {/* -----------------------------------------Map End---------------------------- */}
      </div>
    </div>
  );
};

export default Hero;
