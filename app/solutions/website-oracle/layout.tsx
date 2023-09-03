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
import { Button, Tab, Tabs, Typography } from "@mui/material";
import { useRouter, useSelectedLayoutSegments } from "next/navigation";
import React from "react";

import Logo from "@/components/content/Logo";
import { Logos } from "@/constants/logos";

interface TabPage {
    subPath: string;
    title: string;
}

const tabPages: TabPage[] = [
    {
        subPath: "/",
        title: "Overview",
    },
    {
        subPath: "/terms-of-use",
        title: "Terms of Use",
    },
];

interface WebsiteOracleProps {
    children: React.ReactNode;
}

const WebsiteOracle = ({
    children,
}: WebsiteOracleProps): React.ReactElement => {
    const router = useRouter();
    const selectedSubPaths = useSelectedLayoutSegments();
    const selectedIndex =
        selectedSubPaths.length === 0
            ? 0
            : Math.max(
                  tabPages.findIndex(
                      (t) => t.subPath === `/${selectedSubPaths[0]}`,
                  ),
                  0,
              );
    return (
        <React.Fragment>
            <Typography variant="h5" component="h1">
                Website Oracle: Your Ultimate Website Analysis Solution
            </Typography>
            <Logo height={"4em"} logo={Logos.websiteOracle} />
            <Button
                sx={{ my: 2 }}
                size="small"
                variant="outlined"
                href="https://rapidapi.com/cadmus-labs-cadmus-labs-admin/api/website-oracle"
                target="_blank"
            >
                View on Rapid API
            </Button>
            <React.Fragment>
                <Tabs
                    value={selectedIndex ?? 0}
                    onChange={(
                        _event: React.SyntheticEvent,
                        newValue: number,
                    ) => {
                        router.push(
                            `/solutions/website-oracle${tabPages[newValue].subPath}`,
                        );
                    }}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="scrollable"
                >
                    {tabPages.map((t) => (
                        <Tab key={t.title} label={t.title} />
                    ))}
                </Tabs>
                {children}
            </React.Fragment>
        </React.Fragment>
    );
};

export default WebsiteOracle;
