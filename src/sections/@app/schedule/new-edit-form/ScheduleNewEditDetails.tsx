import { useState } from 'react';
// form
import { useFormContext, useFieldArray } from 'react-hook-form';
// @mui
import { Box, Stack, Button, Divider, Typography, InputAdornment, MenuItem } from '@mui/material';
// utils
import { fNumber } from '../../../../utils/formatNumber';
// components
import Iconify from '../../../../components/Iconify';
import { RHFSelect, RHFTextField } from '../../../../components/hook-form';
// _mock_
import { _workerList } from '../../../../_mock';


const WORKER_OPTIONS = _workerList;

// ----------------------------------------------------------------------

const WORKER2_OPTIONS = [
  'full stack development',
  'backend development',
  'ui design',
  'ui/ux design',
  'front end development',
];

export default function ScheduleNewEditDetails() {
  const { control, setValue, watch } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  });

  const values = watch();


  let total=0;
  let currentValue=0;
  
  const handleAdd = () => {
    append({
      workerId: '',
      compensation: '',
      daoContribution: '',
      workerContribution: '',
      totalContribution: '',
    });
  };


  const handleRemove = (index: number) => {
    remove(index);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ color: 'text.disabled', mb: 3 }}>
        Workers:
      </Typography>

      <Stack divider={<Divider flexItem sx={{ borderStyle: 'dashed' }} />} spacing={3}>
        {fields.map((item, index) => (
          <Stack key={item.id} alignItems="flex-end" spacing={1.5}>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ width: 1 }}>

              <RHFSelect
                name={`items[${index}].service`}
                label="Worker"
                size="small"
                InputLabelProps={{ shrink: true }}
                SelectProps={{ native: false, sx: { textTransform: 'capitalize' } }}
                sx={{ maxWidth: { md: 260 } }}
              >
                <MenuItem
                  value=""
                  sx={{
                    mx: 1,
                    borderRadius: 0.75,
                    typography: 'body2',
                    fontStyle: 'italic',
                    color: 'text.secondary',
                  }}
                >
                  None
                </MenuItem>
                <Divider />
                {WORKER_OPTIONS.map(({id, name}) => (
                  <MenuItem
                    key={id}
                    value={name}
                    sx={{
                      mx: 1,
                      my: 0.5,
                      borderRadius: 0.75,
                      typography: 'body2',
                      textTransform: 'capitalize',
                    }}
                  >
                    {name}
                  </MenuItem>
                ))}
              </RHFSelect>

              <RHFTextField
                size="small"
                type="number"
                // value="3273"
                name={`items[${index}].comp`}
                label="Compensation"
                onChange={(event) => setValue(`items[${index}].compensation`, Number(event.target.value))}
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
              />

              <RHFTextField
                size="small"
                type="number"
                name={`items[${index}].daoCont`}
                label="DAO Contr."
                onChange={(event) => setValue(`items[${index}].daoContribution`, Number(event.target.value))}
                InputProps={{
                  startAdornment: <InputAdornment position="start">%</InputAdornment>,
                }}
                sx={{ maxWidth: { md: 106 } }}
              />

              <RHFTextField
                size="small"
                type="number"
                // value="5"
                name={`items[${index}].workerCont`}
                label="Worker Contr."
                onChange={(event) => setValue(`items[${index}].workerContribution`, Number(event.target.value))}
                InputProps={{
                  startAdornment: <InputAdornment position="start">%</InputAdornment>,
                }}
                sx={{ maxWidth: { md: 106 } }}
              />

              <RHFTextField
                disabled
                size="small"
                name={`items[${index}].totalContribution`}
                label="Total"
                value={fNumber((values.items[index].compensation * values.items[index].daoContribution * 0.01)+(values.items[index].compensation * values.items[index].workerContribution * 0.01))}
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
                sx={{ maxWidth: { md: 200 } }}
              />
            </Stack>

            <Button
              size="small"
              color="error"
              startIcon={<Iconify icon="eva:trash-2-outline" />}
              onClick={() => handleRemove(index)}
            >
              Remove
            </Button>
          </Stack>
        ))}
      </Stack>

      <Divider sx={{ my: 3, borderStyle: 'dashed' }} />

      <Stack
        spacing={2}
        direction={{ xs: 'column-reverse', md: 'row' }}
        alignItems={{ xs: 'flex-start', md: 'center' }}
      >
        <Button
          size="small"
          startIcon={<Iconify icon="eva:plus-fill" />}
          onClick={handleAdd}
          sx={{ flexShrink: 0 }}
        >
          Add new worker
        </Button>

        <Stack
          spacing={2}
          justifyContent="flex-end"
          direction={{ xs: 'column', md: 'row' }}
          sx={{ width: 1 }}
        >
        <RHFTextField
          disabled
          size="small"
          type="number"
          label="Subtotal"
          name="subAmount"
          value={values.items.totalContribution}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
            readOnly: true,
          }}
          onChange={(event) => setValue('totalContribution', Number(event.target.value))}
          sx={{ maxWidth: { md: 200 } }}
        />
          <RHFTextField
            disabled
            size="small"
            label="Discount"
            name="discount"
            InputProps={{
              readOnly: true,
            }}
            onChange={(event) => setValue('discount', Number(event.target.value))}
            sx={{ maxWidth: { md: 200 } }}
          />
          <RHFTextField
            disabled
            size="small"
            type="number"
            label="Total"
            name="amount"
            value={values.items.totalContribution}
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
              readOnly: true,
            }}
            onChange={(event) => setValue('amount', Number(event.target.value))}
            sx={{ maxWidth: { md: 200 } }}
          />

          {/* <RHFTextField
            size="small"
            label="Taxes"
            name="taxes"
            onChange={(event) => setValue('taxes', Number(event.target.value))}
            sx={{ maxWidth: { md: 200 } }}
          /> */}
        </Stack>
      </Stack>
    </Box>
  );
}
