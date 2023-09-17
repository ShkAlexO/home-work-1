import { useState, useEffect } from "react";
import "./todoFilter.sass";

import InputLabel from "@mui/material/InputLabel";

import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

import {
  TODO_ALL,
  FILTER_TODO_ALL,
  RATING_UP,
  FILTER_RATING_UP,
  RATING_DOWN,
  FILTER_RATING_DOWN,
} from "../../../../constans/constans";

function TodoFilter({ liftingFilter }) {
  const [filter, setFilter] = useState(TODO_ALL);

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => liftingFilter(filter), [filter]);

  return (
    <FormControl fullWidth variant="filled" className="todoFilter">
      <InputLabel variant="standard" htmlFor="selectTodoFilter">
        Filter todos:
      </InputLabel>
      <NativeSelect
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        name="selectTodoFilter"
        defaultValue={filter}
        onChange={handleFilter}
        inputProps={{
          name: "Filter todos:",
          id: "selectTodoFilter",
        }}>
        <option value={FILTER_TODO_ALL}>{TODO_ALL}</option>
        <option value={FILTER_RATING_UP}>{RATING_UP}</option>
        <option value={FILTER_RATING_DOWN}>{RATING_DOWN}</option>
      </NativeSelect>
    </FormControl>
  );
}

export default TodoFilter;
