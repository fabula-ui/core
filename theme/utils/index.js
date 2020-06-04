// Utils
import alignUtils from './align';
import columnUtils from './column';
import flexUtils from './flex';
import growUtils from './grow';
import marginUtils from './margin';
import paddingUtils from './padding';
import rowUtils from './row';
import sizeUtils from './size';

const UtilsStyles = params => {
    const { props } = params;
    const { ov, overflow } = props;

    return `
        ${alignUtils(params)}
        ${columnUtils(props)}
        ${flexUtils(params)}
        ${growUtils(props)}
        ${marginUtils(params)}
        ${paddingUtils(props)}
        ${rowUtils(props)}
        ${sizeUtils(params)}
        
        [data-fab-component] {
            ${!!ov || !!overflow ? `overflow: ${ov || overflow};` : ''}
        }
        
    `;
}


export default UtilsStyles;