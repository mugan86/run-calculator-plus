import { TranslateStaticLoader } from 'ng2-translate/ng2-translate';
export function createTranslateLoader(http) {
    return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}
//# sourceMappingURL=translate-loader.js.map