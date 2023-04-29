import { Prisma, PrismaClient, User } from '@prisma/client';
import bcrypt from 'bcrypt';

type Signup = {
  first_name: String;
  last_name: String;
  email: String;
  provider: String;
  password: String;
};

class Users {
  constructor(private readonly prismaUser: PrismaClient['user']) {}

  // Signup a new user
  async signup(data: any): Promise<User> {
    const hashedPassword = this.hashPassword(data.password);
    // console.log(hashedPassword);

    return this.prismaUser.create({
      data: { ...data, password: hashedPassword },
    });
  }

  hashPassword(password: string) {
    const salt = bcrypt.genSaltSync(12);
    return bcrypt.hashSync(password, salt);
  }
}

export default Users;
