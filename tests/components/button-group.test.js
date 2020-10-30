import { elementScreenshot, takeScreenshot } from '../common';
import { testConfig } from '../config';

const { failureThresholdType, screenshot } = testConfig;
const failureThreshold = 0.02;
const port = process.env.PORT || defaultPort;

describe('Button Group', () => {
    afterAll(async() => {
        await page.waitFor(1000);
    });
    
    beforeAll(async () => {
        jest.setTimeout(100000);
    });

    // example
    it('example', async () => {
        let image;

        await page.setViewport({ width: 1100, height: 100 });

        await page.goto(`http://localhost:${port}/iframe.html?id=button-group--example`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'button-group',
            element: page,
            story: 'example'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('example:active', async () => {
        let buttons;

        await page.setViewport({ width: 1100, height: 100 });

        buttons = await page.$$('.fab-button');

        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            const parent = (await button.$x('..'))[0];
            const boundingBox = await parent.boundingBox();
            let screenshot;

            await button.click();
            await page.waitFor(500);

            screenshot = await takeScreenshot({
                boundingBox,
                component: 'button-group',
                context: 'active',
                element: parent,
                story: 'example',
                index: i,
            });

            expect(screenshot).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });
        }
    });

    // prop-color
    it('prop-color', async () => {
        let image;

        await page.setViewport({ width: 1200, height: 200 });

        await page.goto(`http://localhost:${port}/iframe.html?id=button-group--prop-color`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'button-group',
            element: page,
            story: 'prop-color'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-color:active', async () => {
        let buttons;

        await page.setViewport({ width: 1200, height: 200 });

        buttons = await page.$$('.fab-button');

        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            const parent = (await button.$x('..'))[0];
            const boundingBox = await parent.boundingBox();
            let screenshot;

            await button.click();
            await page.waitFor(500);

            screenshot = await takeScreenshot({
                boundingBox,
                component: 'button-group',
                context: 'active',
                element: parent,
                story: 'prop-color',
                index: i,
            });

            expect(screenshot).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });
        }
    });
});