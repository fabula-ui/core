const { takeScreenshot } = require('../common');
const { testConfig } = require('../config');

describe('Badge', () => {
    const { failureThreshold, failureThresholdType } = testConfig;
    const port = process.env.PORT || defaultPort;

    afterAll(async () => {
        await page.waitFor(1000);
    });

    beforeAll(async () => {
        jest.setTimeout(100000);
    });

    it('example', async () => {
        let image;

        page.setViewport({ width: 700, height: 500 });
        await page.goto(`http://localhost:${port}/iframe.html?id=badge--example`, { waitUntil: 'load' });
        await page.waitFor(1000);
        
        image = await takeScreenshot({
            component: 'badge',
            element: page,
            story: 'example'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-clear', async () => {
        let image;

        page.setViewport({ width: 700, height: 600 });
        await page.goto(`http://localhost:${port}/iframe.html?id=badge--prop-clear`, { waitUntil: 'load' });
        await page.waitFor(500);
        
        image = await takeScreenshot({
            component: 'badge',
            element: page,
            story: 'prop-clear'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-color', async () => {
        let image;

        page.setViewport({ width: 800, height: 100 });
        await page.goto(`http://localhost:${port}/iframe.html?id=badge--prop-color`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'badge',
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

        page.setViewport({ width: 800, height: 100 });
        await page.goto(`http://localhost:${port}/iframe.html?id=badge--prop-darken`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'badge',
            element: page,
            story: 'prop-darken'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-faded', async () => {
        let image;

        page.setViewport({ width: 800, height: 100 });
        await page.goto(`http://localhost:${port}/iframe.html?id=badge--prop-faded`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'badge',
            element: page,
            story: 'prop-faded'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-invert', async () => {
        let image;

        page.setViewport({ width: 800, height: 100 });
        await page.goto(`http://localhost:${port}/iframe.html?id=badge--prop-invert`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'badge',
            element: page,
            story: 'prop-invert'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-lighten', async () => {
        let image;

        page.setViewport({ width: 800, height: 100 });
        await page.goto(`http://localhost:${port}/iframe.html?id=badge--prop-lighten`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'badge',
            element: page,
            story: 'prop-lighten'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-outline', async () => {
        let image;

        page.setViewport({ width: 800, height: 100 });
        await page.goto(`http://localhost:${port}/iframe.html?id=badge--prop-outline`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'badge',
            element: page,
            story: 'prop-outline'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-rounded', async () => {
        let image;

        page.setViewport({ width: 800, height: 100 });
        await page.goto(`http://localhost:${port}/iframe.html?id=badge--prop-rounded`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'badge',
            element: page,
            story: 'prop-rounded'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('util-margin', async () => {
        let image;

        page.setViewport({ width: 200, height: 250 });
        await page.goto(`http://localhost:${port}/iframe.html?id=badge--util-margin`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'badge',
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

        page.setViewport({ width: 600, height: 100 });
        await page.goto(`http://localhost:${port}/iframe.html?id=badge--util-padding`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'badge',
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

        page.setViewport({ width: 100, height: 100 });
        await page.goto(`http://localhost:${port}/iframe.html?id=badge--util-visibility`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'badge',
            element: page,
            story: 'util-visibility'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });
});