"use client";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import data from "@/components/Content/faq.json";
import { headers } from "next/headers";
import content from "@/components/Content/subDomainUrlContent.json";

const Faq = ({ value = "" }) => {
  const [shuffledFaq, setshuffledFaq] = useState(data);

  useEffect(() => {
    // Shuffle testimonials on the client side after the component mounts
    setshuffledFaq([...data].sort(() => 0.5 - Math.random()));
  }, []);

  const contentData: { name: string; zipCodes: string } =
    content[value as keyof typeof content];
  const abbrevation = value?.split("-").pop()?.toUpperCase();
  const StateName = contentData?.name
    ? abbrevation
      ? `${contentData.name}`
      : contentData.name
    : "Hayward";
  return (
    <div className="mt-14 md:mt-20">
      <h2 className=" text-center text-3xl font-bold text-main">
        FAQs about dumpster rental in {StateName},{" "}
        {contentData?.zipCodes ? contentData.zipCodes.split("|")[0]: "16156"}
      </h2>
      <div className="mt-5 flex flex-col items-center justify-center px-6">
        <Accordion
          type="multiple"
          defaultValue={["item-0"]}
          className="md:w-2/3 "
        >
          {shuffledFaq.slice(0, 5).map((items: any, index: number) => (
            <AccordionItem
              value={`item-${index + 1}`}
              className="no-underline"
              key={index}
            >
              <AccordionTrigger className="font-semibold hover:no-underline">
                Q: {items?.FAQ.split("[location]").join(StateName)}
              </AccordionTrigger>
              <AccordionContent className="text-base">
                A: {items?.Answer.split("[location]").join(StateName)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
