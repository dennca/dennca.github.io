$(function() {

    const template = {'<>': 'tbody', 'html': [
        {'<>':'tr', 'html': [
            {'<>':'td', 'html': [
                {'<>': 'kbd', 'class': 'text-bg-warning', 'text':'${cmd}'},
            ]},
                {'<>': 'td', 'text':'${desc}'}
            ]},
    ]};

    let data = [
        {"cmd": "ls", "desc": "vypíše adresářovou strukturu"},
        {"cmd": "mkdir <param>", "desc": "vytvoří adresář"},
        {"cmd": "cp <param> <param>", "desc": "zkopíruje položku na jiné místo"},
        {"cmd": "touch <param>", "desc": "vytvoří soubor"},
        {"cmd": "mv <param> <param>", "desc": "přesune položku na jiné místo"},
        {"cmd": "cron", "desc": "slouží k plánování událostí"},
        {"cmd": "df", "desc": ""},
        {"cmd": "traceroute", "desc": ""},
        {"cmd": "ping", "desc": ""},
        {"cmd": "kill", "desc": ""},
        {"cmd": "whoami", "desc": ""},
        {"cmd": "pwd", "desc": "vypíše aktuální cestu"},
        {"cmd": "echo <param>", "desc": ""},
        {"cmd": "sleep", "desc": ""},
        {"cmd": "passwd", "desc": ""},
        {"cmd": "chmod", "desc": ""},
        {"cmd": "chown", "desc": ""},
        {"cmd": "head", "desc": ""},
        {"cmd": "tail <param>", "desc": ""},
        {"cmd": "cat <param>", "desc": ""},
        {"cmd": "nano <param>", "desc": ""},
        {"cmd": "rmdir", "desc": ""},
        {"cmd": "env", "desc": ""},
        {"cmd": "useradd", "desc": ""},
        {"cmd": "", "desc": ""},
    ];

    //native javascript
    //document.write(json2html.render(data,template));

    //or with jQuery
    $("#result").json2html(data, template);
});
