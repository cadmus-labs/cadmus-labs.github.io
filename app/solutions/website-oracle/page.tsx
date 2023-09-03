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
import { Link } from "@mui/material";
import React from "react";

import Paragraph from "@/components/content/Paragraph";
import Photo from "@/components/content/Photo";
import Section from "@/components/content/Section";
import SectionHeading from "@/components/content/SectionHeading";
import { Photos } from "@/constants/images";

const WebsiteOracle = (): React.ReactElement => {
    const checkWebsiteDependencies = (
        <Link
            href="https://github.com/marketplace/actions/check-website-dependencies"
            target="_blank"
        >
            Check Website Dependencies
        </Link>
    );
    const checkWebsiteCertificate = (
        <Link
            href="https://github.com/marketplace/actions/check-website-certificate"
            target="_blank"
        >
            Check Website Certificate
        </Link>
    );
    return (
        <Section>
            <Photo float={"right"} photo={Photos.AnalyzePhoto} />
            <Paragraph>
                Welcome to Website Oracle, a cutting-edge API developed by
                Cadmus Labs. Website Oracle offers a comprehensive set of
                utility endpoints designed to empower you with in-depth analysis
                and insights into various aspects of websites deployed on the
                internet.
            </Paragraph>
            <Paragraph>
                With Website Oracle, you gain access to a wide array of features
                that enable you to delve deep into websites and gain a thorough
                understanding of their structure and dependencies. Our API is
                your trusted ally in gaining valuable insights into website
                elements for various use cases.
            </Paragraph>
            <Paragraph>
                Please ensure that you adhere to our Terms of Use while using
                the Website Oracle API. By using our API, you acknowledge your
                responsibility to conduct lawful analyses and assessments in
                compliance with the laws governing the websites you evaluate.
                Cadmus Labs does not assume any liability for the usage of the
                API beyond the scope of the agreed Terms.
            </Paragraph>
            <SectionHeading>Key Features</SectionHeading>
            <ul>
                <li>
                    Analyze Dependencies and Broken Links: Discover the hidden
                    intricacies of your website&apos;s dependency graph and
                    easily identify broken links that may be hampering user
                    experience. Our endpoint for analyzing dependencies provides
                    valuable insights into how your website&apos;s various
                    components interact.
                </li>
                <li>
                    Retrieve SSL Certificates with Ease: Obtain essential SSL
                    certificate-related information for any website of your
                    choice through our intuitive API endpoint. Decipher
                    certificates effortlessly and access crucial details to
                    enhance your website&apos;s security and credibility.
                </li>
                <li>
                    Get Website Content in Plain Text: Access the content of any
                    website in plain text format through our new API endpoint.
                    Simplify data extraction and analysis by retrieving the
                    textual content of web pages for further processing and
                    insights.
                </li>
            </ul>
            <SectionHeading>Eco System</SectionHeading>
            <ul>
                <li>
                    GitHub Actions
                    <ul>
                        <li>{checkWebsiteDependencies}</li>
                        <li>{checkWebsiteCertificate}</li>
                    </ul>
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
    );
};

export default WebsiteOracle;
