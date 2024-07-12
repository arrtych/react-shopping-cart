import { Box, InputBase, Paper, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";

export interface SearchProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClose: () => void;
  value: string;
}

const Search: React.FC<SearchProps> = (props: SearchProps) => {
  const { value, onChange, onClose } = { ...props };
  return (
    <Paper component="form" sx={{ display: "flex", alignItems: "center" }}>
      <IconButton type="button" aria-label="search">
        <SearchIcon />
      </IconButton>

      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search products..."
        inputProps={{ "aria-label": "search items" }}
        value={value}
        onChange={onChange}
      />

      {value != "" && (
        <IconButton aria-label="clear search" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      )}
    </Paper>
  );
};

export default Search;
