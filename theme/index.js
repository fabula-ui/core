import { css } from 'emotion';

// Variables
import colors from './vars/colors';
import components from './vars/components';
import globals from './vars/globals';

// Component Styles
import AlertStyles from './styles/Alert';
import AvatarStyles from './styles/Avatar';
import BadgeStyles from './styles/Badge';
import ButtonStyles from './styles/Button';
import ButtonGroupStyles from './styles/ButtonGroup';
import CardStyles from './styles/Card';
import CardFooterStyles from './styles/CardFooter';
import CardImageStyles from './styles/CardImage';
import CardSectionStyles from './styles/CardSection';
import ColumnStyles from './styles/Column';
import DropdownStyles from './styles/Dropdown';
import InputStyles from './styles/Input';
import InputGroupStyles from './styles/InputGroup';
import ListStyles from './styles/List';
import RowStyles from './styles/Row';
import TabStyle from './styles/Tab';
import TabsStyles from './styles/Tabs';
import TagStyles from './styles/Tag';
import TagGroupStyles from './styles/TagGroup';
import TextStyles from './styles/Text';

// Utils
import alignUtils from './utils/align';
import columnUtils from './utils/column';
import flexUtils from './utils/flex';
import growUtils from './utils/grow';
import marginUtils from './utils/margin';
import paddingUtils from './utils/padding';
import rowUtils from './utils/row';

// Definitions

const DefaultTheme = {
    variables: {
        colors,
        components,
        globals,
    }
}

const Components = {
    alert: params => AlertStyles(params),
    avatar: params => AvatarStyles(params),
    badge: params => BadgeStyles(params),
    button: params => ButtonStyles(params),
    buttonGroup: params => ButtonGroupStyles(params),
    card: params => CardStyles(params),
    cardFooter: params => CardFooterStyles(params),
    cardImage: params => CardImageStyles(params),
    cardSection: params => CardSectionStyles(params),
    column: params => ColumnStyles(params),
    dropdown: params => DropdownStyles(params),
    input: params => InputStyles(params),
    inputGroup: params => InputGroupStyles(params),
    list: params => ListStyles(params),
    row: params => RowStyles(params),
    tab: params => TabStyle(params),
    tabs: params => TabsStyles(params),
    tag: params => TagStyles(params),
    tagGroup: params => TagGroupStyles(params),
    text: params => TextStyles(params)
};

const Utils = {
    align: props => alignUtils(props),
    column: props => columnUtils(props),
    flex: props => flexUtils(props),
    grow: props => growUtils(props),
    margin: props => marginUtils(props),
    padding: props => paddingUtils(props),
    row: props => rowUtils(props)
};

// Methods

const attachStyles = params => {
    const { framework, host, componentName, props } = params;
    const styles = Components[componentName]({framework, props});

    host.classList.add(css(styles));
}

const attachUtils = params => {
    const { framework, host, utilName, props } = params;
    let target;
    let utils;

    if (framework === 'angular' && host.tagName.toLowerCase().includes('fab-')) {
        target = host.children[0];
    } else {
        target = host;
    }

    utils = Utils[utilName](props);
    target.classList.add(css(utils));
}

const getComponentsVars = vars => {
    const concatVars = {};

    for (let componentName in vars.default) {
        if (vars.default.hasOwnProperty(componentName)) {
            concatVars[componentName] = {
                ...vars.default[componentName],
                ...vars.user[componentName]
            }
        }
    }

    return concatVars;
}

const setBaseTheme = userSettings => {
    const userVars = userSettings && userSettings.theme || {};
    const defaultVars = DefaultTheme.variables;

    window.__FABTheme = {
        ...DefaultTheme,
        variables: {
            colors: {
                ...defaultVars.colors,
                ...userVars.colors
            },
            components: getComponentsVars({
                default: defaultVars.components,
                user: userVars.components
            }),
            globals: {
                ...defaultVars.globals,
                ...userVars.globals
            }
        }
    }
}

export default DefaultTheme;
export {
    attachStyles,
    attachUtils,
    setBaseTheme
};