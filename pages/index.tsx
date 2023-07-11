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
import {
    Box,
    Button,
    Container,
    Grid,
    type Theme,
    Typography,
} from "@mui/material";
import Image from "next/image";

const Home = (): React.ReactElement => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="stretch"
            sx={{
                height: (theme: Theme) =>
                    `calc(100vh - ${theme.mixins.toolbar.minHeight ?? 0}px)`,
            }}
        >
            <Grid
                item
                xs={12}
                md={6}
                justifyContent="space-evenly"
                alignItems="stretch"
            >
                <Container
                    sx={{
                        position: "relative",
                        height: "100%",
                    }}
                >
                    <Image
                        src="/assets/empower-with-solutions.svg"
                        fill={true}
                        alt="Empower with Solutions"
                        style={{ objectFit: "contain" }}
                    />
                </Container>
            </Grid>
            <Grid
                container
                item
                direction={"column"}
                xs={12}
                md={6}
                justifyContent="space-evenly"
                alignItems="stretch"
            >
                <Grid item xs={6} sx={{ position: "relative" }}>
                    <Typography
                        sx={{
                            position: "absolute",
                            bottom: "1em",
                            left: "1em",
                        }}
                    >
                        Empowering You through Intelligent Software Solutions
                    </Typography>
                </Grid>
                <Grid item xs={6} sx={{ position: "relative" }}>
                    <Box
                        sx={{
                            position: "absolute",
                            top: "1em",
                            left: "1em",
                        }}
                    >
                        <Button
                            variant="contained"
                            href="https://rapidapi.com/cadmus-labs-cadmus-labs-admin/api/website-oracle"
                            target="_blank"
                        >
                            View Solutions
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Home;
