import { IPackage } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const packagesApi = createApi({
  reducerPath: "packagesApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (build) => ({
    getPackages: build.query<IPackage[], void>({
      query: () => ``,
    }),
  }),
});

export const { useGetPackagesQuery } = packagesApi;
