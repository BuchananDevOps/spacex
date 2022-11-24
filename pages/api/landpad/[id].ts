import { NextApiRequest, NextApiResponse } from "next"

import { Landpads } from "@/lib/types"

const HOST = process.env.HOST

type ResponseError = {
  message: string
}

export default function landpadHandler() {
  return async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Landpads[] | ResponseError>
  ) {
    const { id } = req.query
    const response = await fetch(`${HOST}/v4/landpads/${id}`)
    const landpads = await response.json()
    return res.status(200).json(landpads)
  }
}
