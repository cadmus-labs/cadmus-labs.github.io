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

import {
    Box,
    Button,
    LinearProgress,
    Link,
    Tab,
    Tabs,
    Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import Logo from "@/components/content/Logo";
import Paragraph from "@/components/content/Paragraph";
import Photo from "@/components/content/Photo";
import Section from "@/components/content/Section";
import SectionHeading from "@/components/content/SectionHeading";
import { Photos } from "@/constants/images";
import { Logos } from "@/constants/logos";

const Overview = (): React.ReactElement => (
    <Section>
        <Photo float={"right"} photo={Photos.AnalyzePhoto} />
        <Paragraph>
            Welcome to Website Oracle, a cutting-edge API developed by Cadmus
            Labs. Website Oracle offers a comprehensive set of utility endpoints
            designed to empower you with in-depth analysis and insights into
            various aspects of websites deployed on the internet.
        </Paragraph>
        <Paragraph>
            With Website Oracle, you gain access to a wide array of features
            that enable you to delve deep into websites and gain a thorough
            understanding of their structure and dependencies. Our API is your
            trusted ally in gaining valuable insights into website elements for
            various use cases.
        </Paragraph>
        <Paragraph>
            Please ensure that you adhere to our Terms of Use while using the
            Website Oracle API. By using our API, you acknowledge your
            responsibility to conduct lawful analyses and assessments in
            compliance with the laws governing the websites you evaluate. Cadmus
            Labs does not assume any liability for the usage of the API beyond
            the scope of the agreed Terms.
        </Paragraph>
        <SectionHeading>Key Features</SectionHeading>
        <ul>
            <li>
                Analyze Dependencies and Broken Links: Discover the hidden
                intricacies of your website&apos;s dependency graph and easily
                identify broken links that may be hampering user experience. Our
                endpoint for analyzing dependencies provides valuable insights
                into how your website&apos;s various components interact.
            </li>
            <li>
                Retrieve SSL Certificates with Ease: Obtain essential SSL
                certificate-related information for any website of your choice
                through our intuitive API endpoint. Decipher certificates
                effortlessly and access crucial details to enhance your
                website&apos;s security and credibility.
            </li>
            <li>
                Get Website Content in Plain Text: Access the content of any
                website in plain text format through our new API endpoint.
                Simplify data extraction and analysis by retrieving the textual
                content of web pages for further processing and insights.
            </li>
        </ul>
        <SectionHeading>Support</SectionHeading>
        <Paragraph>
            If you require assistance or have any inquiries regarding the
            Website Oracle API, we&apos;re here to help! Please feel free to
            reach out to us through the Rapid API Support channel. Our dedicated
            support team will promptly address your questions and provide the
            necessary guidance to ensure a smooth and successful experience with
            our API.
        </Paragraph>
        <SectionHeading>Pricing</SectionHeading>
        <Paragraph>
            Please refer to the pricing section for detailed information about
            the available pricing plans. Each plan includes sensible usage
            limits to cater to various needs. Additionally, we offer the
            flexibility to create custom private plans based on the requests,
            tailored to specific requirements.
        </Paragraph>
    </Section>
);

const TermsOfUse = (): React.ReactElement => {
    const cadmusLabsEmail = (
        <Link href="mailto:cadmuslabsinnovations@gmail.com">
            cadmuslabsinnovations@gmail.com
        </Link>
    );
    return (
        <React.Fragment>
            <Section>
                <Paragraph>
                    These Terms of Use (&quot;Terms&quot;) govern the use of the
                    &quot;Website Oracle&quot; API (&quot;the API&quot;)
                    provided by Cadmus Labs (&quot;the Company&quot;). By
                    accessing or using the API, you acknowledge that you have
                    read, understood, and agree to be bound by these Terms. If
                    you do not agree with these Terms, you must not use the API.
                </Paragraph>
                <ol className="num-prefixed-list">
                    <li>
                        API Usage
                        <ol className="num-prefixed-list">
                            <li>
                                Permitted Use: The API is intended for
                                legitimate and lawful purposes only. You may use
                                the API to analyze and assess websites for
                                informational and analytical purposes, subject
                                to the restrictions outlined in these Terms.
                            </li>
                            <li>
                                Prohibited Use: You may not use the API for any
                                malicious, illegal, or unauthorized purposes.
                                Prohibited activities include, but are not
                                limited to:
                                <ol className="num-prefixed-list">
                                    <li>
                                        Conducting any activity that compromises
                                        the security or integrity of websites,
                                        networks, or systems without proper
                                        authorization.
                                    </li>
                                    <li>
                                        Extracting, scraping, or harvesting data
                                        from websites without the website
                                        owner&apos;s explicit consent. c. Using
                                        the API to engage in any harmful or
                                        disruptive activities that may cause
                                        harm to websites or their users.
                                    </li>
                                    <li>
                                        Violating any applicable laws,
                                        regulations, or the rights of others
                                        while using the API.
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </li>
                    <li>
                        Authorization and Compliance
                        <ol className="num-prefixed-list">
                            <li>
                                Website Ownership: By using the API, you
                                represent and warrant that you have the legal
                                authority and permission to conduct the analysis
                                on the websites you are evaluating. You must
                                ensure that you have the proper authorization
                                from the website owners or administrators before
                                accessing their websites.
                            </li>
                            <li>
                                Compliance with Laws: You must comply with all
                                applicable laws and regulations while using the
                                API, including but not limited to data
                                protection and privacy laws. It is your
                                responsibility to ensure that your use of the
                                API and any analysis performed using the API is
                                in accordance with the laws governing the
                                website being analyzed.
                            </li>
                            <li>
                                Lawful Analysis: You shall not use the API for
                                any analysis or assessment that violates the
                                laws, regulations, or rights of the website
                                owner or any other relevant third party. You are
                                solely responsible for ensuring that your use of
                                the API and the analysis conducted through the
                                API are lawful and do not infringe upon the
                                rights of others.
                            </li>
                        </ol>
                    </li>
                    <li>
                        Ownership and Intellectual Property
                        <ol className="num-prefixed-list">
                            <li>
                                API Ownership: The API and all related
                                materials, including but not limited to
                                documentation, code, and designs, are the
                                exclusive property of the Company. All rights,
                                title, and interest in and to the API, including
                                any intellectual property rights, are and will
                                remain with the Company.
                            </li>
                            <li>
                                License: The Company grants you a limited,
                                non-exclusive, revocable, and non-transferable
                                license to use the API in accordance with these
                                Terms. This license does not grant you any
                                rights to use the API for commercial purposes,
                                sublicense, modify, or reproduce the API, in
                                whole or in part.
                            </li>
                        </ol>
                    </li>
                    <li>
                        Disclaimer and Limitation of Liability
                        <ol className="num-prefixed-list">
                            <li>
                                Disclaimer: The API is provided &quot;as
                                is,&quot; without any warranties,
                                representations, or guarantees of any kind,
                                express or implied. The Company makes no
                                warranties regarding the accuracy, reliability,
                                or completeness of the API or its results.
                            </li>
                            <li>
                                Limitation of Liability: In no event shall the
                                Company be liable for any direct, indirect,
                                incidental, special, consequential, or exemplary
                                damages arising out of or in connection with the
                                use of the API, even if advised of the
                                possibility of such damages.
                            </li>
                            <li>
                                User&apos;s Responsibility: The use of the API
                                is at your own risk, and you are solely
                                responsible for any consequences resulting from
                                the use of the API. The Company shall not be
                                liable for any actions or outcomes based on the
                                results obtained through the API.
                            </li>
                        </ol>
                    </li>
                    <li>
                        Termination
                        <ol className="num-prefixed-list">
                            <li>
                                Termination: The Company reserves the right to
                                suspend or terminate your access to the API at
                                any time for any reason, including but not
                                limited to a violation of these Terms.
                            </li>
                        </ol>
                    </li>
                    <li>
                        Governing Law and Dispute Resolution
                        <ol className="num-prefixed-list">
                            <li>
                                Governing Law: These Terms shall be governed by
                                and construed in accordance with the laws of the
                                country or territory from which the API is
                                accessed, without regard to its conflicts of law
                                principles.
                            </li>
                            <li>
                                Dispute Resolution: Any dispute arising out of
                                or in connection with the API or these Terms
                                shall be resolved through arbitration in
                                accordance with the rules of the
                                &quot;Arbitrators&apos; and Mediators&apos;
                                Institute of New Zealand Inc.&quot; (AMINZ). The
                                seat of arbitration shall be Auckland, New
                                Zealand, and the language of arbitration shall
                                be English.
                            </li>
                        </ol>
                    </li>
                </ol>
            </Section>
            <Section>
                By using the API, you acknowledge that you have read,
                understood, and agree to be bound by these Terms. If you have
                any questions or concerns about these Terms or the use of the
                API, please contact us at {cadmusLabsEmail}.
            </Section>
            <Section sx={{ py: 3 }}>Last updated: 18/07/2023</Section>
        </React.Fragment>
    );
};

interface PageTabs {
    id: string;
    title: string;
    component: () => React.ReactElement;
}

const pageTabs: PageTabs[] = [
    {
        id: "overview",
        title: "Overview",
        component: Overview,
    },
    {
        id: "terms-of-use",
        title: "Terms of Use",
        component: TermsOfUse,
    },
];

const WebsiteOracle = (): React.ReactElement => {
    const router = useRouter();

    const setSelectedIndex = async (newValue: number): Promise<void> => {
        const urlSearchParams = new URLSearchParams();
        Object.keys(router.query).forEach((key) => {
            const values = router.query[key];
            if (typeof values === "string") {
                urlSearchParams.set(key, values);
            } else {
                (values as string[]).forEach((value) => {
                    urlSearchParams.set(key, value);
                });
            }
        });
        urlSearchParams.set("tab", pageTabs[newValue].id);
        await router.replace(
            `${router.basePath}?${urlSearchParams.toString()}`,
        );
    };

    const [isLoading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        setLoading(router.isReady);
    }, [router.isReady]);

    const index = pageTabs.findIndex((t) => t.id === router.query.tab);
    const selectedIndex = index === -1 ? 0 : index;
    const TabContent = pageTabs[selectedIndex].component;
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
            {isLoading ? (
                <React.Fragment>
                    <Tabs
                        value={selectedIndex}
                        onChange={(
                            _event: React.SyntheticEvent,
                            newValue: number,
                        ) => {
                            setSelectedIndex(newValue).catch(console.error);
                        }}
                        indicatorColor="secondary"
                        textColor="inherit"
                        variant="scrollable"
                    >
                        {pageTabs.map((t) => (
                            <Tab key={t.title} label={t.title} />
                        ))}
                    </Tabs>
                    <TabContent />
                </React.Fragment>
            ) : (
                <Box sx={{ width: "100%" }}>
                    <LinearProgress />
                </Box>
            )}
        </React.Fragment>
    );
};

export default WebsiteOracle;
