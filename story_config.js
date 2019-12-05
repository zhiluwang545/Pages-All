var config = {
    style: 'mapbox://styles/lesley545545/ck37zrovn34841clfpo1byidq',
    accessToken: 'pk.eyJ1IjoibGVzbGV5NTQ1NTQ1IiwiYSI6ImNrMDg3YW5ibjRlbWkzbW12NGxuNHdrZm4ifQ.-foBRQgkzeSoaM0nyCrqXA',
    showMarkers: true,
    theme: 'light',
    alignment: 'right',
    title: 'Our Annual Stories',
    subtitle: 'Waste less. Save more.',
    byline: 'Join us and write your own story with a homeless pet',
    footer: 'Source: City of Chengdu.',
    chapters: [
        {
            id: 'chapter-1',
            title: '05/21/2019 Hungry cat families on the street',
            image: './images/cats meeting.jpg',
            description: 'Mr. Wang found a family of cats on the street, starving, then he used our website to find free food offered by an anonymous person nearby and fed the cats.',
            location: {
                center: [104.051106, 30.700895],
                zoom: 18.01,
                pitch: 60.00,
                bearing: -115.85
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter-2',
            title: '06/06/2019 A gaint lost dog who did not know how to ask for help',
            image: './images/lostdog-1024x574.jpg',
            description: 'Miss Li picked up the food offered by Mr. Chen to fed a big dog lost in the city center.',
            location: {
                center: [104.070410, 30.649215],
                zoom: 18.06,
                pitch: 56.00,
                bearing: -42.34
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter-3',
            title: '11/01/2019 An injured puppy who could hardly walk',
            image: './images/stray-dog.png',
            description: 'Miss Wang saved her meal to helped an injured puppy found nearby.',
            location: {
                center: [104.058058, 30.655312],
                zoom: 18.46,
                pitch: 60,
                bearing: -38.34
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        }
    ]
};
