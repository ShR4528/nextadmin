/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [

            {
                protocol: "https",
                hostname: "www.pexels.com",


            },
        ],
    },
};

module.exports = nextConfig;


//https://www.pexels.com/photo/young-couple-sitting-back-to-back-19045609/