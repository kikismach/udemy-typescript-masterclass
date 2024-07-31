export declare global {
  interface User {
    id: number;
    username: string;
  }

  interface AuthService {
    currentUser: User | null;
    login(username: string, password: string): boolean;
    isLoggedIn(): boolean;
  }

  var AuthService: AuthService;
}
