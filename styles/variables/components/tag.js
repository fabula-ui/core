import colors from '../colors';
import globals from '../globals';

const tag = {
    ...globals,
    colors,

    // Component vars
    borderRadius: `calc(${globals.borderRadius} * .6)`,
    get color() {
        return this.colors['aux']
    },
    get fillColor() {
        return this.colors['aux']
    },
    fontSize: '.9em',
    paddingX: '.7em',
    paddingY: '.5em'
}

export default tag;