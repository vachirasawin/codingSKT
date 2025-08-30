/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            "lh3.googleusercontent.com",    // Google profile images
            "avatars.githubusercontent.com", // GitHub profile images
            "graph.facebook.com",           // Facebook profile images
        ],
    },
};

module.exports = nextConfig;
