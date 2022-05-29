import * as Yup from 'yup';
import { useMemo, useState, useEffect } from 'react';
// next
import { useRouter } from 'next/router';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { LoadingButton } from '@mui/lab';
import { Card, Stack } from '@mui/material';
// routes
import { PATH_APP } from '../../../../routes/paths';
// @types
import { Schedule, ScheduleItem } from '../../../../@types/schedule';
// components
import { FormProvider } from '../../../../components/hook-form';
//
import ScheduleNewEditDetails from './ScheduleNewEditDetails';
import ScheduleNewEditStatusDate from './ScheduleNewEditStatusDate';

// ----------------------------------------------------------------------

type IFormValuesProps = Omit<Schedule, 'createDate' | 'dueDate'>;

interface FormValuesProps extends IFormValuesProps {
  createDate: Date | null;
  dueDate: Date | null;
}

type Props = {
  isEdit?: boolean;
  currentSchedule?: FormValuesProps;
};

export default function ScheduleNewEditForm({ isEdit, currentSchedule }: Props) {
  const { push } = useRouter();

  const [loadingSave, setLoadingSave] = useState(false);

  const [loadingSend, setLoadingSend] = useState(false);

  const NewUserSchema = Yup.object().shape({
    createDate: Yup.string().nullable().required('Create date is required'),
    dueDate: Yup.string().nullable().required('Due date is required'),
    // invoiceTo: Yup.mixed().nullable().required('Invoice to is required'),
  });

  const defaultValues = useMemo(
    () => ({
      scheduleID: currentSchedule?.scheduleId || '17099',
      scheduleName: currentSchedule?.scheduleName || '',
      scheduleYear: currentSchedule?.scheduleYear || 0,
      scheduleMonth: currentSchedule?.scheduleMonth || 0,
      createDate: currentSchedule?.createDate || null,
      dueDate: currentSchedule?.dueDate || null,
      status: currentSchedule?.status || 'draft',
      discount: currentSchedule?.discount || '',
      items: currentSchedule?.items || [
        { workerId: '', compensation: 0, daoContribution: 0, workerContribution: 0, totalContribution: 0 },
      ],
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentSchedule]
  );

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(NewUserSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  useEffect(() => {
    if (isEdit && currentSchedule) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, currentSchedule]);

  const newSchedule = {
    ...values,
    items: values.items.map((item: ScheduleItem) => ({
      ...item,
      total: ((item.daoContribution * item.compensation) + (item.workerContribution * item.compensation)) * 0.01,
    })),
  };

  const handleSaveAsDraft = async () => {
    setLoadingSave(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      setLoadingSave(true);
      push(PATH_APP.schedule.list);
      console.log(JSON.stringify(newSchedule, null, 2));
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateAndSend = async () => {
    setLoadingSend(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      setLoadingSend(false);
      push(PATH_APP.schedule.list);
      console.log(JSON.stringify(newSchedule, null, 2));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider methods={methods}>
      <Card>
        {/* <ScheduleNewEditAddress /> */}
        <ScheduleNewEditStatusDate />
        <ScheduleNewEditDetails />
      </Card>

      <Stack justifyContent="flex-end" direction="row" spacing={2} sx={{ mt: 3 }}>
        <LoadingButton
          color="inherit"
          size="large"
          variant="contained"
          loading={loadingSave && isSubmitting}
          onClick={handleSubmit(handleSaveAsDraft)}
        >
          Save as Draft
        </LoadingButton>

        <LoadingButton
          size="large"
          variant="contained"
          loading={loadingSend && isSubmitting}
          onClick={handleSubmit(handleCreateAndSend)}
        >
          {isEdit ? 'Update' : 'Create'} & Send
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
