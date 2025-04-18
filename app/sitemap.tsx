import { MetadataRoute } from "next";
import CityData1 from "@/public/City.json";
import contentData from "@/components/Content/ContactInfo.json";
import data from "@/components/Content/subDomainUrlContent.json";
import serviceData from "@/components/Content/serviceWidgetContent.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const BaseUrl = contentData.baseUrl;
  const CityData: any = CityData1;
  const SubDomain: any = Object.keys(data);
  const ServiceSlug: any = serviceData.lists.map((item:any) => item.slug);
  const SubDomainURL = SubDomain.map((location: any) => ({
    url: `${contentData.baseUrl}areas-we-serve/${location}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  }));
  const ServiceURL = ServiceSlug.map((location: any) => ({
    url: `${contentData.baseUrl}services/${location}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));
  // console.log(ServiceSlug);

  return [
    {
      url: `${contentData.baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${contentData.baseUrl}about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${contentData.baseUrl}contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${contentData.baseUrl}services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...ServiceURL,
    {
      url: `${contentData.baseUrl}areas-we-serve`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...SubDomainURL,
  ];
}
