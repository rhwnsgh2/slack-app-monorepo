import { IUserId } from "../user/user-id.interface";

export interface IGroup {
    id: string;
    members: IUserId[];
  }
 