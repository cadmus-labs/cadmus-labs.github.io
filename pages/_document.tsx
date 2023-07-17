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
import createCache from "@emotion/cache";
import createEmotionServer from "@emotion/server/create-instance";
import Document, {
    type DocumentContext,
    type DocumentInitialProps,
    Html,
    Head,
    Main,
    NextScript,
} from "next/document";
import React from "react";

const FULL_NAME = "Cadmus Labs";
const PUBLIC_URL = process.env.PUBLIC_URL ?? "https://cadmus-labs.github.io";
const DESCRIPTION = `${FULL_NAME} - Innovative software solutions for businesses and individuals. Explore our offerings and drive your digital transformation.`;

const GA_TRACKING_ID = "GTM-WGFR7MN";
const GOOGLE_SITE_VERIFICATION = "M8dg6gzVYU0noXFvsPOqknm_WjREFeNE212YeUk0g30";
const YANDEX_VERIFICATION = "e69c5a3df2c9a0e8";

interface WebsiteDocumentProps {
    currentPath: string;
}

class WebsiteDocument extends Document<WebsiteDocumentProps> {
    static async getInitialProps(
        ctx: DocumentContext,
    ): Promise<DocumentInitialProps & WebsiteDocumentProps> {
        const originalRenderPage = ctx.renderPage;

        const cache = createCache({ key: "css" });
        const { extractCriticalToChunks } = createEmotionServer(cache);

        ctx.renderPage = async () =>
            await originalRenderPage({
                enhanceApp: (App: any) =>
                    function EnhancedApp(props) {
                        return <App emotionCache={cache} {...props} />;
                    },
            });

        const initialProps = await Document.getInitialProps(ctx);
        const emotionStyles = extractCriticalToChunks(initialProps.html);
        const emotionStyleTags = emotionStyles.styles.map((style) => (
            <style
                data-emotion={`${style.key} ${style.ids.join(" ")}`}
                key={style.key}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: style.css }}
            />
        ));
        return {
            ...initialProps,
            currentPath: ctx.pathname,
            // Styles fragment is rendered after the app and page rendering finish.
            styles: [
                ...React.Children.toArray(initialProps.styles),
                ...emotionStyleTags,
            ],
        };
    }

    render(): JSX.Element {
        const { currentPath } = this.props;

        const cspValues = {
            "default-src": ["'none'"],
            "manifest-src": ["'self'"],
            "img-src": [
                "'self'",
                "data:",
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
                "'sha256-mzMUoh2x2GA3n8ihZ86MvOYnQnvlX9KbKsP1LDGe+eg='", // Google Tag Manager Script
            ],
            "connect-src": ["'self'", "https://www.google-analytics.com"],
        };
        if (
            process.env.NODE_ENV === "development" ||
            process.env.BUILD_TYPE === "test"
        ) {
            cspValues["script-src"].push("'unsafe-eval'");
        }
        const csps = [];
        for (const [cspKey, cspValue] of Object.entries(cspValues)) {
            csps.push(`${cspKey} ${cspValue.join(" ")}`);
        }

        return (
            <Html lang="en">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="theme-color" content="#3f51b5" />

                    <meta httpEquiv="X-DNS-Prefetch-Control" content="on" />
                    <meta
                        httpEquiv="Strict-Transport-Security"
                        content="max-age=63072000; includeSubDomains; preload"
                    />
                    <meta
                        httpEquiv="X-XSS-Protection"
                        content="1; mode=block"
                    />
                    <meta httpEquiv="Permissions-Policy" content="" />
                    <meta
                        httpEquiv="X-Content-Type-Options"
                        content="nosniff"
                    />
                    <meta httpEquiv="Referrer-Policy" content="origin" />
                    <meta
                        httpEquiv="Content-Security-Policy"
                        content={csps.join("; ")}
                    />

                    <meta name="application-name" content={FULL_NAME} />
                    <meta name="description" content={DESCRIPTION} />
                    <meta name="theme-color" content="#6C63FF" />
                    <meta name="msapplication-TileColor" content="#6C63FF" />

                    <link rel="manifest" href={`${PUBLIC_URL}/manifest.json`} />
                    <link
                        rel="shortcut icon"
                        href={`${PUBLIC_URL}/favicon.ico`}
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href={`${PUBLIC_URL}/favicon-16x16.png`}
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href={`${PUBLIC_URL}/favicon-32x32.png`}
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href={`${PUBLIC_URL}/apple-touch-icon.png`}
                    />
                    <link
                        rel="mask-icon"
                        href={`${PUBLIC_URL}/safari-pinned-tab.svg`}
                        color="#6C63FF"
                    />
                    <link rel="canonical" href={PUBLIC_URL + currentPath} />

                    <link
                        rel="apple-touch-icon"
                        href={`${PUBLIC_URL}/assets/logo.png`}
                    />

                    <meta property="og:title" content={FULL_NAME} />
                    <meta property="og:site_name" content={FULL_NAME} />
                    <meta property="og:type" content="profile" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:description" content={DESCRIPTION} />
                    <meta property="og:url" content={PUBLIC_URL} />
                    <meta
                        property="og:image"
                        content={`${PUBLIC_URL}/assets/logo.png`}
                    />
                    <meta property="og:image:height" content="1960" />
                    <meta property="og:image:width" content="1960" />
                    <meta property="og:image:alt" content={FULL_NAME} />

                    <meta
                        name="google-site-verification"
                        content={GOOGLE_SITE_VERIFICATION}
                    />
                    <meta
                        name="yandex-verification"
                        content={YANDEX_VERIFICATION}
                    />

                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                "@type": "Person",
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
                    <script
                        async
                        defer
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                    />
                    <script
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
                </Head>
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
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default WebsiteDocument;