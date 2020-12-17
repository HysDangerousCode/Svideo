import { Episode } from '@libs/db/models/episodes.model';
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';

@Crud({
    model: Episode
})
@Controller('episodes')
@ApiTags('课时')
export class EpisodesController {
    constructor(@InjectModel(Episode) private readonly model: ReturnModelType<typeof Episode>) { }
    @Get('option')
    option() {
        return {
            title: "课时管理",
            column: [
                {
                    prop: "name",
                    label: "课时名称"
                }
            ]
        }
    }
}
