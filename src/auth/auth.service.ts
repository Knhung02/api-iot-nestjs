import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from './dto/auth.dto';
import { User } from '@prisma/client';
import { hash, compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}
  register = async (userData: RegisterDto): Promise<any> => {
    //checking email has already used
    const user = await this.prismaService.user.findUnique({
      where: {
        email: userData.email,
      },
    });
    if (user) {
      throw new HttpException(
        { message: 'This email has been used.' },
        HttpStatus.BAD_REQUEST,
      );
    }

    //hash password and store to db

    const hashPassword = await hash(userData.password, 10);

    const res = await this.prismaService.user.create({
      data: { ...userData, password: hashPassword },
    });
    return {
      statusCode: HttpStatus.CREATED,
      data: res,
      message: 'Success',
      error: '',
    };
  };

  login = async (data: { email: string; password: string }): Promise<any> => {
    //check user is exist by email

    const user = await this.prismaService.user.findUnique({
      where: {
        email: data.email,
      },
    });
    if (!user) {
      throw new HttpException(
        { message: 'Account is not exist.' },
        HttpStatus.UNAUTHORIZED,
      );
    }

    //check password
    const verify = await compare(data.password, user.password);

    if (!verify) {
      throw new HttpException(
        { message: 'InCorrect Password.' },
        HttpStatus.UNAUTHORIZED,
      );
    }

    // generate access token and refresh token

    const payload = { id: user.id, name: user.name, email: user.email };
    const accessToken = await this.jwtService.signAsync(payload, {
      secret: process.env.ACCESS_TOKEN_KEY,
      expiresIn: '1h',
    });
    const refreshToken = await this.jwtService.signAsync(payload, {
      secret: process.env.REFRESH_TOKEN_KEY,
      expiresIn: '7d',
    });
    delete user.password;
    return {
      // data: user,
      accessToken,
      // refreshToken,
    };
    // return await this.signJwtToken(user.id, user.email);
  };
  // async signJwtToken(
  //   userId: number,
  //   email: string,
  // ): Promise<{ accessToken: string }> {
  //   const payload = {
  //     sub: userId,
  //     email,
  //   };
  //   const jwtString = await this.jwtService.signAsync(payload, {
  //     expiresIn: '10m',
  //     secret: this.configService.get('JWT_SECRET'),
  //   });
  //   return {
  //     accessToken: jwtString,
  //   };
  // }
}
