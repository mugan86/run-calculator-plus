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
        if (JSON.parse(localStorage.getItem(localStorageValues['userPreferences']))) {
            this.userPreferences = JSON.parse(localStorage.getItem(localStorageValues['userPreferences']));
        }
        else{
            this.defaultLanguage = "es";
            this.themeSelect = themesListSelection[3];
            this.userPreferences = {
                            "langCode": this.defaultLanguage, 
                            "defaultTheme": this.themeSelect,
                            "welcomeComplete" : false,
                            "unitOfLength": "km"
                          };
        }
    }

    /******************************************************************************************
     * Function to return save user preferences or if not exist, return default preferences
     ******************************************************************************************/
    getUserPreferences()
    {
        if (JSON.parse(localStorage.getItem(localStorageValues['userPreferences']))) {
            return JSON.parse(localStorage.getItem(localStorageValues['userPreferences']));
        }
        return  {   "langCode": this.defaultLanguage, 
                    "defaultTheme": this.themeSelect,
                    "welcomeComplete" : false,
                    "unitOfLength": "km"
                };
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
        if (this.userPreferences.welcomeComplete === null) return false;
        return this.userPreferences.welcomeComplete;
    }

    setLanguage()
    {
        
    }

    updateUnitLength(option, unitLenghts)
    {
        if (option == 0) unitLenghts[1] = !unitLenghts[0];
        else unitLenghts[0] = !unitLenghts[1];

        if (unitLenghts[0]) this.userPreferences.unitOfLength = 'km';
        else this.userPreferences.unitOfLength = 'mile';
        this.updatePreferences(this.userPreferences);
    }

    updatePreferences(preferences)
    {
        console.warn("Update preferences: " , preferences);
        localStorage.setItem(localStorageValues['userPreferences'], JSON.stringify(preferences));
    }
}
