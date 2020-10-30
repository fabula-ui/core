import { takeScreenshot } from '../common';
import { testConfig } from '../config';

const { failureThresholdType, screenshot } = testConfig;
const failureThreshold = 0.02;
const port = process.env.PORT || defaultPort;

describe('Dropdown header', () => {
    afterAll(async() => {
        await page.waitFor(1000);
    });
    
    beforeAll(async () => {
        jest.setTimeout(100000);
    });

    it('example', async () => {
        let image;
        let toggle;

        await page.setViewport({ width: 300, height: 300 });

        await page.goto(`http://localhost:${port}/iframe.html?id=dropdown-header--example`, { waitUntil: 'load' });
        await page.waitFor(500);

        toggle = await page.$('.fab-dropdown-toggle');

        await toggle.click();
        await page.mouse.move(300, 300);
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'dropdown-header',
            element: page,
            story: 'example'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-color', async () => {
        let image;
        let toggle;

        await page.setViewport({ width: 300, height: 300 });

        await page.goto(`http://localhost:${port}/iframe.html?id=dropdown-header--prop-color`, { waitUntil: 'load' });
        await page.waitFor(500);

        toggle = await page.$('.fab-dropdown-toggle');

        await toggle.click();
        await page.mouse.move(300, 300);
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'dropdown-header',
            element: page,
            story: 'prop-color'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('util-margin', async () => {
        let toggles;

        await page.setViewport({ width: 300, height: 600 });

        await page.goto(`http://localhost:${port}/iframe.html?id=dropdown-header--util-margin`, { waitUntil: 'load' });
        await page.waitFor(500);

        toggles = await page.$$('.fab-dropdown-toggle');

        for (let i = 0; i < toggles.length; i++) {
            const toggle = toggles[i];
            let image;

            await toggle.click();
            await page.mouse.move(300, 300);
            await page.waitFor(500);

            image = await takeScreenshot({
                component: 'dropdown-header',
                element: page,
                index: i,
                story: 'util-margin'
            });

            expect(image).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });

            await toggle.click();
        }
    });

    it('util-padding', async () => {
        let toggles;

        await page.setViewport({ width: 300, height: 600 });

        await page.goto(`http://localhost:${port}/iframe.html?id=dropdown-header--util-padding`, { waitUntil: 'load' });
        await page.waitFor(500);

        toggles = await page.$$('.fab-dropdown-toggle');

        for (let i = 0; i < toggles.length; i++) {
            const toggle = toggles[i];
            let image;

            await toggle.click();
            await page.mouse.move(300, 300);
            await page.waitFor(500);

            image = await takeScreenshot({
                component: 'dropdown-header',
                element: page,
                index: i,
                story: 'util-padding'
            });

            expect(image).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });

            await toggle.click();
        }
    });

    it('util-visibility', async () => {
        let toggles;

        await page.setViewport({ width: 300, height: 300 });

        await page.goto(`http://localhost:${port}/iframe.html?id=dropdown-header--util-visibility`, { waitUntil: 'load' });
        await page.waitFor(500);

        toggles = await page.$$('.fab-dropdown-toggle');

        for (let i = 0; i < toggles.length; i++) {
            const toggle = toggles[i];
            let image;

            await toggle.click();
            await page.mouse.move(300, 300);
            await page.waitFor(500);

            image = await takeScreenshot({
                component: 'dropdown-header',
                element: page,
                index: i,
                story: 'util-visibility'
            });

            expect(image).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });

            await toggle.click();
        }
    });
});