const StyleDictionary = require('style-dictionary');

StyleDictionary.registerFormat({
    name: 'scss/variables',
    formatter: function (dictionary, config) {
        return dictionary.allProperties.map((prop) => `$${prop.name}: ${prop.value};`).join('\n');
    }
});

const outputPath = 'src/assets/design-tokens/scss/';

module.exports = {
    source: ['src/design-tokens/tokens/**/*.json'],
    platforms: {
        scss: {
            transformGroup: 'scss',
            prefix: 'igaming',
            buildPath: outputPath,
            files: [
                {
                    destination: 'theme/color.scss',
                    format: 'scss/variables',
                    filter: (prop) => prop.attributes.category === 'color',
                },
                {
                    destination: 'components/button.scss',
                    format: 'scss/variables',
                    filter: (prop) => prop.attributes.category === 'button',
                },

            ]
        }
    }
}