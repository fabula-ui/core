import { takeScreenshot } from '../common';
import { testConfig } from '../config';

const { failureThresholdType, screenshot } = testConfig;
const failureThreshold = 0.02;
const port = process.env.PORT || defaultPort;

describe('Link', () => {
    afterAll(async () => {
        await page.waitFor(1000);
    });

    beforeAll(async () => {
        jest.setTimeout(100000);
    });

    it('example', async () => {
        let boundingBox;
        let image;
        let link;

        await page.goto(`http://localhost:${port}/iframe.html?id=link--example`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: 400, height: 100 });

        image = await takeScreenshot({
            component: 'link',
            element: page,
            story: 'example'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });


        link = await page.$('.fab-link');
        boundingBox = await link.boundingBox();

        await link.hover();
        await page.waitFor(500);

        image = await takeScreenshot({
            boundingBox,
            component: 'link',
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
            component: 'link',
            context: 'active',
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
        let links;

        await page.goto(`http://localhost:${port}/iframe.html?id=link--prop-color`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: 200, height: 200 });

        image = await takeScreenshot({
            component: 'link',
            element: page,
            story: 'prop-color'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });

        links = await page.$$('.fab-link');

        for (let i = 0; i < links.length; i++) {
            const link = links[i];
            let boundingBox = await link.boundingBox();
            let image;

            await link.hover();
            await page.waitFor(500);
    
            image = await takeScreenshot({
                boundingBox,
                component: 'link',
                context: 'hover',
                element: page,
                index: i,
                story: 'prop-color'
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
                component: 'link',
                context: 'active',
                element: page,
                index: i,
                story: 'prop-color'
            });
    
            expect(image).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });

            await page.mouse.up();
        }
    });

    it('prop-size', async () => {
        let image;

        await page.goto(`http://localhost:${port}/iframe.html?id=link--prop-size`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: 300, height: 300 });

        image = await takeScreenshot({
            component: 'link',
            element: page,
            story: 'prop-size'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-underline', async () => {
        let image;
        let links;

        await page.goto(`http://localhost:${port}/iframe.html?id=link--prop-underline`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: 300, height: 200 });

        image = await takeScreenshot({
            component: 'link',
            element: page,
            story: 'prop-underline'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });

        links = await page.$$('.fab-link');

        for (let i = 0; i < links.length; i++) {
            const link = links[i];
            let boundingBox = await link.boundingBox();
            let image;

            await link.hover();
            await page.waitFor(500);
    
            image = await takeScreenshot({
                boundingBox,
                component: 'link',
                context: 'hover',
                element: page,
                index: i,
                story: 'prop-underline'
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
                component: 'link',
                context: 'active',
                element: page,
                index: i,
                story: 'prop-underline'
            });
    
            expect(image).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });

            await page.mouse.up();
        }
    });

    it('util-margin', async () => {
        let image;

        await page.goto(`http://localhost:${port}/iframe.html?id=link--util-margin`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: 200, height: 300 });

        image = await takeScreenshot({
            component: 'link',
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

        await page.goto(`http://localhost:${port}/iframe.html?id=link--util-padding`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: 500, height: 100 });

        image = await takeScreenshot({
            component: 'link',
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

        await page.goto(`http://localhost:${port}/iframe.html?id=link--util-visibility`, { waitUntil: 'load' });
        await page.waitFor(500);

        await page.setViewport({ width: 100, height: 100 });

        image = await takeScreenshot({
            component: 'link',
            element: page,
            story: 'util-visibility'
        });

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });
});