describe('Alert', () => {
    const port = process.env.PORT || '9009';
    beforeAll(async () => {
        jest.setTimeout(100000);
        // page.setViewport({ width: 1920, height: 1080 });
    });

    it('border', async () => {
        page.setViewport({ width: 1200, height: 300 });

        await page.goto(`http://localhost:${port}/iframe.html?id=alert--border`, { waitUntil: 'load', timeout: 10000 });

        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('clear', async () => {
        page.setViewport({ width: 1200, height: 300 });

        await page.goto(`http://localhost:${port}/iframe.html?id=alert--clear`, { waitUntil: 'load', timeout: 10000 });

        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('close button', async () => {
        page.setViewport({ width: 1200, height: 100 });

        await page.goto(`http://localhost:${port}/iframe.html?id=alert--close-button`, { waitUntil: 'load', timeout: 10000 });

        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('color', async () => {
        page.setViewport({ width: 1200, height: 300 });

        await page.goto(`http://localhost:${port}/iframe.html?id=alert--color`, { waitUntil: 'load', timeout: 10000 });

        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('custom content', async () => {
        page.setViewport({ width: 640, height: 100 });

        await page.goto(`http://localhost:${port}/iframe.html?id=alert--custom-content`, { waitUntil: 'load', timeout: 10000 });

        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('faded', async () => {
        page.setViewport({ width: 1200, height: 300 });

        await page.goto(`http://localhost:${port}/iframe.html?id=alert--faded`, { waitUntil: 'load', timeout: 10000 });

        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('glow', async () => {
        page.setViewport({ width: 1200, height: 300 });

        await page.goto(`http://localhost:${port}/iframe.html?id=alert--glow`, { waitUntil: 'load', timeout: 10000 });

        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('icons', async () => {
        page.setViewport({ width: 1200, height: 350 });

        await page.goto(`http://localhost:${port}/iframe.html?id=alert--icons`, { waitUntil: 'load', timeout: 10000 });
        await page.waitFor(1000);

        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('icon colors', async () => {
        page.setViewport({ width: 1200, height: 350 });

        await page.goto(`http://localhost:${port}/iframe.html?id=alert--icon-colors`, { waitUntil: 'load', timeout: 10000 });
        await page.waitFor(1000);

        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('invert', async () => {
        page.setViewport({ width: 1200, height: 300 });

        await page.goto(`http://localhost:${port}/iframe.html?id=alert--invert`, { waitUntil: 'load', timeout: 10000 });
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('marker', async () => {
        page.setViewport({ width: 1200, height: 300 });

        await page.goto(`http://localhost:${port}/iframe.html?id=alert--marker`, { waitUntil: 'load', timeout: 10000 });
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('outline', async () => {
        page.setViewport({ width: 1200, height: 300 });

        await page.goto(`http://localhost:${port}/iframe.html?id=alert--outline`, { waitUntil: 'load', timeout: 10000 });
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('text color', async () => {
        page.setViewport({ width: 1200, height: 300 });

        await page.goto(`http://localhost:${port}/iframe.html?id=alert--text-color`, { waitUntil: 'load', timeout: 10000 });
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('title color', async () => {
        page.setViewport({ width: 1200, height: 350 });

        await page.goto(`http://localhost:${port}/iframe.html?id=alert--title-color`, { waitUntil: 'load', timeout: 10000 });
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });
});