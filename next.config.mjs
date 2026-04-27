/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/sab",
  assetPrefix: '/sab/',

  images: {
	  domains: ['www.iitg.ac.in','intranet.iitg.ac.in','172.17.0.28',"127.0.0.1",],
    remotePatterns: [
    {
        protocol: "http",
        hostname: "localhost",
        port: "80",
        pathname: "/media/**",
      },
 

      {
        protocol: "http",
        hostname: "172.17.0.28",
        port: "80",
        pathname: "/media/**",
      },

      {
        protocol: "https",
        hostname: "intranet.iitg.ac.in",
        port: "443",
        pathname: "/media/**",
      },

      {
        protocol: "https",
        hostname: "www.iitg.ac.in",
        port: "443",
        pathname: "/media/**",
      },

    ],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} 
const nextConfig = {
  images: {
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "127.0.0.1",
      //   port: "8000",
      //   pathname: "/media/**",
      // },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",
        pathname: "/media/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/media/**",
      },
      // {
      //   protocol: "https",
      //   hostname: "res.cloudinary.com",
      //   pathname: "/**", 
      // },
      // {
      //   protocol: "http",
      //   hostname: "res.cloudinary.com",
      //   pathname: "/**", 
      // },
    ],
  },
};

export default nextConfig;
*/
