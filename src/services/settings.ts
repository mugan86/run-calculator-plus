import { ISettings } from './../interfaces/settings';
import { ITheme } from './../interfaces/theme';
import { ILanguage } from './../interfaces/language';
import { localStorageValues } from './../constants/local-storage';

export class SettingsService {

    ourPreferences: ISettings;

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
            this.ourPreferences = JSON.parse(localStorage.getItem(localStorageValues['userPreferences']));
        }
        else{
            this.ourPreferences = {
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
        return this.ourPreferences.defaultTheme;
    }

    getSelectLanguage()
    {
        return this.ourPreferences.langCode;
    }

    getSelectUnitLength()
    {
        return this.ourPreferences.unitOfLength;
    }

    isWelcomeComplete()
    {
        if (this.ourPreferences.welcomeComplete === null) return false;
        return this.ourPreferences.welcomeComplete;
    }

    updatePreferences(preferences)
    {
        console.warn("Update preferences: " , preferences);
        localStorage.setItem(localStorageValues['userPreferences'], JSON.stringify(preferences));
    }
}
