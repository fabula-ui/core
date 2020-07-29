import colorModifier from './modifiers/inner-icon-color.modifier';

const InnerIconStyles = params => {
    const { framework, props } = params;
    const iconFile = typeof props.icon === 'object' ? props.icon.name : props.icon;
    const icon = require(`../../../icons/raw/${iconFile}.svg`);
    const wrapper = framework === 'angular' ? '.fab-inner-icon' : '&';

    return `
        & { display: inline-flex; }

        ${wrapper} {
            display: inline-flex;
            height: 1.1em;
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