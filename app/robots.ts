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

const PUBLIC_URL = process.env.PUBLIC_URL ?? "https://cadmus-labs.github.io";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: `${
            PUBLIC_URL.endsWith("/") ? PUBLIC_URL : `${PUBLIC_URL}/`
        }sitemap.xml`,
    };
}
