describe('Card', () => {
    const port = process.env.PORT || '9009';

    beforeAll(async () => {
        jest.setTimeout(100000);
        page.setViewport({ width: 1920, height: 1080 });
    });

    // Clear
    it('examples', async () => {
        await page.goto(`http://localhost:${port}/iframe.html?id=card--examples`, { waitUntil: 'load', timeout: 10000 });
        await page.waitFor(2000);
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('color', async () => {
        await page.goto(`http://localhost:${port}/iframe.html?id=card--color`, { waitUntil: 'load', timeout: 10000 });
        await page.waitFor(2000);
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('glow', async () => {
        await page.goto(`http://localhost:${port}/iframe.html?id=card--glow`, { waitUntil: 'load', timeout: 10000 });
        await page.waitFor(2000);
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('layout', async () => {
        await page.goto(`http://localhost:${port}/iframe.html?id=card--layout`, { waitUntil: 'load', timeout: 10000 });
        await page.waitFor(2000);
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

});