import { testConfig } from './config';

const fs = require('fs');
const { path } = testConfig;

const getPath = params => {
    const { component, context, index, story } = params;
    const dir = makeDir(params);

    return `${dir}/${component}--${story}${context ? `-${context}` : ''}${index || ''}.png`;
}

const makeDir = params => {
    const { component, story } = params;
    const componentDir = `${path}/${component}`;
    const storyDir = `${componentDir}/${story}`;

    if (!fs.existsSync(componentDir)) {
        fs.mkdirSync(componentDir);
    }

    if (!fs.existsSync(storyDir)) {
        fs.mkdirSync(storyDir);
    }

    return storyDir;
}

export const takeScreenshot = async params => {
    const { boundingBox, element } = params;
    const screenshotParams = { path: getPath(params) };

    if (boundingBox) {
        let { height, width, x, y } = boundingBox;

        screenshotParams.clip = {
            height: height + 20,
            x: (x - 10) < 0 ? 0 : x - 10,
            y: (y - 10) < 0 ? 0 : y - 10,
            width: width + 20
        }
    }

    return await element.screenshot(screenshotParams);
}