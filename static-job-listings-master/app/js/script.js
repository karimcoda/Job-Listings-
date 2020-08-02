var container = document.querySelector('.container');
var data = [
                        {
                            "id": 1,
                            "company": "Photosnap",
                            "logo": "./images/photosnap.svg",
                            "new": true,
                            "featured": true,
                            "position": "Senior Frontend Developer",
                            "role": "Frontend",
                            "level": "Senior",
                            "info": ["1d ago", "Full Time", "USA Only"],
                            "languages": ["HTML", "CSS", "JavaScript"],
                            "tools": []
                        },
                        {
                            "id": 2,
                            "company": "Manage",
                            "logo": "./images/manage.svg",
                            "new": true,
                            "featured": true,
                            "position": "Fullstack Developer",
                            "role": "Fullstack",
                            "level": "Midweight",
                            "info": ["1d ago", "Part Time", "Remote"],
                            "languages": ["Python"],
                            "tools": ["React"]
                        },
                        {
                            "id": 3,
                            "company": "Account",
                            "logo": "./images/account.svg",
                            "new": true,
                            "featured": false,
                            "position": "Junior Frontend Developer",
                            "role": "Frontend",
                            "level": "Junior",
                            "info": ["2d ago", "Part Time", "USA Only"],
                            "languages": ["JavaScript"],
                            "tools": ["React", "Sass"]
                        },
                        {
                            "id": 4,
                            "company": "MyHome",
                            "logo": "./images/myhome.svg",
                            "new": false,
                            "featured": false,
                            "position": "Junior Frontend Developer",
                            "role": "Frontend",
                            "level": "Junior",
                            "info": ["5d ago", "Contract", "USA Only"],
                            "languages": ["CSS", "JavaScript"],
                            "tools": []
                        },
                        {
                            "id": 5,
                            "company": "Loop Studios",
                            "logo": "./images/loop-studios.svg",
                            "new": false,
                            "featured": false,
                            "position": "Software Engineer",
                            "role": "FullStack",
                            "level": "Midweight",
                            "info": ["1w ago", "Full Time", "Worldwide"],
                            "languages": ["JavaScript"],
                            "tools": ["Ruby", "Sass"]
                        },
                        {
                            "id": 6,
                            "company": "FaceIt",
                            "logo": "./images/faceit.svg",
                            "new": false,
                            "featured": false,
                            "position": "Junior Backend Developer",
                            "role": "Backend",
                            "level": "Junior",
                            "info": ["2w ago", "Full Time", "UK Only"],
                            "languages": ["Ruby"],
                            "tools": ["RoR"]
                        },
                        {
                            "id": 7,
                            "company": "Shortly",
                            "logo": "./images/shortly.svg",
                            "new": false,
                            "featured": false,
                            "position": "Junior Developer",
                            "role": "Frontend",
                            "level": "Junior",
                            "info": ["2w ago", "Full Time", "Worldwide"],
                            "languages": ["HTML", "JavaScript"],
                            "tools": ["Sass"]
                        },
                        {
                            "id": 8,
                            "company": "Insure",
                            "logo": "./images/insure.svg",
                            "new": false,
                            "featured": false,
                            "position": "Junior Frontend Developer",
                            "role": "Frontend",
                            "level": "Junior",
                            "info": ["2w ago", "Full Time", "USA Only"],
                            "languages": ["JavaScript"],
                            "tools": ["Vue", "Sass"]
                        },
                        {
                            "id": 9,
                            "company": "Eyecam Co.",
                            "logo": "./images/eyecam-co.svg",
                            "new": false,
                            "featured": false,
                            "position": "Full Stack Engineer",
                            "role": "Fullstack",
                            "level": "Midweight",
                            "info": ["3w ago", "Full Time", "Worldwide"],
                            "languages": ["JavaScript", "Python"],
                            "tools": ["Django"]
                        },
                        {
                            "id": 10,
                            "company": "The Air Filter Company",
                            "logo": "./images/the-air-filter-company.svg",
                            "new": false,
                            "featured": false,
                            "position": "Front-end Dev",
                            "role": "Frontend",
                            "level": "Junior",
                            "info": ["1mo ago", "Part Time", "Worldwide"],
                            "languages": ["JavaScript"],
                            "tools": ["React", "Sass"]
                        }
                    ];


for(i = 0; i < data.length; i++){
    function createNewElement(){
        var Box = document.createElement('div');
        const className = ['box', 'flex', 'flex__sp_btw', 'flex__items_c', 'flex__dir'];
        className.forEach(function(el){
            Box.classList.add(el)
        });
        container.appendChild(Box);
        createItemone(Box);
        createItemTags(Box);
    }
    
    function createItemone(parent){
        var BoxItem = document.createElement('div');
        const className = ['box__item_content', 'flex', 'flex__items_c', 'flex__dir'];
        className.forEach(function(el){
            BoxItem.classList.add(el)
        })
        parent.appendChild(BoxItem);
        createBoxImg(BoxItem)
    }
    
    function createItemTags(parent){
        var BoxItem = document.createElement('div');
        BoxItem.classList.add('box__item_tags');
        parent.appendChild(BoxItem);
    
        createLink(BoxItem)
    }
    
    function createBoxImg(parent){
        var BoxItem = document.createElement('div'),
            boxContent = document.createElement('div')
        BoxItem.classList.add('box__image');
        boxContent.classList.add('box__content');
        parent.appendChild(BoxItem);
        parent.appendChild(boxContent);
        createItems(BoxItem, boxContent)
    
    }
    
    function createItems(parent1, parent2){
        var img = document.createElement('img'),
            dataTags = document.createElement('div'),
            title = document.createElement('div'),
            dataInfo = document.createElement('div'),
            link = document.createElement('a');
    
            dataTags.classList.add('data_tags');
            dataTags.classList.add('flex');
            link.textContent = data[i].company;
            dataTags.appendChild(link);

    
            title.classList.add('title');
            dataInfo.classList.add('data_info');
            img.src = data[i].logo;
        parent1.appendChild(img);
        parent2.appendChild(dataTags);
        parent2.appendChild(title);
        parent2.appendChild(dataInfo);
        
        createElementsIContent(dataTags, title, dataInfo);
    
    }
    
    function createElementsIContent(parent1, parent2, parent3){
        var link = document.createElement('a'),
            par = document.createElement('p'),
            headingTwo = document.createElement('h2'),
            
            par2 = document.createElement('p');
            headingTwo.textContent = data[i].position
        if(data[i].new == true){
            span = document.createElement('span');
            span.textContent = 'New';
        }
        if(data[i].featured == true){
            span2 = document.createElement('span');
            span2.textContent = 'featured';
        }
            for(c = 0; c <= data[i].info.length; c++){
                var span3 = document.createElement('span');
                span3.textContent = data[i].info[c];
                par2.appendChild(span3);
            }
            par.appendChild(span);
            par.appendChild(span2);
    
    
            parent1.appendChild(link);
            parent1.appendChild(par);
            parent2.appendChild(headingTwo);
            parent3.appendChild(par2);
    }
    
    function createLink(parent){
        var link1 = document.createElement('a'),
            link2 = document.createElement('a');
            link1.href = '#';
            link2.href = '#';
            
            link1.textContent = data[i].role;
            link2.textContent = data[i].level;

            parent.appendChild(link1);
            parent.appendChild(link2);
            for(x = 0; x < data[i].languages.length; x++){
                link3 = document.createElement('a');
                link3.textContent = data[i].languages[x];
                link3.href = '#';
                parent.appendChild(link3);
            }
            for(y = 0; y < data[i].tools.length; y++){
                link4 = document.createElement('a');
                link4.textContent = data[i].tools[y];
                link4.href = '#';
                parent.appendChild(link4);
            }
            
    }
    
    
    createNewElement()
    
    
    
    
    
}
