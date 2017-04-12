import { ISettings } from './../interfaces/settings';
import { ITheme } from './../interfaces/theme';
import { ILanguage } from './../interfaces/language';
import { localStorageValues } from './../constants/local-storage';
import { themesListSelection } from './../constants/config';

export class SettingsService {

    //Languages
    languages: ILanguage[];
    language: string;

    unitLenghts: Boolean[];

    themeSelect: ITheme;
    themeListSelectValues: ITheme[];

    userPreferences: ISettings;
    defaultLanguage: string;
    constructor() { 
        this.userPreferences = this.getUserPreferences();
    }

    /******************************************************************************************
     * Function to return save user preferences or if not exist, return default preferences
     ******************************************************************************************/
    getUserPreferences()
    {
        if (JSON.parse(localStorage.getItem(localStorageValues['userPreferences']))) {
            return JSON.parse(localStorage.getItem(localStorageValues['userPreferences']));
        }
        this.defaultLanguage = "es";
        this.themeSelect = themesListSelection[3];
        //Asign user default preferences settings to start
        this.userPreferences = {
                                "langCode": this.defaultLanguage, 
                                "defaultTheme": this.themeSelect,
                                "welcomeComplete" : false,
                                "unitOfLength": "km"
                            };
        this.updatePreferences(this.userPreferences);
        return  this.userPreferences;
    }

    getTheme()
    {
        if (this.userPreferences.defaultTheme == null || this.userPreferences.defaultTheme === undefined) return themesListSelection[3];
        return this.userPreferences.defaultTheme;
    }

    getSelectLanguage()
    {
        if (this.userPreferences.langCode === null || this.userPreferences.langCode === undefined || this.userPreferences.langCode === "") return "es";
        return this.userPreferences.langCode;
    }

    getSelectUnitLength()
    {
        if (this.userPreferences.unitOfLength === null || this.userPreferences.unitOfLength === undefined || this.userPreferences.unitOfLength === "") return "km";
        return this.userPreferences.unitOfLength;
    }

    getUnitLengthValuesToManageInLayout()
    {
        //Unit of length options (get correct value from preferences)
        if (this.userPreferences.unitOfLength === 'km') return [true, false];
        return [false, true];
    }

    isWelcomeComplete()
    {
        if (this.userPreferences.welcomeComplete === null || this.userPreferences.welcomeComplete === undefined) return false;
        return this.userPreferences.welcomeComplete;
    }

    updateTheme(theme)
    {
        let foundTheme = false;
        //Find select color theme with color ID
        for (let i = 0; i < themesListSelection.length && !foundTheme; i++)
        {
            if (theme.id == themesListSelection[i].id) {
                this.userPreferences.defaultTheme = themesListSelection[i];
                foundTheme = true;
            }
        }
        this.updatePreferences(this.userPreferences);

        //Return to new select theme color id to change in layout
        return this.userPreferences.defaultTheme.id;
    }

    updateUnitLength(option, unitLenghts)
    {
        if (option == 0) unitLenghts[1] = !unitLenghts[0];
        else unitLenghts[0] = !unitLenghts[1];

        if (unitLenghts[0]) this.userPreferences.unitOfLength = 'km';
        else this.userPreferences.unitOfLength = 'mile';
        this.updatePreferences(this.userPreferences);
    }

    //Manage to select language updates. Return true if language change
    updateSelectLanguage(language)
    {
        if (language != this.userPreferences.langCode)
        {
            console.info("Change from " + this.userPreferences.langCode + " to " + language);
            this.userPreferences.langCode = language;
            this.updatePreferences(this.userPreferences);
            return true;
        }
        return false;
    }

    updatePreferences(preferences)
    {
        console.warn("Update preferences: " , preferences);
        localStorage.setItem(localStorageValues['userPreferences'], JSON.stringify(preferences));
    }
}
