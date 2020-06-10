describe('Alert', () => {
    const port = process.env.PORT || '9009';
    beforeAll(async () => {
        jest.setTimeout(100000);
        page.setViewport({ width: 1920, height: 1080 });
    });

    it('clear', async () => {
        await page.goto(`http://localhost:${port}/iframe.html?id=alert--clear`, { waitUntil: 'load', timeout: 10000 });
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('color', async () => {
        await page.goto(`http://localhost:${port}/iframe.html?id=alert--color`, { waitUntil: 'load', timeout: 10000 });
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('custom content', async () => {
        await page.goto(`http://localhost:${port}/iframe.html?id=alert--custom-content`, { waitUntil: 'load', timeout: 10000 });
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('faded', async () => {
        await page.goto(`http://localhost:${port}/iframe.html?id=alert--faded`, { waitUntil: 'load', timeout: 10000 });
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('glow', async () => {
        await page.goto(`http://localhost:${port}/iframe.html?id=alert--glow`, { waitUntil: 'load', timeout: 10000 });
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('icons', async () => {
        await page.goto(`http://localhost:${port}/iframe.html?id=alert--icons`, { waitUntil: 'load', timeout: 10000 });
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('icon colors', async () => {
        await page.goto(`http://localhost:${port}/iframe.html?id=alert--icon-colors`, { waitUntil: 'load', timeout: 10000 });
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('invert', async () => {
        await page.goto(`http://localhost:${port}/iframe.html?id=alert--invert`, { waitUntil: 'load', timeout: 10000 });
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('marker', async () => {
        await page.goto(`http://localhost:${port}/iframe.html?id=alert--marker`, { waitUntil: 'load', timeout: 10000 });
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('outline', async () => {
        await page.goto(`http://localhost:${port}/iframe.html?id=alert--outline`, { waitUntil: 'load', timeout: 10000 });
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('text color', async () => {
        await page.goto(`http://localhost:${port}/iframe.html?id=alert--text-color`, { waitUntil: 'load', timeout: 10000 });
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });
});