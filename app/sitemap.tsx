import { MetadataRoute } from "next";
import CityData1 from "@/public/City.json";
import contentData from "@/components/Content/ContactInfo.json";
import data from "@/components/Content/subDomainUrlContent.json";
import serviceData from "@/components/Content/serviceWidgetContent.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const BaseUrl = contentData.baseUrl;
  const CityData: any = CityData1;
  const SubDomain: any = Object.keys(data);
  const ServiceSlug: any = serviceData.lists.map((item: any) => item.slug);
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

  // Generate neighborhood URLs
  const NeighborhoodURLs: any[] = [];
 Object.values(data).map((city: any) => {
  if (city.neighbourhoods) {
    const neighborhoods = city.neighbourhoods.split("|");
    neighborhoods.forEach((neighborhood: string) => {
      const formattedNeighborhood = neighborhood
        .trim()
        .toLowerCase()
        .replace(/\.+$/, "")
        .replace(/\s+/g, "-");

      const url = `${contentData.baseUrl}areas-we-serve/${city.slug}/${formattedNeighborhood}/`;

      // Debug for invalid URLs
      if (/[&<>]/.test(url)) {
        console.log("⚠️ Invalid character in URL:", url);
      }
      if (url.includes("undefined")) {
        console.log("⚠️ Undefined value in URL:", url);
      }

      NeighborhoodURLs.push({
        url: encodeURI(url),
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
      });
    });
  }
});


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
      url: `${contentData.baseUrl}our-brands`,
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
    ...NeighborhoodURLs,
  ];
}
