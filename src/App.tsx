import React from "react";
import { ParamEditor } from "./component/ParamEditor/ParamEditor";
import { IModel, IParam } from "./component/ParamEditor/type";

const App: React.FC = () => {
  const initialParams: IParam[] = [
    { id: "name", label: "Назначение", value: "повседневное" },
    { id: "description", label: "Длина", value: "макси" },
  ];

  const handleUpdate = (model: IModel) => {
    console.log("Обновленная модель:", model);
  };

  return (
    <div>
      <h1>Редактирование товара</h1>
      <ParamEditor params={initialParams} onUpdate={handleUpdate} />
    </div>
  );
};
export default App;
