import { takeScreenshot } from '../common';
import { testConfig } from '../config';

const { failureThresholdType, screenshot } = testConfig;
const failureThreshold = 0.02;
const port = process.env.PORT || defaultPort;

describe('Modal', () => {
    afterAll(async () => {
        await page.waitFor(1000);
    });

    beforeAll(async () => {
        jest.setTimeout(100000);
    });

    it('example', async () => {
        let closeButton;
        let button;
        let image;

        await page.goto(`http://localhost:${port}/iframe.html?id=modal--example`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: screenshot.width, height: 1200 });

        button = await page.$('.fab-button');

        await button.click();
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'modal',
            element: page,
            index: 1,
            story: 'example'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });

        await page.setViewport({ width: screenshot.width, height: 720 });

        image = await takeScreenshot({
            component: 'modal',
            element: page,
            index: 2,
            story: 'example'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });

        await page.setViewport({ width: screenshot.width, height: 360 });

        image = await takeScreenshot({
            component: 'modal',
            element: page,
            index: 3,
            story: 'example'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });

        closeButton = await page.$('.fab-close-button');

        await closeButton.click();
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'modal',
            element: page,
            index: 4,
            story: 'example'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-color', async () => {
        let buttons;

        await page.goto(`http://localhost:${port}/iframe.html?id=modal--prop-color`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: screenshot.width, height: 720 });

        buttons = await page.$$('.fab-button');

        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            let image;
            let closeButton;

            await button.click();
            await page.waitFor(500);

            image = await takeScreenshot({
                component: 'modal',
                context: 'open',
                element: page,
                index: i + 1,
                story: 'prop-color'
            });

            expect(image).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });

            closeButton = await page.$('.fab-close-button');

            await closeButton.click();
            await page.waitFor(500);

            image = await takeScreenshot({
                component: 'modal',
                context: 'closed',
                element: page,
                index: i + 1,
                story: 'prop-color'
            });

            expect(image).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });
        }
    });

    it('prop-size', async () => {
        let buttons;

        await page.goto(`http://localhost:${port}/iframe.html?id=modal--prop-size`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: screenshot.width, height: 720 });

        buttons = await page.$$('.fab-button');

        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            let image;
            let closeButton;

            await button.click();
            await page.waitFor(500);

            image = await takeScreenshot({
                component: 'modal',
                context: 'open',
                element: page,
                index: i + 1,
                story: 'prop-size'
            });

            expect(image).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });

            closeButton = await page.$('.fab-close-button');

            await closeButton.click();
            await page.waitFor(500);
        }
    });
});