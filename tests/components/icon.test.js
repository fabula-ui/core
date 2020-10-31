import { takeScreenshot } from '../common';
import { testConfig } from '../config';

const { failureThresholdType, screenshot } = testConfig;
const failureThreshold = 0.02;
const port = process.env.PORT || defaultPort;

describe('Icon', () => {
    afterAll(async () => {
        await page.waitFor(1000);
    });

    beforeAll(async () => {
        jest.setTimeout(100000);
    });

    it('example', async () => {
        let image;

        await page.goto(`http://localhost:${port}/iframe.html?id=icon--example`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: 200, height: 100 });

        image = await takeScreenshot({
            component: 'icon',
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

        await page.goto(`http://localhost:${port}/iframe.html?id=icon--prop-color`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: 200, height: 100 });

        image = await takeScreenshot({
            component: 'icon',
            element: page, 
            story: 'prop-color'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-size', async () => {
        let image;

        await page.goto(`http://localhost:${port}/iframe.html?id=icon--prop-size`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: 200, height: 100 });

        image = await takeScreenshot({
            component: 'icon',
            element: page, 
            story: 'prop-size'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('util-margin', async () => {
        let image;

        await page.goto(`http://localhost:${port}/iframe.html?id=icon--util-margin`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: 200, height: 300 });

        image = await takeScreenshot({
            component: 'icon',
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

        await page.goto(`http://localhost:${port}/iframe.html?id=icon--util-visibility`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: 100, height: 100 });

        image = await takeScreenshot({
            component: 'icon',
            element: page, 
            story: 'util-visibility'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });
});
