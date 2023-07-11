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
import Head from "next/head";
import React from "react";

const PUBLIC_URL = process.env.PUBLIC_URL ?? "https://cadmus-labs.github.io";

const NotFoundPage = (): React.ReactElement => (
    <Head>
        <meta httpEquiv="refresh" content={`0; url=${PUBLIC_URL}`} />
    </Head>
);

export default NotFoundPage;
