import { CurrentUserInterface } from 'src/app/shared/types/currentuser.interface';
import { BackendErrorsInterface } from './backendErrors.interface';

export interface AuthStateInterface {
  isSubmitting: boolean;
  currentUser: CurrentUserInterface | null;
  isLoggedIn: boolean | null;
  validationErrors: BackendErrorsInterface | null;
}
