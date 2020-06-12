describe('Button', () => {
    const port = process.env.PORT || '9009';

    beforeAll(async () => {
        jest.setTimeout(100000);
        page.setViewport({ width: 1920, height: 1080 });
    });

    // Clear
    it('clear:general check', async () => {
        await page.goto(`http://localhost:${port}/iframe.html?id=button--clear`, { waitUntil: 'load', timeout: 10000 });
        await page.waitFor(2000);
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('clear:hover', async () => {
        const buttons = await page.$$('.fab-button-wrapper');

        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            let screenshot;

            await button.hover();
            screenshot = await button.screenshot();

            expect(screenshot).toMatchImageSnapshot();
        }
    });

    it('clear:active', async () => {
        const buttons = await page.$$('.fab-button-wrapper');

        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            let screenshot;

            await button.click({ delay: 500 });

            screenshot = await button.screenshot();

            expect(screenshot).toMatchImageSnapshot();
        }
    });

    it('clear:focus', async () => {
        await page.waitFor(500);
        const buttons = await page.$$('.fab-button-wrapper');

        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            let screenshot;

            await button.click();

            screenshot = await button.screenshot();

            expect(screenshot).toMatchImageSnapshot();
        }
    });

    // Color
    it('color:general check', async () => {
        await page.goto(`http://localhost:${port}/iframe.html?id=button--color`, { waitUntil: 'load', timeout: 10000 });
        await page.waitFor(2000);
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('color:hover', async () => {
        const buttons = await page.$$('.fab-button-wrapper');

        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            let screenshot;

            await button.hover();
            screenshot = await button.screenshot();

            expect(screenshot).toMatchImageSnapshot();
        }
    });

    it('color:active', async () => {
        const buttons = await page.$$('.fab-button-wrapper');

        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            let screenshot;

            await button.click({ delay: 500 });

            screenshot = await button.screenshot();

            expect(screenshot).toMatchImageSnapshot();
        }
    });

    it('color:focus', async () => {
        await page.waitFor(500);
        const buttons = await page.$$('.fab-button-wrapper');

        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            let screenshot;

            await button.click();

            screenshot = await button.screenshot();

            expect(screenshot).toMatchImageSnapshot();
        }
    });

    // Compact Vs Wide
    it('compact vs wide', async () => {
        await page.goto(`http://localhost:${port}/iframe.html?id=button--compact-vs-wide`, { waitUntil: 'load', timeout: 10000 });
        await page.waitFor(2000);
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    // Disabled
    it('disabled', async () => {
        await page.goto(`http://localhost:${port}/iframe.html?id=button--disabled`, { waitUntil: 'load', timeout: 10000 });
        await page.waitFor(2000);
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    // Expand
    it('expand', async () => {
        await page.goto(`http://localhost:${port}/iframe.html?id=button--expand`, { waitUntil: 'load', timeout: 10000 });
        await page.waitFor(2000);
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    // Faded
    it('faded:general check', async () => {
        await page.goto(`http://localhost:${port}/iframe.html?id=button--faded`, { waitUntil: 'load', timeout: 10000 });
        await page.waitFor(2000);
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('faded:hover', async () => {
        const buttons = await page.$$('.fab-button-wrapper');

        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            let screenshot;

            await button.hover();
            screenshot = await button.screenshot();

            expect(screenshot).toMatchImageSnapshot();
        }
    });

    it('faded:active', async () => {
        const buttons = await page.$$('.fab-button-wrapper');

        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            let screenshot;

            await button.click({ delay: 500 });

            screenshot = await button.screenshot();

            expect(screenshot).toMatchImageSnapshot();
        }
    });

    it('faded:focus', async () => {
        await page.waitFor(500);
        const buttons = await page.$$('.fab-button-wrapper');

        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            let screenshot;

            await button.click();

            screenshot = await button.screenshot();

            expect(screenshot).toMatchImageSnapshot();
        }
    });

    // Glow
    it('glow', async () => {
        await page.goto(`http://localhost:${port}/iframe.html?id=button--glow`, { waitUntil: 'load', timeout: 10000 });
        await page.waitFor(2000);
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    // Gradient
    it('gradient:general check', async () => {
        await page.goto(`http://localhost:${port}/iframe.html?id=button--gradient`, { waitUntil: 'load', timeout: 10000 });
        await page.waitFor(2000);
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('gradient:hover', async () => {
        const buttons = await page.$$('.fab-button-wrapper');

        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            let screenshot;

            await button.hover();
            screenshot = await button.screenshot();

            expect(screenshot).toMatchImageSnapshot();
        }
    });

    it('gradient:active', async () => {
        const buttons = await page.$$('.fab-button-wrapper');

        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            let screenshot;

            await button.click({ delay: 500 });

            screenshot = await button.screenshot();

            expect(screenshot).toMatchImageSnapshot();
        }
    });

    it('gradient:focus', async () => {
        await page.waitFor(500);
        const buttons = await page.$$('.fab-button-wrapper');

        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            let screenshot;

            await button.click();

            screenshot = await button.screenshot();

            expect(screenshot).toMatchImageSnapshot();
        }
    });

    // Invert
    it('invert:general check', async () => {
        await page.goto(`http://localhost:${port}/iframe.html?id=button--invert`, { waitUntil: 'load', timeout: 10000 });
        await page.waitFor(2000);
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('invert:hover', async () => {
        const buttons = await page.$$('.fab-button-wrapper');

        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            let screenshot;

            await button.hover();
            screenshot = await button.screenshot();

            expect(screenshot).toMatchImageSnapshot();
        }
    });

    it('invert:active', async () => {
        const buttons = await page.$$('.fab-button-wrapper');

        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            let screenshot;

            await button.click({ delay: 500 });

            screenshot = await button.screenshot();

            expect(screenshot).toMatchImageSnapshot();
        }
    });

    it('invert:focus', async () => {
        await page.waitFor(500);
        const buttons = await page.$$('.fab-button-wrapper');

        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            let screenshot;

            await button.click();

            screenshot = await button.screenshot();

            expect(screenshot).toMatchImageSnapshot();
        }
    });

    // Outline
    it('outline:general check', async () => {
        await page.goto(`http://localhost:${port}/iframe.html?id=button--outline`, { waitUntil: 'load', timeout: 10000 });
        await page.waitFor(2000);
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('outline:hover', async () => {
        const buttons = await page.$$('.fab-button-wrapper');

        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            let screenshot;

            await button.hover();
            screenshot = await button.screenshot();

            expect(screenshot).toMatchImageSnapshot();
        }
    });

    it('outline:active', async () => {
        const buttons = await page.$$('.fab-button-wrapper');

        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            let screenshot;

            await button.click({ delay: 500 });

            screenshot = await button.screenshot();

            expect(screenshot).toMatchImageSnapshot();
        }
    });

    it('outline:focus', async () => {
        await page.waitFor(500);
        const buttons = await page.$$('.fab-button-wrapper');

        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            let screenshot;

            await button.click();

            screenshot = await button.screenshot();

            expect(screenshot).toMatchImageSnapshot();
        }
    });

    // Rounded
    it('rounded', async () => {
        await page.goto(`http://localhost:${port}/iframe.html?id=button--rounded`, { waitUntil: 'load', timeout: 10000 });
        await page.waitFor(2000);
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    // Size
    it('size', async () => {
        await page.goto(`http://localhost:${port}/iframe.html?id=button--size`, { waitUntil: 'load', timeout: 10000 });
        await page.waitFor(2000);
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    // External badge
    it('external badge', async () => {
        await page.goto(`http://localhost:${port}/iframe.html?id=button--external-badge`, { waitUntil: 'load', timeout: 10000 });
        await page.waitFor(2000);
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

});