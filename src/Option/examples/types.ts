export interface Context {
  request: <T = unknown>(opts: { [k: string]: unknown }) => Promise<T>
}

export interface JobArgs {
  pickupLocation: string
  dropoffLocation: string
  schedule: Schedule
}

export interface Schedule {
  type: "Urgent" | "Scheduled"
  pickupAt?: Date
}
