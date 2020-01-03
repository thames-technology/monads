import { is_some, None, Option, Some } from "../Option"
import { Context, JobArgs, Schedule } from "./types"

function calculatePickupTime(schedule: Schedule): Option<Date> {
  const { type, pickupAt } = schedule
  return type === "Scheduled" ? Some(pickupAt) : None
}

function bookJob(args: JobArgs, ctx: Context): Promise<unknown> {
  const {
    pickupLocation: pickup_location,
    dropoffLocation: dropoff_location,
    schedule,
  } = args

  const { request } = ctx

  const job = {
    pickup_location,
    dropoff_location,
  }

  const pickupAt = calculatePickupTime(schedule).map((dt) => dt.toISOString())

  if (is_some(pickupAt)) {
    Object.assign(job, { pickup_at: pickupAt.unwrap() })
  }

  const opts = {
    url: "/job",
    method: "post",
    body: job,
  }

  return request(opts)
}

export default bookJob
