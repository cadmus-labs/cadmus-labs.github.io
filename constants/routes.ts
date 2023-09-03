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
import type { Route as NextRoute } from "next";

/*
 * Internal model for type safety starts here
 */

interface _Route {
    name: string;
    path: NextRoute<string>;
    subRoutes?: _Route[];
}

const _Routes: _Route[] = [
    {
        name: "Solutions",
        path: "/solutions",
        subRoutes: [
            {
                name: "Website Oracle",
                path: "/solutions/website-oracle",
            },
        ],
    },
];

/*
 * Internal model for type safety ends here
 */

export interface Route {
    name: string;
    path: NextRoute<string>;
    subRoutes?: Record<string, Route>;
}

const buildRoutes = (currentRoutes: _Route[]): Record<string, Route> => {
    const routesMap: Record<string, Route> = {};
    currentRoutes.forEach((route) => {
        routesMap[route.path] = {
            name: route.name,
            path: route.path,
            subRoutes:
                route.subRoutes === undefined
                    ? undefined
                    : buildRoutes(route.subRoutes),
        };
    });
    return routesMap;
};

export const Routes: Record<string, Route> = buildRoutes(_Routes);
