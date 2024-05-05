import { createSlice } from '@reduxjs/toolkit';

export const jobsSlice = createSlice({
  name: 'jobs',
  initialState: {
    jobs: null
  },
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload;
    },
  }
});

export const { setJobs } = jobsSlice.actions;

export const getAllJobs = () => {
  return async (dispatch) => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const body = JSON.stringify({
        "limit": 10,
        "offset": 9
      });
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body
      };
      fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log('result', result);
          dispatch(setJobs(result?.jdList));
        })
        .catch((error) => console.error(error));

    } catch (e) {
      console.log(e);
    }
  }
}

export default jobsSlice.reducer;