import { Injectable, NestMiddleware, ServiceUnavailableException } from '@nestjs/common'

@Injectable()
export class TestMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    throw new ServiceUnavailableException('Test');
    next();
  }
}
