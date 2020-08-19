// Methods
import getComponentVars from '../../methods/misc/getComponentVars';
import getNumber from '../../methods/misc/getNumber';

// Utils
import gluedModifier from './modifiers/glued.modifier';
import sizeModifier from './modifiers/input-group-size.modifier';

const InputGroupStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('input');

    return `
    ${framework === 'angular' ? `& { display: block;` : ''}

    .fab-input-group {
        align-items: flex-start;
        display: flex;
        flex-direction: ${props.flow === 'horizontal' ? 'row' : 'column'};
    }

    .fab-input-group > *,
    .fab-input-group .fab-button {
        ${framework === 'angular' ? `display: inline-flex;` : ''}
        ${props.flow === 'vertical' ? `width: 100%;` : ''}
    }
    
    .fab-input-group > *:not(:last-child) {
        ${props.flow === 'horizontal' ? `margin-right: ${getNumber(props.spacing, 'rem') || vars.spacing}` : ''};
        ${props.flow === 'vertical' ? `margin-bottom: ${getNumber(props.spacing, 'rem') || vars.spacing}` : ''};
    }

    ${framework === 'angular' ? `fab-input` : `.fab-input-group .fab-input-wrapper`} {
        flex-grow: 1;
    }

    .fab-input-group .fab-input-wrapper {
        ${framework === 'angular' ? `width: 100%;` : ''}
    }

    // Modifiers
    ${props.glued ? gluedModifier(props) : ''}
    ${props.size ? sizeModifier(props) : ''}
    `
};

export default InputGroupStyles;