// twitter.strategy.ts
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-twitter';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TwitterStrategy extends PassportStrategy(Strategy, 'twitter') {
  constructor(private configService: ConfigService) {
    super({
      consumerKey: configService.get('TWITTER_CONSUMER_KEY'),
      consumerSecret: configService.get('TWITTER_CONSUMER_SECRET'),
      callbackURL: configService.get('TWITTER_CALLBACK_URL'),
      passReqToCallback: true,
      includeEmail: true,
    });
  }

  async validate(
    req: any,
    token: string,
    tokenSecret: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const { emails, id, displayName } = profile;
    const user = {
      twitterId: id,
      displayName,
      email: emails ? emails[0].value : null,
    };
    done(null, user);
  }
}
