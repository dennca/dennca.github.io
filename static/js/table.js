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
        ajax: 'data/table.json',
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
                    for (let lang of data.sort()) {
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
                    i = 0;
                    str = "";
                    for (let topic of data.sort()) {
                        let cls = "";
                        switch (topic) {
                            case 'Compsci':
                                cls = 'text-bg-success';
                                break;
                            case 'Physics':
                                cls = 'text-bg-warning';
                                break;
                            case 'Quantum':
                                cls = 'text-bg-danger';
                                break;
                            case 'Math': case 'Maths':
                                cls = 'text-bg-primary';
                                break;
                            default:
                                cls = 'text-bg-black';
                                break;
                        }
                        str += '<kbd class="' + cls + '">' + topic + '</kbd> ';
                        i++;
                        if(i % 3 == 0) {
                            i %= 3;
                            str += '<br>';
                        }
                    }
                    return str;
                }
            },
            {
                data: 'format',
            },
            /*{
                data: 'update_date',
                render: function (data) {
                    date = new Date().toJSON().slice(0, 10);
                    return date;
                    //return '<mark class="bg-success-subtle">' + date + '</mark>';
                }
            },*/
            /*
            {
                data: 'position',
                render: function (data, type) {
                    if (type === 'display') {
                        let link = 'http://datatables.net';

                        if (data[0] < 'H') {
                            link = 'http://cloudtables.com';
                        } else if (data[0] < 'S') {
                            link = 'http://editor.datatables.net';
                        }

                        return '<a href="' + link + '">' + data + '</a>';
                    }

                    return data;
                },
            },
            {
                data: 'office',
                render: function (data, type) {
                    if (type === 'display') {
                        let country = '';

                        switch (data) {
                            case 'Argentina':
                                country = 'ar';
                                break;
                            case 'Edinburgh':
                                country = '_Scotland';
                                break;
                            case 'London':
                                country = '_England';
                                break;
                            case 'New York':
                            case 'San Francisco':
                                country = 'us';
                                break;
                            case 'Sydney':
                                country = 'au';
                                break;
                            case 'Tokyo':
                                country = 'jp';
                                break;
                        }

                        return '<span class="flag ' + country + '"></span> ' + data;
                    }

                    return data;
                },
            },
            {
                data: 'extn',
                render: function (data, type, row, meta) {
                    return type === 'display'
                        ? '<progress value="' + data + '" max="9999"></progress>'
                        : data;
                },
            },
            {
                data: 'start_date',
            },
            {
                data: 'salary',
                render: function (data, type) {
                    var number = $.fn.dataTable.render
                        .number(',', '.', 2, '$')
                        .display(data);

                    if (type === 'display') {
                        let color = 'green';
                        if (data < 250000) {
                            color = 'red';
                        } else if (data < 500000) {
                            color = 'orange';
                        }

                        return '<span style="color:' + color + '">' + number + '</span>';
                    }

                    return number;
                },
            },
             */
        ],
    });
});

function darkTheme() {

    var cards = document.getElementsByClassName("card");
    var card_headers = document.getElementsByClassName("card-header");
    for(card of cards) {
        card.classList.toggle("text-bg-dark");
    }
    for(header of card_headers) {
        header.classList.toggle("text-bg-dark");
    }


    body = document.getElementsByTagName("body")[0];
    body.classList.toggle("text-bg-dark");

}