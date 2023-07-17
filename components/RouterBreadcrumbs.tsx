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

import { KeyboardArrowRight } from "@mui/icons-material";
import { Breadcrumbs, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { Routes, type Route, ANY_ROUTE } from "@/constants/routes";

const RouterBreadcrumbs = (): React.ReactElement | null => {
    const router = useRouter();
    const pathnames = router.pathname.split("/").filter((x) => x);

    const breadcrumbs: Array<{ name: string; path?: string }> = [
        {
            name: "Home",
            path: pathnames.length > 0 ? "/" : undefined,
        },
    ];
    if (pathnames.length > 0) {
        const visitRoutes = (
            currentRoutes: Record<string, Route>,
            currentPathnames: string[],
            currentBasePath: string,
        ): void => {
            if (currentPathnames.length > 0) {
                const currentSubPath = "/" + currentPathnames[0];
                if (currentSubPath in currentRoutes) {
                    const route = currentRoutes[currentSubPath];
                    if (currentPathnames.length > 1) {
                        const currentPath = currentBasePath + currentSubPath;
                        breadcrumbs.push({
                            name: route.name,
                            path: currentPath,
                        });
                        if (route.subRoutes !== undefined) {
                            visitRoutes(
                                route.subRoutes,
                                currentPathnames.slice(1),
                                currentPath,
                            );
                        }
                    } else {
                        breadcrumbs.push({
                            name: route.name,
                        });
                    }
                } else if (ANY_ROUTE in currentRoutes) {
                    const route = currentRoutes[ANY_ROUTE];
                    breadcrumbs.push({
                        name: route.name,
                    });
                }
            }
        };
        visitRoutes(Routes, pathnames, "");
    }

    return (
        <Breadcrumbs
            aria-label="breadcrumb"
            sx={{ my: 3 }}
            separator={<KeyboardArrowRight />}
        >
            {breadcrumbs.map((breadcrumb) => {
                return breadcrumb.path === undefined ? (
                    <Typography color="textPrimary" key={breadcrumb.name}>
                        {breadcrumb.name}
                    </Typography>
                ) : (
                    <Link passHref href={breadcrumb.path} key={breadcrumb.name}>
                        {breadcrumb.name}
                    </Link>
                );
            })}
        </Breadcrumbs>
    );
};

export default RouterBreadcrumbs;
