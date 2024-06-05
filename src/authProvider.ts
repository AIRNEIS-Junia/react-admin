import { AuthProvider } from "react-admin";

/**
 * This authProvider is only for test purposes. Don't use it in production.
 */
export const authProvider: AuthProvider = {
  login: async ({username, password}) => {
    const request = new Request('http://localhost:3001/auth/login', {
      method: 'POST',
      body: JSON.stringify({email: username, password}),
      headers: new Headers({'Content-Type': 'application/json'}),
    });
    try {
      const response = await fetch(request);
      if (response.status < 200 || response.status >= 300) {
        throw new Error(response.statusText);
      }
      const auth = await response.json();
      localStorage.setItem('accessToken', auth.accessToken);
      localStorage.setItem('refreshToken', auth.refreshToken);
      return Promise.resolve();
    } catch(e) {
      console.log(e);
      throw new Error('Network error');
    }
  },
  logout: () => {
    localStorage.removeItem("accessToken");
    return Promise.resolve();
  },
  checkError: () => Promise.resolve(),
  checkAuth: () =>
    localStorage.getItem("accessToken") ? Promise.resolve() : Promise.reject(),
  getPermissions: () => {
    return Promise.resolve();
  },
  getIdentity: () => {
    const persistedUser = localStorage.getItem("user");
    const user = persistedUser ? JSON.parse(persistedUser) : null;

    return Promise.resolve(user);
  },
};

export default authProvider;
