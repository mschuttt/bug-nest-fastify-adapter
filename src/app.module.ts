import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestMiddleware } from './test.middleware';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './test.filter';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [{
    provide: APP_FILTER,
    useClass: HttpExceptionFilter,
  },
  AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TestMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
