import React from "react";

interface ISelectXAxisProps {
  columnLabels: string[];
  xAxisLabel: string;
  handleOnChangeXAxixLabel: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
}

const SelectXAxis = ({
  columnLabels,
  xAxisLabel,
  handleOnChangeXAxixLabel,
}: ISelectXAxisProps) => {
  return (
    <form>
      <p>Select X Axis Labels</p>
      <select value={xAxisLabel} onChange={handleOnChangeXAxixLabel}>
        {columnLabels.map((columnLabel) => (
          <option key={columnLabel} value={columnLabel}>
            {columnLabel}
          </option>
        ))}
      </select>
    </form>
  );
};

export default SelectXAxis;
