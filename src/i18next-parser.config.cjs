module.exports = {
  defaultNamespace: 'translation',
  lexers: {
    js: ['JsxLexer'],
    default: ['JavascriptLexer'],
  },
  locales: ['en', 'ru'],
  output: 'src/locales/$LOCALE/$NAMESPACE.json',
  input: ['*/*.ts','*/*.tsx', '*/*/*.tsx','*/*/*/*.tsx', '*/*/*/*/*.tsx'],
};
