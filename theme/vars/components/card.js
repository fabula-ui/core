import colors from '../colors';
import globals from '../globals';

const card = {
    ...globals,
    colors,
    
    borderRadius: `calc(${globals.borderRadius} * 1.25)`,
    color: '#FFF'
}

export default card;