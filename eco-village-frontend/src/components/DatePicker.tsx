import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as Datepicker } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs';

type Props = {
    label: string,
    date: Dayjs | null | undefined,
    setDate: (date: Dayjs | null | undefined) => void,
    className?: string;
}

const DatePicker = ({label, date, setDate, className}: Props) => {
    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Datepicker label={label} value={date} onChange={(date) => setDate(date)} className={className}/>
            </LocalizationProvider>
        </>
    )
}

export default DatePicker;