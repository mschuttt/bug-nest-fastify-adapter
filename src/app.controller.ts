import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ControllerGuard } from './controller.guard';
import { MethodGuard } from './method.guard';

@UseGuards(ControllerGuard)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(MethodGuard)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
