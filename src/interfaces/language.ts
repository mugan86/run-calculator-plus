/**
 * Interface to manage different conversions
 */
export interface ILanguage{
    //Language code, for example 'eu' in basque language
    code: string;
    //Show language text label. For exmple in basque show "Euskara"
    label: string;
    //To manage if language publish
    available?: Boolean
}