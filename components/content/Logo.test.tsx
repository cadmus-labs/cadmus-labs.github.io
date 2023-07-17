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

import { createTheme, ThemeProvider } from "@mui/material";
import { render, screen, waitFor } from "@testing-library/react";

import Logo from "./Logo";

test("renders logo with default height", async () => {
    const { container } = render(
        <ThemeProvider
            theme={createTheme({
                palette: {
                    mode: "light",
                },
            })}
        >
            <Logo
                logo={{
                    src: (mode) =>
                        mode === "light"
                            ? "/test-logo-1/light.png"
                            : "/test-logo-1/dark.png",
                    alt: "Test Logo 1 Alt",
                    width: 142,
                    height: 251,
                }}
            />
        </ThemeProvider>,
    );

    expect(container.querySelector("div.MuiBox-root")).toHaveStyle(
        "height: 3em",
    );
    const image = await screen.findByRole("img", {
        name: /test logo 1 alt/i,
    });
    await waitFor(() => {
        expect(image.getAttribute("src")).toMatch(/\/_next\/image/i);
    });
    expect(image).toHaveAttribute(
        "src",
        "/_next/image?url=%2Ftest-logo-1%2Flight.png&w=3840&q=75",
    );
});

test("renders logo with specific height", async () => {
    const { container } = render(
        <ThemeProvider
            theme={createTheme({
                palette: {
                    mode: "light",
                },
            })}
        >
            <Logo
                height={"4.5em"}
                logo={{
                    src: (mode) =>
                        mode === "light"
                            ? "/test-logo-2/light.png"
                            : "/test-logo-2/dark.png",
                    alt: "Test Logo 2 Alt",
                    width: 144,
                    height: 257,
                }}
            />
        </ThemeProvider>,
    );

    expect(container.querySelector("div.MuiBox-root")).toHaveStyle(
        "height: 4.5em",
    );
    const image = await screen.findByRole("img", {
        name: /test logo 2 alt/i,
    });
    await waitFor(() => {
        expect(image.getAttribute("src")).toMatch(/\/_next\/image/i);
    });
    expect(image).toHaveAttribute(
        "src",
        "/_next/image?url=%2Ftest-logo-2%2Flight.png&w=3840&q=75",
    );
});

test("renders logo with dark theme", async () => {
    render(
        <ThemeProvider
            theme={createTheme({
                palette: {
                    mode: "dark",
                },
            })}
        >
            <Logo
                logo={{
                    src: (mode) =>
                        mode === "light"
                            ? "/test-logo-3/light.png"
                            : "/test-logo-3/dark.png",
                    alt: "Test Logo 3 Alt",
                    width: 149,
                    height: 253,
                }}
            />
        </ThemeProvider>,
    );

    const image = await screen.findByRole("img", {
        name: /test logo 3 alt/i,
    });
    await waitFor(() => {
        expect(image.getAttribute("src")).toMatch(/\/_next\/image/i);
    });
    expect(image).toHaveAttribute(
        "src",
        "/_next/image?url=%2Ftest-logo-3%2Fdark.png&w=3840&q=75",
    );
});
