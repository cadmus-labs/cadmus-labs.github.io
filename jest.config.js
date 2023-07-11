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

const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: "./" });

const customJestConfig = {
    errorOnDeprecated: true,
    collectCoverage: true,
    coverageReporters: ["text-summary", "clover", "html"],
    moduleDirectories: ["node_modules", "<rootDir>/"],
    modulePathIgnorePatterns: ["<rootDir>/cypress/"],
    moduleNameMapper: {
        "@/components/(.*)": ["<rootDir>/components/$1"],
        "@/constants/(.*)": ["<rootDir>/constants/$1"],
        "@/styles/(.*)": ["<rootDir>/styles/$1"],
    },
    setupFilesAfterEnv: ["<rootDir>/jest-setup.js"],
    testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);
