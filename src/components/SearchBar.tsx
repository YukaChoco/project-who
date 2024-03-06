import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import type { TextFieldProps } from '@mui/material/TextField';
import { styled, alpha } from '@mui/material/styles';
import * as React from 'react';

interface SearchBarProps {
  value: string;
  onChange: TextFieldProps['onChange'];
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  width: '100%',
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  border: '1px solid #969696',
  borderRadius: '45px',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '80%',
      '&:focus': {
        width: '90%',
      },
    },
  },
}));

export default function SearchBar({ value = '', onChange = () => {} }: SearchBarProps) {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon
          sx={{
            color: '#969696',
          }}
        />
      </SearchIconWrapper>
      <StyledInputBase placeholder='検索' inputProps={{ 'aria-label': 'search' }} value={value} onChange={onChange} />
    </Search>
  );
}
