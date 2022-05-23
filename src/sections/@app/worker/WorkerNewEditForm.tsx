import * as Yup from 'yup';
import { useCallback, useEffect, useMemo } from 'react';
import { useSnackbar } from 'notistack';
// next
import { useRouter } from 'next/router';
// form
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import InputAdornment from '@mui/material/InputAdornment';
// @mui
import DatePicker from '@mui/lab/DatePicker';
import { LoadingButton } from '@mui/lab';
import { Box, Card, Grid, Stack, Switch, Typography, FormControlLabel } from '@mui/material';
// utils
import { fData } from '../../../utils/formatNumber';
// routes
import { PATH_APP } from '../../../routes/paths';
// @types
import { WorkerManager } from '../../../@types/worker';
// _mock
import { countries } from '../../../_mock';
// components
import Label from '../../../components/Label';
import {
  FormProvider,
  RHFSelect,
  RHFSwitch,
  RHFTextField,
  RHFUploadAvatar,
} from '../../../components/hook-form';

// ----------------------------------------------------------------------

type FormValuesProps = WorkerManager;

type Props = {
  isEdit?: boolean;
  currentWorker?: WorkerManager;
};

export default function WorkerNewEditForm({ isEdit = false, currentWorker }: Props) {
  const { push } = useRouter();

  const { enqueueSnackbar } = useSnackbar();

  const NewWorkerSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().required('Email is required').email(),
    phoneNumber: Yup.string().required('Phone number is required'),
    address: Yup.string().required('Address is required'),
    country: Yup.string().required('country is required'),
    department: Yup.string().required('Department is required'),
    state: Yup.string().required('State is required'),
    city: Yup.string().required('City is required'),
    role: Yup.string().required('Role Number is required'),
  });

  const defaultValues = useMemo(
    () => ({
      name: currentWorker?.name || '',
      email: currentWorker?.email || '',
      phoneNumber: currentWorker?.phoneNumber || '',
      address: currentWorker?.address || '',
      country: currentWorker?.country || '',
      state: currentWorker?.state || '',
      city: currentWorker?.city || '',
      zipCode: currentWorker?.zipCode || '',
      avatarUrl: currentWorker?.avatarUrl || '',
      isVerified: currentWorker?.isVerified || true,
      status: currentWorker?.status,
      department: currentWorker?.department || '',
      role: currentWorker?.role || '',
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentWorker]
  );

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(NewWorkerSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    control,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  useEffect(() => {
    if (isEdit && currentWorker) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, currentWorker]);

  const onSubmit = async (data: FormValuesProps) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      enqueueSnackbar(!isEdit ? 'Create success!' : 'Update success!');
      push(PATH_APP.worker.list);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      if (file) {
        setValue(
          'avatarUrl',
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
      }
    },
    [setValue]
  );

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ py: 10, px: 3 }}>
            {isEdit && (
              <Label
                color={values.status !== 'active' ? 'error' : 'success'}
                sx={{ textTransform: 'uppercase', position: 'absolute', top: 24, right: 24 }}
              >
                {values.status}
              </Label>
            )}

            <Box sx={{ mb: 5 }}>
              <RHFUploadAvatar
                name="avatarUrl"
                accept="image/*"
                maxSize={3145728}
                onDrop={handleDrop}
                helperText={
                  <Typography
                    variant="caption"
                    sx={{
                      mt: 2,
                      mx: 'auto',
                      display: 'block',
                      textAlign: 'center',
                      color: 'text.secondary',
                    }}
                  >
                    Allowed *.jpeg, *.jpg, *.png, *.gif
                    <br /> max size of {fData(3145728)}
                  </Typography>
                }
              />
            </Box>

            {isEdit && (
              <FormControlLabel
                labelPlacement="start"
                control={
                  <Controller
                    name="status"
                    control={control}
                    render={({ field }) => (
                      <Switch
                        {...field}
                        checked={field.value !== 'inactive'}
                        onChange={(event) =>
                          field.onChange(event.target.checked ? 'active' : 'inactive')
                        }
                      />
                    )}
                  />
                }
                label={
                  <>
                    <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                      Active
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Turn off to make worker inactive
                    </Typography>
                  </>
                }
                sx={{ mx: 0, mb: 3, width: 1, justifyContent: 'space-between' }}
              />
            )}

            <RHFSwitch
              name="isVerified"
              labelPlacement="start"
              label={
                <>
                  <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                    Email Verified
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Disabling this will automatically send the worker a verification email
                  </Typography>
                </>
              }
              sx={{ mx: 0, width: 1, justifyContent: 'space-between' }}
            />
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Box
              sx={{
                display: 'grid',
                columnGap: 2,
                rowGap: 3,
                gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
              }}
            >
              <RHFTextField name="name" label="Full Name" />
              <RHFTextField name="email" label="Email Address" />
              <RHFTextField name="department" label="Department" />
              <RHFTextField name="role" label="Role" />
              <RHFTextField name="ethAddress" label="ETH Address" 
                />
              <RHFTextField 
                name="compensation" 
                label="Default Compensation" 
                type="number"
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }} />
              <RHFTextField 
                name="daoContribution"
                label="Default DAO Contribution"
                type="number"
                defaultValue="3"
                InputProps={{
                  startAdornment: <InputAdornment position="start">%</InputAdornment>,
                }}/>
              <RHFTextField 
                name="workerContribution" 
                label="Default Worker Contribution"
                type="number"
                defaultValue="5"
                InputProps={{
                  startAdornment: <InputAdornment position="start">%</InputAdornment>,
                }}/>
              
                <Controller
                  name="unlockDate"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <DatePicker
                      label="Retirement date"
                      value={field.value}
                      onChange={(newValue) => {
                        field.onChange(newValue);
                      }}
                      renderInput={(params) => (
                        <RHFTextField {...params} fullWidth error={!!error} helperText={error?.message} />
                      )}
                    />
                  )}
                />


                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                NOTE: If the worker already has a Pen-X pension set up with this Oasis address, their existing retirement date will be used.
                </Typography>


              {/* <RHFTextField name="phoneNumber" label="Phone Number" />
              <RHFSelect name="country" label="Country" placeholder="Country">
                <option value="" />
                {countries.map((option) => (
                  <option key={option.code} value={option.label}>
                    {option.label}
                  </option>
                ))}
              </RHFSelect>

              <RHFTextField name="state" label="State/Region" />
              <RHFTextField name="city" label="City" />
              <RHFTextField name="address" label="Address" />
              <RHFTextField name="zipCode" label="Zip/Code" /> */}
            </Box>

            <Stack alignItems="flex-end" sx={{ mt: 3 }}>
              <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                {!isEdit ? 'Create Worker' : 'Save Changes'}
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
