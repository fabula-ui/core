// Utils
import alignUtils from './align';
import columnUtils from './column';
import flexUtils from './flex';
import growUtils from './grow';
import marginUtils from './margin';
import paddingUtils from './padding';
import rowUtils from './row';

const UtilsStyles = params => {
    const { props } = params;

    return `
        ${alignUtils(params)}
        ${columnUtils(props)}
        ${flexUtils(props)}
        ${growUtils(props)}
        ${marginUtils(params)}
        ${paddingUtils(props)}
        ${rowUtils(props)}
    `;
}

export default UtilsStyles;