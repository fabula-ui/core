const { takeScreenshot } = require('../common');
const { testConfig } = require('../config');

describe('Avatar', () => {
    const { failureThreshold, failureThresholdType, screenshot } = testConfig;
    const port = process.env.PORT || defaultPort;

    afterAll(async () => {
        await page.waitFor(1000);
    });

    beforeAll(async () => {
        jest.setTimeout(100000);
    });

    it('example', async () => {
        let image;

        page.setViewport({ width: 400, height: 200 });
        await page.goto(`http://localhost:${port}/iframe.html?id=avatar--example`, { waitUntil: 'networkidle2' });
        
        image = await takeScreenshot({
            component: 'avatar',
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

        page.setViewport({ width: 400, height: 100 });

        await page.goto(`http://localhost:${port}/iframe.html?id=avatar--prop-color`, { waitUntil: 'load' });
        await page.waitFor(1000);

        image = await takeScreenshot({
            component: 'avatar',
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

        page.setViewport({ width: 400, height: 100 });

        await page.goto(`http://localhost:${port}/iframe.html?id=avatar--prop-darken`, { waitUntil: 'load' });
        await page.waitFor(1000);

        image = await takeScreenshot({
            component: 'avatar',
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

        page.setViewport({ width: 400, height: 100 });

        await page.goto(`http://localhost:${port}/iframe.html?id=avatar--prop-faded`, { waitUntil: 'load' });
        await page.waitFor(1000);

        image = await takeScreenshot({
            component: 'avatar',
            element: page,
            story: 'prop-faded'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-icon', async () => {
        let image;

        page.setViewport({ width: 200, height: 100 });

        await page.goto(`http://localhost:${port}/iframe.html?id=avatar--prop-icon`, { waitUntil: 'load' });
        await page.waitFor(1000);

        image = await takeScreenshot({
            component: 'avatar',
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

        page.setViewport({ width: 400, height: 100 });

        await page.goto(`http://localhost:${port}/iframe.html?id=avatar--prop-lighten`, { waitUntil: 'load' });
        await page.waitFor(1000);

        image = await takeScreenshot({
            component: 'avatar',
            element: page,
            story: 'prop-lighten'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-rounded', async () => {
        let image;

        page.setViewport({ width: 200, height: 100 });

        await page.goto(`http://localhost:${port}/iframe.html?id=avatar--prop-rounded`, { waitUntil: 'load' });
        await page.waitFor(1000);

        image = await takeScreenshot({
            component: 'avatar',
            element: page,
            story: 'prop-rounded'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-show-initials', async () => {
        let image;

        page.setViewport({ width: 400, height: 200 });

        await page.goto(`http://localhost:${port}/iframe.html?id=avatar--prop-show-initials`, { waitUntil: 'load' });
        await page.waitFor(1000);

        image = await takeScreenshot({
            component: 'avatar',
            element: page,
            story: 'prop-show-initals'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-size', async () => {
        let image;

        page.setViewport({ width: 400, height: 200 });

        await page.goto(`http://localhost:${port}/iframe.html?id=avatar--prop-size`, { waitUntil: 'load' });
        await page.waitFor(1000);

        image = await takeScreenshot({
            component: 'avatar',
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

        page.setViewport({ width: 200, height: 500 });

        await page.goto(`http://localhost:${port}/iframe.html?id=avatar--util-margin`, { waitUntil: 'load' });
        await page.waitFor(1000);

        image = await takeScreenshot({
            component: 'avatar',
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

        page.setViewport({ width: 100, height: 200 });

        await page.goto(`http://localhost:${port}/iframe.html?id=avatar--util-visibility`, { waitUntil: 'load' });
        await page.waitFor(1000);

        image = await takeScreenshot({
            component: 'avatar',
            element: page,
            story: 'util-visibility'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });
});