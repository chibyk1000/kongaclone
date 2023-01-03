// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

module.exports = {
  env: {
    BASE_URL: "http://localhost:3000",
    MONGODB_URL:
      "mongodb+srv://chibyk:Abc123@cluster0.kdq3cxu.mongodb.net/?retryWrites=true&w=majority",
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
      "pk_test_51M56IyK4G3r6RCaZDmdtbo5e7RHaQtXFUAipPow57AmACKG0FV9bZP2hF506esX69Lv8FIrQXy0CMY8kOYeghrvx00OmvU3uNd",
  },
  reactStrictMode: true,  
  images: {
    domains: ["res.cloudinary.com", "www-konga-com-res.cloudinary.com"],
  },
};
// module.exports = nextConfig
