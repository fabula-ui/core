import { takeScreenshot } from '../common';
import { testConfig } from '../config';

const { failureThresholdType, screenshot } = testConfig;
const failureThreshold = 0.02;
const port = process.env.PORT || defaultPort;

const commonTest = params => {
    const { element, height, story, width } = params;

    it(story, async () => {
        let image;

        await page.goto(`http://localhost:${port}/iframe.html?id=input--${story}`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width, height });

        image = await takeScreenshot({
            component: 'input',
            element: page,
            story
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it(`${story}:focus`, async () => {
        let image;
        let wrappers;

        await page.goto(`http://localhost:${port}/iframe.html?id=input--${story}`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width, height });

        wrappers = await page.$$('.fab-input-wrapper');

        for (let i = 0; i < wrappers.length; i++) {
            const wrapper = wrappers[i];
            const boundingBox = await wrapper.boundingBox();
            const input = await wrapper.$(element || 'input');

            await input.click();
            await page.waitFor(500);

            image = await takeScreenshot({
                boundingBox,
                component: 'input',
                context: 'focus',
                element: page,
                index: i,
                story
            });

            expect(image).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });
        }
    });
}

describe('Input', () => {
    afterAll(async () => {
        await page.waitFor(1000);
    });

    beforeAll(async () => {
        jest.setTimeout(100000);
    });

    // example
    commonTest({
        height: 100,
        story: 'example',
        width: screenshot.width
    })

    // prop-disabled
    commonTest({
        height: 200,
        story: 'prop-glow',
        width: screenshot.width
    });

    // prop-glow
    commonTest({
        height: 200,
        story: 'prop-glow',
        width: screenshot.width
    });

    // prop-message
    commonTest({
        height: 200,
        story: 'prop-message',
        width: screenshot.width
    });

    // prop-message-color
    commonTest({
        height: 400,
        story: 'prop-message-color',
        width: screenshot.width
    });

    // prop-password
    commonTest({
        height: 200,
        story: 'prop-password',
        width: screenshot.width
    });

    it('prop-password:toggle', async () => {
        let image;
        let wrappers;

        await page.goto(`http://localhost:${port}/iframe.html?id=input--prop-password`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: screenshot.width, height: 200 });

        wrappers = await page.$$('.fab-input-wrapper');

        for (let i = 0; i < wrappers.length; i++) {
            const wrapper = wrappers[i];
            const boundingBox = await wrapper.boundingBox();
            const button = await wrapper.$('.fab-input__password-toggle');

            await button.click();
            await page.waitFor(500);

            image = await takeScreenshot({
                boundingBox,
                component: 'input',
                context: 'toggle',
                element: page,
                index: i,
                story: 'prop-password'
            });

            expect(image).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });
        }
    });

    // prop-rounded
    commonTest({
        height: 200,
        story: 'prop-rounded',
        width: screenshot.width
    });

    // prop-size
    commonTest({
        height: 600,
        story: 'prop-size',
        width: screenshot.width
    });

    // prop-status
    commonTest({
        height: 400,
        story: 'prop-status',
        width: screenshot.width
    });

    // prop-textarea
    commonTest({
        element: 'textarea',
        height: 500,
        story: 'prop-textarea',
        width: screenshot.width
    });

    // prop-variant
    commonTest({
        height: 100,
        story: 'prop-variant',
        width: screenshot.width
    });

    it('util-margin', async () => {
        let image;

        await page.goto(`http://localhost:${port}/iframe.html?id=input--util-margin`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: 1000, height: 500 });

        image = await takeScreenshot({
            component: 'input',
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

        await page.goto(`http://localhost:${port}/iframe.html?id=input--util-padding`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: screenshot.width, height: 500 });

        image = await takeScreenshot({
            component: 'input',
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

        await page.goto(`http://localhost:${port}/iframe.html?id=input--util-visibility`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: screenshot.width, height: 200 });

        image = await takeScreenshot({
            component: 'input',
            element: page,
            story: 'util-visibility'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });
});