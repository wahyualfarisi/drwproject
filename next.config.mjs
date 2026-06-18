/** @type {import('next').NextConfig} */
const nextConfig = {
  // Prevent Three.js / R3F / Drei from being evaluated on the server.
  // These packages rely on browser-only globals (WebGL, canvas, window, etc.)
  // and will crash if webpack tries to include them in the SSR bundle.
  experimental: {
    serverExternalPackages: ["three", "@react-three/fiber", "@react-three/drei"],
  },
};

export default nextConfig;
