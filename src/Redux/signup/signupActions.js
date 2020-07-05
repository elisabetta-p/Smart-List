export const SIGNUP = "SIGNUP";

/**
 * Esegue la chiamata API per registrare un utente al db.
 * @param {string} name nome dell'utente
 * @param {string} email email dell'utente
 * @param {string} username username dell'utente
 * @param {string} password password dell'utente
 */
export const signup = (name, email, username, password) => {
  /**
   * chiamate api per registrare l'utente
   * .then( (response) => {
   *   localStorage.setItem('token', response.data.token);
   *   localStorage.setItem('username', response.data.username)
   * })
   */
  localStorage.setItem("username", username);
};
