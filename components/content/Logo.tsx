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

import { Box, useTheme } from "@mui/material";
import Image from "next/image";

import type { LogoAsset } from "@/constants/logos";

interface LogoProps {
    logo: LogoAsset;
    height?: string;
}

const Logo = ({ logo, height }: LogoProps): React.ReactElement => {
    const theme = useTheme();
    return (
        <Box sx={{ position: "relative", height: height ?? "3em", my: 1 }}>
            <Image
                alt={logo.alt}
                src={logo.src(theme.palette.mode)}
                fill
                sizes="100vw"
                style={{
                    objectFit: "scale-down",
                    objectPosition: "left top",
                }}
            />
        </Box>
    );
};

export default Logo;
