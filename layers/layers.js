var wms_layers = [];

var format_zsf_sklyp_0 = new ol.format.GeoJSON();
var features_zsf_sklyp_0 = format_zsf_sklyp_0.readFeatures(json_zsf_sklyp_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zsf_sklyp_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zsf_sklyp_0.addFeatures(features_zsf_sklyp_0);
var lyr_zsf_sklyp_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zsf_sklyp_0, 
                style: style_zsf_sklyp_0,
                popuplayertitle: 'zsf_sklyp',
                interactive: true,
    title: 'zsf_sklyp<br />\
    <img src="styles/legend/zsf_sklyp_0_0.png" /> 668-1<br />\
    <img src="styles/legend/zsf_sklyp_0_1.png" /> 668-2<br />\
    <img src="styles/legend/zsf_sklyp_0_2.png" /> 668-3<br />\
    <img src="styles/legend/zsf_sklyp_0_3.png" /> 668-4<br />\
    <img src="styles/legend/zsf_sklyp_0_4.png" /> <br />' });
var group_ZPDRIS = new ol.layer.Group({
                                layers: [lyr_zsf_sklyp_0,],
                                fold: 'open',
                                title: 'ZPDRIS'});

lyr_zsf_sklyp_0.setVisible(true);
var layersList = [group_ZPDRIS];
lyr_zsf_sklyp_0.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'tpd_tpd_id': 'tpd_tpd_id', 'NAUD_BUD': 'NAUD_BUD', 'NFORMA': 'NFORMA', 'PAGR_PASK': 'PAGR_PASK', 'SAVININKAS': 'SAVININKAS', 'SERVPLOTAS': 'SERVPLOTAS', 'SERVTEISE': 'SERVTEISE', 'SKL': 'SKL', 'STATINIAI': 'STATINIAI', 'SZNS': 'SZNS', 'VFORMA': 'VFORMA', });
lyr_zsf_sklyp_0.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'tpd_tpd_id': 'TextEdit', 'NAUD_BUD': 'ValueMap', 'NFORMA': 'TextEdit', 'PAGR_PASK': 'ValueMap', 'SAVININKAS': 'TextEdit', 'SERVPLOTAS': 'TextEdit', 'SERVTEISE': 'TextEdit', 'SKL': 'TextEdit', 'STATINIAI': 'TextEdit', 'SZNS': 'TextEdit', 'VFORMA': 'TextEdit', });
lyr_zsf_sklyp_0.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'tpd_tpd_id': 'no label', 'NAUD_BUD': 'no label', 'NFORMA': 'no label', 'PAGR_PASK': 'no label', 'SAVININKAS': 'no label', 'SERVPLOTAS': 'no label', 'SERVTEISE': 'no label', 'SKL': 'no label', 'STATINIAI': 'no label', 'SZNS': 'no label', 'VFORMA': 'no label', });
lyr_zsf_sklyp_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});