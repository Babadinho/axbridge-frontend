import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

import prisma from '@/libs/prismadb';

export async function POST(req: Request) {
  try {
    const { first_name, last_name, email, password } = (await req.json()) as {
      first_name: string;
      last_name: string;
      email: string;
      password: string;
    };

    if (!first_name || !last_name || !email || !password) {
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        first_name,
        last_name,
        hashedPassword,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Internal server error' });
  }
}
