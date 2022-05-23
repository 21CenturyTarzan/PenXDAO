// ----------------------------------------------------------------------


export type ScheduleItem = {
  id: string;
  workerId: string;
  compensation: number;
  daoContribution: number;
  workerContribution: number;
  totalContribution: number;
};

export type Schedule = {
  id: string;
  scheduleId: string;
  scheduleName: string;
  scheduleMonth: number;
  scheduleYear: number;
  status: string;
  amount: number;
  subAmount: number;
  discount: number | string;
  createDate: Date | number;
  dueDate: Date | number;
  items: ScheduleItem[];
};
