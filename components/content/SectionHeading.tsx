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
import { Typography } from "@mui/material";

interface SectionHeadingProps {
    children: React.ReactNode;
}

const SectionHeading = ({
    children,
}: SectionHeadingProps): React.ReactElement => (
    <Typography variant="h6" component="h2" sx={{ pt: 2 }}>
        {children}
    </Typography>
);

export default SectionHeading;
