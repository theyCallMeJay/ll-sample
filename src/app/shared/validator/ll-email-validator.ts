import { AbstractControl, ValidatorFn } from '@angular/forms';
import { User } from '../model/ll-user.model';

export function llEmailValidator(userList: User[]): ValidatorFn {
    return (control: AbstractControl): {[key: string]: boolean} => {
        const emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        const controlValue = control.value.trim();
        if (controlValue && !emailRegex.test(controlValue)) {
            return {invalid: true};
        }

        const emailArray = userList.map(data => data.email.trim());
        if (controlValue && !emailArray.includes(controlValue)) {
            return {nonexist: true};
        }
        return null;
    };
}
