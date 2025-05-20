// Language preference utility to store/retrieve the user's language choice in a cookie
export const languageCookieUtil = {
  COOKIE_NAME: 'diebo-language-preference',
  
  // Set the language preference cookie
  setLanguagePreference: (language: string) => {
    // Cookie expiration set to 30 days
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 30);
    
    // Create cookie with secure settings
    document.cookie = `${languageCookieUtil.COOKIE_NAME}=${language}; expires=${expirationDate.toUTCString()}; path=/; SameSite=Strict`;
  },
  
  // Get the language preference from cookie
  getLanguagePreference: (): string | null => {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Check if this cookie is the language preference
      if (cookie.startsWith(`${languageCookieUtil.COOKIE_NAME}=`)) {
        return cookie.substring(languageCookieUtil.COOKIE_NAME.length + 1);
      }
    }
    return null;
  }
};
