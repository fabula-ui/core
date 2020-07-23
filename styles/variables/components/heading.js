import colors from '../colors';
import globals from '../globals';

const heading = {
    ...globals,
    colors,
    
    fontWeight: 700,
    letterSpacing: '-.05em',
    levelMultipliers: {
        '1': 3,
        '2': 2,
        '3': 1.5,
        '4': 1.25,
        '5': 1.1,
        '6': 1
    },
    marginBottom: '1em',
    marginTop: '1.5em'
}

export default heading;