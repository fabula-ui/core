import { takeScreenshot } from '../common';
import { testConfig } from '../config';

const { failureThresholdType, screenshot } = testConfig;
const failureThreshold = 0.02;
const port = process.env.PORT || defaultPort;

const commonTest = params => {
    const { height, story, width } = params;
    it(story, async () => {
        let image;
        let toggles;

        await page.goto(`http://localhost:${port}/iframe.html?id=toggle--${story}`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width, height });

        image = await takeScreenshot({
            component: 'toggle',
            element: page,
            story
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });

        toggles = await page.$$('.fab-toggle');

        for (let i = 0; i < toggles.length; i++) {
            const toggle = toggles[i];

            await toggle.click();
        }

        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'toggle',
            context: 'active',
            element: page,
            story
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });
}

describe('Toggle', () => {
    afterAll(async () => {
        await page.waitFor(1000);
    });

    beforeAll(async () => {
        jest.setTimeout(100000);
    });

    commonTest({
        height: 100,
        story: 'example',
        width: 200
    });

    commonTest({
        height: 200,
        story: 'prop-active-color',
        width: 300
    });

    commonTest({
        height: 200,
        story: 'prop-color',
        width: 300
    });

    commonTest({
        height: 200,
        story: 'prop-disabled',
        width: 300
    });

    commonTest({
        height: 200,
        story: 'prop-inactive-color',
        width: 300
    });

    commonTest({
        height: 300,
        story: 'prop-size',
        width: 400
    });
});