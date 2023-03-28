import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { GetKpisResponse, GetProductsResponse } from "./types"


export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    reducerPath: "main",
    tagTypes: ["Kpis", "Products"],
    endpoints: (build) => ({
        getKpis: build.query<GetKpisResponse[], void>({
            query: () => "kpi/kpis",
            providesTags: ["Kpis"]
        }),
        getProduct: build.query<GetProductsResponse[], void>({
            query: () => "product/products",
            providesTags: ["Products"]
        })
    })
})

export const { useGetKpisQuery, useGetProductQuery } = api
