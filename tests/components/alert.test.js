import { testConfig } from '../config';

describe('Alert', () => {
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

        page.setViewport({ width: screenshot.width, height: 400 });
        await page.goto(`http://localhost:${port}/iframe.html?id=alert--example`, { waitUntil: 'load' });
        image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-border', async () => {
        let image;

        page.setViewport({ width: screenshot.width, height: 200 });
        await page.goto(`http://localhost:${port}/iframe.html?id=alert--prop-border`, { waitUntil: 'load' });
        image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-clear', async () => {
        let image;

        page.setViewport({ width: screenshot.width, height: 600 });
        await page.goto(`http://localhost:${port}/iframe.html?id=alert--prop-clear`, { waitUntil: 'load' });
        image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-close-button', async () => {
        let image;

        page.setViewport({ width: screenshot.width, height: 600 });
        await page.goto(`http://localhost:${port}/iframe.html?id=alert--prop-close-button`, { waitUntil: 'load' });
        image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-color', async () => {
        let image;

        page.setViewport({ width: screenshot.width, height: 500 });
        await page.goto(`http://localhost:${port}/iframe.html?id=alert--prop-color`, { waitUntil: 'load' });
        image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-faded', async () => {
        let image;

        page.setViewport({ width: screenshot.width, height: 600 });
        await page.goto(`http://localhost:${port}/iframe.html?id=alert--prop-faded`, { waitUntil: 'load' });
        image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-glow', async () => {
        let image;

        page.setViewport({ width: screenshot.width, height: 600 });
        await page.goto(`http://localhost:${port}/iframe.html?id=alert--prop-glow`, { waitUntil: 'load' });
        image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-icon', async () => {
        let image;

        page.setViewport({ width: screenshot.width, height: 200 });
        await page.goto(`http://localhost:${port}/iframe.html?id=alert--prop-icon`, { waitUntil: 'load' });
        image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-invert', async () => {
        let image;

        page.setViewport({ width: screenshot.width, height: 600 });
        await page.goto(`http://localhost:${port}/iframe.html?id=alert--prop-invert`, { waitUntil: 'load' });
        image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-marker', async () => {
        let image;

        page.setViewport({ width: screenshot.width, height: 500 });
        await page.goto(`http://localhost:${port}/iframe.html?id=alert--prop-marker`, { waitUntil: 'load' });
        image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-outline', async () => {
        let image;

        page.setViewport({ width: screenshot.width, height: 600 });
        await page.goto(`http://localhost:${port}/iframe.html?id=alert--prop-outline`, { waitUntil: 'load' });
        image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-text-color', async () => {
        let image;

        page.setViewport({ width: screenshot.width, height: 500 });
        await page.goto(`http://localhost:${port}/iframe.html?id=alert--prop-text-color`, { waitUntil: 'load' });
        image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-title-color', async () => {
        let image;

        page.setViewport({ width: screenshot.width, height: 500 });
        await page.goto(`http://localhost:${port}/iframe.html?id=alert--prop-title-color`, { waitUntil: 'load' });
        image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-type', async () => {
        let image;

        page.setViewport({ width: screenshot.width, height: 400 });
        await page.goto(`http://localhost:${port}/iframe.html?id=alert--prop-type`, { waitUntil: 'load' });
        image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('util-margin', async () => {
        let image;

        page.setViewport({ width: 1600, height: 700 });
        await page.goto(`http://localhost:${port}/iframe.html?id=alert--util-margin`, { waitUntil: 'load' });
        image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('util-padding', async () => {
        let image;

        page.setViewport({ width: screenshot.width, height: 800 });
        await page.goto(`http://localhost:${port}/iframe.html?id=alert--util-padding`, { waitUntil: 'load' });
        image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('util-visibility', async () => {
        let image;

        page.setViewport({ width: screenshot.width, height: 200 });
        await page.goto(`http://localhost:${port}/iframe.html?id=alert--util-visibility`, { waitUntil: 'load' });
        image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });
});