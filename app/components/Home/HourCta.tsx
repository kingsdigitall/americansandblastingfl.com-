import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import ContactInfo from "@/components/Content/ContactInfo.json";
import data from "@/components/Content/hourCtaWidget.json";

const HourCta =async () => {
  return (
    <div>
      <div className=" flex w-full  flex-col  items-center py-5 md:py-0 h-full">
        <div className="grid w-full overflow-hidden bg-white px-4 md:px-20 py-10 h-full shadow-[10px_1px_20px_8px_#00000024]">
          <div className="flex flex-col  items-start  justify-center gap-6 lg:gap-10 text-main font-medium">
            <div
              className="w-full pt-4 text-center  text-xl  md:pt-0  md:text-3xl font-semibold "
              dangerouslySetInnerHTML={{ __html: data.title }}
            ></div>
            <a
            id='cta-id'
              href={`tel:${ContactInfo.tel}`}
              className="flex    w-full justify-center px-0 md:text-4xl"
            >
              <div id='cta-id' className="flex w-full items-center justify-center gap-6 md:w-fit md:justify-start  ">
                <FaPhoneSquareAlt className="md:text-6xl" />

                <div id='cta-id' className="jsutify-center flex flex-col items-center  ">
                  <div className="jsutify-center flex items-center text-left text-xl font-bold">
                    CALL TODAY
                  </div>
                  <div id='cta-id' className="mt-1 text-2xl  lg:text-3xl ">{ContactInfo.No} </div>
                </div>
              </div>
            </a>
          </div>
          {/* <div className="mr-10 mt-4  flex   w-full items-center justify-center rounded-s-xl lg:mt-0 ">
            <Image
              src="/24service1.png"
              alt="image"
              width={10000}
              height={10000}
              className=" w-full object-cover md:h-[55vh]"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HourCta;
