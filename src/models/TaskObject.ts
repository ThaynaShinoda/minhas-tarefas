export class TasksObject {
  title: string
  description: string
  priority: string
  status: string
  id: number

  constructor(
    title: string,
    description: string,
    priority: string,
    status: string,
    id: number
  ) {
    ;(this.title = title),
      (this.description = description),
      (this.priority = priority),
      (this.status = status),
      (this.id = id)
  }
}
