import colorModifier from './modifiers/list-item-color.modifier';
import sizeModifier from './modifiers/list-item-size.modifier';

const ListItemStyles = params => {
    return `
        ${colorModifier(params)}
        ${sizeModifier(params)}
    `
}

export default ListItemStyles;