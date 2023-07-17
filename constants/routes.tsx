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

export interface Route {
    name: string;
    subRoutes?: Record<string, Route>;
}

export const ANY_ROUTE = "*";

export const Routes: Record<string, Route> = {
    "/solutions": {
        name: "Solutions",
        subRoutes: {
            "/website-oracle": {
                name: "Website Oracle",
            },
        },
    },
};
