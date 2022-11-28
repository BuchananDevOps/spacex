import { NextApiRequest, NextApiResponse } from "next"

import { Launches } from "@/lib/types"

const HOST = process.env.HOST

type ResponseError = {
  message: string
}

export default function launchesHandler() {
  return async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Launches[] | ResponseError>
  ) {
    const { id } = req.query
    const response = await fetch(`${HOST}/v4/launches/${id}`)
    const launches = await response.json()
    return res.status(200).json(launches)
  }
}
