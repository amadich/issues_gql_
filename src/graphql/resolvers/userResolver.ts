import { User } from "../../models/userModel";

export const userResolvers = {
  Query: {
    getUser: async (_: any, { id }: { id: string }) => {
      return await User.findByPk(id);
    },
    getUsers: async () => {
      return await User.findAll();
    },
  },
  Mutation: {
    createUser: async (_: any, { name, email }: { name: string; email: string }) => {
      return await User.create({ name, email });
    },
    updateUser: async (_: any, { id, name, email }: { id: string; name?: string; email?: string }) => {
      const user = await User.findByPk(id);
      if (!user) throw new Error("User not found");
      if (name) user.name = name;
      if (email) user.email = email;
      await user.save();
      return user;
    },
    deleteUser: async (_: any, { id }: { id: string }) => {
      const user = await User.findByPk(id);
      if (!user) return false;
      await user.destroy();
      return true;
    },
  },
};
