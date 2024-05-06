import { createSlice } from '@reduxjs/toolkit';

export const jobsSlice = createSlice({
  name: 'jobs',
  initialState: {
    fixedJobs: [],
    jobs: [],
    offset: 0,
    loading: false,
  },
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload;
    },
    setFixedJobs: (state, action) => {
      state.fixedJobs = action.payload;
    },
    setOffset: (state, action) => {
      state.offset = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  }
});

export const { setJobs, setFixedJobs, setOffset, setLoading } = jobsSlice.actions;

export const getAllJobs = () => {
  return async (dispatch, getState) => {
    const {jobs,fixedJobs, offset} = getState().jobs;
    try {
      dispatch(setLoading(true));
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const body = JSON.stringify({
        "limit": 10,
        "offset": offset,
      });
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body
      };
      fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          dispatch(setJobs([...jobs, ...result?.jdList]));
          dispatch(setFixedJobs([...fixedJobs, ...result?.jdList]));
          dispatch(setOffset(offset + 10));
          dispatch(setLoading(false));
        })
        .catch((error) => {
          console.error(error);
        });

    } catch (e) {
      console.log(e);
    }
  }
};

export default jobsSlice.reducer;