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

import { Button, Typography } from "@mui/material";
import React from "react";

import Logo from "@/components/content/Logo";
import Paragraph from "@/components/content/Paragraph";
import Photo from "@/components/content/Photo";
import Section from "@/components/content/Section";
import SectionHeading from "@/components/content/SectionHeading";
import { Photos } from "@/constants/images";
import { Logos } from "@/constants/logos";

const WebsiteOracle = (): React.ReactElement => (
    <React.Fragment>
        <Typography variant="h5" component="h1">
            Website Oracle
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
        <Section>
            <Photo float={"right"} photo={Photos.AnalyzePhoto} />
            <Paragraph>
                Introducing the Website Oracle API - a powerful tool for
                analyzing and comprehensively assessing various aspects of
                websites. With its rich set of features, this API empowers
                thorough analysis of website components, including SSL
                certificates, dependencies, broken links, and more. As we
                continue to enhance and expand its capabilities, the Website
                Oracle API will serve as an invaluable resource for in-depth
                website analysis, providing valuable insights and comprehensive
                evaluations.
            </Paragraph>
            <SectionHeading>Features</SectionHeading>
            <ul>
                <li>
                    Fetch Certificates: Utilize this endpoint to retrieve
                    certificate-related information for a particular website.
                    This functionality allows you to decode a certificate and
                    conveniently access its associated details.
                </li>
                <li>
                    Dependency Analysis: Utilize this endpoint to conduct an
                    analysis of broken links and dependencies within a website.
                    It enables you to obtain a comprehensive graph of all the
                    dependencies associated with your website. By initiating the
                    crawling process from a specified URL, this endpoint
                    retrieves and provides information on all visited URLs,
                    including their respective status and contained
                    dependencies.
                </li>
            </ul>
            <SectionHeading>Support</SectionHeading>
            <Paragraph>
                If you require assistance or have any inquiries regarding the
                Website Oracle API, we&apos;re here to help! Please feel free to
                reach out to us through the Rapid API Support channel. Our
                dedicated support team will promptly address your questions and
                provide the necessary guidance to ensure a smooth and successful
                experience with our API.
            </Paragraph>
            <SectionHeading>Pricing</SectionHeading>
            <Paragraph>
                Please refer to the pricing section for detailed information
                about the available pricing plans. Each plan includes sensible
                usage limits to cater to various needs. Additionally, we offer
                the flexibility to create custom private plans based on the
                requests, tailored to specific requirements.
            </Paragraph>
        </Section>
    </React.Fragment>
);

export default WebsiteOracle;
