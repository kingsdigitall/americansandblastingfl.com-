import { Metadata } from 'next';
import Hero from './components/Home/Hero'
import homeData from "@/components/Content/home.json"
import ContactInfo from "@/components/Content/ContactInfo.json"

export const metadata: Metadata = {
  title: {
    absolute: homeData.metaTitle,
  },
  description: homeData.metaDescription,
  alternates: {
    canonical: `https://${ContactInfo.host}`,
  },
};
export default function Home() {
  return (
   <div className=""> 
    <Hero/>
   </div>
  )
}
