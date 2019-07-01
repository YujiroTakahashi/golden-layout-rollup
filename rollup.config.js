import alias       from 'rollup-plugin-alias'
import babel       from 'rollup-plugin-babel'
import browsersync from 'rollup-plugin-browsersync'
import commonjs    from 'rollup-plugin-commonjs'
import resolve     from 'rollup-plugin-node-resolve'
import { uglify }  from 'rollup-plugin-uglify'

let sync = () => {
    if (process.argv.indexOf('--watch') !== -1) {
        return browsersync({
            server: 'dist'
        })
    }
    return false
}
let minify = () => {
    if (process.argv.indexOf('--watch') === -1) {
        return uglify({
            compress: {
                drop_console: true
            }
        })
    }
    return false
}

export default {
    input: 'src/index.js',
    plugins: [
        alias({
            'golden-layout-config-item-default-config': 'node_modules/golden-layout/src/js/config/ItemDefaultConfig.js',
            'golden-layout-config-default-config': 'node_modules/golden-layout/src/js/config/defaultConfig.js',
            'golden-layout-container-item-container': 'node_modules/golden-layout/src/js/container/ItemContainer.js',
            'golden-layout-controls-browser-popout': 'node_modules/golden-layout/src/js/controls/BrowserPopout.js',
            'golden-layout-controls-drag-proxy': 'node_modules/golden-layout/src/js/controls/DragProxy.js',
            'golden-layout-controls-drag-source': 'node_modules/golden-layout/src/js/controls/DragSource.js',
            'golden-layout-controls-drop-target-indicator': 'node_modules/golden-layout/src/js/controls/DropTargetIndicator.js',
            'golden-layout-controls-header': 'node_modules/golden-layout/src/js/controls/Header.js',
            'golden-layout-controls-header-button': 'node_modules/golden-layout/src/js/controls/HeaderButton.js',
            'golden-layout-controls-splitter': 'node_modules/golden-layout/src/js/controls/Splitter.js',
            'golden-layout-controls-tab': 'node_modules/golden-layout/src/js/controls/Tab.js',
            'golden-layout-controls-transition-indicator': 'node_modules/golden-layout/src/js/controls/TransitionIndicator.js',
            'golden-layout-errors-configuration-error': 'node_modules/golden-layout/src/js/errors/ConfigurationError.js',
            'golden-layout-items-abstract-content-item': 'node_modules/golden-layout/src/js/items/AbstractContentItem.js',
            'golden-layout-items-component': 'node_modules/golden-layout/src/js/items/Component.js',
            'golden-layout-items-root': 'node_modules/golden-layout/src/js/items/Root.js',
            'golden-layout-items-row-or-column': 'node_modules/golden-layout/src/js/items/RowOrColumn.js',
            'golden-layout-items-stack': 'node_modules/golden-layout/src/js/items/Stack.js',
            'golden-layout-utils-bubbling-event': 'node_modules/golden-layout/src/js/utils/BubblingEvent.js',
            'golden-layout-utils-config-minifier': 'node_modules/golden-layout/src/js/utils/ConfigMinifier.js',
            'golden-layout-utils-drag-listener': 'node_modules/golden-layout/src/js/utils/DragListener.js',
            'golden-layout-utils-event-emitter': 'node_modules/golden-layout/src/js/utils/EventEmitter.js',
            'golden-layout-utils-event-hub': 'node_modules/golden-layout/src/js/utils/EventHub.js',
            'golden-layout-utils-react-component-handler': 'node_modules/golden-layout/src/js/utils/ReactComponentHandler.js',
            'golden-layout-utils-utils': 'node_modules/golden-layout/src/js/utils/utils.js',
            'golden-layout-layout-manager': 'node_modules/golden-layout/src/js/LayoutManager.js'
        }),
        sync(),
        resolve({
            jsnext: true
        }),
        commonjs(),
        babel(),
        minify()
    ],
    context: 'window',
    output: {
        file: (process.argv.indexOf('--watch') !== -1) ? 'dist/golden-layout.js':'dist/golden-layout.min.js' ,
        format: 'iife',
        moduleName: 'golden-layout'
    }
}
