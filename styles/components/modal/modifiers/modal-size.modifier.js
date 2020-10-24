import getComponentVars from '../../../methods/misc/getComponentVars';

const sizeModifier = props => {
    const vars = getComponentVars('modal');
    const size = vars.sizes[props.size];

    return `
        .fab-modal__dialog {
            max-width: ${size};
        }
    `;
}

export default sizeModifier;