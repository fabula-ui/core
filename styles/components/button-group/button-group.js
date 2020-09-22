// Button modifiers
import dividerModifier from './modifiers/button-group-divider.modifier';
import gluedModifier from './modifiers/button-group-glued.modifier';

// Methods
import getComponentVars from '../../methods/misc/getComponentVars';
import getNumber from '../../methods/misc/getNumber';

const ButtonGroupStyles = params => {
    const { framework, props } = params;
    const directions = {
        h: 'row',
        horizontal: 'row',
        v: 'column',
        vertical: 'column'
    }
    const vars = getComponentVars('buttonGroup');
    const wrapper = framework === 'angular' ? '.fab-button-group' : '&';

    return `
    ${wrapper} {
        align-items: flex-start;
        box-sizing: border-box;
        display: inline-flex;
        flex-direction: ${directions[props.layout]};
        justify-content: flex-start;
        position: relative;
    }

    // Modifiers
    ${dividerModifier(params)}
    ${gluedModifier(params)}
    `
};

export default ButtonGroupStyles;