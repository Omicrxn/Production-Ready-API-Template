import passport from "passport";

export default function authenticate(passportOptions: any) {
  return passport.authenticate("jwt", passportOptions);
}
