import * as enums from '../utils/enums/task'
export class TasksObject {
  title: string
  description: string
  priority: enums.Priority
  status: enums.Status
  id: number

  constructor(
    title: string,
    description: string,
    priority: enums.Priority,
    status: enums.Status,
    id: number
  ) {
    ;(this.title = title),
      (this.description = description),
      (this.priority = priority),
      (this.status = status),
      (this.id = id)
  }
}
