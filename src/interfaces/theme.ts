/**
 * Interface to manage different slides
 */
export interface Theme{
    //Slide code
    code: string;
    //Show slide title.
    title: string;
    //Show slide description
    description: string;
    //Show slide icon (optional)
    icon?: string;
}