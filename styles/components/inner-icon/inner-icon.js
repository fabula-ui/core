import colorModifier from './modifiers/inner-icon-color.modifier';

const InnerIconStyles = params => {
    const { framework, props } = params;
    const icon = require(`../../../icons/${props.name}.svg`);
    const wrapper = framework === 'angular' ? '.fab-inner-icon' : '&';

    return `
        & { display: inline-flex; }

        ${wrapper} {
            background: #000;
            display: inline-flex;
            height: 1.1em;
            margin-right: .75em;
            mask-image: url(${icon});
            mask-position: center center;
            mask-repeat: no-repeat;
            mask-size: contain;
            width: 1.1em;
        }

        ${colorModifier(params)}
    `
}

export default InnerIconStyles;