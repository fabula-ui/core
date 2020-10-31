import { takeScreenshot } from '../common';
import { testConfig } from '../config';

const { failureThresholdType, screenshot } = testConfig;
const failureThreshold = 0.02;
const port = process.env.PORT || defaultPort;

describe('Dropdown item', () => {
    afterAll(async () => {
        await page.waitFor(1000);
    });

    beforeAll(async () => {
        jest.setTimeout(100000);
    });

    it('example', async () => {
        let items;
        let toggle;

        await page.goto(`http://localhost:${port}/iframe.html?id=dropdown-item--example`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: 300, height: 300 });

        toggle = await page.$('.fab-dropdown-toggle');
        items = await page.$$('.fab-dropdown-item');

        await toggle.click();
        await page.waitFor(500);

        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            let image;

            await item.hover();
            await page.waitFor(500);

            image = await takeScreenshot({
                component: 'dropdown-item',
                context: 'hover',
                element: page,
                index: i,
                story: 'example'
            });

            expect(image).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });

            await page.waitFor(500);

            await page.mouse.down();
            await page.waitFor(500);

            image = await takeScreenshot({
                component: 'dropdown-item',
                context: 'active',
                element: page,
                index: i,
                story: 'example'
            });

            expect(image).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });

            await page.mouse.up();
            await toggle.click();
        }
    });

    it('prop-color', async () => {
        let items;
        let toggle;

        await page.goto(`http://localhost:${port}/iframe.html?id=dropdown-item--prop-color`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: 300, height: 300 });

        toggle = await page.$('.fab-dropdown-toggle');
        items = await page.$$('.fab-dropdown-item');

        await toggle.click();
        await page.waitFor(500);

        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            let image;

            await item.hover();
            await page.waitFor(500);

            image = await takeScreenshot({
                component: 'dropdown-item',
                context: 'hover',
                element: page,
                index: i,
                story: 'prop-color'
            });

            expect(image).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });

            await page.waitFor(500);

            await page.mouse.down();
            await page.waitFor(500);

            image = await takeScreenshot({
                component: 'dropdown-item',
                context: 'active',
                element: page,
                index: i,
                story: 'prop-color'
            });

            expect(image).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });

            await page.mouse.up();
            await toggle.click();
        }
    });

    it('prop-size', async () => {
        let items;
        let toggle;

        await page.goto(`http://localhost:${port}/iframe.html?id=dropdown-item--prop-size`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: 300, height: 400 });

        toggle = await page.$('.fab-dropdown-toggle');
        items = await page.$$('.fab-dropdown-item');

        await toggle.click();
        await page.waitFor(500);

        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            let image;

            await item.hover();
            await page.waitFor(500);

            image = await takeScreenshot({
                component: 'dropdown-item',
                context: 'hover',
                element: page,
                index: i,
                story: 'prop-size'
            });

            expect(image).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });

            await page.waitFor(500);

            await page.mouse.down();
            await page.waitFor(500);

            image = await takeScreenshot({
                component: 'dropdown-item',
                context: 'active',
                element: page,
                index: i,
                story: 'prop-size'
            });

            expect(image).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });

            await page.mouse.up();
            await toggle.click();
        }
    });

    it('util-margin', async () => {
        let toggles;

        await page.goto(`http://localhost:${port}/iframe.html?id=dropdown-item--util-margin`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: 300, height: 600 });

        toggles = await page.$$('.fab-dropdown-toggle');

        for (let i = 0; i < toggles.length; i++) {
            const toggle = toggles[i];
            let image;

            await toggle.click();
            await page.mouse.move(300,300);
            await page.waitFor(500);

            image = await takeScreenshot({
                component: 'dropdown-item',
                element: page,
                index: i,
                story: 'util-margin'
            });

            expect(image).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });

            await page.waitFor(500);
            await toggle.click();
        }
    });

    it('util-padding', async () => {
        let toggles;

        await page.goto(`http://localhost:${port}/iframe.html?id=dropdown-item--util-padding`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: 300, height: 600 });

        toggles = await page.$$('.fab-dropdown-toggle');

        for (let i = 0; i < toggles.length; i++) {
            const toggle = toggles[i];
            let image;

            await toggle.click();
            await page.mouse.move(300,300);
            await page.waitFor(500);

            image = await takeScreenshot({
                component: 'dropdown-item',
                element: page,
                index: i,
                story: 'util-padding'
            });

            expect(image).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });

            await page.waitFor(500);
            await toggle.click();
        }
    });
    
    it('util-visibility', async () => {
        let toggles;

        await page.setViewport({ width: 300, height: 300 });

        await page.goto(`http://localhost:${port}/iframe.html?id=dropdown-item--util-visibility`, { waitUntil: 'load' });
        await page.waitFor(500);

        toggles = await page.$$('.fab-dropdown-toggle');

        for (let i = 0; i < toggles.length; i++) {
            const toggle = toggles[i];
            let image;

            await toggle.click();
            await page.mouse.move(300,300);
            await page.waitFor(500);

            image = await takeScreenshot({
                component: 'dropdown-item',
                element: page,
                index: i,
                story: 'util-visibility'
            });

            expect(image).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });

            await page.waitFor(500);
            await toggle.click();
        }
    });
});