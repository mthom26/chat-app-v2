import { auth } from './firebase';

export const doCreateUser = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password);
};

export const doSignIn = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};

export const doSignOut = () => {
  return auth.signOut();
};

export const doPasswordReset = (email) => {
  return auth.sendPasswordResetEmail(email);
};

export const doPasswordUpdate = (password) => {
  return auth.currentUser.updatePassword(password);
};