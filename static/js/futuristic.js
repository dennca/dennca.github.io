$(function() {
    //const template = {'<>': 'div class="cd-timeline-block reveal"', 'html': '${title} ${year}'};

    const template = {'<>': 'div', 'class': 'cd-timeline-block reveal', 'html': [

        {'<>':'div', 'class':'cd-timeline-img cd-picture'},

        {'<>':'div', 'class':'cd-timeline-content','html':[

            {'<>':'img', 'src':'./img/quantum/${url}'},
            {'<>':'div', 'class':'cd-timeline-quest','html':[
                {'<>':'h2', 'text':'${title}'},
                {'<>':'ul', 'class':'content-skills', 'html':[

                ]},
            ]},
        ]},
    ]};

    let data = [
        {"title": "x", "url": "carousel-1.jpg", "year": "1995"},
        {"title": "y", "url": "carousel-2.jpg", "year": "1995"},
        {"title": "z", "url": "carousel-3.jpg", "year": "1995"},
        {"title": "a", "url": "carousel-0.png", "year": "1995"},
    ];

    console.log(data);

    async function load() {
        try {
            const response = await fetch('./data/story.json');
            const data = await response.json();
            console.log('Data loaded successfully:', data);
            return data;
        } catch (error) {
            console.error('Error loading JSON file:', error);
        }
    }

    async function loadData() {
        let data = await load();
        console.log('data:', data);
        console.log('Data loaded successfully:', data.data);
        for (let i = 0; i < data.data.length; i++) {
            console.log('Name:', data.data[i].name);
            console.log('Topics:', data.data[i].topics);
            console.log('Image URL:', data.data[i].img_url);
            console.log('URL:', data.data[i].url);
        }
        hmm = data.data;
        console.log("hmm:", hmm);
        return hmm;
    }

    data = loadData();
    console.log(data);

    //native javascript
    //document.write(json2html.render(data,template));

    //or with jQuery
    $("#timeline").json2html(data, template);
});


/*
<section className="cd-timeline cd-container">
    <div className="cd-timeline-block reveal">
        <div className="cd-timeline-img cd-picture">
        </div>
        <div className="cd-timeline-content">
            <img height="" src="img/carousel-2.jpg">
                <div className="cd-timeline-quest">
                    <h2>1. Quantuuumz</h2>
                    <div className="timeline-content-info" style="display: none">
                        <div className="timeline-content-info-title">
                            <i className="fa-solid fa-atom" aria-hidden="true"></i>
                            quantum mechanics
                        </div>
                        <div className="timeline-content-info-date">
                            <i className="fa-solid fa-cross" aria-hidden="true"></i>
                            1901 - 1986
                        </div>
                    </div>
                    <ul className="content-skills">
                        <li>
                            <i className="fa-solid fa-atom" aria-hidden="true"></i>
                            quantum physics
                        </li>
                        <li>
                            <i className="fa-solid fa-atom" aria-hidden="true"></i>
                            quantum mechanics
                        </li>
                        <li>
                            <i className="fa-solid fa-atom" aria-hidden="true"></i>
                            quantum computing
                        </li>
                    </ul>
                    <button type="button" className="btn btn-sm btn-outline-warning my-2" data-bs-toggle="modal"
                            data-bs-target="#JSeifert">
                        číst dále <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
        </div>
        <!-- cd-timeline-content -->
    </div>
    <!-- JAROSLAV SEIFERT -->
</section>

<section id="timeline" className="cd-timeline cd-container">
    <div id="result"></div>
</section>
<script type="text/javascript" src="./data/story.json"></script>
<script src="./js/futuristic.js"></script>


<div id="generate"></div>

<script>
    // https://stackoverflow.com/questions/5710798/automatically-generate-html-from-json

    //import data from './data/story.json' assert {type: 'JSON'};
    //console.log(data);

    const source = document.getElementById('generate');
    let something;

    const myRequest = new Request('./data/story.json');
    fetch(myRequest)
    .then((response) => response.json())
    .then((json) => {
    console.log("generate", json);
    something = json;
    source.innerHTML = json.data[0].name + "<br>" + json.data[0].topics + json.data[0].img_url + "<br>" + json.data[0].url;
});

    function generate(json) {
    return source.innerHTML = json.data[0].name;
}

</script>
*/
