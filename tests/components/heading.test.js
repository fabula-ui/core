import { takeScreenshot } from '../common';
import { testConfig } from '../config';

const { failureThresholdType, screenshot } = testConfig;
const failureThreshold = 0.02;
const port = process.env.PORT || defaultPort;

describe('Heading', () => {
    afterAll(async () => {
        await page.waitFor(1000);
    });

    beforeAll(async () => {
        jest.setTimeout(100000);
    });

    it('example', async () => {
        let image;

        await page.goto(`http://localhost:${port}/iframe.html?id=heading--example`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: 300, height: 500 });

        image = await takeScreenshot({
            component: 'heading',
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

        await page.goto(`http://localhost:${port}/iframe.html?id=heading--prop-color`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: 300, height: 600 });

        image = await takeScreenshot({
            component: 'heading',
            element: page, 
            story: 'prop-color'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-level', async () => {
        let image;

        await page.goto(`http://localhost:${port}/iframe.html?id=heading--prop-level`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: 300, height: 800 });

        image = await takeScreenshot({
            component: 'heading',
            element: page, 
            story: 'prop-level'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-weight', async () => {
        let image;

        await page.goto(`http://localhost:${port}/iframe.html?id=heading--prop-weight`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: 500, height: 500 });

        image = await takeScreenshot({
            component: 'heading',
            element: page, 
            story: 'prop-weight'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('util-margin', async () => {
        let image;

        await page.goto(`http://localhost:${port}/iframe.html?id=heading--util-margin`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: 600, height: 500 });

        image = await takeScreenshot({
            component: 'heading',
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

        await page.goto(`http://localhost:${port}/iframe.html?id=heading--util-padding`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: 300, height: 700 });

        image = await takeScreenshot({
            component: 'heading',
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

        await page.goto(`http://localhost:${port}/iframe.html?id=heading--util-visibility`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: 200, height: 200 });

        image = await takeScreenshot({
            component: 'heading',
            element: page, 
            story: 'util-visibility'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });
});