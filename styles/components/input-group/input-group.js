// Methods
import { getComponentVars } from '../../methods/misc/getComponentVars';
import { getDirection } from '../../methods/misc/getDirection';
import { getNumber } from '../../methods/misc/getNumber';

// Utils
import { gluedModifier } from './modifiers/glued.modifier';
import { sizeModifier } from './modifiers/input-group-size.modifier';

export const InputGroupStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('input');
    const direction = getDirection(props.layout);

    return `
    ${framework === 'angular' ? `& { display: block;` : ''}

    .fab-input-group {
        align-items: flex-start;
        display: flex;
        flex-direction: ${direction};
        font-size: ${vars.fontSize};
    }

    .fab-input-group > *,
    .fab-input-group .fab-button {
        ${framework === 'angular' ? `display: inline-flex;` : ''}
        ${direction === 'column' ? `width: 100%;` : ''}
    }
    
    .fab-input-group > *:not(:last-child) {
        ${direction === 'row' ? `margin-right: ${getNumber(props.spacing, 'rem') || vars.spacing}` : ''};
        ${direction === 'column' ? `margin-bottom: ${getNumber(props.spacing, 'rem') || vars.spacing}` : ''};
    }

    ${framework === 'angular' ? `fab-input` : `.fab-input-group .fab-input-wrapper`} {
        flex-grow: 1;
    }

    .fab-input-group .fab-button,
    .fab-input-group .fab-input-wrapper {
        z-index: 0;
    }

    .fab-input-group .fab-button:focus,
    .fab-input-group .fab-input-wrapper[data-focus='true'] {
        z-index: 1;
    }

    .fab-input-group .fab-input-wrapper {
        ${framework === 'angular' ? `width: 100%;` : ''}
    }

    // External
    .fab-button,
    .fab-input {
        height: 3em;
    }

    // Modifiers
    ${gluedModifier(props)}
    ${props.size ? sizeModifier(props) : ''}
    `
};