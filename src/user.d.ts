export declare class User {
  greeting: string;
  user: { name: string; greeting: string };

  constructor(greeting: string);
  createUser(name: string): { name: string; greeting: string };
  showGreeting(): void;
}

export declare class AdminUser extends User {
  constructor();
  showGreeting(): void;
}
