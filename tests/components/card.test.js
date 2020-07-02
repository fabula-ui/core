describe('Card', () => {
    const port = process.env.PORT || '9009';

    beforeAll(async () => {
        jest.setTimeout(100000);
    });

    // Clear
    it('examples', async () => {
        page.setViewport({ width: 1800, height: 600 });

        await page.goto(`http://localhost:${port}/iframe.html?id=card--examples`, { waitUntil: 'load', timeout: 10000 });
        await page.waitFor(200);
        
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('color', async () => {
        page.setViewport({ width: 1200, height: 900 });

        await page.goto(`http://localhost:${port}/iframe.html?id=card--color`, { waitUntil: 'load', timeout: 10000 });
        await page.waitFor(200);

        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('glow', async () => {
        page.setViewport({ width: 1200, height: 900 });

        await page.goto(`http://localhost:${port}/iframe.html?id=card--glow`, { waitUntil: 'load', timeout: 10000 });
        await page.waitFor(200);

        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('layout', async () => {
        page.setViewport({ width: 1800, height: 600 });

        await page.goto(`http://localhost:${port}/iframe.html?id=card--layout`, { waitUntil: 'load', timeout: 10000 });
        await page.waitFor(200);
        
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

});