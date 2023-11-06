/*
 * Cadmus Labs - All Rights Reserved
 *
 * This source code and its associated files are the
 * confidential and proprietary information of Cadmus Labs.
 * Unauthorized reproduction, distribution, or disclosure
 * in any form, in whole or in part, is strictly prohibited
 * except as explicitly provided under a separate license
 * agreement with Cadmus Labs.
 *
 * Website: https://cadmus-labs.github.io
 *
 * © 2023 Cadmus Labs. All rights reserved.
 */
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import type { Viewport, Metadata } from "next";
import { Roboto } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import React from "react";

import RouterBreadcrumbs from "@/components/RouterBreadcrumbs";
import { WebsiteThemeProvider } from "@/components/theme";
import WebVitals from "@/components/WebVitals";
import "@/styles/main.css";

const FULL_NAME = "Cadmus Labs";
const DESCRIPTION = `${FULL_NAME} - Innovative software solutions for businesses and individuals. Explore our offerings and drive your digital transformation.`;
const PUBLIC_URL = process.env.PUBLIC_URL ?? "https://cadmus-labs.github.io";

const GA_TRACKING_ID = "GTM-WGFR7MN";
const GOOGLE_SITE_VERIFICATION = "M8dg6gzVYU0noXFvsPOqknm_WjREFeNE212YeUk0g30";
const YANDEX_VERIFICATION = "e69c5a3df2c9a0e8";

export const metadata: Metadata = {
    title: `${FULL_NAME}`,
    description: DESCRIPTION,
    metadataBase: new URL(PUBLIC_URL),
    applicationName: FULL_NAME,
    authors: { name: FULL_NAME, url: PUBLIC_URL },
    creator: FULL_NAME,
    publisher: FULL_NAME,
    generator: "Next.js",
    keywords: ["Cadmus Labs", "APIs", "Software Solutions"],
    referrer: "origin",
    robots: `${PUBLIC_URL}/robots.txt`,
    alternates: {
        canonical: PUBLIC_URL,
    },
    icons: {
        icon: `${PUBLIC_URL}/icon-maskable-x512.png`,
        shortcut: `${PUBLIC_URL}/icon-maskable-x512.png`,
        apple: `${PUBLIC_URL}/icon-maskable-x512.png`,
    },
    manifest: `${PUBLIC_URL}/manifest.webmanifest`,
    openGraph: {
        type: "website",
        title: FULL_NAME,
        description: DESCRIPTION,
        emails: "cadmuslabsinnovations@gmail.com",
        url: PUBLIC_URL,
        siteName: FULL_NAME,
        locale: "en_US",
        images: {
            url: `${PUBLIC_URL}/icon-maskable-x512.png`,
            alt: FULL_NAME,
            type: "image/jpeg",
            width: 1960,
            height: 1960,
        },
    },
    verification: {
        google: GOOGLE_SITE_VERIFICATION,
        yandex: YANDEX_VERIFICATION,
    },
    appleWebApp: {
        capable: true,
        title: FULL_NAME,
        startupImage: {
            url: `${PUBLIC_URL}/icon-maskable-x512.png`,
            media: "image/jpeg",
        },
        statusBarStyle: "black-translucent",
    },
    formatDetection: {
        telephone: true,
        date: true,
        address: true,
        email: true,
        url: true,
    },
};

export const viewport: Viewport = {
    themeColor: [
        {
            media: "(prefers-color-scheme: light)",
            color: "#6c63ff",
        },
        {
            media: "(prefers-color-scheme: dark)",
            color: "#000000",
        },
    ],
    colorScheme: "light",
    minimumScale: 1,
    initialScale: 1,
    width: "device-width",
    userScalable: true,
    viewportFit: "cover",
    interactiveWidget: "resizes-visual",
};

const createCspValues = (): string[] => {
    const cspValues = {
        "default-src": ["'none'"],
        "manifest-src": ["'self'"],
        "img-src": [
            "'self'",
            "data:",
            "https://cadmus-labs.imgix.net",
            "https://www.google.lk",
            "https://www.googletagmanager.com",
        ],
        "style-src": ["'unsafe-inline'"],
        "style-src-elem": ["'self'", "'unsafe-inline'"],
        "font-src": ["'self'"],
        "script-src": [
            "'self'",
            "https://www.googletagmanager.com",
            "http://www.googletagmanager.com",
            "'unsafe-inline'",
        ],
        "connect-src": ["'self'", "https://www.google-analytics.com"],
    };
    if (
        process.env.NODE_ENV === "development" ||
        process.env.BUILD_TYPE === "test"
    ) {
        cspValues["script-src"].push("'unsafe-eval'");
    }
    const csps: string[] = [];
    for (const [cspKey, cspValue] of Object.entries(cspValues)) {
        csps.push(`${cspKey} ${cspValue.join(" ")}`);
    }
    return csps;
};

const roboto = Roboto({
    weight: "400",
    subsets: ["latin"],
});

interface RootLayoutProps {
    children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps): React.ReactElement => {
    const csps = createCspValues();
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />

                <meta httpEquiv="X-DNS-Prefetch-Control" content="on" />
                <meta
                    httpEquiv="Strict-Transport-Security"
                    content="max-age=63072000; includeSubDomains; preload"
                />
                <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
                <meta httpEquiv="Permissions-Policy" content="" />
                <meta httpEquiv="X-Content-Type-Options" content="nosniff" />

                <meta
                    httpEquiv="Content-Security-Policy"
                    content={csps.join("; ")}
                />

                <link rel="preconnect" href="https://cadmus-labs.imgix.net" />

                <Script
                    id="json-for-linking-data"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@type": "Company",
                            "image": {
                                "height": "1960",
                                "width": "1960",
                                "url": `${PUBLIC_URL}/assets/logo.png`,
                                "@type": "imageObject",
                            },
                            "url": PUBLIC_URL,
                            "sameAs": ["https://github.com/cadmus-labs"],
                            "description": DESCRIPTION,
                            "name": FULL_NAME,
                            "@context": "https://schema.org",
                        }),
                    }}
                />

                {/* Google Tag Manager */}
                <Script
                    async
                    defer
                    src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                />
                <Script
                    id="google-tag-manager"
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag() {
                            dataLayer.push(arguments);
                        }
                        gtag("js", new Date());
                        gtag("config", "${GA_TRACKING_ID}", {
                            page_path: window.location.pathname,
                        });
                    `,
                    }}
                />
            </head>
            <body>
                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe
                        src={`https://www.googletagmanager.com/ns.html?id=${GA_TRACKING_ID}`}
                        height="0"
                        width="0"
                        style={{
                            display: "none",
                            visibility: "hidden",
                        }}
                    ></iframe>
                </noscript>
                {/* End Google Tag Manager (noscript) */}
                <main className={roboto.className}>
                    <React.StrictMode>
                        <WebVitals />
                        <WebsiteThemeProvider>
                            <Container>
                                <AppBar
                                    position="static"
                                    color="transparent"
                                    enableColorOnDark={true}
                                    elevation={0}
                                >
                                    <Toolbar disableGutters>
                                        <Link href="/" passHref>
                                            <Typography
                                                variant="h5"
                                                component="div"
                                                sx={{ flexGrow: 1 }}
                                            >
                                                Cadmus Labs
                                            </Typography>
                                        </Link>
                                    </Toolbar>
                                </AppBar>
                                <RouterBreadcrumbs />
                                {children}
                                <Container sx={{ height: 10 }} />
                            </Container>
                        </WebsiteThemeProvider>
                    </React.StrictMode>
                </main>
            </body>
        </html>
    );
};

export default RootLayout;
