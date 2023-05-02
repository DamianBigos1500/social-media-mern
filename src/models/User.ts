import { PrismaClient, User as PrismaUser } from '@prisma/client';
import bcrypt from 'bcrypt';
import { sendEmail } from '../libs/sendEmail';
import path from 'path';
import { readHTMLFile } from '../utils/validators/readFile';

type Signup = {
  first_name: String;
  last_name: String;
  email: String;
  provider: String;
  password: String;
};

class User {
  constructor(private readonly prismaUser: PrismaClient['user']) {}

  // Signup a new user
  async signup(data: any): Promise<PrismaUser> {
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

  sendVerificationEmail = async () => {
    console.log(this);

    const htmlContent = await readHTMLFile(
      path.join(__dirname, '..', 'pages', 'emails', 'verificationAccount.html'),
      { user: 'Damian' }
    );

    sendEmail('fococi2267@saeoil.com', 'Verification Email', htmlContent);
  };
}

export default User;
