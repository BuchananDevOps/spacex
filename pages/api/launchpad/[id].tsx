import { NextApiRequest, NextApiResponse } from "next"

import { Launchpad } from "@/lib/types"

const HOST = process.env.HOST

type ResponseError = {
  message: string
}

export default function launchpadHandler() {
  return async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Launchpad[] | ResponseError>
  ) {
    const { id } = req.query
    const response = await fetch(`${HOST}/v4/launchpads/${id}`)
    const launchpad = await response.json()
    return res.status(200).json(launchpad)
  }
}
