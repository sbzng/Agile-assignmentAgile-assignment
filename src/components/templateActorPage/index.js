import React, { lazy, Suspense } from "react";
import ActorHeader from "../headerActor";
import Grid from "@mui/material/Grid";

const LazyImageList = lazy(() => import("@mui/material/ImageList"));
const LazyImageListItem = lazy(() => import("@mui/material/ImageListItem"));

const TemplateActorPage = ({ actor, children }) => {
  return (
    <>
      <ActorHeader actor={actor} />

      <Grid container spacing={5} sx={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}>

            <Suspense fallback={<div>Loading...</div>}>
              <LazyImageList cols={1}>
                <Suspense fallback={<div>Loading...</div>}>
                  <LazyImageListItem key={actor.profile_path} cols={1}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                      alt={actor.poster_path}
                    />
                  </LazyImageListItem>
                </Suspense>
              </LazyImageList>
            </Suspense>
          </div>
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateActorPage;
