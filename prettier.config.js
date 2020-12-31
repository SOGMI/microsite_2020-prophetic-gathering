module.exports = {
    tabWidth: 4,
    trailingComma: 'es5',
    semi: true,
    singleQuote: true,
    useTabs: false,
    endOfLine: 'auto',
    overrides: [
        {
            files: ['*.html'],
            options: {
                parser: 'go-template',
            },
        },
    ],
};
