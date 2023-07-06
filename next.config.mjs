import nextPwa from "next-pwa";
import NextBundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = NextBundleAnalyzer({
    enabled: process.env.ANALYZE === "true",
});

const withPWA = nextPwa({
    disable: process.env.NODE_ENV === "development",
    dest: "public",
    register: true,
});

export default withBundleAnalyzer(
    withPWA({
        output: "export",
        pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
        eslint: {
            ignoreDuringBuilds: process.env["BUILD_TYPE"] == "test",
        },
        productionBrowserSourceMaps: true,
    }),
);
