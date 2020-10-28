import { elementScreenshot } from '../common';
import { testConfig } from '../config';



describe('Button', () => {
    const { failureThresholdType, path } = testConfig;
    const failureThreshold = 0.02;
    const port = process.env.PORT || defaultPort;

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

    // Border
    it('prop-border', async () => {
        let image;

        await page.setViewport({ width: 700, height: 100 });

        await page.goto(`http://localhost:${port}/iframe.html?id=button--prop-border`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-border:hover', async () => {
        let buttons;
        
        await page.setViewport({ width: 700, height: 100 });

        buttons = await page.$$('.fab-button');

        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            const boundingBox = await button.boundingBox();
            let screenshot;

            await button.hover();
            await page.waitFor(500);

            screenshot = await elementScreenshot({
                boundingBox,
                context: 'button--prop-border-hover',
                element: button,
                index: i
            });

            expect(screenshot).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });
        }
    });

    it('prop-border:active', async () => {
        let buttons;
        
        await page.setViewport({ width: 700, height: 100 });

        buttons = await page.$$('.fab-button');

        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            const boundingBox = await button.boundingBox();
            let screenshot;

            await button.click({ delay: 500 });
            await page.waitFor(500);

            screenshot = await elementScreenshot({
                boundingBox,
                context: 'button--prop-border-active',
                element: button,
                index: i
            });

            expect(screenshot).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });
        }
    });

    // Circle
    it('prop-circle', async () => {
        let image;

        await page.setViewport({ width: 400, height: 100 });

        await page.goto(`http://localhost:${port}/iframe.html?id=button--prop-circle`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-circle:hover', async () => {
        let buttons;
        
        await page.setViewport({ width: 400, height: 100 });

        buttons = await page.$$('.fab-button');

        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            const boundingBox = await button.boundingBox();
            let screenshot;

            await button.hover();
            await page.waitFor(500);

            screenshot = await elementScreenshot({
                boundingBox,
                context: 'button--prop-circle-hover',
                element: button,
                index: i
            });

            expect(screenshot).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });
        }
    });

    it('prop-circle:active', async () => {
        let buttons;
        
        await page.setViewport({ width: 400, height: 100 });

        buttons = await page.$$('.fab-button');

        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            const boundingBox = await button.boundingBox();
            let screenshot;

            await button.click({ delay: 500 });
            await page.waitFor(500);

            screenshot = await elementScreenshot({
                boundingBox,
                context: 'button--prop-circle-active',
                element: button,
                index: i
            });

            expect(screenshot).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });
        }
    });

    // Clear
    it('prop-clear', async () => {
        let image;

        await page.setViewport({ width: 700, height: 200 });

        await page.goto(`http://localhost:${port}/iframe.html?id=button--prop-clear`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-clear:hover', async () => {
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
                context: 'button--prop-clear-hover',
                element: button,
                index: i
            });

            expect(screenshot).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });
        }
    });

    it('prop-clear:active', async () => {
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
                context: 'button--prop-clear-active',
                element: button,
                index: i
            });

            expect(screenshot).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });
        }
    });
});