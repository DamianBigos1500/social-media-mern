import { PrismaClient, User as PrismaUser } from '@prisma/client';
import bcrypt from 'bcrypt';
import { sendEmail } from '../libs/sendEmail';
import path from 'path';
import { readHTMLFile } from '../utils/validators/readFile';
import { generateToken } from '../utils/generateToken';

// type Signup = {
//   first_name: String;
//   last_name: String;
//   email: String;
//   provider: String;
//   password: String;
// };

class User {
  constructor(
    private readonly prismaUser: PrismaClient['user'],
    private user?: PrismaUser | null
  ) {}

  // Signup a new user
  async signup(data: any): Promise<PrismaUser> {
    const hashedPassword = this.hashPassword(data.password);
    // console.log(hashedPassword);

    const newUser = await this.prismaUser.create({
      data: { ...data, password: hashedPassword },
    });
    this.user = newUser;

    return newUser;
  }

  hashPassword(password: string) {
    const salt = bcrypt.genSaltSync(12);
    return bcrypt.hashSync(password, salt);
  }

  sendVerificationEmail = async () => {
    if (!this.user) return;

    console.log(this.user.id);
    const htmlContent = await readHTMLFile(
      path.join(__dirname, '..', 'pages', 'emails', 'verificationAccount.html'),
      {
        user: this.user,
        token: generateToken({ id: this.user.id }, '2h'),
        frontendURL: process.env.CLIENT_URL,
      }
    );

    sendEmail('rokipo1716@pixiil.com', 'Verification Email', htmlContent);
  };
}

export default User;
