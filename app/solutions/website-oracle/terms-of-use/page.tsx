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
import Section from "@/components/content/Section";

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

export default TermsOfUse;
