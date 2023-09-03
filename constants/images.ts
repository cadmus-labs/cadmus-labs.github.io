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
export interface ImageAsset {
    src: string;
    alt: string;
    width: number;
    height: number;
    blurDataURL?: string;
}

export const Photos: Record<string, ImageAsset> = {
    AnalyzePhoto: {
        src: "/assets/analyze-photo.svg",
        alt: "Analyze Photo",
        width: 5000,
        height: 5000,
    },
};
