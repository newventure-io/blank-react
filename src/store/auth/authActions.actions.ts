import * as Reflux from "Reflux";
import { IAuthActions } from "./authActions.interface";

export const AuthActions = Reflux.createActions([
  "logout",
  "setAccessToken",
]) as IAuthActions;
