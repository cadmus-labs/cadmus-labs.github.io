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
import { render, screen } from "@testing-library/react";

import Section from "./Section";

test("renders section with correct content", async () => {
    render(<Section>Test Section content written for Cadmus Labs</Section>);

    await screen.findByText("Test Section content written for Cadmus Labs");
});
