import { ITheme } from './theme';
/**
 * Interface to manage different conversions
 */
export interface ISettings{
    //Language code, for example 'eu' in basque language
    langCode: string;

    defaultTheme: ITheme;

    welcomeComplete: Boolean;

    unitOfLength: string;

}