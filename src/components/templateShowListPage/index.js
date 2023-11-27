import React, { useState, lazy, Suspense } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterShowCard";
import Grid from "@mui/material/Grid";


const LazyShowList = lazy(() => import("../showList"));

function ShowListPageTemplate({ shows, name, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);

  let displayedShows = shows
    ?.filter((s) => {
      return s.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    ?.filter((s) => {
      return genreId > 0 ? s.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={name} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
          />
        </Grid>
        <Suspense fallback={<div>Loading...</div>}>

          <LazyShowList action={action} shows={displayedShows}></LazyShowList>
        </Suspense>
      </Grid>
    </Grid>
  );
}
export default ShowListPageTemplate;
