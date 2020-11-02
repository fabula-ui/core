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
        let buttons;
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

        // Second input group
        boundingBox = await inputGroups[1].boundingBox();
        buttons = await inputGroups[1].$$('.fab-button');

        await buttons[0].click();
        await page.mouse.move(screenshot.width, 200);
        await page.waitFor(500);

        image = await takeScreenshot({
            boundingBox,
            component: 'input-group',
            context: 'focus',
            element: page,
            index: 2,
            story: 'example'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
        
        input = await inputGroups[1].$('input');
        input.click();

        await page.waitFor(500);

        image = await takeScreenshot({
            boundingBox,
            component: 'input-group',
            context: 'focus',
            element: page,
            index: 3,
            story: 'example'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });

        await buttons[1].click();
        await page.mouse.move(screenshot.width, 200);
        await page.waitFor(500);

        image = await takeScreenshot({
            boundingBox,
            component: 'input-group',
            context: 'focus',
            element: page,
            index: 4,
            story: 'example'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-layout', async () => {
        let image;

        await page.goto(`http://localhost:${port}/iframe.html?id=input-group--prop-layout`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: screenshot.width, height: 200 });

        image = await takeScreenshot({
            component: 'input-group',
            element: page,
            story: 'prop-layout'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-layout:focus', async () => {
        let boundingBox;
        let button;
        let image;
        let input;
        let inputGroups;

        await page.goto(`http://localhost:${port}/iframe.html?id=input-group--prop-layout`, { waitUntil: 'load' });
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
            story: 'prop-layout'
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
            story: 'prop-layout'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });

        // Second input group
        boundingBox = await inputGroups[1].boundingBox();
        input = await inputGroups[1].$('input');
        input.click();

        await page.waitFor(500);

        image = await takeScreenshot({
            boundingBox,
            component: 'input-group',
            context: 'focus',
            element: page,
            index: 2,
            story: 'prop-layout'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });

        button = await inputGroups[1].$('.fab-button');

        await button.click();
        await page.mouse.move(screenshot.width, 200);
        await page.waitFor(500);

        image = await takeScreenshot({
            boundingBox,
            component: 'input-group',
            context: 'focus',
            element: page,
            index: 3,
            story: 'prop-layout'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('util-margin', async () => {
        let image;

        await page.goto(`http://localhost:${port}/iframe.html?id=input-group--util-margin`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: 1300, height: 600 });

        image = await takeScreenshot({
            component: 'input-group',
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

        await page.goto(`http://localhost:${port}/iframe.html?id=input-group--util-visibility`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: screenshot.width, height: 200 });

        image = await takeScreenshot({
            component: 'input-group',
            element: page,
            story: 'util-visibility'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });
});