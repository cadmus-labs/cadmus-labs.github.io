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
import { useReportWebVitals } from "next/web-vitals";
import React from "react";

const WebVitals = (): React.ReactElement => {
    useReportWebVitals((metric) => {
        (window as any).gtag("event", metric.name, {
            value: Math.round(
                metric.name === "CLS" ? metric.value * 1000 : metric.value,
            ),
            event_label: metric.id,
            non_interaction: true,
        });
    });
    return <React.Fragment />;
};

export default WebVitals;
