import { Injectable } from '@nestjs/common';
import { CreateDatumInput } from './dto/create-datum.input';
import { UpdateDatumInput } from './dto/update-datum.input';
import { Datum } from './entities/datum.entity';

@Injectable()
export class DataService {
  create(createDatumInput: CreateDatumInput) {
    return 'This action adds a new datum';
  }

  findAll() {
    const a =new Datum()
    a.id=88
    return [a];
  }

  findOne(id: number) {
    return `This action returns a #${id} datum`;
  }

  update(id: number, updateDatumInput: UpdateDatumInput) {
    return `This action updates a #${id} datum`;
  }

  remove(id: number) {
    return `This action removes a #${id} datum`;
  }
}
