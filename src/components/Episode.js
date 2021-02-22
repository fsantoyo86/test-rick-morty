import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEpisodesAccion, nextPageEpisodes, prevPageEpisodes, searchEpisodes} from "../redux/episodesDucks";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import image from "../images/rename.png";

/**
 * Episodes component with material-ui.
 */

function Episode(epi) {
  const [query, setQuery] = useState();
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    Media: {
      height: 200,
    },
    ul: {
      "& .MuiPaginationItem-root": {
        color: "#fff",
      },
    },
    Car: {
      background: "#4B5563",
      color: "#fff",
    },
    Actions: {
      background: "#374151",
      color: "#fff",
    },
    Links: {
      color: "#fff",
    }
  });

  const dispatch = useDispatch();
  const eps = useSelector((store) => store.episodes.array);
  const page = useSelector((store) => store.episodes.page);
  const classes = useStyles();

  useEffect(() => {
    FetchEps();
  }, []);

  const FetchEps = ()=>{
    dispatch(getEpisodesAccion());

  };

  const FetchNextPage = () => {
    dispatch(nextPageEpisodes());
  };

  const FetchPrevPage = () => {
    dispatch(prevPageEpisodes());
  };

  const FetchSearch = async () => {
    dispatch(searchEpisodes(query));
  };

  return (
    <div className="bg-emerald-500 py-3 px-4">
      <div className="flex w-full justify-center">
        <div className="flex lg:w-1/2 md:w-1/2 sm:w-2/3 w-2/3 rounded-full border-grey-light border p-0 bg-white my-5 mx-5">
          <input
            className="w-full ml-5 rounded mr-4 focus:outline-none"
            type="text"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            onClick={() => FetchSearch()}
            className="w-16 bg-blueGray-500 py-1 rounded-full m-0 hover:bg-gray-600 focus:outline-none"
          >
            <span className="flex justify-center items-center p-2 m-0">
              <svg
                className="w-4 text-white text-xl"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div className="pt-2 px-3 font-Indie grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 justify-items-center">
        {eps.map((epi) => (
          <div className="px-3 py-3">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.Media}
                  component="img"
                  alt="Contemplative Reptile"
                  height="72"
                  image={image}
                  title="Contemplative Reptile"
                />
                <CardContent className={classes.Car}>
                  <Typography gutterBottom variant="h6" component="h2">
                    Episode: {epi.name}
                  </Typography>
                  <Typography gutterBottom variant="h7" component="h2">
                    {epi.air_date}
                  </Typography>
                  <Typography gutterBottom variant="h7" component="h2">
                    {epi.episode}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.Actions}>
                <Button className={classes.Links} size="small" color="secondary">
                  Share
                </Button>
                <Button className={classes.Links} size="small" color="secondary">
                  Learn More ...
                </Button>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>
      <div className="flex justify-center py-3 text-amber-300">
        <div
          className="flex grid grid-cols-2 hover:text-amber-400 cursor-pointer items-center text-2xl font-Indie px-3 py-1"
          onClick={() => {
            FetchPrevPage();
            window.scrollTo(0, 0);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
          Prev
        </div>
        <div className="flex items-center">
          <div className="flex border-solid items-center justify-center rounded-full w-16 h-16 border-2 border-amber-300">
            <h1 className="text-4xl">{page}</h1>
          </div>
        </div>
        <div
          className="flex grid grid-cols-2 hover:text-amber-400 text-2xl font-Indie cursor-pointer items-center px-3 py-1"
          onClick={() => {
            FetchNextPage();
            window.scrollTo(0, 0);
          }}
        >
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
export default Episode;
