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

const manifest = (): MetadataRoute.Manifest => ({
    name: "Cadmus Labs",
    short_name: "Cadmus Labs",
    description:
        "Cadmus Labs - Innovative software solutions for businesses and individuals. Explore our offerings and drive your digital transformation.",
    start_url: "/",
    background_color: "#ffffff",
    theme_color: "#000000",
    display: "standalone",
    orientation: "portrait",
    icons: [
        {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
        },
        {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
        },
    ],
});

export default manifest;
