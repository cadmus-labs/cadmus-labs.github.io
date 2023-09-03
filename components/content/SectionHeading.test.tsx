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

import SectionHeading from "./SectionHeading";

test("renders section heading with children", async () => {
    render(
        <SectionHeading>
            Test Section Heading written for Cadmus Labs
        </SectionHeading>,
    );

    await screen.findByText("Test Section Heading written for Cadmus Labs");
});
