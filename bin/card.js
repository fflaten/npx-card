#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
import chalk from 'chalk';
import boxen from 'boxen';

// Define options for Boxen
const options = {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
};

// Text + chalk definitions
const data = {
    name: chalk.white.bold('Frode Flaten'),
    handle: chalk.white.bold('@fflaten'),
    subtitle: chalk.white('PowerShell enthusiast'),
    bluesky: chalk.cyan('https://bsky.app/profile/frodeflaten.com'),
    twitter: chalk.cyan('https://twitter.com/frodeflaten'),
    github: chalk.cyan('https://github.com/fflaten'),
    linkedin: chalk.cyan('https://linkedin.com/in/frodeflaten'),
    web: chalk.cyan('https://frodeflaten.com'),
    npx: chalk.green('npx @fflaten/card'),
    labelBlueSky: chalk.white.bold(' BlueSky:'),
    labelTwitter: chalk.white.bold(' Twitter:'),
    labelGitHub: chalk.white.bold('  GitHub:'),
    labelLinkedIn: chalk.white.bold('LinkedIn:'),
    labelWeb: chalk.white.bold('     Web:'),
    labelCard: chalk.white.bold('    Card:'),
};

// Create single output for boxen
const newline = '\n';
const output =
    `${data.name} | ${data.handle}` +
    newline +
    newline +
    data.subtitle +
    newline +
    newline +
    `${data.labelBlueSky}  ${data.bluesky} ` +
    newline +
    `${data.labelTwitter}  ${data.twitter} ` +
    newline +
    `${data.labelGitHub}  ${data.github} ` +
    newline +
    `${data.labelLinkedIn}  ${data.linkedin} ` +
    newline +
    `${data.labelWeb}  ${data.web} ` +
    newline +
    newline +
    `${data.labelCard}  ${data.npx}`;

// Print
console.log(chalk.magenta(boxen(output, options)));
