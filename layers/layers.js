var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LimitesPNRduPerche2026_1 = new ol.format.GeoJSON();
var features_LimitesPNRduPerche2026_1 = format_LimitesPNRduPerche2026_1.readFeatures(json_LimitesPNRduPerche2026_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesPNRduPerche2026_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesPNRduPerche2026_1.addFeatures(features_LimitesPNRduPerche2026_1);
var lyr_LimitesPNRduPerche2026_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesPNRduPerche2026_1, 
                style: style_LimitesPNRduPerche2026_1,
                popuplayertitle: 'Limites PNR du Perche 2026',
                interactive: false,
                title: '<img src="styles/legend/LimitesPNRduPerche2026_1.png" /> Limites PNR du Perche 2026'
            });
var format_bouclespied_2 = new ol.format.GeoJSON();
var features_bouclespied_2 = format_bouclespied_2.readFeatures(json_bouclespied_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bouclespied_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bouclespied_2.addFeatures(features_bouclespied_2);
var lyr_bouclespied_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bouclespied_2, 
                style: style_bouclespied_2,
                popuplayertitle: 'boucles à pied',
                interactive: true,
                title: '<img src="styles/legend/bouclespied_2.png" /> boucles à pied'
            });
var format_bouclesvlo_3 = new ol.format.GeoJSON();
var features_bouclesvlo_3 = format_bouclesvlo_3.readFeatures(json_bouclesvlo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bouclesvlo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bouclesvlo_3.addFeatures(features_bouclesvlo_3);
var lyr_bouclesvlo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bouclesvlo_3, 
                style: style_bouclesvlo_3,
                popuplayertitle: 'boucles à vélo',
                interactive: true,
                title: '<img src="styles/legend/bouclesvlo_3.png" /> boucles à vélo'
            });
var format_bouclesenVTT_4 = new ol.format.GeoJSON();
var features_bouclesenVTT_4 = format_bouclesenVTT_4.readFeatures(json_bouclesenVTT_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bouclesenVTT_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bouclesenVTT_4.addFeatures(features_bouclesenVTT_4);
var lyr_bouclesenVTT_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bouclesenVTT_4, 
                style: style_bouclesenVTT_4,
                popuplayertitle: 'boucles en VTT',
                interactive: true,
                title: '<img src="styles/legend/bouclesenVTT_4.png" /> boucles en VTT'
            });
var format_enitinrance_5 = new ol.format.GeoJSON();
var features_enitinrance_5 = format_enitinrance_5.readFeatures(json_enitinrance_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_enitinrance_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_enitinrance_5.addFeatures(features_enitinrance_5);
var lyr_enitinrance_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_enitinrance_5, 
                style: style_enitinrance_5,
                popuplayertitle: 'en itinérance',
                interactive: true,
                title: '<img src="styles/legend/enitinrance_5.png" /> en itinérance'
            });
var format_Candidatsaumarquage_6 = new ol.format.GeoJSON();
var features_Candidatsaumarquage_6 = format_Candidatsaumarquage_6.readFeatures(json_Candidatsaumarquage_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Candidatsaumarquage_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Candidatsaumarquage_6.addFeatures(features_Candidatsaumarquage_6);
var lyr_Candidatsaumarquage_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Candidatsaumarquage_6, 
                style: style_Candidatsaumarquage_6,
                popuplayertitle: 'Candidats au marquage',
                interactive: true,
                title: '<img src="styles/legend/Candidatsaumarquage_6.png" /> Candidats au marquage'
            });
var format_Partenairesdelamarque_7 = new ol.format.GeoJSON();
var features_Partenairesdelamarque_7 = format_Partenairesdelamarque_7.readFeatures(json_Partenairesdelamarque_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Partenairesdelamarque_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Partenairesdelamarque_7.addFeatures(features_Partenairesdelamarque_7);
var lyr_Partenairesdelamarque_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Partenairesdelamarque_7, 
                style: style_Partenairesdelamarque_7,
                popuplayertitle: 'Partenaires de la marque',
                interactive: true,
                title: '<img src="styles/legend/Partenairesdelamarque_7.png" /> Partenaires de la marque'
            });

lyr_OSMStandard_0.setVisible(true);lyr_LimitesPNRduPerche2026_1.setVisible(true);lyr_bouclespied_2.setVisible(false);lyr_bouclesvlo_3.setVisible(false);lyr_bouclesenVTT_4.setVisible(false);lyr_enitinrance_5.setVisible(true);lyr_Candidatsaumarquage_6.setVisible(true);lyr_Partenairesdelamarque_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_LimitesPNRduPerche2026_1,lyr_bouclespied_2,lyr_bouclesvlo_3,lyr_bouclesenVTT_4,lyr_enitinrance_5,lyr_Candidatsaumarquage_6,lyr_Partenairesdelamarque_7];
lyr_LimitesPNRduPerche2026_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_bouclespied_2.set('fieldAliases', {'fid': 'fid', 'nom': 'nom', 'longueur (en km)': 'longueur (en km)', 'duree': 'duree', 'depart': 'depart', 'difficulte': 'difficulte', });
lyr_bouclesvlo_3.set('fieldAliases', {'fid': 'fid', 'nom': 'nom', 'longueur (en km)': 'longueur (en km)', 'duree': 'duree', 'depart': 'depart', 'difficulte': 'difficulte', });
lyr_bouclesenVTT_4.set('fieldAliases', {'fid': 'fid', 'nom': 'nom', 'longueur (en km)': 'longueur (en km)', 'duree': 'duree', 'depart': 'depart', 'difficulte': 'difficulte', });
lyr_enitinrance_5.set('fieldAliases', {'fid': 'fid', 'nom': 'nom', 'depart': 'depart', 'arrivee': 'arrivee', 'longueur (en km)': 'longueur (en km)', 'difficulte': 'difficulte', });
lyr_Candidatsaumarquage_6.set('fieldAliases', {'fid': 'fid', 'nom': 'nom', 'adresse': 'adresse', 'commune': 'commune', 'activité': 'activité', });
lyr_Partenairesdelamarque_7.set('fieldAliases', {'fid': 'fid', 'nom': 'nom', 'adresse': 'adresse', 'commune': 'commune', 'activité': 'activité', 'départemt': 'départemt', 'longitude': 'longitude', 'latitude': 'latitude', });
lyr_LimitesPNRduPerche2026_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_bouclespied_2.set('fieldImages', {'fid': 'TextEdit', 'nom': 'TextEdit', 'longueur (en km)': 'TextEdit', 'duree': 'TextEdit', 'depart': 'TextEdit', 'difficulte': 'TextEdit', });
lyr_bouclesvlo_3.set('fieldImages', {'fid': 'TextEdit', 'nom': 'TextEdit', 'longueur (en km)': 'TextEdit', 'duree': 'TextEdit', 'depart': 'TextEdit', 'difficulte': 'TextEdit', });
lyr_bouclesenVTT_4.set('fieldImages', {'fid': 'TextEdit', 'nom': 'TextEdit', 'longueur (en km)': 'TextEdit', 'duree': 'TextEdit', 'depart': 'TextEdit', 'difficulte': 'TextEdit', });
lyr_enitinrance_5.set('fieldImages', {'fid': 'TextEdit', 'nom': 'TextEdit', 'depart': 'TextEdit', 'arrivee': 'TextEdit', 'longueur (en km)': 'TextEdit', 'difficulte': 'TextEdit', });
lyr_Candidatsaumarquage_6.set('fieldImages', {'fid': 'TextEdit', 'nom': 'TextEdit', 'adresse': 'TextEdit', 'commune': 'TextEdit', 'activité': 'TextEdit', });
lyr_Partenairesdelamarque_7.set('fieldImages', {'fid': 'TextEdit', 'nom': 'TextEdit', 'adresse': 'TextEdit', 'commune': 'TextEdit', 'activité': 'TextEdit', 'départemt': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', });
lyr_LimitesPNRduPerche2026_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_bouclespied_2.set('fieldLabels', {'fid': 'hidden field', 'nom': 'no label', 'longueur (en km)': 'inline label - visible with data', 'duree': 'inline label - visible with data', 'depart': 'inline label - visible with data', 'difficulte': 'inline label - visible with data', });
lyr_bouclesvlo_3.set('fieldLabels', {'fid': 'hidden field', 'nom': 'no label', 'longueur (en km)': 'inline label - visible with data', 'duree': 'inline label - visible with data', 'depart': 'inline label - visible with data', 'difficulte': 'inline label - visible with data', });
lyr_bouclesenVTT_4.set('fieldLabels', {'fid': 'hidden field', 'nom': 'no label', 'longueur (en km)': 'inline label - visible with data', 'duree': 'inline label - visible with data', 'depart': 'inline label - visible with data', 'difficulte': 'inline label - visible with data', });
lyr_enitinrance_5.set('fieldLabels', {'fid': 'hidden field', 'nom': 'no label', 'depart': 'inline label - visible with data', 'arrivee': 'inline label - visible with data', 'longueur (en km)': 'inline label - visible with data', 'difficulte': 'inline label - visible with data', });
lyr_Candidatsaumarquage_6.set('fieldLabels', {'fid': 'hidden field', 'nom': 'no label', 'adresse': 'no label', 'commune': 'no label', 'activité': 'no label', });
lyr_Partenairesdelamarque_7.set('fieldLabels', {'fid': 'hidden field', 'nom': 'no label', 'adresse': 'no label', 'commune': 'no label', 'activité': 'no label', 'départemt': 'hidden field', 'longitude': 'hidden field', 'latitude': 'hidden field', });
lyr_Partenairesdelamarque_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});