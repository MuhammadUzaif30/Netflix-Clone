import axios from "axios";
import { ENV_VARS } from "../config/envVars.js";

export const fetchFromTMDB = async (url) => {
    console.log("TMDB KEY EXISTS:", !!ENV_VARS.TMDB_API_KEY);
    console.log("TMDB KEY LENGTH:", ENV_VARS.TMDB_API_KEY?.length);

    const options = {
        headers: {
            accept: "application/json",
            Authorization: "Bearer " + ENV_VARS.TMDB_API_KEY,
        },
    };

    const response = await axios.get(url, options);

    if (response.status !== 200) {
        throw new Error("Failed to fetch data from TMDB" + response.statusText);
    }

    return response.data;
};
