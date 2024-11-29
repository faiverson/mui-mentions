import merge from 'lodash/merge';

// Project Import
import Accordion from './Accordion';
import AccordionSummary from './AccordionSummary';
import Badge from './Badge';
import Button from './Button';
import Chip from './Chip';
import DataGrid from './DataGrid';
import DatePicker from './DatePicker';
import IconButton from './IconButton';
import InputLabel from './InputLabel';
import LoadingButton from './LoadingButton';
import MuiCssBaseline from './MuiCssBaseline';
import OutlinedInput from './OutlinedInput';
import Tabs from './Tabs';
import ToggleButton from './ToggleButton';

export default function ComponentsOverrides(theme) {
    return merge(
        Accordion(theme),
        AccordionSummary(theme),
        Button(theme),
        Badge(theme),
        Chip(theme),
        DataGrid(theme),
        DatePicker(theme),
        IconButton(theme),
        InputLabel(theme),
        LoadingButton(theme),
        MuiCssBaseline(theme),
        OutlinedInput(theme),
        Tabs(theme),
        ToggleButton(theme),
    );
}
