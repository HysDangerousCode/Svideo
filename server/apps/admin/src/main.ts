import { NestFactory } from '@nestjs/core';
import { AdminModule } from './admin.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AdminModule);
  // 后端跨域配置
  app.enableCors();
  const options = new DocumentBuilder()
    .setTitle('Svideo后台管理API')
    .setDescription('供后台管理界面调用的服务端API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
  const port = 3000;
  await app.listen(port);
  console.log(`数据接口地址:http://localhost:${port}`);
  console.log(`接口文档地址:http://localhost:${port}/api-docs`);
}
bootstrap();
