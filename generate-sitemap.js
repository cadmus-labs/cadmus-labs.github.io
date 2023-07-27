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
const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");
const fs = require("fs");

const currentTimestamp = new Date().toISOString();
const hostname = "https://cadmus-labs.github.io";
const sitemapFileName = "sitemap.xml";
const robotsFileName = "robots.txt";
const buildDir = "./out";

const urls = ["/", "/solutions", "/solutions/website-oracle"].map((url) => ({
    url: url,
    changefreq: "daily",
    lastmod: currentTimestamp,
}));

const stream = new SitemapStream({ hostname: hostname });

streamToPromise(Readable.from(urls).pipe(stream)).then((data) => {
    const sitemapFile = `${buildDir}/${sitemapFileName}`;
    fs.writeFile(sitemapFile, data.toString(), (err) => {
        if (err) {
            console.err(`Failed to generate sitemap ${sitemapFile} file`);
            process.exit(1);
        } else {
            console.log(`Generated sitemap ${sitemapFile} file`);
            writeRobotsFile();
        }
    });
});

function writeRobotsFile() {
    const robotsFile = `${buildDir}/${robotsFileName}`;
    const sitemapEntry = `\nSitemap: ${hostname}/${sitemapFileName}\n`;
    fs.appendFile(robotsFile, sitemapEntry, (err) => {
        if (err) {
            console.err(`Failed to add sitemap to ${robotsFile} file`);
            process.exit(1);
        } else {
            console.log(`Added sitemap to ${robotsFile} file`);
        }
    });
}
