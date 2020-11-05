import { takeScreenshot } from '../common';
import { testConfig } from '../config';

const { failureThresholdType, screenshot } = testConfig;
const failureThreshold = 0.02;
const port = process.env.PORT || defaultPort;

describe('Toast', () => {
    afterAll(async () => {
        await page.waitFor(1000);
    });

    beforeAll(async () => {
        jest.setTimeout(100000);
    });

    it('example', async () => {
        let image;

        await page.goto(`http://localhost:${port}/iframe.html?id=toast--example`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: screenshot.width, height: 100 });

        image = await takeScreenshot({
            component: 'toast',
            element: page,
            story: 'example'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-button', async () => {
        let button;
        let image;

        await page.goto(`http://localhost:${port}/iframe.html?id=toast--prop-button`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: screenshot.width, height: 100 });

        image = await takeScreenshot({
            component: 'toast',
            element: page,
            story: 'prop-button'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });

        button = await page.$('.fab-button');

        await button.hover();
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'toast',
            context: 'hover',
            element: page,
            story: 'prop-button'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });

        await page.mouse.down();
        await page.mouse.move(screenshot.width, 100);
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'toast',
            context: 'active',
            element: page,
            story: 'prop-button'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });

        await page.mouse.up();
    });

    it('prop-clear', async () => {
        let image;

        await page.goto(`http://localhost:${port}/iframe.html?id=toast--prop-clear`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: screenshot.width, height: 500 });

        image = await takeScreenshot({
            component: 'toast',
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

        await page.goto(`http://localhost:${port}/iframe.html?id=toast--prop-color`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: screenshot.width, height: 500 });

        image = await takeScreenshot({
            component: 'toast',
            element: page,
            story: 'prop-color'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-faded', async () => {
        let image;

        await page.goto(`http://localhost:${port}/iframe.html?id=toast--prop-faded`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: screenshot.width, height: 500 });

        image = await takeScreenshot({
            component: 'toast',
            element: page,
            story: 'prop-faded'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-glow', async () => {
        let image;

        await page.goto(`http://localhost:${port}/iframe.html?id=toast--prop-glow`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: screenshot.width, height: 500 });

        image = await takeScreenshot({
            component: 'toast',
            element: page,
            story: 'prop-glow'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-hide-button', async () => {
        let image;

        await page.goto(`http://localhost:${port}/iframe.html?id=toast--prop-hide-button`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: screenshot.width, height: 200 });

        image = await takeScreenshot({
            component: 'toast',
            element: page,
            story: 'prop-hide-button'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-icon', async () => {
        let image;

        await page.goto(`http://localhost:${port}/iframe.html?id=toast--prop-icon`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: screenshot.width, height: 400 });

        image = await takeScreenshot({
            component: 'toast',
            element: page,
            story: 'prop-icon'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-link', async () => {
        let image;

        await page.goto(`http://localhost:${port}/iframe.html?id=toast--prop-link`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: screenshot.width, height: 100 });

        image = await takeScreenshot({
            component: 'toast',
            element: page,
            story: 'prop-link'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-outline', async () => {
        let image;

        await page.goto(`http://localhost:${port}/iframe.html?id=toast--prop-outline`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: screenshot.width, height: 500 });

        image = await takeScreenshot({
            component: 'toast',
            element: page,
            story: 'prop-outline'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('handle-stacks', async () => {
        let buttons;

        await page.goto(`http://localhost:${port}/iframe.html?id=toast--handle-stacks`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: screenshot.width, height: screenshot.width });

        buttons = await page.$$('.fab-button');

        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            let image;

            await button.click();
            await button.click();
            await button.click();

            await page.waitFor(500);

            image = await takeScreenshot({
                component: 'toast',
                context: 'visible',
                element: page,
                index: i + 1,
                story: 'handle-stacks'
            });

            expect(image).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });

            await page.waitFor(5000);

            image = await takeScreenshot({
                component: 'toast',
                context: 'hidden',
                element: page,
                index: i + 1,
                story: 'handle-stacks'
            });

            expect(image).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });
        }

    });
});