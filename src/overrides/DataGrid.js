export default function DataGrid(theme) {
    return {
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    borderColor: theme.palette.divider,
                    '& .MuiDataGrid-columnHeader:focus': {
                        outlineWidth: 0,
                    },
                    '& .MuiDataGrid-iconSeparator': {
                        color: theme.palette.divider,
                    },
                    '& .MuiDataGrid-columnHeaderTitleContainer': {
                        justifyContent: 'space-between',
                    },
                    '& .MuiDataGrid-cell': {
                        borderBottom: `1px solid ${theme.palette.divider}`,
                    },
                    '& .MuiDataGrid-cell:focus': {
                        outlineWidth: 0,
                    },
                    '& .MuiDataGrid-sortIcon': {
                        fontSize: '1.25rem',
                    },
                },
            },
        },
    };
}
