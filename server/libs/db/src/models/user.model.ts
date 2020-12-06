import { modelOptions, prop } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';

@modelOptions({
    schemaOptions: {
        timestamps: true,
    }
})
export class User {
    @ApiProperty({ description: '用户名', example: 'user1' })
    @prop()
    // 用户名
    username: string
    @ApiProperty({ description: '密码', example: 'password1' })
    @prop()
    // 密码
    password: string
}