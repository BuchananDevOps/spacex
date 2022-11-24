import { NextApiRequest, NextApiResponse } from "next"

import { Payloads } from "@/lib/types"

const HOST = process.env.HOST

type ResponseError = {
  message: string
}

export default function payloadsHandler() {
  return async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Payloads[] | ResponseError>
  ) {
    const { id } = req.query
    const response = await fetch(`${HOST}/v4/payloads/${id}`)
    const payloads = await response.json()
    return res.status(200).json(payloads)
  }
}
