import {
  AbstractControl,
  ControlContainer,
  ValidationErrors,
} from '@angular/forms';

export class LoginValidators {
  static noSpaces(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return { withoutSpaces: true };
    }
    return null;
  }

  static beUnique(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if ((control.value as string) == 'kvdsmr@gmail.com') {
          resolve({ beUnique: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }
}
