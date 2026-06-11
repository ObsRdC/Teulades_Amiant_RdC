var wms_layers = [];

var lyr_Ortofotocolorvigente_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "ortofoto_color_vigent",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Ortofoto color vigente',
                            popuplayertitle: 'Ortofoto color vigente',
                            type: '',
                            opacity: 0.800000,
                            
                            
                          });
              wms_layers.push([lyr_Ortofotocolorvigente_0, 0]);
var format_Teulades_RdC_1 = new ol.format.GeoJSON();
var features_Teulades_RdC_1 = format_Teulades_RdC_1.readFeatures(json_Teulades_RdC_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Teulades_RdC_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Teulades_RdC_1.addFeatures(features_Teulades_RdC_1);
var lyr_Teulades_RdC_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Teulades_RdC_1, 
                style: style_Teulades_RdC_1,
                popuplayertitle: 'Teulades_RdC',
                interactive: true,
    title: 'Teulades_RdC<br />\
    <img src="styles/legend/Teulades_RdC_1_0.png" /> Teulades sense amiant<br />\
    <img src="styles/legend/Teulades_RdC_1_1.png" /> Teulades amb amiant<br />' });
var format_RieraDeCaldeslimits_administratius_2 = new ol.format.GeoJSON();
var features_RieraDeCaldeslimits_administratius_2 = format_RieraDeCaldeslimits_administratius_2.readFeatures(json_RieraDeCaldeslimits_administratius_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RieraDeCaldeslimits_administratius_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RieraDeCaldeslimits_administratius_2.addFeatures(features_RieraDeCaldeslimits_administratius_2);
var lyr_RieraDeCaldeslimits_administratius_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RieraDeCaldeslimits_administratius_2, 
                style: style_RieraDeCaldeslimits_administratius_2,
                popuplayertitle: 'RieraDeCaldes — limits_administratius',
                interactive: false,
                title: '<img src="styles/legend/RieraDeCaldeslimits_administratius_2.png" /> RieraDeCaldes — limits_administratius'
            });
var group_Mapesdefons = new ol.layer.Group({
                                layers: [lyr_Ortofotocolorvigente_0,],
                                fold: 'close',
                                title: 'Mapes de fons'});

lyr_Ortofotocolorvigente_0.setVisible(true);lyr_Teulades_RdC_1.setVisible(true);lyr_RieraDeCaldeslimits_administratius_2.setVisible(true);
var layersList = [group_Mapesdefons,lyr_Teulades_RdC_1,lyr_RieraDeCaldeslimits_administratius_2];
lyr_Teulades_RdC_1.set('fieldAliases', {'fid': 'fid', 'conditionOfConstruction': 'Estat de la construcció', 'reference': 'Referència', 'localId': 'localId', 'currentUse': 'Ús habitual', 'numberOfBuildingUnits': 'Nombre d\'unitats construïdes dins l\'edifici', 'numberOfDwellings': 'Nombre d\'habitatges', 'numberOfFloorsAboveGround': 'numberOfFloorsAboveGround', 'value': 'value', 'value_uom': 'value_uom', 'Amiant': 'Amiant', 'Taula_amiant_NOMMUNI': 'Nom del municipi', 'Taula_amiant_adreça': 'Adreça', 'Taula_amiant_ref_cadast': 'Taula_amiant_ref_cadast', 'Taula_amiant_Pes en kg': 'Pes estimat de la coberta (Kg)', 'Taula_amiant_Dimensió en m²': 'Dimensió de la coberta (m²)', 'Taula_amiant_Nombre d\'elements amb amiant': 'Nombre de cobertes amb amiant', });
lyr_RieraDeCaldeslimits_administratius_2.set('fieldAliases', {'fid': 'fid', 'codi_ine': 'codi_ine', 'codi_municipi': 'codi_municipi', 'nom_municipi': 'nom_municipi', 'codi_comarca': 'codi_comarca', 'nom_comarca': 'nom_comarca', 'cap_comarca': 'cap_comarca', 'codi_vegueria': 'codi_vegueria', 'nom_vegueria': 'nom_vegueria', 'cap_vegueria': 'cap_vegueria', 'codi_provincia': 'codi_provincia', 'nom_provincia': 'nom_provincia', 'cap_provincia': 'cap_provincia', 'area_km': 'area_km', 'altitud_metres': 'altitud_metres', 'pob_dones_24': 'pob_dones_24', 'pob_homes_24': 'pob_homes_24', 'pob_total_24': 'pob_total_24', 'edat_mitjana_24': 'edat_mitjana_24', 'per_pob_menys16_24': 'per_pob_menys16_24', 'per_pob_mes64_24': 'per_pob_mes64_24', 'tamany_mitja_llar_22': 'tamany_mitja_llar_22', 'per_pob_espanyola_22': 'per_pob_espanyola_22', 'per_pob_extranjera_22': 'per_pob_extranjera_22', 'renda_neta_mitjana_persona_22': 'renda_neta_mitjana_persona_22', 'renda_neta_mitjana_llar_22': 'renda_neta_mitjana_llar_22', 'renda_bruta_mitjana_persona_22': 'renda_bruta_mitjana_persona_22', 'renda_bruta_mitjana_persona_21': 'renda_bruta_mitjana_persona_21', 'per_dif_renda_bruta_mitjana_persona_22_22': 'per_dif_renda_bruta_mitjana_persona_22_22', 'renda_bruta_mitjana_llar_22': 'renda_bruta_mitjana_llar_22', 'nombre_rebuts_ibi_22': 'nombre_rebuts_ibi_22', 'quota_integra_ibi_22': 'quota_integra_ibi_22', 'parc_vehicles_total_22': 'parc_vehicles_total_22', 'residus_kg_hab_dia_21': 'residus_kg_hab_dia_21', 'codi_ine_red': 'codi_ine_red', 'datos_para_mapa_municipios_Municipi': 'datos_para_mapa_municipios_Municipi', 'datos_para_mapa_municipios_Incremento_Anual_Pct': 'datos_para_mapa_municipios_Incremento_Anual_Pct', 'datos_para_mapa_municipios_Significativo': 'datos_para_mapa_municipios_Significativo', 'datos_para_mapa_municipios_P_Valor': 'datos_para_mapa_municipios_P_Valor', 'datos_para_mapa_municipios_Latitut': 'datos_para_mapa_municipios_Latitut', 'datos_para_mapa_municipios_Longitut': 'datos_para_mapa_municipios_Longitut', });
lyr_Teulades_RdC_1.set('fieldImages', {'fid': 'TextEdit', 'conditionOfConstruction': 'TextEdit', 'reference': 'TextEdit', 'localId': 'TextEdit', 'currentUse': 'TextEdit', 'numberOfBuildingUnits': 'Range', 'numberOfDwellings': 'Range', 'numberOfFloorsAboveGround': 'TextEdit', 'value': 'Range', 'value_uom': 'TextEdit', 'Amiant': 'Range', 'Taula_amiant_NOMMUNI': 'TextEdit', 'Taula_amiant_adreça': 'TextEdit', 'Taula_amiant_ref_cadast': 'TextEdit', 'Taula_amiant_Pes en kg': 'TextEdit', 'Taula_amiant_Dimensió en m²': 'TextEdit', 'Taula_amiant_Nombre d\'elements amb amiant': 'TextEdit', });
lyr_RieraDeCaldeslimits_administratius_2.set('fieldImages', {'fid': 'TextEdit', 'codi_ine': 'TextEdit', 'codi_municipi': 'TextEdit', 'nom_municipi': 'TextEdit', 'codi_comarca': 'TextEdit', 'nom_comarca': 'TextEdit', 'cap_comarca': 'TextEdit', 'codi_vegueria': '', 'nom_vegueria': '', 'cap_vegueria': '', 'codi_provincia': '', 'nom_provincia': '', 'cap_provincia': '', 'area_km': 'TextEdit', 'altitud_metres': 'Range', 'pob_dones_24': 'Range', 'pob_homes_24': 'Range', 'pob_total_24': 'Range', 'edat_mitjana_24': 'TextEdit', 'per_pob_menys16_24': 'TextEdit', 'per_pob_mes64_24': 'TextEdit', 'tamany_mitja_llar_22': 'TextEdit', 'per_pob_espanyola_22': 'TextEdit', 'per_pob_extranjera_22': 'TextEdit', 'renda_neta_mitjana_persona_22': 'Range', 'renda_neta_mitjana_llar_22': 'Range', 'renda_bruta_mitjana_persona_22': 'Range', 'renda_bruta_mitjana_persona_21': 'Range', 'per_dif_renda_bruta_mitjana_persona_22_22': 'TextEdit', 'renda_bruta_mitjana_llar_22': 'Range', 'nombre_rebuts_ibi_22': 'Range', 'quota_integra_ibi_22': 'Range', 'parc_vehicles_total_22': 'Range', 'residus_kg_hab_dia_21': 'TextEdit', 'codi_ine_red': 'Range', 'datos_para_mapa_municipios_Municipi': 'TextEdit', 'datos_para_mapa_municipios_Incremento_Anual_Pct': 'TextEdit', 'datos_para_mapa_municipios_Significativo': 'TextEdit', 'datos_para_mapa_municipios_P_Valor': 'TextEdit', 'datos_para_mapa_municipios_Latitut': 'TextEdit', 'datos_para_mapa_municipios_Longitut': 'TextEdit', });
lyr_Teulades_RdC_1.set('fieldLabels', {'fid': 'hidden field', 'conditionOfConstruction': 'inline label - visible with data', 'reference': 'inline label - always visible', 'localId': 'hidden field', 'currentUse': 'inline label - visible with data', 'numberOfBuildingUnits': 'inline label - visible with data', 'numberOfDwellings': 'inline label - visible with data', 'numberOfFloorsAboveGround': 'hidden field', 'value': 'hidden field', 'value_uom': 'hidden field', 'Amiant': 'hidden field', 'Taula_amiant_NOMMUNI': 'inline label - always visible', 'Taula_amiant_adreça': 'inline label - visible with data', 'Taula_amiant_ref_cadast': 'hidden field', 'Taula_amiant_Pes en kg': 'inline label - visible with data', 'Taula_amiant_Dimensió en m²': 'inline label - visible with data', 'Taula_amiant_Nombre d\'elements amb amiant': 'inline label - visible with data', });
lyr_RieraDeCaldeslimits_administratius_2.set('fieldLabels', {'fid': 'hidden field', 'codi_ine': 'hidden field', 'codi_municipi': 'hidden field', 'nom_municipi': 'hidden field', 'codi_comarca': 'hidden field', 'nom_comarca': 'hidden field', 'cap_comarca': 'no label', 'codi_vegueria': 'no label', 'nom_vegueria': 'no label', 'cap_vegueria': 'no label', 'codi_provincia': 'no label', 'nom_provincia': 'no label', 'cap_provincia': 'no label', 'area_km': 'no label', 'altitud_metres': 'no label', 'pob_dones_24': 'no label', 'pob_homes_24': 'no label', 'pob_total_24': 'no label', 'edat_mitjana_24': 'no label', 'per_pob_menys16_24': 'no label', 'per_pob_mes64_24': 'no label', 'tamany_mitja_llar_22': 'no label', 'per_pob_espanyola_22': 'no label', 'per_pob_extranjera_22': 'no label', 'renda_neta_mitjana_persona_22': 'no label', 'renda_neta_mitjana_llar_22': 'no label', 'renda_bruta_mitjana_persona_22': 'no label', 'renda_bruta_mitjana_persona_21': 'no label', 'per_dif_renda_bruta_mitjana_persona_22_22': 'no label', 'renda_bruta_mitjana_llar_22': 'no label', 'nombre_rebuts_ibi_22': 'no label', 'quota_integra_ibi_22': 'no label', 'parc_vehicles_total_22': 'no label', 'residus_kg_hab_dia_21': 'no label', 'codi_ine_red': 'no label', 'datos_para_mapa_municipios_Municipi': 'no label', 'datos_para_mapa_municipios_Incremento_Anual_Pct': 'no label', 'datos_para_mapa_municipios_Significativo': 'no label', 'datos_para_mapa_municipios_P_Valor': 'no label', 'datos_para_mapa_municipios_Latitut': 'no label', 'datos_para_mapa_municipios_Longitut': 'no label', });
lyr_RieraDeCaldeslimits_administratius_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});