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
    name: chalk.white('Frode Flaten'),
    handle: chalk.white('@fflaten'),
    work: chalk.white('PowerShell enthusiast and IT professional'),
    bluesky: chalk.gray('https://bsky.app/profile/') + chalk.blue('frodeflaten.com'),
    twitter: chalk.gray('https://twitter.com/') + chalk.cyan('frodeflaten'),
    github: chalk.gray('https://github.com/') + chalk.green('fflaten'),
    linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('frodeflaten'),
    web: chalk.cyan('https://frodeflaten.com'),
    npx: `${chalk.red('npx')} ${chalk.white('fflaten')}`,
    labelWork: chalk.white.bold('    Work:'),
    labelBlueSky: chalk.white.bold(' BlueSky:'),
    labelTwitter: chalk.white.bold(' Twitter:'),
    labelGitHub: chalk.white.bold('  GitHub:'),
    labelLinkedIn: chalk.white.bold('LinkedIn:'),
    labelWeb: chalk.white.bold('     Web:'),
    labelCard: chalk.white.bold('    Card:'),
};

// Actual strings we're going to output
const newline = '\n';
const title = `${data.name} / ${data.handle}`;
const work = `${data.labelWork}  ${data.work}`;
const bluesky = `${data.labelBlueSky}  ${data.bluesky}`;
const twitter = `${data.labelTwitter}  ${data.twitter}`;
const github = `${data.labelGitHub}  ${data.github}`;
const linkedin = `${data.labelLinkedIn}  ${data.linkedin}`;
const web = `${data.labelWeb}  ${data.web}`;
const card = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
    title + // data.name + data.handle
    newline +
    newline + // Add one whole blank line
    work +
    newline + // data.labelWork + data.work
    bluesky +
    newline + // data.labelBlueSky + data.bluesky
    twitter  +
    newline + // data.labelTwitter + data.twitter
    github +
    newline + // data.labelGitHub + data.github
    linkedin +
    newline + // data.labelLinkedIn + data.linkedin
    web +
    newline +
    newline + // data.labelWeb + data.web
    card; // data.labelCard + data.npx

// Print
console.log(chalk.green(boxen(output, options)));
