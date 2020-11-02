import { takeScreenshot } from '../common';
import { testConfig } from '../config';

const { failureThresholdType, screenshot } = testConfig;
const failureThreshold = 0.02;
const port = process.env.PORT || defaultPort;

describe('List', () => {
    afterAll(async () => {
        await page.waitFor(1000);
    });

    beforeAll(async () => {
        jest.setTimeout(100000);
    });

    it('example', async () => {
        let image;

        await page.goto(`http://localhost:${port}/iframe.html?id=list--example`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: screenshot.width, height: 300 });

        image = await takeScreenshot({
            component: 'list',
            element: page,
            story: 'example'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-color', async () => {
        let image;

        await page.goto(`http://localhost:${port}/iframe.html?id=list--prop-color`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: screenshot.width, height: 1500 });

        image = await takeScreenshot({
            component: 'list',
            element: page,
            story: 'prop-color'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-divider', async () => {
        let image;

        await page.goto(`http://localhost:${port}/iframe.html?id=list--prop-divider`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: screenshot.width, height: 500 });

        image = await takeScreenshot({
            component: 'list',
            element: page,
            story: 'prop-divider'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-padding', async () => {
        let image;

        await page.goto(`http://localhost:${port}/iframe.html?id=list--prop-padding`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: screenshot.width, height: 500 });

        image = await takeScreenshot({
            component: 'list',
            element: page,
            story: 'prop-padding'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-striped', async () => {
        let image;

        await page.goto(`http://localhost:${port}/iframe.html?id=list--prop-striped`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: screenshot.width, height: 1500 });

        image = await takeScreenshot({
            component: 'list',
            element: page,
            story: 'prop-striped'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('util-margin', async () => {
        let image;

        await page.goto(`http://localhost:${port}/iframe.html?id=list--util-margin`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: 1300, height: 1800 });

        image = await takeScreenshot({
            component: 'list',
            element: page,
            story: 'util-margin'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('util-padding', async () => {
        let image;

        await page.goto(`http://localhost:${port}/iframe.html?id=list--util-padding`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: screenshot.width, height: 1900 });

        image = await takeScreenshot({
            component: 'list',
            element: page,
            story: 'util-padding'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('util-visibility', async () => {
        let image;

        await page.goto(`http://localhost:${port}/iframe.html?id=list--util-visibility`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: screenshot.width, height: 400 });

        image = await takeScreenshot({
            component: 'list',
            element: page,
            story: 'util-visibility'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });
});