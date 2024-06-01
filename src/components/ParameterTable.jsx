import React, { useContext } from 'react'
import {
    GridRowModes,
    GridRowEditStopReasons,
    GridActionsCellItem,
    DataGrid,
    GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarFilterButton,
    GridToolbarExport,
    GridToolbarDensitySelector,
} from '@mui/x-data-grid';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import { RecordContext } from '../contexts/RecordContext';

let temp = 1;

function CustomToolbar(props) {
    const { setRows, setRowModesModel } = props;

    const handleClick = () => {
        const id = temp;
        ++temp;
        setRows((oldRows) => [...oldRows, {
            id,
            tempmax: '',
            tempmin: '',
            temp: '',
            feelslike: '',
            feelslikemin: '',
            feelslikemax: '',
            dew: '',
            humidity: '',
            precip: '',
            precipprob: '',
            precipcover: '',
            snow: '',
            snowdepth: '',
            windspeed: '',
            winddir: '',
            sealevelpressure: '',
            cloudcover: '',
            visibility: '',
            solarradiation: '',
            solarenergy: '',
            uvindex: '',
            moonphase: '',
            isNew: true
        }]);
        setRowModesModel((oldModel) => ({
            ...oldModel,
            [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
        }));
    };

    return (
        <GridToolbarContainer>
            <Button color="violet" startIcon={<AddIcon />} onClick={handleClick}>
                Add record
            </Button>
            <GridToolbarColumnsButton slotProps={{ tooltip: { color: 'violet' } }} />
            <GridToolbarFilterButton slotProps={{ tooltip: { color: 'violet' } }} />
            <GridToolbarDensitySelector
                slotProps={{ tooltip: { title: 'Change density', color: 'violet' } }}
            />
            <GridToolbarExport
                slotProps={{
                    tooltip: { title: 'Export data', color: 'violet' },
                    button: { variant: 'outlined' },
                }}
            />
        </GridToolbarContainer>
    );
}

const ParameterTable = () => {

    const { rows, setRows } = useContext(RecordContext);
    const [rowModesModel, setRowModesModel] = React.useState({});

    const handleRowEditStop = (params, event) => {
        if (params.reason === GridRowEditStopReasons.rowFocusOut) {
            event.defaultMuiPrevented = true;
        }
    };

    const handleEditClick = (id) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    };

    const handleSaveClick = (id) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    };

    const handleDeleteClick = (id) => () => {
        setRows(rows.filter((row) => row.id !== id));
    };

    const handleCancelClick = (id) => () => {
        setRowModesModel({
            ...rowModesModel,
            [id]: { mode: GridRowModes.View, ignoreModifications: true },
        });

        const editedRow = rows.find((row) => row.id === id);
        if (editedRow.isNew) {
            setRows(rows.filter((row) => row.id !== id));
        }
    };

    const processRowUpdate = (newRow) => {
        const updatedRow = { ...newRow, isNew: false };
        setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
        return updatedRow;
    };

    const handleRowModesModelChange = (newRowModesModel) => {
        setRowModesModel(newRowModesModel);
    };

    const columns = [
        { field: 'id', headerName: 'id', width: 130, editable: false, sortable: true, type: 'number' },
        { field: 'tempmax', headerName: 'Max Temp', width: 130, editable: true, sortable: true, type: 'number' },
        { field: 'tempmin', headerName: 'Min Temp', width: 130, editable: true, sortable: true, type: 'number' },
        { field: 'temp', headerName: 'Temp', width: 130, editable: true, sortable: true, type: 'number' },
        { field: 'feelslikemax', headerName: 'Max Feels Like', width: 130, editable: true, sortable: true, type: 'number' },
        { field: 'feelslikemin', headerName: 'Min Feels Like', width: 130, editable: true, sortable: true, type: 'number' },
        { field: 'feelslike', headerName: 'Feels Like', width: 130, editable: true, sortable: true, type: 'number' },
        { field: 'dew', headerName: 'Dew', width: 130, editable: true, sortable: true, type: 'number' },
        { field: 'humidity', headerName: 'Humidity', width: 130, editable: true, sortable: true, type: 'number' },
        { field: 'precip', headerName: 'Precip', width: 130, editable: true, sortable: true, type: 'number' },
        { field: 'precipprob', headerName: 'Precip Prob', width: 130, editable: true, sortable: true, type: 'number' },
        { field: 'precipcover', headerName: 'Precip Cover', width: 130, editable: true, sortable: true, type: 'number' },
        { field: 'snow', headerName: 'Snow', width: 130, editable: true, sortable: true, type: 'number' },
        { field: 'snowdepth', headerName: 'Snow Depth', width: 130, editable: true, sortable: true, type: 'number' },
        { field: 'windspeed', headerName: 'Wind Speed', width: 130, editable: true, sortable: true, type: 'number' },
        { field: 'winddir', headerName: 'Wind Dir', width: 130, editable: true, sortable: true, type: 'number' },
        { field: 'sealevelpressure', headerName: 'Sea Level Pressure', width: 130, editable: true, sortable: true, type: 'number' },
        { field: 'cloudcover', headerName: 'Cloud Cover', width: 130, editable: true, sortable: true, type: 'number' },
        { field: 'visibility', headerName: 'Visibility', width: 130, editable: true, sortable: true, type: 'number' },
        { field: 'solarradiation', headerName: 'Solar Radiation', width: 130, editable: true, sortable: true, type: 'number' },
        { field: 'solarenergy', headerName: 'Solar Energy', width: 130, editable: true, sortable: true, type: 'number' },
        { field: 'uvindex', headerName: 'UV Index', width: 130, editable: true, sortable: true, type: 'number' },
        { field: 'moonphase', headerName: 'Moon Phase', width: 130, editable: true, sortable: true, type: 'number' },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            cellClassName: 'actions',
            getActions: ({ id }) => {
                const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

                if (isInEditMode) {
                    return [
                        <GridActionsCellItem key="save"
                            icon={<SaveIcon />}
                            label="Save"
                            sx={{
                                color: 'black',
                            }}
                            onClick={handleSaveClick(id)}
                        />,
                        <GridActionsCellItem key="cancel"
                            icon={<CancelIcon />}
                            label="Cancel"
                            className="textPrimary"
                            onClick={handleCancelClick(id)}
                            color="inherit"
                        />,
                    ];
                }

                return [
                    <GridActionsCellItem key="edit"
                        icon={<EditIcon />}
                        label="Edit"
                        className="textPrimary"
                        onClick={handleEditClick(id)}
                        color="inherit"
                    />,
                    <GridActionsCellItem key="delete"
                        icon={<DeleteIcon />}
                        label="Delete"
                        onClick={handleDeleteClick(id)}
                        color="inherit"
                    />,
                ];
            },
        },
    ];

    return (
        <Box sx={{
            width: '100%',
            height: {
                xs: 425,
                sm: 500,
                md: 500,
                lg: 600,
            }
        }}>
            <DataGrid
                rows={rows}
                columns={columns}
                editMode="row"
                disableRowSelectionOnClick
                rowModesModel={rowModesModel}
                onRowModesModelChange={handleRowModesModelChange}
                onRowEditStop={handleRowEditStop}
                processRowUpdate={processRowUpdate}
                slots={{
                    toolbar: CustomToolbar,
                }}
                slotProps={{
                    toolbar: { setRows, setRowModesModel },
                }}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 100 },
                    },
                }}
                pageSizeOptions={[5, 10, 25, 100]}
                sx={{
                    "& .MuiDataGrid-cell:focus-within": {
                        outlineColor: '#784af4'
                    },
                    "& .MuiDataGrid-columnHeader:focus-within, & .MuiDataGrid-columnHeader:focus":
                    {
                        outlineColor: '#784af4',
                    },
                }}
            />
        </Box>
    )
}

export default ParameterTable
