// Utils
import alignUtils from './properties/align';
import columnUtils from './properties/column';
import flexUtils from './properties/flex';
import fontUtils from './properties/font';
import growUtils from './properties/grow';
import hiddenUtils from './properties/hidden';
import marginUtils from './properties/margin';
import paddingUtils from './properties/padding';
import rowUtils from './properties/row';
import sizeUtils from './properties/size';

const UtilsStyles = params => {
    const { props } = params;
    const { fl, flex, ov, overflow } = props;

    return `
        ${alignUtils(params)}
        ${columnUtils(props)}
        ${flexUtils(params)}
        ${fontUtils(params)}
        ${growUtils(params)}
        ${hiddenUtils(params)}
        ${marginUtils(params)}
        ${paddingUtils(params)}
        ${rowUtils(props)}
        ${sizeUtils(params)}

        ${props.block ? 'display: block!important;' : ''}
        
        > [data-fab-component] {
            ${!!fl || !!flex ? `display: flex;` : ''}
            ${!!fl || !!flex ? `flex-direction: row;` : ''}
            ${!!ov || !!overflow ? `overflow: ${ov || overflow};` : ''}
        }
        
    `;
}


export default UtilsStyles;