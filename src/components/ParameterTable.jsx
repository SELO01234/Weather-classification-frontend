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

let temp = 10;

function CustomToolbar(props) {
    const { setRows, setRowModesModel } = props;

    const handleClick = () => {
        const id = temp;
        ++temp;
        setRows((oldRows) => [...oldRows, { id, lastName: '', firstName: '', age: '', isNew: true }]);
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
        { field: 'firstName', headerName: 'First name', width: 130, editable: true, },
        { field: 'lastName', headerName: 'Last name', width: 130, editable: true, },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            editable: true,
            width: 90,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
        },
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
