import colors from '../colors';
import globals from '../globals';

const badge = {
    ...globals,
    colors,

    borderRadius: '.5em',
    circleSize: '1.75em',
    get color() {
        return '#FFF'
    },
    fontSize: '.75em',
    fontWeight: 600,
    padding: '.4em'
}

export default badge;