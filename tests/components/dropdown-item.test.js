import { takeScreenshot } from '../common';
import { testConfig } from '../config';

const { failureThresholdType, screenshot } = testConfig;
const failureThreshold = 0.02;
const port = process.env.PORT || defaultPort;

describe('Dropdown item', () => {
    afterAll(async() => {
        await page.waitFor(1000);
    });
    
    beforeAll(async () => {
        jest.setTimeout(100000);
    });

    it('example', async () => {
        let items;
        let toggle;

        await page.setViewport({ width: 200, height: 300 });

        await page.goto(`http://localhost:${port}/iframe.html?id=dropdown-item--example`, { waitUntil: 'load' });
        await page.waitFor(500);

        toggle = await page.$('.fab-dropdown-toggle');

        await toggle.click();

        items = await page.$$('.fab-dropdown-item');
        
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            let image;

            await item.hover();
            await page.waitFor(500);

            image = await takeScreenshot({
                component: 'dropdown-item',
                context: 'hover',
                element: page,
                index: i,
                story: 'util-margin'
            });
            
            await item.click();

            image = await takeScreenshot({
                component: 'dropdown-item',
                context: 'active',
                element: page,
                index: i,
                story: 'util-margin'
            });

            expect(image).toMatchImageSnapshot({
                failureThreshold,
                failureThresholdType
            });

            await toggle.click();
        }
    });
});