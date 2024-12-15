/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Set to true to disable TypeScript build errors, useful for deployments.
    ignoreBuildErrors: true,
  },
  eslint: {
    // Disables eslint during production builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
