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
import { type MetadataRoute } from "next";

import { Routes, type Route } from "@/constants/routes";

const buildSitemapUrls = (currentRoutes: Record<string, Route>): string[] => {
    let urls: string[] = [];
    Object.values(currentRoutes).forEach((route) => {
        urls.push(route.path);
        if (route.subRoutes !== undefined) {
            urls = urls.concat(buildSitemapUrls(route.subRoutes));
        }
    });
    return urls;
};

const PUBLIC_URL =
    process.env.PUBLIC_URL === undefined
        ? "https://cadmus-labs.github.io"
        : process.env.PUBLIC_URL.endsWith("/")
        ? process.env.PUBLIC_URL.substring(0, process.env.PUBLIC_URL.length - 1)
        : process.env.PUBLIC_URL;
const time = new Date();

const sitemap = (): MetadataRoute.Sitemap =>
    ["/"].concat(buildSitemapUrls(Routes)).map((url) => ({
        url: `${PUBLIC_URL}${url}`,
        lastModified: time,
        changeFrequency: "daily",
    }));

export default sitemap;
