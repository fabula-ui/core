import { takeScreenshot } from '../common';
import { testConfig } from '../config';

const { failureThresholdType, screenshot } = testConfig;
const failureThreshold = 0.02;
const port = process.env.PORT || defaultPort;

describe('Tooltip', () => {
    afterAll(async () => {
        await page.waitFor(1000);
    });

    beforeAll(async () => {
        jest.setTimeout(100000);
    });

    it('example', async () => {
        let avatar;
        let boundingBox;
        let buttons;
        let cardImage;
        let image;
        let input;
        let link;
        let text;

        await page.goto(`http://localhost:${port}/iframe.html?id=tooltip--example`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: 400, height: 700 });

        avatar = await page.$('.fab-avatar');
        buttons = await page.$$('.fab-button');
        cardImage = await page.$('.fab-card-image');
        input = await page.$('.fab-input');
        link = await page.$('.fab-link');
        text = await page.$('.fab-text');

        boundingBox = await avatar.boundingBox();

        await page.mouse.move(boundingBox.x, boundingBox.y);
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'tooltip',
            context: 'avatar',
            element: page,
            story: 'example'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });

        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            let image;

            await button.hover();
            await page.waitFor(500);

            image = await takeScreenshot({
                component: 'tooltip',
                context: 'button',
                index: i + 1,
                element: page,
                story: 'example'
            });

            expect(image).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });
        }

        await cardImage.hover();
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'tooltip',
            context: 'card-image',
            element: page,
            story: 'example'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });

        await text.hover();
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'tooltip',
            context: 'text',
            element: page,
            story: 'example'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });

        await link.hover();
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'tooltip',
            context: 'link',
            element: page,
            story: 'example'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });

        await input.hover();
        await page.waitFor(500);

        image = await takeScreenshot({
            component: 'tooltip',
            context: 'input',
            element: page,
            story: 'example'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-color', async () => {
        let buttons;

        await page.goto(`http://localhost:${port}/iframe.html?id=tooltip--prop-color`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: 700, height: 200 });

        buttons = await page.$$('.fab-button');

        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            let image;

            await button.hover();
            await page.waitFor(500);

            image = await takeScreenshot({
                component: 'tooltip',
                index: i + 1,
                element: page,
                story: 'prop-color'
            });

            expect(image).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });
        }
    });

    it('prop-offset', async () => {
        let buttons;

        await page.goto(`http://localhost:${port}/iframe.html?id=tooltip--prop-offset`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: 600, height: 200 });

        buttons = await page.$$('.fab-button');

        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            let image;

            await button.hover();
            await page.waitFor(500);

            image = await takeScreenshot({
                component: 'tooltip',
                index: i + 1,
                element: page,
                story: 'prop-offset'
            });

            expect(image).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });
        }
    });

    it('prop-placement', async () => {
        let buttons;

        await page.goto(`http://localhost:${port}/iframe.html?id=tooltip--prop-placement`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: 400, height: 200 });

        buttons = await page.$$('.fab-button');

        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            let image;

            await button.hover();
            await page.waitFor(500);

            image = await takeScreenshot({
                component: 'tooltip',
                index: i + 1,
                element: page,
                story: 'prop-placement'
            });

            expect(image).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });
        }
    });
});