import { takeScreenshot } from '../common';
import { testConfig } from '../config';

const { failureThresholdType, screenshot } = testConfig;
const failureThreshold = 0.02;
const port = process.env.PORT || defaultPort;

describe('Tag group', () => {
    afterAll(async () => {
        await page.waitFor(1000);
    });

    beforeAll(async () => {
        jest.setTimeout(100000);
    });

    it('example', async () => {
        let image;

        await page.goto(`http://localhost:${port}/iframe.html?id=tag-group--example`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: 200, height: 100 });

        image = await takeScreenshot({
            component: 'tag-group',
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

        await page.goto(`http://localhost:${port}/iframe.html?id=tag-group--prop-color`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: 200, height: 300 });

        image = await takeScreenshot({
            component: 'tag-group',
            element: page, 
            story: 'prop-color'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-spacing', async () => {
        let image;

        await page.goto(`http://localhost:${port}/iframe.html?id=tag-group--prop-color`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: 300, height: 200 });

        image = await takeScreenshot({
            component: 'tag-group',
            element: page, 
            story: 'prop-spacing'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });
});
