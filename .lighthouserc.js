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
const PATHS = ["/", "/achievements", "/experience"];

let LIVE_SITE_ASSERTIONS = {};
if (process.env["VALIDATING_LIVE_SITE"] === "true") {
    LIVE_SITE_ASSERTIONS = {
        ...LIVE_SITE_ASSERTIONS,
        ...{
            "unsized-images": ["warn"],
            "uses-responsive-images": ["warn"],
            "errors-in-console": ["warn"],
        },
    };
}

module.exports = {
    ci: {
        collect: {
            url: PATHS.map((path) => "https://cadmus-labs.github.io" + path),
            isSinglePageApplication: true,
            numberOfRuns: 5,
            settings: {
                chromeFlags: "--ignore-certificate-errors",
            },
        },
        upload: {
            target: "filesystem",
            outputDir: "./lhci-out",
        },
        assert: {
            preset: "lighthouse:recommended",
            assertions: {
                "errors-in-console": ["warn"],
                "inspector-issues": ["warn"],
                "canonical": ["warn"],
                "csp-xss": ["warn"],
                "non-composited-animations": ["warn"],
                "offscreen-images": ["warn"],
                "preload-lcp-image": ["warn"],
                "unused-javascript": ["warn"],
                ...LIVE_SITE_ASSERTIONS,
            },
        },
    },
};
