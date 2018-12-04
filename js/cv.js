//en JS
// window.onload = function () {
//     CanvasJS.addColorSet("greenShades",
//     [//colorSet Array

//     "#2F4F4F",
//     "#008080",
//     "#2E8B57",
//     "#3CB371",
//     "#90EE90"                
//     ]);

//     var chart = new CanvasJS.Chart("Informatique", {
//         animationEnabled: true,
//         title:{
//             text: "Email Categories",
//             horizontalAlign: "left"
//         },
//         data: [{
//             type: "doughnut",
//             startAngle: 60,
//             //innerRadius: 60,
//             indexLabelFontSize: 17,
//             indexLabel: "{label} - #percent%",
//             toolTipContent: "<b>{label}:</b> {y} (#percent%)",
//             dataPoints: [
//                 { y: 67, label: "Inbox" },
//                 { y: 28, label: "Archives" },
//                 { y: 10, label: "Labels" },
//                 { y: 7, label: "Drafts"},
//                 { y: 15, label: "Trash"},
//                 { y: 6, label: "Spam"}
//             ]
//         }]
//     });
//     chart.render();
    
// }


//====================================================================
//====================================================================
//====================================================================
////===========================En jQuery==============================
function Info () {
    CanvasJS.addColorSet("color1",
    [//colorSet Array
    "#370028",
    "#303030",
    "#000000",
    "#955628",
    "#2F1E0E",
    "#8E1F1F", 
    "#FF4901" ,          
    ]);

var options1 = {    
    animationDuration: 1000,
    colorSet : "color1",
    title: {
        text: "Compétences"
        
    },
    subtitles: [{
        text: "Informatique"
    }],
    animationEnabled: true,
  
    data: [{        
        type: "doughnut", //type qui peut etre pie-doughnut-bar
        startAngle: 160,//tourne de 160 pour avoir le premier label en face à gauche
        toolTipContent: "{label}",
        // toolTipContent: "<b>{label}</b>: {y}%",
        //  showInLegend: "true", //mettre legende en bas du diagramme
        //  legendText: "{label}",
        indexLabelFontSize: 15, //taille texte
        // indexLabel: "{label} - {y}%", //text affiché sur le diagramme
        radius: "70%" , //definit la taille entière du diagramme
        dataPoints: [                
            { y: 10, label: "C#" },
            { y: 20, label: "Java" },
            { y: 15, label: "JavaScript" },
            { y: 15, label: "Microssoft SQL" },
            { y: 5, label: "php" },
            { y: 10, label: "Html & CSS" },
            { y: 10, label: "Unity" },
                        ]
    }]      
 
};
    $("#Informatique").CanvasJSChart(options1); 
      
}

function Bureau () {
    CanvasJS.addColorSet("color2",
    [//colorSet Array
    "#EE1010",
    "#FF4901",
    "#BF3030",
    "#6D071A",                   
    ]);

    var options2 = {
        animationDuration: 1000,
        colorSet : "color2",
        title: {
            text: "Compétences"
        },
        subtitles: [{
            text: "Bureautique"
        }],
        animationEnabled: true,
        data: [{
            type: "doughnut", //type qui peut etre pie-doughnut-bar
            startAngle: 160,//tourne de 160 pour avoir le premier label en face à gauche
            toolTipContent: "{label}",
            // toolTipContent: "<b>{label}</b>: {y}%",
            //  showInLegend: "true", //mettre legende en bas du diagramme
            //  legendText: "{label}",
            indexLabelFontSize: 15, //taille texte
            // indexLabel: "{label} - {y}%", //text affiché sur le diagramme
            radius: "70%" , //definit la taille entière du diagramme
            dataPoints: [
                { y: 5, label: "Word" },
                { y: 5, label: "Excel" },
                { y: 5, label: "Powerpoint" },
                { y: 5, label: "Publisher" },                
                                 
                            ]
        }]   
    };
    $("#Bureautique").CanvasJSChart(options2);    
}

function Transverses () {
    CanvasJS.addColorSet("color3",
    [//colorSet Array
    "#6D071A",
    "#A5260A",
    "#DE2916",
    "#677179",
    "#C9A0DC",
    "#303030",        
    ]);

        var options3 = {
            animationDuration: 1000,
            colorSet: "color3",
            title: {
                text: "Compétences"
            },
            subtitles: [{
                text: "Transverses"
            }],
            animationEnabled: true,
            data: [{
                type: "doughnut", //type qui peut etre pie-doughnut-bar
                startAngle: 160, //tourne de 160 pour avoir le premier label en face à gauche
                toolTipContent: "{label}",
                // toolTipContent: "<b>{label}</b>: {y}%",
                //  showInLegend: "true", //mettre legende en bas du diagramme
                //  legendText: "{label}",
                indexLabelFontSize: 15, //taille texte
                // indexLabel: "{label} - {y}%", //text affiché sur le diagramme
                radius: "70%",
                
                dataPoints: [
                    { y: 20, label: "Electronique" },
                    { y: 20, label: "Electrotechnique" },                      
                    { y: 30, label: "Gestion de projet" },
                    { y: 30, label: "Automatisme" },
                    { y: 30, label: "SolidWorks" },
                    { y: 30, label: "câblage" },

                                ]
            }]   
        };
        $("#Transverse").CanvasJSChart(options3);    
}

// Appelle des fonctions des diagrammes
Bureau();
Info();
Transverses();

    
    // const dataSource = {
    //     "chart": {
    //       "caption": "Recommended Portfolio Split",
    //       "subcaption": "For a net-worth of $1M",
    //       "showvalues": "1",
    //       "showpercentintooltip": "0",
    //       "numberprefix": "$",
    //       "enablemultislicing": "1",
    //       "theme": "fusion"
    //     },
    //     "data": [
    //       {
    //         "label": "Equity",
    //         "value": "300000"
    //       },
    //       {
    //         "label": "Debt",
    //         "value": "230000"
    //       },
    //       {
    //         "label": "Bullion",
    //         "value": "180000"
    //       },
    //       {
    //         "label": "Real-estate",
    //         "value": "270000"
    //       },
    //       {
    //         "label": "Insurance",
    //         "value": "20000"
    //       }
    //     ]
    //   };
      
    //   FusionCharts.ready(function() {
    //      var myChart = new FusionCharts({
    //         type: "pie3d",
    //         renderAt: "diagramme2",
    //         width: "100%",
    //         height: "100%",
    //         dataFormat: "json",
    //         dataSource
    //      }).render();
    //   });