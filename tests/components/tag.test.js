import { takeScreenshot } from '../common';
import { testConfig } from '../config';

const { failureThresholdType, screenshot } = testConfig;
const failureThreshold = 0.02;
const port = process.env.PORT || defaultPort;

const commonTest = params => {
    const { height, story, width } = params;

    it(story, async () => {
        let anchors;
        let buttons;
        let divs;
        let image;

        await page.goto(`http://localhost:${port}/iframe.html?id=tag--${story}`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width, height });

        image = await takeScreenshot({
            component: 'tag',
            element: page,
            story
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });

        anchors = await page.$$('a.fab-tag');
        buttons = await page.$$('button.fab-tag');
        divs = await page.$$('div.fab-tag');

        for (let i = 0; i < anchors.length; i++) {
            const anchor = anchors[i];
            const boundingBox = await anchor.boundingBox();
            let image;

            image = await takeScreenshot({
                boundingBox,
                component: 'tag',
                context: 'anchor',
                element: page,
                index: i + 1,
                story
            });

            expect(image).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });

            await anchor.hover();
            await page.waitFor(500);

            image = await takeScreenshot({
                boundingBox,
                component: 'tag',
                context: 'anchor-hover',
                element: page,
                index: i + 1,
                story
            });

            expect(image).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });

            await page.mouse.down();
            await page.mouse.move(width, height);
            await page.waitFor(500);
            // await page.waitForSelector('a.fab-tag');

            image = await takeScreenshot({
                boundingBox,
                component: 'tag',
                context: 'anchor-active',
                element: page,
                index: i + 1,
                story
            });

            expect(image).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });

            await page.mouse.up();
        }

        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            const boundingBox = await button.boundingBox();
            let image;

            image = await takeScreenshot({
                boundingBox,
                component: 'tag',
                context: 'button',
                element: page,
                index: i + 1,
                story
            });

            expect(image).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });

            await button.hover();
            await page.waitFor(500);

            image = await takeScreenshot({
                boundingBox,
                component: 'tag',
                context: 'button-hover',
                element: page,
                index: i + 1,
                story
            });

            expect(image).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });

            await page.mouse.down();
            await page.mouse.move(width, height);
            await page.waitFor(500);
            // await page.waitForSelector('button.fab-tag');

            image = await takeScreenshot({
                boundingBox,
                component: 'tag',
                context: 'button-active',
                element: page,
                index: i + 1,
                story
            });

            expect(image).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });

            await page.mouse.up();
        }

        for (let i = 0; i < divs.length; i++) {
            const div = divs[i];
            const boundingBox = await div.boundingBox();
            let image;

            image = await takeScreenshot({
                boundingBox,
                component: 'tag',
                context: 'div',
                element: page,
                index: i + 1,
                story
            });

            expect(image).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });
        }
    });
}

describe('Tag', () => {
    afterAll(async () => {
        await page.waitFor(1000);
    });

    beforeAll(async () => {
        jest.setTimeout(100000);
    });

    commonTest({
        height: 100,
        story: 'example',
        width: 300
    });

    commonTest({
        height: 200,
        story: 'prop-clear',
        width: 500
    });

    commonTest({
        height: 200,
        story: 'prop-color',
        width: 500
    });

    commonTest({
        height: 200,
        story: 'prop-faded',
        width: 500
    });

    commonTest({
        height: 200,
        story: 'prop-glow',
        width: 500
    });

    commonTest({
        height: 200,
        story: 'prop-invert',
        width: 500
    });

    commonTest({
        height: 200,
        story: 'prop-outline',
        width: 500
    });

    commonTest({
        height: 200,
        story: 'prop-rounded',
        width: 500
    });

    commonTest({
        height: 300,
        story: 'prop-size',
        width: 600
    });
});