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

export type ResolveSrcFunc = (theme: "light" | "dark") => string;

export interface LogoAsset {
    src: ResolveSrcFunc;
    alt: string;
    width: number;
    height: number;
}

const WEBSITE_ORACLE_LOGO_SRC = "/assets/website-oracle-logo.jpg";

const generateResolveSrcFunc = (image: {
    src: string;
    srcWhite: string;
}): ResolveSrcFunc => {
    return (theme: "light" | "dark") => {
        return theme === "light" ? image.src : image.srcWhite;
    };
};

export const Logos: Record<string, LogoAsset> = {
    websiteOracle: {
        src: generateResolveSrcFunc({
            src: WEBSITE_ORACLE_LOGO_SRC,
            srcWhite: WEBSITE_ORACLE_LOGO_SRC,
        }),
        alt: "Website Oracle",
        width: 5000,
        height: 5000,
    },
};
