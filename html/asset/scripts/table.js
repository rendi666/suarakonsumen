if (typeof window !== 'undefined') {
    import('simple-datatables').then(({ DataTable }) => {
        const table = document.getElementById('pagination-table');
        if (table) {
            new DataTable(table, {
                searchable: true,
                sortable: true,
                perPage: 5,
            });
        }
    });
}