import getComponentVars from '../../methods/misc/getComponentVars';

const HeadingStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('heading');
    const wrapper = framework === 'angular' ? '.fab-heading' : '&';

    return `
        ${wrapper} {
            font-family: ${vars.fontFamily};
            font-size: calc(1rem * ${vars.levelMultipliers[props.level]});
            font-weight: ${props.weight || vars.fontWeight};
            letter-spacing: ${vars.letterSpacing};
            margin-bottom: ${vars.marginBottom};

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
                font-family: inherit;
                font-size: inherit;
                font-weight: inherit;
                letter-spacing: inherit;
                margin: 0;
            }

            &:not(:first-child) {
                margin-top: ${vars.marginTop};
            }
        }
    `
}

export default HeadingStyles