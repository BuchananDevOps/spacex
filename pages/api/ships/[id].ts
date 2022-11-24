import { NextApiRequest, NextApiResponse } from "next"

import { Ships } from "@/lib/types"

const HOST = process.env.HOST

type ResponseError = {
  message: string
}

export default function landpadHandler() {
  return async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Ships[] | ResponseError>
  ) {
    const { id } = req.query
    const response = await fetch(`${HOST}/v4/ships/${id}`)
    const ships = await response.json()
    return res.status(200).json(ships)
  }
}
