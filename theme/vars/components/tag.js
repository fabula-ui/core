import colors from '../colors';
import globals from '../globals';

const tag = {
    ...globals,
    colors,

    // Component vars
    borderRadius: `calc(${globals.borderRadius} * .8)`,
    fontSize: '.9em',
    paddingX: '.7rem',
    paddingY: '.5em'
}

export default tag;