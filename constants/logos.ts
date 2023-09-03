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
export interface LogoAsset {
    src: Record<"light" | "dark", string>;
    alt: string;
    width: number;
    height: number;
}

const WEBSITE_ORACLE_LOGO_SRC = "/assets/website-oracle-logo.jpg";

export const Logos: Record<string, LogoAsset> = {
    websiteOracle: {
        src: {
            light: WEBSITE_ORACLE_LOGO_SRC,
            dark: WEBSITE_ORACLE_LOGO_SRC,
        },
        alt: "Website Oracle",
        width: 5000,
        height: 5000,
    },
};
