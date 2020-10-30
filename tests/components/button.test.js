import { takeScreenshot } from '../common';
import { testConfig } from '../config';

const { failureThresholdType, screenshot } = testConfig;
const failureThreshold = 0.02;
const port = process.env.PORT || defaultPort;

const commonTest = params => {
    const { context, height, story, width } = params;
    
    it(story, async () => {
        let image;

        await page.setViewport({ width, height });

        await page.goto(`http://localhost:${port}/iframe.html?id=button--${story}`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'button',
            element: page,
            story
        })

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it(`${story}:hover`, async () => {
        let buttons;

        await page.setViewport({ width: 700, height: 200 });

        buttons = await page.$$('.fab-button');

        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            const boundingBox = await button.boundingBox();
            let screenshot;

            await button.hover();
            await page.waitFor(500);

            screenshot = await takeScreenshot({
                boundingBox,
                component: 'button',
                context: 'hover',
                element: button,
                index: i,
                story
            });

            expect(screenshot).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });
        }
    });

    it(`${story}:active`, async () => {
        let buttons;

        await page.setViewport({ width: 700, height: 200 });

        buttons = await page.$$('.fab-button');

        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            const boundingBox = await button.boundingBox();
            let screenshot;

            await button.click({ delay: 500 });
            await page.waitFor(500);

            screenshot = await takeScreenshot({
                boundingBox,
                component: 'button',
                context: 'active',
                element: button,
                index: i,
                story
            });

            expect(screenshot).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });
        }
    });
}

describe('Button', () => {
    afterAll(async() => {
        await page.waitFor(1000);
    });
    
    beforeAll(async () => {
        jest.setTimeout(100000);
    });

    it('example', async () => {
        let image;

        await page.setViewport({ width: 700, height: 100 });

        await page.goto(`http://localhost:${port}/iframe.html?id=button--example`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'button',
            element: page,
            story: 'example'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    commonTest({
        height: 100,
        story: 'prop-border',
        width: 700
    });

    commonTest({
        height: 100,
        story: 'prop-circle',
        width: 400
    });

    commonTest({
        height: 200,
        story: 'prop-clear',
        width: 700
    });

    commonTest({
        height: 200,
        story: 'prop-color',
        width: 700
    });

    it('prop-compact', async () => {
        let image;

        await page.setViewport({ width: 300, height: 100 });

        await page.goto(`http://localhost:${port}/iframe.html?id=button--prop-compact`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'button',
            element: page,
            story: 'prop-compact'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    commonTest({
        height: 200,
        story: 'prop-darken',
        width: 700
    });

    it('prop-expand', async () => {
        let image;

        await page.setViewport({ width: screenshot.width, height: 200 });

        await page.goto(`http://localhost:${port}/iframe.html?id=button--prop-expand`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'button',
            element: page,
            story: 'prop-expand'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    commonTest({
        height: 200,
        story: 'prop-faded',
        width: 700
    });

    commonTest({
        height: 200,
        story: 'prop-glow',
        width: 700
    });

    commonTest({
        height: 200,
        story: 'prop-gradient',
        width: 700
    });

    commonTest({
        height: 200,
        story: 'prop-invert',
        width: 700
    });

    commonTest({
        height: 200,
        story: 'prop-outline',
        width: 700
    });

    commonTest({
        height: 200,
        story: 'prop-rounded',
        width: 700
    });

    commonTest({
        height: 100,
        story: 'prop-size',
        width: 1200
    });

    it('prop-wide', async () => {
        let image;

        await page.setViewport({ width: 400, height: 100 });

        await page.goto(`http://localhost:${port}/iframe.html?id=button--prop-wide`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'button',
            element: page,
            story: 'prop-wide'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('util-margin', async () => {
        let image;

        await page.setViewport({ width: 400, height: 500 });

        await page.goto(`http://localhost:${port}/iframe.html?id=button--util-margin`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'button',
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

        await page.setViewport({ width: 900, height: 100 });

        await page.goto(`http://localhost:${port}/iframe.html?id=button--util-padding`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'button',
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

        await page.setViewport({ width: 200, height: 200 });

        await page.goto(`http://localhost:${port}/iframe.html?id=button--util-visibility`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'button',
            element: page,
            story: 'util-visibility'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });
});