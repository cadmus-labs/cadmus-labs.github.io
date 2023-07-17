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

import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

import type { ImageAsset } from "@/constants/images";

interface PhotoProps {
    photo: ImageAsset;
    float: "left" | "right";
}

const Photo = ({ photo, float }: PhotoProps): React.ReactElement => (
    <Box
        sx={{
            position: "relative",
            float,
            height: "auto",
            width: { xs: "100%", md: "20vw" },
            my: 2,
            ml: float === "left" ? 0 : 2,
            mr: float === "right" ? 0 : 2,
        }}
    >
        <Image
            width={photo.width}
            height={photo.height}
            src={photo.src}
            alt={photo.alt}
            placeholder={photo.blurDataURL === undefined ? undefined : "blur"}
            blurDataURL={photo.blurDataURL}
            style={{
                height: "auto",
                maxWidth: "100%",
            }}
        />
    </Box>
);

export default Photo;
