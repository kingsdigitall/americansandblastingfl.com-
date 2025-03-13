/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
      images: {
          domains: ['images.unsplash.com','picsum.photos',"cdn.sanity.io",'cdn.weatherapi.com','ik.imagekit.io'],
      }
  }
  
  module.exports = nextConfig