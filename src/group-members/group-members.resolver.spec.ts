import { Test, TestingModule } from '@nestjs/testing';
import { GroupMembersResolver } from './group-members.resolver';
import { GroupMembersService } from './group-members.service';

describe('GroupMembersResolver', () => {
  let resolver: GroupMembersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroupMembersResolver, GroupMembersService],
    }).compile();

    resolver = module.get<GroupMembersResolver>(GroupMembersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
