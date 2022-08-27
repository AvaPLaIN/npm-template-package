import omit from "lodash/omit";
import React from "react";
import useForm from "../../../../../../hooks/use-form/useForm";
import { AddDatasetType } from "../../../../hooks/useChartData";

interface IAddDatasetProps {
  columnLabels: string[];
  addDataset: ({
    label,
    backgroundColor,
    stack,
    columnId,
  }: AddDatasetType) => void;
}

const AddDataset = ({ columnLabels, addDataset }: IAddDatasetProps) => {
  const { register, onSubmit } = useForm();

  const handleOnSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    const data = onSubmit(event) as AddDatasetType;
    addDataset(data);
  };

  return (
    <form onSubmit={handleOnSubmitForm}>
      <p>Add</p>
      <input {...register("label")} type="text" placeholder="label name" />
      <input {...register("backgroundColor")} type="color" />
      <select {...omit({ ...register("columnId", `${columnLabels[0]}`) })}>
        {columnLabels.map((columnLabel) => (
          <option key={columnLabel} value={columnLabel}>
            {columnLabel}
          </option>
        ))}
      </select>
      <input {...register("stack")} type="number" min={0} placeholder="Stack" />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddDataset;
