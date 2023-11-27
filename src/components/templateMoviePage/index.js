import React, { lazy, Suspense } from "react";
import MovieHeader from "../headerMovie";
import Grid from "@mui/material/Grid";
import { getMovieImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'

const LazyImageList = lazy(() => import("@mui/material/ImageList"));
const LazyImageListItem = lazy(() => import("@mui/material/ImageListItem"));

const TemplateMoviePage = ({ movie, children }) => {
  const { data , error, isLoading, isError } = useQuery(
    ["images", { id: movie.id }],
    getMovieImages
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const images = data.posters;

  return (
    <>
      <MovieHeader movie={movie} />

      <Grid container spacing={5} sx={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}>

            <Suspense fallback={<div>Loading...</div>}>
              <LazyImageList cols={1}>
                {images.map((image) => (
                  <Suspense fallback={<div>Loading...</div>} key={image.file_path}>
                    <LazyImageListItem key={image.file_path} cols={1}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                        alt={image.poster_path}
                      />
                    </LazyImageListItem>
                  </Suspense>
                ))}
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

export default TemplateMoviePage;
