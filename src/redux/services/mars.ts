import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const marsApi = createApi({
  reducerPath: "marsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.nasa.gov/mars-photos/api/v1/rovers",
  }),
  tagTypes: ["Mars"],
  endpoints: (builder) => ({
    getRovers: builder.query<any, void>({
      query: () => ({
        url: "/",
        params: { api_key: import.meta.env.VITE_MARS_API_KEY },
      }),
      transformResponse: (data: any) => {
        return data.rovers.map((rover: any) => ({
          name: rover.name,
          landing_date: rover.landing_date,
          launch_date: rover.launch_date,
          status: rover.status,
          max_sol: rover.max_sol,
          total_photos: rover.total_photos,
          cameras: rover.cameras,
        }));
      },
      providesTags: ["Mars"],
    }),
    getPhotos: builder.query<any, any>({
      query: ({ rover, sol, camera }) => ({
        url: `/${rover}/photos`,
        params: { sol, camera, api_key: import.meta.env.VITE_MARS_API_KEY },
      }),
      transformResponse: (data: any) => {
        return data.photos.map((photo: any) => ({
          id: photo.id,
          img: photo.img_src,
          earth_date: photo.earth_date,
        }));
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetRoversQuery, useLazyGetPhotosQuery } = marsApi;
