export const User = {
  createUser: (id, name) => {
    return { id, name, status: "active" };
  },

  updateUser: (id, user) => {
    return { ...user, id };
  },
};
