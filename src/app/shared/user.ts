import { Group } from './group';
export interface User {
    id: number;
    password: string;
    token: string;
    group: Group;
}