import "reflect-metadata";

// Define a decorator to specify accessible roles
// We want this decorator to set meta-data for an object the roles metadata
function Role(...roles: string[]) {
  return function (target: any, propertyKey: string) {
    Reflect.set(target, propertyKey + "_roles", roles);
  };
}

// Declare this class first
class UserController {
  // Delete user can only be performed by admin
  @Role("admin")
  deleteUser(userId: number) {
    console.log(`Deleting user ${userId}`);
  }

  // Update user can be performed both by admin as well as user
  @Role("admin", "user")
  updateUser(userId: number) {
    console.log(`Updating user ${userId}`);
  }
}

// Accessing the MetaData
function canExecuteMethod(obj: any, methodName: string, userRole: string): boolean {
  const roles = Reflect.get(obj, methodName + "_roles") || [];
  console.log(Object.getOwnPropertyNames(obj));
  return roles.includes(userRole);
}

// Create an instance of UserController
const userController = new UserController();

// Simulate method access check
console.log(canExecuteMethod(userController, "deleteUser", "admin")); // true
console.log(canExecuteMethod(userController, "updateUser", "guest")); // false
