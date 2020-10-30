import { takeScreenshot } from '../common';
import { testConfig } from '../config';

const { failureThresholdType, screenshot } = testConfig;
const failureThreshold = 0.02;
const port = process.env.PORT || defaultPort;

describe('Card Section', () => {
    afterAll(async() => {
        await page.waitFor(1000);
    });
    
    beforeAll(async () => {
        jest.setTimeout(100000);
    });

    it('example', async () => {
        let image;

        await page.setViewport({ width: 500, height: 300 });

        await page.goto(`http://localhost:${port}/iframe.html?id=card-section--example`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'card-section',
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

        await page.setViewport({ width: screenshot.width, height: 400 });

        await page.goto(`http://localhost:${port}/iframe.html?id=card-section--prop-color`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'card-section',
            element: page,
            story: 'prop-color'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-darken', async () => {
        let image;

        await page.setViewport({ width: screenshot.width, height: 400 });

        await page.goto(`http://localhost:${port}/iframe.html?id=card-section--prop-darken`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'card-section',
            element: page,
            story: 'prop-darken'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-divider', async () => {
        let image;

        await page.setViewport({ width: screenshot.width, height: 400 });

        await page.goto(`http://localhost:${port}/iframe.html?id=card-section--prop-divider`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'card-section',
            element: page,
            story: 'prop-divider'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-faded', async () => {
        let image;

        await page.setViewport({ width: screenshot.width, height: 400 });

        await page.goto(`http://localhost:${port}/iframe.html?id=card-section--prop-faded`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'card-section',
            element: page,
            story: 'prop-faded'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-lighten', async () => {
        let image;

        await page.setViewport({ width: screenshot.width, height: 400 });

        await page.goto(`http://localhost:${port}/iframe.html?id=card-section--prop-lighten`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'card-section',
            element: page,
            story: 'prop-lighten'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('util-padding', async () => {
        let image;

        await page.setViewport({ width: 700, height: 700 });

        await page.goto(`http://localhost:${port}/iframe.html?id=card-section--util-padding`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'card-section',
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

        await page.setViewport({ width: 300, height: 200 });

        await page.goto(`http://localhost:${port}/iframe.html?id=card-section--util-visibility`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'card-section',
            element: page,
            story: 'util-visibility'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });
});