import {Control} from "@angular/common";
interface ValidationResult {
    [key:string]:boolean;
}
export default class HeroNameValidator {

    static startsWithNumber(control:Control):ValidationResult {

        if (control.value !="" && !isNaN(control.value.charAt(0))
    )
        {
            return { "startsWithNumber":
            true
        }
            ;
        }

        return null;
    }
}