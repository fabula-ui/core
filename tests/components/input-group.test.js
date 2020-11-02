import { takeScreenshot } from '../common';
import { testConfig } from '../config';

const { failureThresholdType, screenshot } = testConfig;
const failureThreshold = 0.02;
const port = process.env.PORT || defaultPort;

describe('Input group', () => {
    afterAll(async () => {
        await page.waitFor(1000);
    });

    beforeAll(async () => {
        jest.setTimeout(100000);
    });

    it('example', async () => {
        let image;

        await page.goto(`http://localhost:${port}/iframe.html?id=input-group--example`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: screenshot.width, height: 200 });

        image = await takeScreenshot({
            component: 'input-group',
            element: page,
            story: 'example'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('example:focus', async () => {
        let boundingBox;
        let button;
        let image;
        let input;
        let inputGroups;

        await page.goto(`http://localhost:${port}/iframe.html?id=input-group--example`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: screenshot.width, height: 200 });

        inputGroups = await page.$$('.fab-input-group-wrapper');

        // First input group
        boundingBox = await inputGroups[0].boundingBox();
        input = await inputGroups[0].$('input');
        input.click();

        await page.waitFor(500);

        image = await takeScreenshot({
            boundingBox,
            component: 'input-group',
            context: 'focus',
            element: page,
            index: 0,
            story: 'example'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });

        button = await inputGroups[0].$('.fab-button');

        await button.click();
        await page.mouse.move(screenshot.width, 200);
        await page.waitFor(500);

        image = await takeScreenshot({
            boundingBox,
            component: 'input-group',
            context: 'focus',
            element: page,
            index: 1,
            story: 'example'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });
});