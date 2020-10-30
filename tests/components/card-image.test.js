import { takeScreenshot } from '../common';
import { testConfig } from '../config';

const { failureThresholdType, screenshot } = testConfig;
const failureThreshold = 0.02;
const port = process.env.PORT || defaultPort;

describe('Card Image', () => {
    afterAll(async() => {
        await page.waitFor(1000);
    });
    
    beforeAll(async () => {
        jest.setTimeout(100000);
    });

    it('example', async () => {
        let image;

        await page.setViewport({ width: screenshot.width, height: 300 });

        await page.goto(`http://localhost:${port}/iframe.html?id=card-image--example`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'card-image',
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

        await page.setViewport({ width: screenshot.width, height: 500 });

        await page.goto(`http://localhost:${port}/iframe.html?id=card-image--prop-color`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'card-image',
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

        await page.setViewport({ width: screenshot.width, height: 500 });

        await page.goto(`http://localhost:${port}/iframe.html?id=card-image--prop-darken`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'card-image',
            element: page,
            story: 'prop-darken'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-height', async () => {
        let image;

        await page.setViewport({ width: screenshot.width, height: 400 });

        await page.goto(`http://localhost:${port}/iframe.html?id=card-image--prop-height`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'card-image',
            element: page,
            story: 'prop-height'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-icon', async () => {
        let image;

        await page.setViewport({ width: screenshot.width, height: 300 });

        await page.goto(`http://localhost:${port}/iframe.html?id=card-image--prop-icon`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'card-image',
            element: page,
            story: 'prop-icon'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-lighten', async () => {
        let image;

        await page.setViewport({ width: screenshot.width, height: 500 });

        await page.goto(`http://localhost:${port}/iframe.html?id=card-image--prop-lighten`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'card-image',
            element: page,
            story: 'prop-lighten'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('external-tag', async () => {
        let image;

        await page.setViewport({ width: screenshot.width, height: 700 });

        await page.goto(`http://localhost:${port}/iframe.html?id=card-image--external-tag`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'card-image',
            element: page,
            story: 'external-tag'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('external-tag', async () => {
        let image;

        await page.setViewport({ width: screenshot.width, height: 700 });

        await page.goto(`http://localhost:${port}/iframe.html?id=card-image--external-tag`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'card-image',
            element: page,
            story: 'external-tag'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('util-visibility', async () => {
        let image;

        await page.setViewport({ width: screenshot.width, height: 700 });

        await page.goto(`http://localhost:${port}/iframe.html?id=card-image--util-visibility`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'card-image',
            element: page,
            story: 'util-visibility'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });
});