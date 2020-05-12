import Color from 'color';

// Commons
import colorsCommons from '../common/colors';

// Utils
import bgColor from './bgColor';

const stripeColor = (color, context) => {
    const theme = window.__FABTheme;
    const { colors } = theme.variables;
    const { baseLuminosity } = colorsCommons;
    const _bgColor = bgColor(color, context);
    const $bgColor = color ? Color(_bgColor) : Color('#FFF');

    if ($bgColor.luminosity() > baseLuminosity) {
        return $bgColor.mix(Color('#000'), .03);
    } else {
        return $bgColor.mix(Color('#000'), .05);
    }

}

export default stripeColor;