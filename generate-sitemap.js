const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");
const fs = require("fs");

const currentTimestamp = new Date().toISOString();
const hostname = "https://cadmus-labs.github.io";
const sitemapFileName = "sitemap.xml";
const robotsFileName = "robots.txt";
const buildDir = "./out";

const urls = ["/"].map((url) => ({
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
