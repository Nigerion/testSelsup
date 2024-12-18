import { useState } from "react";
import { IModel, IParam } from "./type";
import classes from "./classes.module.scss";

export const ParamEditor: React.FC<{
  params: IParam[];
  onUpdate: (model: IModel) => void;
}> = ({ params, onUpdate }) => {
  const [values, setValues] = useState<Record<string, string>>(
    params.reduce((acc, param) => {
      acc[param.id] = param.value;
      return acc;
    }, {} as Record<string, string>)
  );

  const handleChange = (id: string, value: string) => {
    setValues((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedModel: IModel = {
      params: params.map((param) => ({
        ...param,
        value: values[param.id],
      })),
    };
    onUpdate(updatedModel);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.wrapper}>
        <div className={classes.wrapperText}>
          <h4>{params[0].label}</h4>
          <h4>{params[1].label}</h4>
        </div>
        <div>
          {params.map((param) => (
            <div key={param.id}>
              <input
                type="text"
                value={values[param.id]}
                onChange={(e) => handleChange(param.id, e.target.value)}
                className={classes.input}
              />
            </div>
          ))}
        </div>
      </div>
      <button type="submit" className={classes.button}>
        Сохранить
      </button>
    </form>
  );
};
