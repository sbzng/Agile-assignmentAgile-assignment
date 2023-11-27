import React, { useState, lazy, Suspense } from "react";
import Header from "../headerMovieList";
import Grid from "@mui/material/Grid";

const LazyActorList = lazy(() => import("../actorList"));

function ActorListPageTemplate({ actors, name, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);

  let displayedActors = actors
    ?.filter((a) => {
      return a.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    ?.filter((a) => {
      return genreId > 0 ? a.genre_ids.includes(genreId) : true;
    });

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header name={name} />
      </Grid>
      <Grid item container spacing={5}>
        {/* 使用Suspense包裹按需加载的组件 */}
        <Suspense fallback={<div>Loading...</div>}>
          {/* 渲染按需加载的ActorList组件 */}
          <LazyActorList action={action} actors={displayedActors}></LazyActorList>
        </Suspense>
      </Grid>
    </Grid>
  );
}
export default ActorListPageTemplate;
