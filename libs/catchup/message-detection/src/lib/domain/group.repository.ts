import { IGroup } from "./group.interface";

export interface GroupRepository {
    getGroupMembers(groupId: string): Promise<Pick<IGroup,"members">>;
  }