import { NextApiRequest, NextApiResponse } from "next"

import { Rockets } from "@/lib/types"

const HOST = process.env.HOST

type ResponseError = {
  message: string
}

export default function rocketsHandler() {
  return async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Rockets[] | ResponseError>
  ) {
    const { id } = req.query
    const response = await fetch(`${HOST}/v4/rockets/${id}`)
    const rockets = await response.json()
    return res.status(200).json(rockets)
  }
}
