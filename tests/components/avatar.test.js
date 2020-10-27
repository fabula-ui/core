import { testConfig } from '../config';

describe('Avatar', () => {
    const { failureThreshold, failureThresholdType, screenshot } = testConfig;
    const port = process.env.PORT || defaultPort;
    
    afterAll(async() => {
        await page.waitFor(1000);
    });

    beforeAll(async () => {
        jest.setTimeout(100000);
    });

    it('example', async () => {
        let image;

        page.setViewport({ width: 400, height: 200 });
        await page.goto(`http://localhost:${port}/iframe.html?id=avatar--example`, { waitUntil: 'load' });
        image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-color', async () => {
        page.setViewport({ width: 400, height: 100 });

        await page.goto(`http://localhost:${port}/iframe.html?id=avatar--prop-color`, { waitUntil: 'load' });
        await page.waitFor(1000);
        
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-darken', async () => {
        page.setViewport({ width: 400, height: 100 });

        await page.goto(`http://localhost:${port}/iframe.html?id=avatar--prop-darken`, { waitUntil: 'load' });
        await page.waitFor(1000);
        
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-faded', async () => {
        page.setViewport({ width: 400, height: 100 });

        await page.goto(`http://localhost:${port}/iframe.html?id=avatar--prop-faded`, { waitUntil: 'load' });
        await page.waitFor(1000);
        
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-icon', async () => {
        page.setViewport({ width: 200, height: 100 });

        await page.goto(`http://localhost:${port}/iframe.html?id=avatar--prop-icon`, { waitUntil: 'load' });
        await page.waitFor(1000);
        
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-lighten', async () => {
        page.setViewport({ width: 400, height: 100 });

        await page.goto(`http://localhost:${port}/iframe.html?id=avatar--prop-lighten`, { waitUntil: 'load' });
        await page.waitFor(1000);
        
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-rounded', async () => {
        page.setViewport({ width: 200, height: 100 });

        await page.goto(`http://localhost:${port}/iframe.html?id=avatar--prop-rounded`, { waitUntil: 'load' });
        await page.waitFor(1000);
        
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-show-initials', async () => {
        page.setViewport({ width: 400, height: 200 });

        await page.goto(`http://localhost:${port}/iframe.html?id=avatar--prop-show-initials`, { waitUntil: 'load' });
        await page.waitFor(1000);
        
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('prop-size', async () => {
        page.setViewport({ width: 400, height: 200 });

        await page.goto(`http://localhost:${port}/iframe.html?id=avatar--prop-size`, { waitUntil: 'load' });
        await page.waitFor(1000);
        
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('util-margin', async () => {
        page.setViewport({ width: 200, height: 400 });

        await page.goto(`http://localhost:${port}/iframe.html?id=avatar--util-margin`, { waitUntil: 'load' });
        await page.waitFor(1000);
        
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });

    it('util-visibility', async () => {
        page.setViewport({ width: 100, height: 200 });

        await page.goto(`http://localhost:${port}/iframe.html?id=avatar--util-visibility`, { waitUntil: 'load' });
        await page.waitFor(1000);
        
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold,
            failureThresholdType
        });
    });
});