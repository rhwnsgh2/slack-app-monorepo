import { IUserId } from "./user-id.interface";

export interface IGroup {
    id: string;
    members: IUserId[];
  }
 