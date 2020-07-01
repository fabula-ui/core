describe('Badge', () => {
    const port = process.env.PORT || '9009';

    afterAll(async() => {
        await page.waitFor(1000);
    });

    beforeAll(async () => {
        jest.setTimeout(100000);
    });

    it('circle', async () => {
        page.setViewport({ width: 250, height: 100 });

        await page.goto(`http://localhost:${port}/iframe.html?id=badge--circle`, { waitUntil: 'load', timeout: 10000 });
        await page.waitFor(500);
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('clear', async () => {
        page.setViewport({ width: 360, height: 100 });

        await page.goto(`http://localhost:${port}/iframe.html?id=badge--clear`, { waitUntil: 'load', timeout: 10000 });
        await page.waitFor(500);

        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('color', async () => {
        page.setViewport({ width: 360, height: 100 });

        await page.goto(`http://localhost:${port}/iframe.html?id=badge--color`, { waitUntil: 'load', timeout: 10000 });
        await page.waitFor(500);

        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('faded', async () => {
        page.setViewport({ width: 360, height: 100 });

        await page.goto(`http://localhost:${port}/iframe.html?id=badge--faded`, { waitUntil: 'load', timeout: 10000 });
        await page.waitFor(500);

        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('invert', async () => {
        page.setViewport({ width: 360, height: 100 });

        await page.goto(`http://localhost:${port}/iframe.html?id=badge--invert`, { waitUntil: 'load', timeout: 10000 });
        await page.waitFor(500);

        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('outline', async () => {
        page.setViewport({ width: 360, height: 100 });

        await page.goto(`http://localhost:${port}/iframe.html?id=badge--outline`, { waitUntil: 'load', timeout: 10000 });
        await page.waitFor(500);
        
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('rounded', async () => {
        page.setViewport({ width: 400, height: 120 });

        await page.goto(`http://localhost:${port}/iframe.html?id=badge--rounded`, { waitUntil: 'load', timeout: 10000 });
        await page.waitFor(500);

        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });
});