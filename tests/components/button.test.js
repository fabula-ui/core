import { elementScreenshot } from '../common';
import { testConfig } from '../config';

const { failureThresholdType, screenshot } = testConfig;
const failureThreshold = 0.02;
const port = process.env.PORT || defaultPort;

const commonTest = params => {
    const { context, height, width } = params;
    it(`prop-${context}`, async () => {
        let image;

        await page.setViewport({ width, height });

        await page.goto(`http://localhost:${port}/iframe.html?id=button--prop-${context}`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it(`prop-${context}:hover`, async () => {
        let buttons;

        await page.setViewport({ width: 700, height: 200 });

        buttons = await page.$$('.fab-button');

        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            const boundingBox = await button.boundingBox();
            let screenshot;

            await button.hover();
            await page.waitFor(500);

            screenshot = await elementScreenshot({
                boundingBox,
                context: `button--prop-${context}-hover`,
                element: button,
                index: i
            });

            expect(screenshot).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });
        }
    });

    it(`prop-${context}:active`, async () => {
        let buttons;

        await page.setViewport({ width: 700, height: 200 });

        buttons = await page.$$('.fab-button');

        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            const boundingBox = await button.boundingBox();
            let screenshot;

            await button.click({ delay: 500 });
            await page.waitFor(500);

            screenshot = await elementScreenshot({
                boundingBox,
                context: `button--prop-${context}-active`,
                element: button,
                index: i
            });

            expect(screenshot).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });
        }
    });
}

describe('Button', () => {
    beforeAll(async () => {
        jest.setTimeout(100000);
    });

    it('example', async () => {
        let image;

        await page.setViewport({ width: 700, height: 100 });

        await page.goto(`http://localhost:${port}/iframe.html?id=button--example`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    commonTest({
        context: 'border',
        height: 100,
        width: 700
    });

    commonTest({
        context: 'circle',
        height: 100,
        width: 400
    });

    commonTest({
        context: 'clear',
        height: 200,
        width: 700
    });

    commonTest({
        context: 'color',
        height: 200,
        width: 700
    });

    it('prop-compact', async () => {
        let image;

        await page.setViewport({ width: 300, height: 100 });

        await page.goto(`http://localhost:${port}/iframe.html?id=button--prop-compact`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    commonTest({
        context: 'darken',
        height: 200,
        width: 700
    });
    
    it('prop-expand', async () => {
        let image;

        await page.setViewport({ width: screenshot.width, height: 200 });

        await page.goto(`http://localhost:${port}/iframe.html?id=button--prop-expand`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    commonTest({
        context: 'faded',
        height: 200,
        width: 700
    });

    commonTest({
        context: 'glow',
        height: 200,
        width: 700
    });

    commonTest({
        context: 'gradient',
        height: 200,
        width: 700
    });

    commonTest({
        context: 'invert',
        height: 200,
        width: 700
    });

    commonTest({
        context: 'outline',
        height: 200,
        width: 700
    });

    commonTest({
        context: 'rounded',
        height: 200,
        width: 700
    });

    commonTest({
        context: 'size',
        height: 100,
        width: 1200
    });

    it('prop-wide', async () => {
        let image;

        await page.setViewport({ width: 400, height: 100 });

        await page.goto(`http://localhost:${port}/iframe.html?id=button--prop-wide`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('util-margin', async () => {
        let image;

        await page.setViewport({ width: 400, height: 500 });

        await page.goto(`http://localhost:${port}/iframe.html?id=button--util-margin`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('util-padding', async () => {
        let image;

        await page.setViewport({ width: 800, height: 100 });

        await page.goto(`http://localhost:${port}/iframe.html?id=button--util-padding`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('util-visibility', async () => {
        let image;

        await page.setViewport({ width: 200, height: 200 });

        await page.goto(`http://localhost:${port}/iframe.html?id=button--util-visibility`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });
});