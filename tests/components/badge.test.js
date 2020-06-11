describe('Badge', () => {
    const port = process.env.PORT || '9009';
    beforeAll(async () => {
        jest.setTimeout(100000);
        page.setViewport({ width: 1920, height: 1080 });
    });

    it('circle', async () => {
        await page.goto(`http://localhost:${port}/iframe.html?id=badge--circle`, { waitUntil: 'load', timeout: 10000 });
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('clear', async () => {
        await page.goto(`http://localhost:${port}/iframe.html?id=badge--clear`, { waitUntil: 'load', timeout: 10000 });
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('color', async () => {
        await page.goto(`http://localhost:${port}/iframe.html?id=badge--color`, { waitUntil: 'load', timeout: 10000 });
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('faded', async () => {
        await page.goto(`http://localhost:${port}/iframe.html?id=badge--faded`, { waitUntil: 'load', timeout: 10000 });
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('faded', async () => {
        await page.goto(`http://localhost:${port}/iframe.html?id=badge--invert`, { waitUntil: 'load', timeout: 10000 });
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('outline', async () => {
        await page.goto(`http://localhost:${port}/iframe.html?id=badge--outline`, { waitUntil: 'load', timeout: 10000 });
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('rounded', async () => {
        await page.goto(`http://localhost:${port}/iframe.html?id=badge--rounded`, { waitUntil: 'load', timeout: 10000 });
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });
});