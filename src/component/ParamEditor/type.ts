export interface IParam {
  id: string;
  label: string;
  value: string;
}

export interface IModel {
  params: IParam[];
}
export interface IProps {
  params: IParam[];
  onUpdate: (model: IModel) => void;
}
