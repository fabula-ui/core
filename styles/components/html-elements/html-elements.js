import getComponentVars from '../../methods/misc/getComponentVars';

const HTMLElementsStyles = params => {
    const { props } = params;
    const vars = getComponentVars('htmlElements');
    const color = (props.color || props.clear) ? getColor(props.color, vars.colors) : vars.color;
    const context = (props.color || props.clear) ? getContext(props) : 'fill';

    return `
        & {
            ${props.color ? `color: ${getBgColor(color, context)};` : ''}
        }
    `
}

export default HTMLElementsStyles;