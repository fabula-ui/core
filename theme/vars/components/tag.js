import colors from '../colors';
import globals from '../globals';

const tag = {
    ...globals,
    colors,

    // Component vars
    borderRadius: `calc(${globals.borderRadius} * .8)`,
    fontSize: '.9rem',
    paddingX: '.7rem',
    paddingY: '.35rem'
}

export default tag;