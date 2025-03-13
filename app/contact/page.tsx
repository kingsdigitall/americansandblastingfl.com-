import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import Banner from "../components/Home/Banner";
import contentData from "@/components/Content/contact.json";
import ContactInfo from "@/components/Content/ContactInfo.json";
export const metadata: Metadata = {
  title: {
    absolute: contentData.metaTitle,
  },
  description: contentData.metaDescription,
  alternates: {
    canonical: `${ContactInfo.baseUrl}contact/`,
  },
};

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white text-black">
      <div className="w-screen cursor-default text-lg md:w-full">
        {/* Poster */}
        <Banner
          h1={contentData.h1Banner}
          image={contentData.bannerImage}
          header={contentData?.bannerQuote}
          p1={contentData.metaDescription}
        />
        {/* Poster */}

        {/* Content1 */}
        <div className="flex items-center justify-center">
          <div className="mt-10 px-4 md:px-20">
            <div className="mt-10 gap-6 md:flex">
              <Image
                src={`/${contentData.h2Image}`}
                width={500}
                height={400}
                alt={contentData.h2Image.split(".")[0]}
                className="object-cover"
              />
              <div className="flex flex-col items-center justify-center">
                <div className="w-full">
                  <h2 className="mt-4 text-3xl font-bold md:mt-0">
                    {contentData.h2}
                  </h2>
                </div>
                <p
                  className="mt-4 text-justify"
                  dangerouslySetInnerHTML={{ __html: contentData.p2 }}
                ></p>
                <Link id="cta-id" href={`tel:${ContactInfo.tel}`}>
                  <button
                    id="cta-id"
                    className="mt-10 flex items-center justify-center rounded-3xl border bg-main p-4 text-xl font-bold text-white hover:bg-minor"
                  >
                    <FaPhoneVolume className="mr-2 text-3xl" />
                    Call Us Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Content1 */}

        {/* Let's Start a Conversation */}
        <div className="mt-16">
          <div className="text-center text-4xl font-extrabold text-main">
            Let&apos;s Start a Conversation
          </div>
          <div className="border-double text-center">
            <a id="cta-id" href={`tel:${ContactInfo.tel}`}>
              <button
                id="cta-id"
                className="mt-3 rounded-lg bg-main px-4 py-3 font-bold tracking-wide text-white shadow-lg hover:bg-minor"
              >
                {ContactInfo.No}
              </button>
            </a>
          </div>
        </div>
        {/* Let's Start a Conversation */}

        {/* Content 2 */}
        <div className="mt-16 grid w-full grid-cols-1 gap-6 px-4 md:grid-cols-2 md:px-24">
          <div className="flex w-full flex-col justify-around gap-3">
            <div>
              <h2 className="text-3xl font-bold">{contentData?.h3}</h2>
              <p
                className="mt-10 text-justify"
                dangerouslySetInnerHTML={{ __html: contentData.p3 }}
              ></p>
            </div>
          </div>
          <div>
            <Image
              src={`/${contentData.h3Image}`}
              className="h-[350px] w-full rounded-lg border object-cover shadow-lg"
              alt={contentData.h3Image.split(".")[0]}
              width={1000}
              height={500}
            />
          </div>
        </div>
        {/* Content 2 */}

        {/* Call to Action */}
        <div className="group mx-4 mt-16 flex w-11/12 flex-col items-center justify-center gap-6 px-10 md:mx-0 md:mb-4 md:flex-row md:space-x-2 xl:w-full">
          <Image
            aria-hidden="true"
            src="/img1.png"
            alt="Calling icon Star dryer vent"
            width={200}
            height={200}
            className="duration-300 ease-in group-hover:-translate-y-4"
          />
          <Link
            id="cta-id"
            href={`tel:${ContactInfo.tel}`}
            className="grid w-full place-items-center"
          >
            <p
              id="cta-id"
              className="m-h-64 w-[90%] transform rounded-lg bg-white p-2 text-center text-2xl font-semibold ring ring-[#191e34] transition duration-300 ease-in hover:shadow-xl hover:shadow-blue-600 group-hover:translate-y-4"
              dangerouslySetInnerHTML={{ __html: contentData.ctaText }}
            ></p>
          </Link>
        </div>
        {/* Call to Action */}

        {/* Map */}
        <div className="mt-10 w-full">
          <iframe
            src={contentData?.mapLink}
            height="350"
            className="mt-10 w-full rounded-lg border"
            loading="lazy"
            title="map"
          ></iframe>
        </div>
        {/* Map */}
      </div>
    </div>
  );
};

export default page;
