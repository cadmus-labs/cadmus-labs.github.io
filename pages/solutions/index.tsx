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
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";

interface Solution {
    name: string;
    description: string;
    logoUrl: string;
    websiteUrl: string;
}

const Solutions = (): React.ReactElement => {
    const solutions: Solution[] = [
        {
            name: "Website Oracle",
            description:
                "Versatile Website Analysis API capable of comprehensively analyzing and handling various aspects related to websites.",
            logoUrl: "/assets/website-oracle-logo.jpg",
            websiteUrl:
                "https://rapidapi.com/cadmus-labs-cadmus-labs-admin/api/website-oracle",
        },
    ];
    return (
        <Box>
            <Typography variant="h6" component="h1">
                Solutions
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="stretch"
                sx={{ pt: 1 }}
            >
                {solutions.map((solution) => (
                    <Grid key={solution.name} item xs={12} md={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <Link href={solution.websiteUrl} target="_blank">
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image={solution.logoUrl}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="div"
                                        >
                                            {solution.name}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            {solution.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Link>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Solutions;
