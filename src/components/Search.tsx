import { Box, InputBase, Paper, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import React, { useState } from "react";

export interface SearchProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const Search: React.FC<SearchProps> = (props: SearchProps) => {
  const { value, onChange } = { ...props };
  return (
    <Paper
      component="form"
      sx={{ display: "flex", alignItems: "center", width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="search"
        inputProps={{ "aria-label": "search google maps" }}
        value={value}
        onChange={onChange}
      />
      <IconButton type="button" aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default Search;
