"use client";
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
import { Button, Typography, type Theme, Container, Box } from "@mui/material";

interface ErrorProps {
    reset: () => void;
}

const Error = ({ reset }: ErrorProps): React.ReactElement => (
    <Container
        sx={{
            height: (theme: Theme) =>
                `calc(100vh - ${theme.spacing(15)} - ${
                    theme.typography.fontSize
                }px - ${theme.mixins.toolbar.minHeight ?? 0}px)`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}
    >
        <Box sx={{ textAlign: "center" }}>
            <Typography sx={{ my: 2 }}>Something went wrong</Typography>
            <Button onClick={reset}>Try Again</Button>
        </Box>
    </Container>
);

export default Error;
