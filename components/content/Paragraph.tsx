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

interface ParagraphProps {
    children: React.ReactNode;
}

const Paragraph = ({ children }: ParagraphProps): React.ReactElement => (
    <Typography
        variant="body1"
        gutterBottom
        sx={{ m: 0, pt: 2, textAlign: "justify" }}
    >
        {children}
    </Typography>
);

export default Paragraph;
