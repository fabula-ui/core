import { takeScreenshot } from '../common';
import { testConfig } from '../config';

const { failureThresholdType, screenshot } = testConfig;
const failureThreshold = 0.02;
const port = process.env.PORT || defaultPort;

describe('List item', () => {
    afterAll(async () => {
        await page.waitFor(1000);
    });

    beforeAll(async () => {
        jest.setTimeout(100000);
    });

    it('example', async () => {
        let image;

        await page.goto(`http://localhost:${port}/iframe.html?id=list-item--example`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: screenshot.width, height: 200 });

        image = await takeScreenshot({
            component: 'list-item',
            element: page,
            story: 'example'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-button', async () => {
        let boundingBox;
        let image;
        let listItem;

        await page.goto(`http://localhost:${port}/iframe.html?id=list-item--prop-button`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: screenshot.width, height: 200 });

        image = await takeScreenshot({
            component: 'list-item',
            element: page,
            story: 'prop-button'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });


        listItem = await page.$('.fab-list-item');
        boundingBox = await listItem.boundingBox();

        await listItem.hover();
        await page.waitFor(500);

        image = await takeScreenshot({
            boundingBox,
            component: 'list-item',
            context: 'hover',
            element: page,
            story: 'prop-button'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });

        await page.waitFor(500);
        await page.mouse.down();
        await page.waitFor(500);

        image = await takeScreenshot({
            boundingBox,
            component: 'list-item',
            context: 'active',
            element: page,
            story: 'prop-button'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-color', async () => {
        let image;

        await page.goto(`http://localhost:${port}/iframe.html?id=list-item--prop-color`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: screenshot.width, height: 600 });

        image = await takeScreenshot({
            component: 'list-item',
            element: page,
            story: 'prop-color'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-href', async () => {
        let boundingBox;
        let image;
        let listItem;

        await page.goto(`http://localhost:${port}/iframe.html?id=list-item--prop-href`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: screenshot.width, height: 200 });

        image = await takeScreenshot({
            component: 'list-item',
            element: page,
            story: 'prop-href'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });


        listItem = await page.$('.fab-list-item');
        boundingBox = await listItem.boundingBox();

        await listItem.hover();
        await page.waitFor(500);

        image = await takeScreenshot({
            boundingBox,
            component: 'list-item',
            context: 'hover',
            element: page,
            story: 'prop-href'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });

        await page.waitFor(500);
        await page.mouse.down();
        await page.waitFor(500);

        image = await takeScreenshot({
            boundingBox,
            component: 'list-item',
            context: 'active',
            element: page,
            story: 'prop-href'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('util-margin', async () => {
        let image;

        await page.goto(`http://localhost:${port}/iframe.html?id=list-item--util-margin`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: 1300, height: 700 });

        image = await takeScreenshot({
            component: 'list-item',
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

        await page.goto(`http://localhost:${port}/iframe.html?id=list-item--util-padding`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: screenshot.width, height: 800 });

        image = await takeScreenshot({
            component: 'list-item',
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

        await page.goto(`http://localhost:${port}/iframe.html?id=list-item--util-visibility`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: screenshot.width, height: 200 });

        image = await takeScreenshot({
            component: 'list-item',
            element: page,
            story: 'util-visibility'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });
});