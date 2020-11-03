import { takeScreenshot } from '../common';
import { testConfig } from '../config';

const { failureThresholdType, screenshot } = testConfig;
const failureThreshold = 0.02;
const port = process.env.PORT || defaultPort;

const commonTest = params => {
    const { height, story } = params;
    
    it(story, async () => {
        let image;
        let searchInputs;

        await page.goto(`http://localhost:${port}/iframe.html?id=search-input--${story}`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: screenshot.width, height });

        image = await takeScreenshot({
            component: 'search-input',
            element: page,
            story
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });

        searchInputs = await page.$$('.fab-search-input');

        for (let i = 0; i < searchInputs.length; i++) {
            const searchInput = searchInputs[i];
            const boundingBox = await searchInput.boundingBox();
            const input = await searchInput.$('input');
            let image;

            await input.click();
            await page.waitFor(500);

            image = await takeScreenshot({
                boundingBox,
                component: 'search-input',
                context: 'focus',
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

describe('Search input', () => {
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
        height: 100,
        story: 'prop-button'
    });

    commonTest({
        height: 100,
        story: 'prop-glow'
    });

    commonTest({
        height: 200,
        story: 'prop-rounded'
    });

    commonTest({
        height: 400,
        story: 'prop-size'
    });

    commonTest({
        height: 200,
        story: 'prop-variant'
    });

    it('util-margin', async () => {
        let image;

        await page.goto(`http://localhost:${port}/iframe.html?id=search-input--util-margin`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: 1300, height: 500 });

        image = await takeScreenshot({
            component: 'search-input',
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

        await page.goto(`http://localhost:${port}/iframe.html?id=search-input--util-padding`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: screenshot.width, height: 500 });

        image = await takeScreenshot({
            component: 'search-input',
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

        await page.goto(`http://localhost:${port}/iframe.html?id=search-input--util-visibility`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: screenshot.width, height: 100 });

        image = await takeScreenshot({
            component: 'search-input',
            element: page,
            story: 'util-visibility'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });
});