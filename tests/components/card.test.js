import { takeScreenshot } from '../common';
import { testConfig } from '../config';

const { failureThresholdType, screenshot } = testConfig;
const failureThreshold = 0.02;
const port = process.env.PORT || defaultPort;

describe('Card', () => {
    afterAll(async() => {
        await page.waitFor(1000);
    });
    
    beforeAll(async () => {
        jest.setTimeout(100000);
    });

    it('example', async () => {
        let image;

        await page.setViewport({ width: screenshot.width, height: 600 });

        await page.goto(`http://localhost:${port}/iframe.html?id=card--example`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'card',
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

        await page.setViewport({ width: screenshot.width, height: 600 });

        await page.goto(`http://localhost:${port}/iframe.html?id=card--prop-color`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'card',
            element: page,
            story: 'prop-color'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-glow', async () => {
        let image;

        await page.setViewport({ width: screenshot.width, height: 600 });

        await page.goto(`http://localhost:${port}/iframe.html?id=card--prop-glow`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'card',
            element: page,
            story: 'prop-glow'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-glow', async () => {
        let image;

        await page.setViewport({ width: screenshot.width, height: 600 });

        await page.goto(`http://localhost:${port}/iframe.html?id=card--prop-glow`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'card',
            element: page,
            story: 'prop-glow'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-layout', async () => {
        let image;

        await page.setViewport({ width: screenshot.width, height: 500 });

        await page.goto(`http://localhost:${port}/iframe.html?id=card--prop-layout`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'card',
            element: page,
            story: 'prop-layout'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('util-margin', async () => {
        let image;

        await page.setViewport({ width: 1000, height: 2100 });

        await page.goto(`http://localhost:${port}/iframe.html?id=card--util-margin`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'card',
            element: page,
            story: 'util-margin'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('util-visibility', async () => {
        let image;

        await page.setViewport({ width: 400, height: 600 });

        await page.goto(`http://localhost:${port}/iframe.html?id=card--util-visibility`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'card',
            element: page,
            story: 'util-visibility'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });
    
});