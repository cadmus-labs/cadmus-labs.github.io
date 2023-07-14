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
import { CacheProvider, type EmotionCache } from "@emotion/react";
import {
    AppBar,
    Box,
    CircularProgress,
    Container,
    Toolbar,
    Typography,
} from "@mui/material";
import type { AppProps, NextWebVitalsMetric } from "next/app";
import { Roboto } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import WebsiteThemeProvider from "@/components/theme";
import "@/styles/main.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createCache({ key: "css" });

const roboto = Roboto({
    weight: "400",
    subsets: ["latin"],
});

export interface WebsiteAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

function WebsiteApp({
    Component,
    pageProps,
    emotionCache = clientSideEmotionCache,
}: WebsiteAppProps): JSX.Element {
    const router = useRouter();
    const [isLoading, setLoading] = useState<boolean>(false);

    const handleLoadingStart = (): void => {
        setLoading(true);
    };
    const handleLoadingEnd = (): void => {
        setLoading(false);
    };

    useEffect(() => {
        router.events.on("routeChangeStart", handleLoadingStart);
        router.events.on("routeChangeComplete", handleLoadingEnd);
        router.events.on("routeChangeError", handleLoadingEnd);
        return () => {
            router.events.off("routeChangeStart", handleLoadingStart);
            router.events.off("routeChangeComplete", handleLoadingEnd);
            router.events.off("routeChangeError", handleLoadingEnd);
        };
    });

    return (
        <main className={roboto.className}>
            <React.StrictMode>
                <Head>
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
                    />
                </Head>
                <CacheProvider value={emotionCache}>
                    <WebsiteThemeProvider>
                        {isLoading ? (
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    pt: "25%",
                                    height: "100vh",
                                }}
                            >
                                <CircularProgress />
                            </Box>
                        ) : (
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
                                <Box sx={{ pt: 2 }}>
                                    <Component {...pageProps} />
                                </Box>
                            </Container>
                        )}
                    </WebsiteThemeProvider>
                </CacheProvider>
            </React.StrictMode>
        </main>
    );
}

export function reportWebVitals({
    name,
    value,
    id,
    label,
    startTime,
}: NextWebVitalsMetric): void {
    (window as any).gtag("event", name, {
        value,
        // Custom parameters
        metric_id: id,
        metric_label: label,
        metric_timestamp: startTime,
    });
}

export default WebsiteApp;
