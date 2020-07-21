import colors from '../colors';
import globals from '../globals';

const tag = {
    ...globals,
    colors,

    // Component vars
    borderRadius: `calc(${globals.borderRadius} * .6)`,
    borderWidth: '1px',
    get color() {
        return this.colors['aux']
    },
    get fillColor() {
        return this.colors['aux']
    },
    fontSize: '.9em',
    fontWeight: 400,
    glowRadius: '2px',
    glowSpread: 0,
    glowX: 0,
    glowY: '1px',
    paddingX: '.7em',
    paddingY: '.5em'
}

export default tag;