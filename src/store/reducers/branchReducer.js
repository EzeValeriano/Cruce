import axios from 'axios';
import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
// import { useToast } from '@chakra-ui/react';

export const createBranch = createAsyncThunk('CREATE_BRANCH', (newBranch) => {
  return axios
    .post('http://localhost:3001/api/Local', newBranch)
    .then((response) => {
      return response.data;
    });
});

const initialState = {
  allBranchs: [],
  singleBranch: [],
};

const branchReducer = createReducer(initialState, {
  [createBranch.fulfilled]: (state, action) => {
    // toast({
    //   title: 'Submitted!',
    //   status: 'success',
    //   duration: 3000,
    //   isClosable: true,
    // });
    return state;
  },
  [createBranch.pending]: (state, action) => {
    // mensaje
    return state;
  },
  [createBranch.rejected]: (state, action) => {
    // mensaje
    return state;
  },
});

export default branchReducer;
