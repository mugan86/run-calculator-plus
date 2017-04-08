import { ISettings } from './../interfaces/settings';
import { localStorageValues } from './../constants/local-storage';

export class SettingsService {

    ourPreferences: ISettings;
    constructor() { 
        this.ourPreferences = JSON.parse(localStorage.getItem(localStorageValues['userPreferences']))
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
        return this.ourPreferences.welcomeComplete;
    }
}
