import { getComponentVars } from '../../../methods/misc/getComponentVars';

export const sizeModifier = props => {
    const vars = getComponentVars('modal');
    const size = vars.sizes[props.size];

    return `
        .fab-modal__dialog {
            max-width: ${size};
        }
    `;
}