$(document).ready(function () {
    $('#quantum').DataTable({
        language: {
            /*lengthMenu: "Display _MENU_ records per page",
            zeroRecords: "Nothing found - sorry",
            info: "Showing page _PAGE_ of _PAGES_",
            infoEmpty: "No records available",
            infoFiltered: "(filtered from _MAX_ total records)",*/
            searchPlaceholder: "Search...",
            search: "<i class='fa-solid fa-search'></i>",
        },
        ajax: 'table.json',
        columns: [
            {
                data: 'name',
                render: function (data) {
                    return '' + data + '';
                }
            },
            {
                data: 'url',
                render: function (data) {
                    return '<a href="http://' + data + '">' + data + '</a>';
                }
            },
            {
                data: 'languages',
                render: function (data) {
                    str = "";
                    for (let lang of data) {
                        let cls = "";
                        switch (lang) {
                            case 'English':
                                cls = 'text-bg-primary';
                                break;
                            case 'German':
                                cls = 'text-bg-warning';
                                break;
                            default:
                                cls = 'text-bg-black';
                                break;
                        }
                        str += '<kbd class="' + cls + '">' + lang + '</kbd> ';
                    }
                    return str;
                }
            },
            {
                data: 'topics',
                render: function (data) {
                    str = "";
                    for (let topic of data) {
                        let cls = "";
                        switch (topic) {
                            case 'Compsi':
                                cls = 'text-bg-primary';
                                break;
                            case 'Physics':
                                cls = 'text-bg-warning';
                                break;
                            case 'Quantum':
                                cls = 'text-bg-danger';
                                break;
                            default:
                                cls = 'text-bg-black';
                                break;
                        }
                        str += '<kbd class="' + cls + '">' + topic + '</kbd> ';
                    }
                    return str;
                }
            },
            {
                data: 'format',
            },
        ],
    });
});