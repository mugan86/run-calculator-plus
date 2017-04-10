import { ISettings } from './../interfaces/settings';
import { ITheme } from './../interfaces/theme';
import { ILanguage } from './../interfaces/language';
import { localStorageValues } from './../constants/local-storage';
import { themesListSelection } from './../constants/config';

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
            this.defaultLanguage = "es";
            this.themeSelect = themesListSelection[3];
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
        if (this.ourPreferences.defaultTheme == null || this.ourPreferences.defaultTheme === undefined) return themesListSelection[3];
        return this.ourPreferences.defaultTheme;
    }

    getSelectLanguage()
    {
        if (this.ourPreferences.langCode === null || this.ourPreferences.langCode === undefined || this.ourPreferences.langCode === "") return "es";
        return this.ourPreferences.langCode;
    }

    getSelectUnitLength()
    {
        if (this.ourPreferences.unitOfLength === null || this.ourPreferences.unitOfLength === undefined || this.ourPreferences.unitOfLength === "") return "km";
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
