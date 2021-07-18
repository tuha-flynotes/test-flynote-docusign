export interface IItem {
  name: string;
  type: string;
  displayName: string;
  labelName: string;
  required: boolean;
}

export interface ILabel extends IItem {
  x: number;
  y: number;
  id: number;
  value?: string;
  page?: number;
}
