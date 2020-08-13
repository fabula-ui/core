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
    fontSize: '.9em',
    fontWeight: 400,
    glowRadius: '2px',
    glowSpread: 0,
    glowX: 0,
    glowY: '1px',
    paddingX: '.7em',
    paddingY: '.5em',
    get paddingBottom() {
        return this.paddingY
    },
    get paddingLeft() {
        return this.paddingX
    },
    get paddingRight() {
        return this.paddingX
    },
    get paddingTop() {
        return this.paddingY
    }
}

export default tag;