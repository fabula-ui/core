import { takeScreenshot } from '../common';
import { testConfig } from '../config';

const { failureThresholdType, screenshot } = testConfig;
const failureThreshold = 0.02;
const port = process.env.PORT || defaultPort;

const commonTest = params => {
    const { height, story } = params;

    it(story, async () => {
        let image;
        let segments;

        await page.goto(`http://localhost:${port}/iframe.html?id=segments--${story}`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: screenshot.width, height });

        image = await takeScreenshot({
            component: 'segments',
            element: page,
            story
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });

        segments = await page.$$('.fab-segments');

        for (let i = 0; i < segments.length; i++) {
            const segment = segments[i];
            const boundingBox = await segment.boundingBox();
            const items = await segment.$$('.fab-segment');

            for (let j = 0; j < items.length; j++) {
                const item = items[j];
                let image;

                await item.click();
                await page.waitFor(500);

                image = await takeScreenshot({
                    boundingBox,
                    component: 'segments',
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

describe('Segments', () => {
    afterAll(async () => {
        await page.waitFor(1000);
    });

    beforeAll(async () => {
        jest.setTimeout(100000);
    });

    commonTest({
        height: 200,
        story: 'example'
    });

    commonTest({
        height: 300,
        story: 'prop-active-color'
    });

    commonTest({
        height: 300,
        story: 'prop-active-text-color'
    });

    commonTest({
        height: 300,
        story: 'prop-border'
    });

    commonTest({
        height: 300,
        story: 'prop-clear'
    });

    commonTest({
        height: 300,
        story: 'prop-color'
    });

    commonTest({
        height: 300,
        story: 'prop-faded'
    });

    commonTest({
        height: 300,
        story: 'prop-inactive-color'
    });

    commonTest({
        height: 300,
        story: 'prop-inactive-text-color'
    });

    commonTest({
        height: 300,
        story: 'prop-invert'
    });

    commonTest({
        height: 300,
        story: 'prop-outline'
    });

    commonTest({
        height: 300,
        story: 'prop-rounded'
    });
});