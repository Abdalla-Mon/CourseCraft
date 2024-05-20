import { FormControl, FormHelperText, InputLabel, Select } from "@mui/material";
import { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";

export default function SelectField({
  select,
  variant = "filled",
  register,
  errors,
  getSelectData,
  loading,
  setLoading,
}) {
  const selectData = select.data;
  const [options, setOptions] = useState([]);
  useEffect(() => {
    if (getSelectData) {
      const getOptionsFunction = getSelectData[selectData.id];

      async function getOptions() {
        const options = await getOptionsFunction();
        setOptions(options);
        setLoading({ ...loading, [selectData.id]: false });
      }

      getOptions();
    } else {
      setOptions(selectData.options);
    }
  }, []);
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <FormControl
      variant={variant}
      sx={select.sx ? select.sx : { minWidth: 120 }}
      error={Boolean(errors[selectData.id])}
      className={"mb-3"}
    >
      <InputLabel id={selectData.label}>{selectData.label}</InputLabel>
      <Select
        {...register(selectData.id, select.pattern)}
        {...selectData}
        value={value}
        onChange={handleChange}
      >
        {loading[selectData.id] && <MenuItem>Loading...</MenuItem>}
        {!loading[selectData.id] &&
          options.map((item) => {
            return (
              <MenuItem value={item.value} key={item.label}>
                {item.label}
              </MenuItem>
            );
          })}
      </Select>
      <FormHelperText>{errors[selectData.id]?.message}</FormHelperText>
    </FormControl>
  );
}
