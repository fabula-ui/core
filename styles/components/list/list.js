// Methods
import { getComponentVars } from '../../methods/misc/getComponentVars';

// Modifiers
import { colorModifier } from './modifiers/list-color.modifier';

export const ListStyles = params => {
    const { props } = params;
    const vars = getComponentVars('list');

    return `
        & {
            display: block;
            font-size: ${vars.fontSize};
        }

        .fab-list {
            padding: 0;
        }

        // Modifiers
        ${props.color ? colorModifier(params) : ''}
    `
};