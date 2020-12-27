import { TaskStatus } from './../task.model';
import { IsIn, IsOptional } from 'class-validator';

export class GetTasksFilterDto {
  @IsOptional()
  @IsIn([TaskStatus.DONE, TaskStatus.OPEN, TaskStatus.IN_PROGRESS])
  status: TaskStatus;

  @IsOptional()
  search: string;
}
