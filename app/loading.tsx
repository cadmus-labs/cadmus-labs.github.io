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
import { Box, CircularProgress } from "@mui/material";

const Loading = (): React.ReactElement => (
    <Box
        sx={{
            display: "flex",
            justifyContent: "center",
            pt: "25%",
            height: "100vh",
        }}
    >
        <CircularProgress />
    </Box>
);

export default Loading;
