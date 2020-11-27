// Button modifiers
import dividerModifier from './modifiers/button-group-divider.modifier';
import gluedModifier from './modifiers/button-group-glued.modifier';

const ButtonGroupStyles = params => {
    const { framework, props } = params;
    const directions = {
        h: 'row',
        horizontal: 'row',
        v: 'column',
        vertical: 'column'
    };
    const wrapper = framework === 'angular' ? '.fab-button-group' : '&';

    return `
    & { display: inline-block; }

    ${wrapper} {
        box-sizing: border-box;
        display: inline-flex;
        flex-direction: ${directions[props.layout]};
        justify-content: flex-start;
        position: relative;
    }

    // External
    .fab-dropdown-toggle {
        align-self: stretch
    }

    .fab-dropdown-toggle .fab-button {
        height: 100%;
    }

    // Modifiers
    ${dividerModifier(params)}
    ${gluedModifier(params)}
    `
};

export default ButtonGroupStyles;