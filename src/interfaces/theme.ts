/**
 * Interface to manage different themes
 */
export interface ITheme{
    //Theme id
    id: string;
    //Theme main color code
    code: string;
    //Show theme name.
    name: string;
    //Show theme description
    description?: string;
}