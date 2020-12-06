import { arrayProp, modelOptions, prop, Ref } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import { Episode } from './episodes.model';

@modelOptions({
    schemaOptions: {
        timestamps: true,
    }
})
export class Course {
    @ApiProperty({ description: '课程名称', example: 'name1' })
    @prop()
    // 课程名称
    name: string
    @ApiProperty({ description: '封面图', example: 'cover1' })
    @prop()
    // 封面图
    cover: string
    @arrayProp({ itemRef: 'Episode' })
    episodes: Ref<Episode>[]
}