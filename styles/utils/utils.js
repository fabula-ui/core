import alignUtils from './properties/align';
import displayUtils from './properties/display';
import flexUtils from './properties/flex';
import fontUtils from './properties/font';
import gridUtils from './properties/grid';
import marginUtils from './properties/margin';
import overflowUtils from './properties/overflow';
import paddingUtils from './properties/padding';
import sizeUtils from './properties/size';
import visibilityUtils from './properties/visibility';

const UtilsStyles = params => {
    const { props } = params;

    return `
        ${alignUtils(params)}
        ${displayUtils(props)}
        ${flexUtils(params)}
        ${fontUtils(params)}
        ${gridUtils(props)}
        ${marginUtils(params)}
        ${overflowUtils(props)}
        ${paddingUtils(params)}
        ${sizeUtils(params)}
        ${visibilityUtils(params)}
    `;
}


export default UtilsStyles;