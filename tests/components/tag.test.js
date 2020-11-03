import { takeScreenshot } from '../common';
import { testConfig } from '../config';

const { failureThresholdType, screenshot } = testConfig;
const failureThreshold = 0.02;
const port = process.env.PORT || defaultPort;

describe('Tag', () => {
    afterAll(async () => {
        await page.waitFor(1000);
    });

    beforeAll(async () => {
        jest.setTimeout(100000);
    });

    it('example', async () => {
        let anchors;
        let buttons;
        let divs;
        let image;

        await page.goto(`http://localhost:${port}/iframe.html?id=tag--example`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: 300, height: 100 });

        image = await takeScreenshot({
            component: 'tag',
            element: page,
            story: 'example'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });

        anchors = await page.$$('a.fab-tag');

        for (let i = 0; i < anchors.length; i++) {
            const anchor = anchors[i];
            const boundingBox = await anchor.boundingBox();
            let image;

            await anchor.hover();
            await page.waitFor(500);

            image = await takeScreenshot({
                boundingBox,
                component: 'tag',
                context: 'hover',
                element: page,
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
                boundingBox,
                component: 'tag',
                context: 'active',
                element: page,
                story: 'example'
            });

            expect(image).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });
        }
    });
});