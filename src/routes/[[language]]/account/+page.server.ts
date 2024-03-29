import { getUser, validateSession } from "$lib/server/db"

export async function load({ cookies }) {
  const sessionId = cookies.get("session")
  const { userId } = await validateSession(sessionId ?? "")
  const { tracks } = await getUser(userId)

  return { tracks }
}
