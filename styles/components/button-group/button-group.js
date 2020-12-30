// Methods
import { getDirection } from '../../methods/misc/getDirection';

// Button group modifiers
import { dividerModifier } from './modifiers/button-group-divider.modifier';
import { gluedModifier } from './modifiers/button-group-glued.modifier';

export const ButtonGroupStyles = params => {
    const { framework, props } = params;
    const wrapper = framework === 'angular' ? '.fab-button-group' : '&';

    return `
    & { display: inline-block; }

    ${wrapper} {
        box-sizing: border-box;
        display: inline-flex;
        flex-direction: ${getDirection(props.layout)};
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