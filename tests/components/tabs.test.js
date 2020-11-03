import { takeScreenshot } from '../common';
import { testConfig } from '../config';

const { failureThresholdType, screenshot } = testConfig;
const failureThreshold = 0.02;
const port = process.env.PORT || defaultPort;

const commonTest = params => {
    const { height, story } = params;

    it(story, async () => {
        let image;
        let tabs;

        await page.goto(`http://localhost:${port}/iframe.html?id=tabs--${story}`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: screenshot.width, height });

        image = await takeScreenshot({
            component: 'tabs',
            element: page,
            story
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });

        tabs = await page.$$('.fab-tabs');

        for (let i = 0; i < tabs.length; i++) {
            const tab = tabs[i];
            const boundingBox = await tab.boundingBox();
            const items = await tab.$$('.fab-tab');

            for (let j = 0; j < items.length; j++) {
                const item = items[j];
                let image;

                await item.click();
                await page.waitFor(500);

                image = await takeScreenshot({
                    boundingBox,
                    component: 'tabs',
                    element: page,
                    index: (i * items.length) + (j + 1),
                    story
                });

                expect(image).toMatchImageSnapshot({
                    failureThreshold,
                    failureThresholdType
                });
            }
        }
    });
}

describe('Tabs', () => {
    afterAll(async () => {
        await page.waitFor(1000);
    });

    beforeAll(async () => {
        jest.setTimeout(100000);
    });

    commonTest({
        height: 100,
        story: 'example'
    });

    commonTest({
        height: 400,
        story: 'prop-color'
    });

    commonTest({
        height: 400,
        story: 'prop-expand'
    });

    commonTest({
        height: 400,
        story: 'prop-faded'
    });

    commonTest({
        height: 400,
        story: 'prop-invert'
    });

    commonTest({
        height: 100,
        story: 'prop-layout'
    });

    commonTest({
        height: 300,
        story: 'prop-stacked'
    });
});