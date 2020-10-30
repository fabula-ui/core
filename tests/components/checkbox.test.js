import { takeScreenshot } from '../common';
import { testConfig } from '../config';

const { failureThresholdType, screenshot } = testConfig;
const failureThreshold = 0.02;
const port = process.env.PORT || defaultPort;

const commonTest = params => {
    const { height, story, width } = params;

    it(story, async () => {
        let image;

        await page.setViewport({ width: width || 400, height: height || 300 });

        await page.goto(`http://localhost:${port}/iframe.html?id=checkbox--${story}`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'checkbox',
            element: page,
            story
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-active-color:checked', async () => {
        let image;
        let wrappers;

        await page.setViewport({ width: width || 400, height: height || 300 });

        wrappers = await page.$$('.fab-wrapper');

        for (let i = 0; i < wrappers.length; i++) {
            const wrapper = wrappers[i];
            const checkboxes = await wrapper.$$('.fab-checkbox');

            checkboxes[0].click();
            checkboxes[2].click();

            await page.waitFor(500);
        }

        image = await takeScreenshot({
            component: 'checkbox',
            context: 'checked',
            element: page,
            story
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-active-color:unchecked', async () => {
        let image;
        let wrappers;

        await page.setViewport({ width: width || 400, height: height || 300 });

        wrappers = await page.$$('.fab-wrapper');

        for (let i = 0; i < wrappers.length; i++) {
            const wrapper = wrappers[i];
            const checkboxes = await wrapper.$$('.fab-checkbox');

            checkboxes[0].click();
            checkboxes[1].click();
            checkboxes[2].click();

            await page.waitFor(500);
        }

        image = await takeScreenshot({
            component: 'checkbox',
            context: 'unchecked',
            element: page,
            story
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });

        await page.waitFor(1000);
    });
}

describe('Checkbox', () => {
    afterAll(async () => {
        await page.waitFor(1000);
    });

    beforeAll(async () => {
        jest.setTimeout(100000);
    });

    it('example', async () => {
        let image;

        await page.setViewport({ width: 200, height: 100 });

        await page.goto(`http://localhost:${port}/iframe.html?id=checkbox--example`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'checkbox',
            element: page,
            story: 'example'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('example:checked', async () => {
        const checkbox = await page.$('.fab-checkbox');
        const boundingBox = await checkbox.boundingBox();
        let image;

        await checkbox.click();
        await page.waitFor(500);

        image = await takeScreenshot({
            boundingBox,
            component: 'checkbox',
            context: 'checked',
            element: checkbox,
            story: 'example'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('example:unchecked', async () => {
        const checkbox = await page.$('.fab-checkbox');
        const boundingBox = await checkbox.boundingBox();
        let image;

        await checkbox.click();
        await page.waitFor(500);

        image = await takeScreenshot({
            boundingBox,
            component: 'checkbox',
            context: 'unchecked',
            element: checkbox,
            story: 'example'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    // prop-active-color
    commonTest({ story: 'prop-active-color' });

    // prop-color
    commonTest({ story: 'prop-color' });

    // prop-disabled
    commonTest({ story: 'prop-disabled' });

    // prop-inactive-color
    commonTest({ story: 'prop-inactive-color' });

    // prop-inactive-color
    commonTest({ story: 'prop-inactive-color' });

    // prop-read-only
    commonTest({ story: 'prop-read-only' });

    // prop-size
    commonTest({ height: 300, story: 'prop-size', width: 1000 });

    // utils
    it('util-margin', async () => {
        let image;

        await page.setViewport({ width: 300, height: 400 });

        await page.goto(`http://localhost:${port}/iframe.html?id=checkbox--util-margin`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'checkbox',
            element: page,
            story: 'util-margin'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('util-visibility', async () => {
        let image;

        await page.setViewport({ width: 200, height: 100 });

        await page.goto(`http://localhost:${port}/iframe.html?id=checkbox--util-visibility`, { waitUntil: 'load' });
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'checkbox',
            element: page,
            story: 'util-visibility'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });
});

