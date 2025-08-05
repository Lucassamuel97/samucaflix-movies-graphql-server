import fetch from "node-fetch";

const API_URL = "https://codeflix-api.vercel.app";

const resolvers = {
    Query: {
        movies: async () => {
            const response = await fetch(`${API_URL}/movies`);
            const data = await response.json();
            return data;
        },
        movie: async (_, { id }) => {
            const response = await fetch(`${API_URL}/movies/${id}`);
            const data = await response.json();
            return data;
        },
        featuredMovies: async () => {
            const response = await fetch(`${API_URL}/movies/featured`);
            const data = await response.json();
            return data;
        },
        moviesByGenre: async (_, { genre, limit }) => {
            let url = new URL(`${API_URL}/movies`);

            url.searchParams.append("genre", genre);

            if (limit) {
                url.searchParams.append("limit", limit);
            }

            const response = await fetch(url.toString());

            if (!response.ok) {
                throw new Error(`Failed to fetch movies: ${response.statusText}`);
            }

            const data = await response.json();
            return data;
        },
    },
};

export default resolvers;