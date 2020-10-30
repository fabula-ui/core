import { takeScreenshot } from '../common';
import { testConfig } from '../config';

const { failureThresholdType, screenshot } = testConfig;
const failureThreshold = 0.02;
const port = process.env.PORT || defaultPort;

describe('Dropdown', () => {
    afterAll(async() => {
        await page.waitFor(1000);
    });
    
    beforeAll(async () => {
        jest.setTimeout(100000);
    });

    it('example', async () => {
        let image;

        await page.setViewport({ width: 300, height: 100 });

        await page.goto(`http://localhost:${port}/iframe.html?id=dropdown--example`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'dropdown',
            element: page,
            story: 'example'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('example:open', async () => {
        const toggle = await page.$('.fab-dropdown-toggle');
        let image;

        await toggle.click();
        await page.waitFor(500);

        await page.setViewport({ width: 300, height: 400 });

        image = await takeScreenshot({
            component: 'dropdown',
            context: 'open',
            element: page,
            story: 'example'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    // prop-alignment
    it('prop-alignment', async () => {
        let image;

        await page.setViewport({ width: 400, height: 100 });

        await page.goto(`http://localhost:${port}/iframe.html?id=dropdown--prop-alignment`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'dropdown',
            element: page,
            story: 'prop-alignment'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-alignment:open', async () => {
        let toggles;

        await page.setViewport({ width: 400, height: 200 });

        await page.goto(`http://localhost:${port}/iframe.html?id=dropdown--prop-alignment`, { waitUntil: 'load' });
        await page.waitFor(500);

        toggles = await page.$$('.fab-dropdown-toggle');

        for (let i = 0; i < toggles.length; i++) {
            const toggle = toggles[i];
            let image;

            await toggle.click();
            await page.waitFor(500);

            image = await takeScreenshot({
                component: 'dropdown',
                context: 'open',
                element: page,
                index: i,
                story: 'prop-alignment'
            });

            expect(image).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });
        }
    });

    // prop-direction
    it('prop-direction', async () => {
        let image;

        await page.setViewport({ width: 400, height: 200 });

        await page.goto(`http://localhost:${port}/iframe.html?id=dropdown--prop-direction`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'dropdown',
            element: page,
            story: 'prop-direction'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-direction:open', async () => {
        let toggles;

        await page.setViewport({ width: 400, height: 200 });

        await page.goto(`http://localhost:${port}/iframe.html?id=dropdown--prop-direction`, { waitUntil: 'load' });
        await page.waitFor(500);

        toggles = await page.$$('.fab-dropdown-toggle');

        for (let i = 0; i < toggles.length; i++) {
            const toggle = toggles[i];
            let image;

            await toggle.click();
            await page.waitFor(500);

            image = await takeScreenshot({
                component: 'dropdown',
                context: 'open',
                element: page,
                index: i,
                story: 'prop-direction'
            });

            expect(image).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });
        }
    });

    // prop-expand
    it('prop-expand', async () => {
        let image;

        await page.setViewport({ width: screenshot.width, height: 200 });

        await page.goto(`http://localhost:${port}/iframe.html?id=dropdown--prop-expand`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'dropdown',
            element: page,
            story: 'prop-expand'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-expand:open', async () => {
        let toggles;

        await page.setViewport({ width: screenshot.width, height: 200 });

        await page.goto(`http://localhost:${port}/iframe.html?id=dropdown--prop-expand`, { waitUntil: 'load' });
        await page.waitFor(500);

        toggles = await page.$$('.fab-dropdown-toggle');

        for (let i = 0; i < toggles.length; i++) {
            const toggle = toggles[i];
            let image;

            await toggle.click();
            await page.waitFor(500);

            image = await takeScreenshot({
                component: 'dropdown',
                context: 'open',
                element: page,
                index: i,
                story: 'prop-expand'
            });

            expect(image).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });
        }
    });

    // custom-content
    it('custom-content', async () => {
        let image;

        await page.setViewport({ width: 1100, height: 100 });

        await page.goto(`http://localhost:${port}/iframe.html?id=dropdown--custom-content`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'dropdown',
            element: page,
            story: 'custom-content'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('custom-content:open', async () => {
        let toggles;

        await page.setViewport({ width: 1100, height: 400 });

        await page.goto(`http://localhost:${port}/iframe.html?id=dropdown--custom-content`, { waitUntil: 'load' });
        await page.waitFor(500);

        toggles = await page.$$('.fab-dropdown-toggle');

        for (let i = 0; i < toggles.length; i++) {
            const toggle = toggles[i];
            let image;

            await toggle.click();
            await page.waitFor(500);

            image = await takeScreenshot({
                component: 'dropdown',
                context: 'open',
                element: page,
                index: i,
                story: 'custom-content'
            });

            expect(image).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });
        }
    });

    // util-margin
    it('util-margin', async () => {
        let image;

        await page.setViewport({ width: 700, height: 500 });

        await page.goto(`http://localhost:${port}/iframe.html?id=dropdown--util-margin`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'dropdown',
            element: page,
            story: 'util-margin'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    // util-visibility
    it('util-visibility', async () => {
        let image;

        await page.setViewport({ width: 300, height: 200 });

        await page.goto(`http://localhost:${port}/iframe.html?id=dropdown--util-visibility`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'dropdown',
            element: page,
            story: 'util-visibility'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });
});