import { add } from 'date-fns';
import _mock from './_mock';
import _workerList from './_mock';
import { randomInArray, randomNumberRange } from './funcs';
import { NavItemSub } from 'src/components/nav-section/vertical/NavItem';

// ----------------------------------------------------------------------

export const _schedules = [...Array(20)].map((_, index) => ({
  id: _mock.id(index),
  scheduleId: `${17048 + index}`,
  scheduleName: `March 2022`,
  scheduleYear: randomNumberRange(2019, 2022),
  scheduleMonth: randomNumberRange(1, 6),
  discount: 10,
  subAmount: _mock.number.price(index + 1),
  amount: _mock.number.price(index + 1),
  createDate: add(new Date(), { days: index, hours: index }),
  dueDate: add(new Date(), { days: index + 15, hours: index }),
  status: randomInArray(['paid', 'unpaid', 'overdue', 'draft']),
  items: [...Array(5)].map((_, index) => ({
    id: _mock.id(index),
    workerId: randomInArray(_workerList),
    compensation: randomNumberRange(999, 19999),
    daoContribution: randomNumberRange(1, 5),
    workerContribution: randomNumberRange(2, 9),
    totalContribution: 5,
  })),
}));

