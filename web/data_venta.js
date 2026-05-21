const VENTA_DATA = {
  "meta": {
    "tipo": "venta",
    "moneda": "USD",
    "fecha_datos": "2020",
    "fuente": "Properati / ZonaProp",
    "algoritmo": "XGBoost"
  },
  "modelo": {
    "r2": 0.9195,
    "mae": 31289.0,
    "rmse": 58446.0,
    "mape": 12.4,
    "pct_dentro_15": 69.9,
    "mae_pct": 12.8,
    "n_train": 35895,
    "n_test": 8974,
    "total_data": 44869
  },
  "hiperparametros": {
    "max_depth": 8,
    "learning_rate": 0.06392901255353357,
    "subsample": 0.8520752564828743,
    "colsample_bytree": 0.6266509699351767,
    "min_child_weight": 1,
    "reg_alpha": 0.0006422371541244382,
    "reg_lambda": 0.47098903622784677
  },
  "kpis": {
    "precio_mediano": 178000,
    "precio_m2_mediano": 2545.0,
    "n_propiedades": 44869,
    "p10": 90000,
    "p25": 123600,
    "p75": 285000,
    "p90": 470000
  },
  "distribucion": {
    "bins_edge": [
      50000,
      75000,
      100000,
      125000,
      150000,
      175000,
      200000,
      225000,
      250000,
      275000,
      300000,
      325000,
      350000,
      375000,
      400000,
      425000,
      450000,
      475000,
      500000,
      525000,
      550000,
      575000,
      600000,
      625000,
      650000,
      675000,
      700000,
      725000,
      750000,
      775000,
      800000,
      825000,
      850000,
      875000,
      900000,
      925000,
      950000,
      975000,
      1000000,
      1025000,
      1050000,
      1075000,
      1100000,
      1125000,
      1150000,
      1175000,
      1200000
    ],
    "counts": [
      1513,
      4923,
      4938,
      5892,
      4497,
      3818,
      2491,
      2631,
      2077,
      1877,
      1113,
      1050,
      1054,
      967,
      549,
      545,
      515,
      539,
      233,
      249,
      304,
      315,
      220,
      174,
      188,
      217,
      146,
      114,
      168,
      174,
      76,
      62,
      124,
      113,
      53,
      33,
      83,
      87,
      36,
      11,
      36,
      18,
      63,
      8,
      54,
      111
    ]
  },
  "barrios": [
    {
      "barrio": "Puerto Madero",
      "precio_mediano": 650000,
      "p25": 400005,
      "p75": 932500,
      "n": 804,
      "precio_m2_mediano": 5682
    },
    {
      "barrio": "Recoleta",
      "precio_mediano": 310000,
      "p25": 189000,
      "p75": 485000,
      "n": 3313,
      "precio_m2_mediano": 3190
    },
    {
      "barrio": "Las Cañitas",
      "precio_mediano": 307000,
      "p25": 194832,
      "p75": 485092,
      "n": 414,
      "precio_m2_mediano": 3536
    },
    {
      "barrio": "Belgrano",
      "precio_mediano": 260000,
      "p25": 165000,
      "p75": 415000,
      "n": 3773,
      "precio_m2_mediano": 3147
    },
    {
      "barrio": "Palermo",
      "precio_mediano": 245000,
      "p25": 160000,
      "p75": 395000,
      "n": 5161,
      "precio_m2_mediano": 3247
    },
    {
      "barrio": "Barrio Norte",
      "precio_mediano": 240000,
      "p25": 153800,
      "p75": 350000,
      "n": 1757,
      "precio_m2_mediano": 2973
    },
    {
      "barrio": "Nuñez",
      "precio_mediano": 213150,
      "p25": 150000,
      "p75": 337250,
      "n": 1264,
      "precio_m2_mediano": 3075
    },
    {
      "barrio": "Retiro",
      "precio_mediano": 199500,
      "p25": 125500,
      "p75": 395000,
      "n": 538,
      "precio_m2_mediano": 2829
    },
    {
      "barrio": "Villa Devoto",
      "precio_mediano": 190000,
      "p25": 135000,
      "p75": 299000,
      "n": 954,
      "precio_m2_mediano": 2200
    },
    {
      "barrio": "Colegiales",
      "precio_mediano": 186000,
      "p25": 140000,
      "p75": 275000,
      "n": 766,
      "precio_m2_mediano": 2709
    },
    {
      "barrio": "Barracas",
      "precio_mediano": 180000,
      "p25": 124000,
      "p75": 259000,
      "n": 521,
      "precio_m2_mediano": 2238
    },
    {
      "barrio": "Villa Urquiza",
      "precio_mediano": 179000,
      "p25": 133000,
      "p75": 247000,
      "n": 1985,
      "precio_m2_mediano": 2676
    },
    {
      "barrio": "Caballito",
      "precio_mediano": 179000,
      "p25": 128000,
      "p75": 267750,
      "n": 3366,
      "precio_m2_mediano": 2500
    },
    {
      "barrio": "Coghlan",
      "precio_mediano": 175400,
      "p25": 136750,
      "p75": 265000,
      "n": 379,
      "precio_m2_mediano": 2667
    },
    {
      "barrio": "Parque Centenario",
      "precio_mediano": 168250,
      "p25": 120000,
      "p75": 228750,
      "n": 302,
      "precio_m2_mediano": 2375
    },
    {
      "barrio": "Saavedra",
      "precio_mediano": 168000,
      "p25": 120000,
      "p75": 235000,
      "n": 721,
      "precio_m2_mediano": 2442
    },
    {
      "barrio": "Villa Pueyrredón",
      "precio_mediano": 164000,
      "p25": 120000,
      "p75": 230000,
      "n": 483,
      "precio_m2_mediano": 2245
    },
    {
      "barrio": "Villa Ortuzar",
      "precio_mediano": 162500,
      "p25": 115000,
      "p75": 250000,
      "n": 188,
      "precio_m2_mediano": 2405
    },
    {
      "barrio": "Villa Del Parque",
      "precio_mediano": 160000,
      "p25": 119925,
      "p75": 225000,
      "n": 894,
      "precio_m2_mediano": 2257
    },
    {
      "barrio": "Versalles",
      "precio_mediano": 160000,
      "p25": 120000,
      "p75": 210094,
      "n": 167,
      "precio_m2_mediano": 1844
    },
    {
      "barrio": "Mataderos",
      "precio_mediano": 155000,
      "p25": 115000,
      "p75": 214920,
      "n": 441,
      "precio_m2_mediano": 1587
    },
    {
      "barrio": "Parque Chas",
      "precio_mediano": 154500,
      "p25": 115000,
      "p75": 250000,
      "n": 180,
      "precio_m2_mediano": 2265
    },
    {
      "barrio": "Almagro",
      "precio_mediano": 152000,
      "p25": 110000,
      "p75": 200500,
      "n": 2124,
      "precio_m2_mediano": 2352
    },
    {
      "barrio": "Flores",
      "precio_mediano": 149900,
      "p25": 110000,
      "p75": 220000,
      "n": 1563,
      "precio_m2_mediano": 2000
    },
    {
      "barrio": "Agronomía",
      "precio_mediano": 149500,
      "p25": 121000,
      "p75": 243500,
      "n": 114,
      "precio_m2_mediano": 2168
    },
    {
      "barrio": "Villa Santa Rita",
      "precio_mediano": 146700,
      "p25": 114500,
      "p75": 191025,
      "n": 220,
      "precio_m2_mediano": 2060
    },
    {
      "barrio": "Villa Crespo",
      "precio_mediano": 145000,
      "p25": 113000,
      "p75": 198000,
      "n": 1952,
      "precio_m2_mediano": 2415
    },
    {
      "barrio": "Chacarita",
      "precio_mediano": 145000,
      "p25": 108500,
      "p75": 213000,
      "n": 347,
      "precio_m2_mediano": 2368
    },
    {
      "barrio": "Villa Real",
      "precio_mediano": 143450,
      "p25": 109875,
      "p75": 198550,
      "n": 96,
      "precio_m2_mediano": 1770
    },
    {
      "barrio": "Parque Chacabuco",
      "precio_mediano": 143000,
      "p25": 100000,
      "p75": 210000,
      "n": 517,
      "precio_m2_mediano": 1829
    },
    {
      "barrio": "Villa Luro",
      "precio_mediano": 140875,
      "p25": 110000,
      "p75": 189975,
      "n": 414,
      "precio_m2_mediano": 2040
    },
    {
      "barrio": "Villa General Mitre",
      "precio_mediano": 139500,
      "p25": 105000,
      "p75": 198375,
      "n": 248,
      "precio_m2_mediano": 1994
    },
    {
      "barrio": "San Telmo",
      "precio_mediano": 139000,
      "p25": 102100,
      "p75": 189000,
      "n": 642,
      "precio_m2_mediano": 2193
    },
    {
      "barrio": "Paternal",
      "precio_mediano": 138562,
      "p25": 105000,
      "p75": 184000,
      "n": 425,
      "precio_m2_mediano": 1985
    },
    {
      "barrio": "Abasto",
      "precio_mediano": 137000,
      "p25": 102000,
      "p75": 189000,
      "n": 177,
      "precio_m2_mediano": 2264
    },
    {
      "barrio": "Liniers",
      "precio_mediano": 136500,
      "p25": 101000,
      "p75": 219750,
      "n": 502,
      "precio_m2_mediano": 1888
    },
    {
      "barrio": "Velez Sarsfield",
      "precio_mediano": 135000,
      "p25": 103584,
      "p75": 199500,
      "n": 107,
      "precio_m2_mediano": 1818
    },
    {
      "barrio": "Tribunales",
      "precio_mediano": 132000,
      "p25": 79675,
      "p75": 190000,
      "n": 96,
      "precio_m2_mediano": 2038
    },
    {
      "barrio": "Boedo",
      "precio_mediano": 130000,
      "p25": 96000,
      "p75": 180000,
      "n": 533,
      "precio_m2_mediano": 2000
    },
    {
      "barrio": "Pompeya",
      "precio_mediano": 130000,
      "p25": 85000,
      "p75": 185475,
      "n": 164,
      "precio_m2_mediano": 1150
    },
    {
      "barrio": "Floresta",
      "precio_mediano": 129000,
      "p25": 92000,
      "p75": 180000,
      "n": 646,
      "precio_m2_mediano": 1762
    },
    {
      "barrio": "Monte Castro",
      "precio_mediano": 129000,
      "p25": 98000,
      "p75": 185000,
      "n": 389,
      "precio_m2_mediano": 2000
    },
    {
      "barrio": "Parque Avellaneda",
      "precio_mediano": 127250,
      "p25": 95000,
      "p75": 185000,
      "n": 160,
      "precio_m2_mediano": 1534
    },
    {
      "barrio": "Parque Patricios",
      "precio_mediano": 125000,
      "p25": 92750,
      "p75": 185250,
      "n": 320,
      "precio_m2_mediano": 1809
    },
    {
      "barrio": "Centro / Microcentro",
      "precio_mediano": 125000,
      "p25": 87000,
      "p75": 175000,
      "n": 316,
      "precio_m2_mediano": 2236
    },
    {
      "barrio": "Monserrat",
      "precio_mediano": 121500,
      "p25": 89075,
      "p75": 168000,
      "n": 506,
      "precio_m2_mediano": 1978
    },
    {
      "barrio": "Balvanera",
      "precio_mediano": 120000,
      "p25": 89500,
      "p75": 165000,
      "n": 1305,
      "precio_m2_mediano": 2000
    },
    {
      "barrio": "Congreso",
      "precio_mediano": 120000,
      "p25": 89000,
      "p75": 167000,
      "n": 361,
      "precio_m2_mediano": 2059
    },
    {
      "barrio": "Villa Riachuelo",
      "precio_mediano": 120000,
      "p25": 97000,
      "p75": 160000,
      "n": 33,
      "precio_m2_mediano": 1373
    },
    {
      "barrio": "San Cristobal",
      "precio_mediano": 120000,
      "p25": 90000,
      "p75": 162703,
      "n": 633,
      "precio_m2_mediano": 1963
    },
    {
      "barrio": "Once",
      "precio_mediano": 120000,
      "p25": 86000,
      "p75": 169000,
      "n": 333,
      "precio_m2_mediano": 1939
    },
    {
      "barrio": "Villa Soldati",
      "precio_mediano": 117000,
      "p25": 85750,
      "p75": 184000,
      "n": 36,
      "precio_m2_mediano": 881
    },
    {
      "barrio": "San Nicolás",
      "precio_mediano": 115000,
      "p25": 82500,
      "p75": 165500,
      "n": 427,
      "precio_m2_mediano": 2208
    },
    {
      "barrio": "Villa Lugano",
      "precio_mediano": 107000,
      "p25": 76175,
      "p75": 175000,
      "n": 346,
      "precio_m2_mediano": 1178
    },
    {
      "barrio": "Boca",
      "precio_mediano": 106000,
      "p25": 82500,
      "p75": 135000,
      "n": 191,
      "precio_m2_mediano": 1711
    },
    {
      "barrio": "Constitución",
      "precio_mediano": 90000,
      "p25": 73000,
      "p75": 119675,
      "n": 250,
      "precio_m2_mediano": 1622
    }
  ],
  "impacto_features": [
    {
      "key": "banos_2vs1",
      "label": "2 banos vs 1 bano",
      "delta_usd": 22147.0,
      "precio_con": 247825.0,
      "precio_sin": 225678.0,
      "n_con": 17168,
      "pct_con": 38.3
    },
    {
      "key": "amb_3_vs_2",
      "label": "3 ambientes vs 2 ambientes",
      "delta_usd": 10750.0,
      "precio_con": 245313.0,
      "precio_sin": 234563.0,
      "n_con": 14309,
      "pct_con": 31.9
    },
    {
      "key": "es_casa",
      "label": "Casa vs Departamento",
      "delta_usd": -7485.0,
      "precio_con": 238170.0,
      "precio_sin": 245654.0,
      "n_con": 1778,
      "pct_con": 4.0
    },
    {
      "key": "es_ph",
      "label": "PH vs Departamento",
      "delta_usd": -7397.0,
      "precio_con": 238257.0,
      "precio_sin": 245654.0,
      "n_con": 5609,
      "pct_con": 12.5
    },
    {
      "key": "amb_2_vs_1",
      "label": "2 ambientes vs monoambiente",
      "delta_usd": 4659.0,
      "precio_con": 234563.0,
      "precio_sin": 229904.0,
      "n_con": 12523,
      "pct_con": 27.9
    },
    {
      "key": "amb_4_vs_3",
      "label": "4 ambientes vs 3 ambientes",
      "delta_usd": 2791.0,
      "precio_con": 248104.0,
      "precio_sin": 245313.0,
      "n_con": 9362,
      "pct_con": 20.9
    }
  ],
  "feature_importances": [
    {
      "feature": "banos",
      "label": "Baños",
      "importance": 0.2001
    },
    {
      "feature": "es_casa",
      "label": "Es Casa",
      "importance": 0.1418
    },
    {
      "feature": "m2_cubierto",
      "label": "Superficie cubierta (m²)",
      "importance": 0.1355
    },
    {
      "feature": "m2_total",
      "label": "Superficie total (m²)",
      "importance": 0.0672
    },
    {
      "feature": "txt_gym",
      "label": "Gimnasio (texto)",
      "importance": 0.0611
    },
    {
      "feature": "precio_med_barrio",
      "label": "Precio mediano del barrio",
      "importance": 0.0539
    },
    {
      "feature": "precio_med_barrio_tipo",
      "label": "Precio mediano barrio × tipo",
      "importance": 0.0383
    },
    {
      "feature": "txt_pileta",
      "label": "Pileta/piscina (texto)",
      "importance": 0.0369
    },
    {
      "feature": "txt_cochera",
      "label": "Cochera (texto)",
      "importance": 0.0341
    },
    {
      "feature": "property_enc",
      "label": "Tipo de propiedad",
      "importance": 0.0274
    },
    {
      "feature": "es_ph",
      "label": "Es PH",
      "importance": 0.0256
    },
    {
      "feature": "ambientes",
      "label": "Ambientes",
      "importance": 0.0194
    },
    {
      "feature": "txt_seguridad",
      "label": "Seguridad/portero (texto)",
      "importance": 0.0179
    },
    {
      "feature": "txt_amenities",
      "label": "Amenities (texto)",
      "importance": 0.0171
    },
    {
      "feature": "txt_a_estrenar",
      "label": "A estrenar (texto)",
      "importance": 0.0124
    },
    {
      "feature": "txt_sum",
      "label": "SUM (texto)",
      "importance": 0.0122
    },
    {
      "feature": "m2_por_bano",
      "label": "m² por baño",
      "importance": 0.0077
    },
    {
      "feature": "m2_por_ambiente",
      "label": "m² por ambiente",
      "importance": 0.0069
    },
    {
      "feature": "banos_por_ambiente",
      "label": "Baños por ambiente",
      "importance": 0.0057
    },
    {
      "feature": "txt_parrilla",
      "label": "Parrilla (texto)",
      "importance": 0.005
    },
    {
      "feature": "txt_jardin",
      "label": "Jardín/patio (texto)",
      "importance": 0.0049
    },
    {
      "feature": "txt_apto_profesional",
      "label": "Apto profesional (texto)",
      "importance": 0.0049
    },
    {
      "feature": "dormitorios",
      "label": "Dormitorios",
      "importance": 0.0048
    },
    {
      "feature": "dist_palermo",
      "label": "Distancia a Bosques de Palermo (km)",
      "importance": 0.0048
    },
    {
      "feature": "dist_recoleta",
      "label": "Distancia a Recoleta (km)",
      "importance": 0.0044
    },
    {
      "feature": "txt_balcon",
      "label": "Balcón (texto)",
      "importance": 0.0042
    },
    {
      "feature": "dist_puerto_madero",
      "label": "Distancia a Puerto Madero (km)",
      "importance": 0.0039
    },
    {
      "feature": "es_monoambiente",
      "label": "Es monoambiente",
      "importance": 0.0035
    },
    {
      "feature": "dist_obelisco",
      "label": "Distancia al Obelisco (km)",
      "importance": 0.0034
    },
    {
      "feature": "ratio_cubierto",
      "label": "% superficie cubierta",
      "importance": 0.0029
    },
    {
      "feature": "txt_ascensor",
      "label": "Ascensor (texto)",
      "importance": 0.0029
    },
    {
      "feature": "txt_piso_num",
      "label": "Número de piso (texto)",
      "importance": 0.0029
    },
    {
      "feature": "txt_terraza",
      "label": "Terraza (texto)",
      "importance": 0.0029
    },
    {
      "feature": "txt_es_interno",
      "label": "Interno (texto)",
      "importance": 0.0029
    },
    {
      "feature": "txt_apto_credito",
      "label": "Apto crédito (texto)",
      "importance": 0.0028
    },
    {
      "feature": "txt_baulera",
      "label": "Baulera (texto)",
      "importance": 0.0026
    },
    {
      "feature": "txt_es_lateral",
      "label": "Lateral (texto)",
      "importance": 0.0025
    },
    {
      "feature": "txt_es_frente",
      "label": "Al frente (texto)",
      "importance": 0.0022
    },
    {
      "feature": "barrio_enc",
      "label": "Barrio",
      "importance": 0.0021
    },
    {
      "feature": "txt_es_contrafrente",
      "label": "Contrafrente (texto)",
      "importance": 0.0021
    },
    {
      "feature": "dias_en_mercado",
      "label": "Días en mercado",
      "importance": 0.002
    },
    {
      "feature": "mes_publicacion",
      "label": "Mes de publicación",
      "importance": 0.002
    },
    {
      "feature": "txt_laundry",
      "label": "Laundry (texto)",
      "importance": 0.002
    }
  ],
  "predictor": {
    "barrios": [
      "Abasto",
      "Agronomía",
      "Almagro",
      "Balvanera",
      "Barracas",
      "Barrio Norte",
      "Belgrano",
      "Boca",
      "Boedo",
      "Caballito",
      "Catalinas",
      "Centro / Microcentro",
      "Chacarita",
      "Coghlan",
      "Colegiales",
      "Congreso",
      "Constitución",
      "Flores",
      "Floresta",
      "Las Cañitas",
      "Liniers",
      "Mataderos",
      "Monserrat",
      "Monte Castro",
      "Nuñez",
      "Once",
      "Palermo",
      "Parque Avellaneda",
      "Parque Centenario",
      "Parque Chacabuco",
      "Parque Chas",
      "Parque Patricios",
      "Paternal",
      "Pompeya",
      "Puerto Madero",
      "Recoleta",
      "Retiro",
      "Saavedra",
      "San Cristobal",
      "San Nicolás",
      "San Telmo",
      "Tribunales",
      "Velez Sarsfield",
      "Versalles",
      "Villa Crespo",
      "Villa Del Parque",
      "Villa Devoto",
      "Villa General Mitre",
      "Villa Lugano",
      "Villa Luro",
      "Villa Ortuzar",
      "Villa Pueyrredón",
      "Villa Real",
      "Villa Riachuelo",
      "Villa Santa Rita",
      "Villa Soldati",
      "Villa Urquiza"
    ],
    "m2_grid": [
      30,
      45,
      55,
      70,
      85,
      100,
      120,
      150,
      180,
      220
    ],
    "ambientes_grid": [
      1,
      2,
      3,
      4,
      5
    ],
    "property_types": [
      "Departamento",
      "Ph",
      "Casa"
    ],
    "precios": {
      "Abasto": {
        "Departamento": {
          "1": [
            69921.0,
            97648.0,
            108379.0,
            134988.0,
            162073.0,
            172450.0,
            204649.0,
            237014.0,
            268387.0,
            314074.0
          ],
          "2": [
            70608.0,
            98226.0,
            109947.0,
            134339.0,
            163139.0,
            171527.0,
            202045.0,
            232444.0,
            263449.0,
            302334.0
          ],
          "3": [
            99023.0,
            108509.0,
            121591.0,
            149745.0,
            168494.0,
            198416.0,
            227527.0,
            271246.0,
            317940.0,
            362773.0
          ],
          "4": [
            101006.0,
            111991.0,
            115835.0,
            147187.0,
            166846.0,
            195021.0,
            226425.0,
            269347.0,
            321898.0,
            360015.0
          ],
          "5": [
            101362.0,
            112120.0,
            118589.0,
            133571.0,
            164996.0,
            184543.0,
            221433.0,
            247726.0,
            284792.0,
            328991.0
          ]
        },
        "Ph": {
          "1": [
            68796.0,
            95342.0,
            103035.0,
            132421.0,
            161800.0,
            169173.0,
            216118.0,
            249327.0,
            288658.0,
            348776.0
          ],
          "2": [
            73158.0,
            95850.0,
            103409.0,
            132465.0,
            162536.0,
            171477.0,
            213056.0,
            242568.0,
            283165.0,
            324608.0
          ],
          "3": [
            102564.0,
            112598.0,
            113339.0,
            141877.0,
            175177.0,
            197250.0,
            231046.0,
            265889.0,
            311375.0,
            368107.0
          ],
          "4": [
            101667.0,
            116573.0,
            111263.0,
            142084.0,
            176726.0,
            198204.0,
            233213.0,
            266456.0,
            319534.0,
            360393.0
          ],
          "5": [
            104681.0,
            119265.0,
            113779.0,
            137223.0,
            178753.0,
            191448.0,
            227577.0,
            252222.0,
            288163.0,
            312426.0
          ]
        },
        "Casa": {
          "1": [
            68669.0,
            95535.0,
            104057.0,
            130407.0,
            162986.0,
            173281.0,
            179986.0,
            212618.0,
            247589.0,
            289032.0
          ],
          "2": [
            69665.0,
            96606.0,
            105046.0,
            131425.0,
            159450.0,
            173796.0,
            180074.0,
            212162.0,
            248909.0,
            282176.0
          ],
          "3": [
            99701.0,
            111904.0,
            120459.0,
            144344.0,
            175318.0,
            194503.0,
            195659.0,
            223760.0,
            263485.0,
            303050.0
          ],
          "4": [
            100278.0,
            116944.0,
            118962.0,
            148040.0,
            175369.0,
            195496.0,
            209774.0,
            229234.0,
            270402.0,
            317209.0
          ],
          "5": [
            103282.0,
            120233.0,
            121108.0,
            138153.0,
            179692.0,
            198405.0,
            207963.0,
            225224.0,
            254505.0,
            287311.0
          ]
        }
      },
      "Agronomía": {
        "Departamento": {
          "1": [
            75801.0,
            104249.0,
            121891.0,
            149995.0,
            182892.0,
            194502.0,
            235678.0,
            267045.0,
            294636.0,
            333623.0
          ],
          "2": [
            75441.0,
            104244.0,
            124239.0,
            148230.0,
            184597.0,
            195536.0,
            235841.0,
            263177.0,
            287442.0,
            318787.0
          ],
          "3": [
            107959.0,
            117366.0,
            138046.0,
            170580.0,
            198103.0,
            228751.0,
            265037.0,
            323074.0,
            362934.0,
            412007.0
          ],
          "4": [
            111903.0,
            124074.0,
            132849.0,
            166799.0,
            191705.0,
            226779.0,
            264543.0,
            317348.0,
            365353.0,
            403436.0
          ],
          "5": [
            111869.0,
            123742.0,
            135488.0,
            151816.0,
            188487.0,
            211104.0,
            256205.0,
            289546.0,
            320437.0,
            366226.0
          ]
        },
        "Ph": {
          "1": [
            70642.0,
            100101.0,
            112950.0,
            143553.0,
            168972.0,
            176355.0,
            217087.0,
            253193.0,
            279649.0,
            338471.0
          ],
          "2": [
            73536.0,
            100562.0,
            114107.0,
            142658.0,
            169623.0,
            180211.0,
            216848.0,
            249595.0,
            275091.0,
            317208.0
          ],
          "3": [
            98469.0,
            110921.0,
            122788.0,
            153053.0,
            183583.0,
            209299.0,
            243615.0,
            277730.0,
            318282.0,
            391040.0
          ],
          "4": [
            102119.0,
            119507.0,
            120454.0,
            150480.0,
            182357.0,
            206782.0,
            244356.0,
            279224.0,
            326471.0,
            379353.0
          ],
          "5": [
            103021.0,
            119796.0,
            123572.0,
            142771.0,
            179298.0,
            192838.0,
            230280.0,
            268501.0,
            291920.0,
            334910.0
          ]
        },
        "Casa": {
          "1": [
            75083.0,
            112862.0,
            129806.0,
            150099.0,
            188208.0,
            202881.0,
            227414.0,
            271473.0,
            306871.0,
            349202.0
          ],
          "2": [
            75804.0,
            114829.0,
            132924.0,
            149901.0,
            184847.0,
            205357.0,
            229793.0,
            273592.0,
            306116.0,
            338276.0
          ],
          "3": [
            108964.0,
            129522.0,
            145271.0,
            163356.0,
            201224.0,
            228825.0,
            246319.0,
            287315.0,
            325084.0,
            375446.0
          ],
          "4": [
            111675.0,
            136922.0,
            143030.0,
            167712.0,
            202388.0,
            231512.0,
            267577.0,
            295044.0,
            333431.0,
            391681.0
          ],
          "5": [
            115022.0,
            140775.0,
            145612.0,
            155988.0,
            206437.0,
            233315.0,
            262265.0,
            293203.0,
            314485.0,
            357611.0
          ]
        }
      },
      "Almagro": {
        "Departamento": {
          "1": [
            77250.0,
            107022.0,
            125568.0,
            157119.0,
            183856.0,
            195992.0,
            239879.0,
            277682.0,
            308952.0,
            344680.0
          ],
          "2": [
            76533.0,
            105981.0,
            126422.0,
            154802.0,
            185537.0,
            196098.0,
            238906.0,
            270916.0,
            296402.0,
            327474.0
          ],
          "3": [
            101628.0,
            115368.0,
            136436.0,
            170484.0,
            193430.0,
            226523.0,
            268131.0,
            320571.0,
            357142.0,
            393950.0
          ],
          "4": [
            107337.0,
            119119.0,
            135927.0,
            164620.0,
            188567.0,
            222150.0,
            266520.0,
            318031.0,
            360112.0,
            391837.0
          ],
          "5": [
            105986.0,
            118001.0,
            137695.0,
            152602.0,
            181271.0,
            205203.0,
            254525.0,
            290673.0,
            313304.0,
            355750.0
          ]
        },
        "Ph": {
          "1": [
            72411.0,
            103240.0,
            117845.0,
            150558.0,
            177621.0,
            185576.0,
            229912.0,
            277600.0,
            313012.0,
            351819.0
          ],
          "2": [
            76042.0,
            102747.0,
            118842.0,
            150435.0,
            180291.0,
            190654.0,
            230896.0,
            271321.0,
            303060.0,
            330119.0
          ],
          "3": [
            97358.0,
            113192.0,
            125252.0,
            158430.0,
            189864.0,
            214256.0,
            249899.0,
            298020.0,
            340806.0,
            393042.0
          ],
          "4": [
            102216.0,
            118999.0,
            128569.0,
            154807.0,
            189218.0,
            211085.0,
            249248.0,
            296466.0,
            347641.0,
            381811.0
          ],
          "5": [
            103264.0,
            120126.0,
            132562.0,
            153511.0,
            184424.0,
            200736.0,
            236683.0,
            275747.0,
            310757.0,
            340492.0
          ]
        },
        "Casa": {
          "1": [
            76577.0,
            111980.0,
            124129.0,
            156131.0,
            192216.0,
            206255.0,
            229540.0,
            271812.0,
            313674.0,
            348658.0
          ],
          "2": [
            77103.0,
            110490.0,
            125586.0,
            156551.0,
            189096.0,
            209349.0,
            232582.0,
            270888.0,
            306607.0,
            334208.0
          ],
          "3": [
            103325.0,
            125190.0,
            136428.0,
            166146.0,
            203036.0,
            229928.0,
            249499.0,
            289305.0,
            324336.0,
            359742.0
          ],
          "4": [
            107501.0,
            129748.0,
            140972.0,
            168467.0,
            205316.0,
            232901.0,
            269293.0,
            296017.0,
            330939.0,
            375861.0
          ],
          "5": [
            109876.0,
            133123.0,
            143220.0,
            162229.0,
            203631.0,
            232872.0,
            261644.0,
            291909.0,
            309946.0,
            345291.0
          ]
        }
      },
      "Balvanera": {
        "Departamento": {
          "1": [
            72346.0,
            98410.0,
            112903.0,
            142767.0,
            170214.0,
            174501.0,
            215049.0,
            232003.0,
            263944.0,
            326193.0
          ],
          "2": [
            74843.0,
            99720.0,
            114393.0,
            139201.0,
            168240.0,
            172588.0,
            210773.0,
            223941.0,
            254694.0,
            313300.0
          ],
          "3": [
            98975.0,
            111131.0,
            126337.0,
            155875.0,
            175722.0,
            204350.0,
            241445.0,
            270302.0,
            295729.0,
            367240.0
          ],
          "4": [
            101132.0,
            110824.0,
            113770.0,
            157368.0,
            177990.0,
            207237.0,
            240053.0,
            271340.0,
            307025.0,
            356364.0
          ],
          "5": [
            99154.0,
            112772.0,
            115299.0,
            136059.0,
            172984.0,
            197083.0,
            235548.0,
            255456.0,
            277922.0,
            334836.0
          ]
        },
        "Ph": {
          "1": [
            67615.0,
            96724.0,
            101250.0,
            129744.0,
            157052.0,
            159894.0,
            202552.0,
            209598.0,
            232529.0,
            315148.0
          ],
          "2": [
            72992.0,
            96473.0,
            100839.0,
            126608.0,
            155813.0,
            159875.0,
            198972.0,
            205338.0,
            228109.0,
            305512.0
          ],
          "3": [
            96189.0,
            109568.0,
            106713.0,
            135946.0,
            164084.0,
            181539.0,
            223860.0,
            226420.0,
            247448.0,
            323635.0
          ],
          "4": [
            98344.0,
            109882.0,
            96316.0,
            136354.0,
            165924.0,
            183278.0,
            220573.0,
            238164.0,
            268412.0,
            326298.0
          ],
          "5": [
            98822.0,
            114142.0,
            98894.0,
            123230.0,
            162925.0,
            176699.0,
            214840.0,
            234416.0,
            247914.0,
            304164.0
          ]
        },
        "Casa": {
          "1": [
            72057.0,
            105572.0,
            114518.0,
            146994.0,
            182966.0,
            189342.0,
            208033.0,
            236964.0,
            279443.0,
            329334.0
          ],
          "2": [
            76634.0,
            107873.0,
            116456.0,
            147300.0,
            179659.0,
            190286.0,
            208550.0,
            236927.0,
            280845.0,
            324027.0
          ],
          "3": [
            103337.0,
            124650.0,
            130956.0,
            153029.0,
            186132.0,
            209705.0,
            226605.0,
            252354.0,
            289049.0,
            333281.0
          ],
          "4": [
            104491.0,
            127503.0,
            122243.0,
            163513.0,
            191837.0,
            218328.0,
            242820.0,
            266144.0,
            306946.0,
            347467.0
          ],
          "5": [
            105610.0,
            133750.0,
            123357.0,
            144517.0,
            191463.0,
            221303.0,
            239862.0,
            266953.0,
            294197.0,
            323114.0
          ]
        }
      },
      "Barracas": {
        "Departamento": {
          "1": [
            78733.0,
            108262.0,
            133583.0,
            171032.0,
            210068.0,
            218096.0,
            264835.0,
            315837.0,
            376009.0,
            410283.0
          ],
          "2": [
            80201.0,
            110608.0,
            136424.0,
            171171.0,
            213505.0,
            221555.0,
            262776.0,
            316577.0,
            350092.0,
            354264.0
          ],
          "3": [
            94437.0,
            120925.0,
            153066.0,
            195736.0,
            227689.0,
            258651.0,
            295457.0,
            368148.0,
            419819.0,
            429134.0
          ],
          "4": [
            99207.0,
            127372.0,
            157367.0,
            194231.0,
            222615.0,
            255462.0,
            300100.0,
            378154.0,
            445893.0,
            449899.0
          ],
          "5": [
            97508.0,
            125662.0,
            157495.0,
            181729.0,
            214021.0,
            239248.0,
            285328.0,
            346058.0,
            393813.0,
            417808.0
          ]
        },
        "Ph": {
          "1": [
            71390.0,
            102587.0,
            118907.0,
            159350.0,
            176852.0,
            181336.0,
            212884.0,
            246441.0,
            280135.0,
            337333.0
          ],
          "2": [
            74774.0,
            101942.0,
            118033.0,
            155304.0,
            173810.0,
            181073.0,
            208312.0,
            248856.0,
            275710.0,
            325410.0
          ],
          "3": [
            88411.0,
            109047.0,
            121785.0,
            162823.0,
            183478.0,
            204449.0,
            226745.0,
            276614.0,
            316232.0,
            370692.0
          ],
          "4": [
            94347.0,
            114854.0,
            123883.0,
            159379.0,
            176227.0,
            193188.0,
            220595.0,
            278032.0,
            334118.0,
            384325.0
          ],
          "5": [
            94217.0,
            114668.0,
            127162.0,
            153806.0,
            173796.0,
            181646.0,
            206979.0,
            266550.0,
            295963.0,
            359593.0
          ]
        },
        "Casa": {
          "1": [
            75908.0,
            105192.0,
            125555.0,
            161829.0,
            204325.0,
            211635.0,
            211023.0,
            256299.0,
            302332.0,
            344959.0
          ],
          "2": [
            76299.0,
            106635.0,
            127366.0,
            161373.0,
            200440.0,
            213881.0,
            210691.0,
            261255.0,
            292729.0,
            313688.0
          ],
          "3": [
            93260.0,
            119921.0,
            141168.0,
            177188.0,
            218826.0,
            232754.0,
            225473.0,
            277521.0,
            311566.0,
            336468.0
          ],
          "4": [
            96290.0,
            124975.0,
            146911.0,
            179590.0,
            219567.0,
            232757.0,
            238544.0,
            291273.0,
            331987.0,
            369377.0
          ],
          "5": [
            97583.0,
            127207.0,
            148288.0,
            171817.0,
            216816.0,
            232256.0,
            233316.0,
            279605.0,
            310854.0,
            344554.0
          ]
        }
      },
      "Barrio Norte": {
        "Departamento": {
          "1": [
            93781.0,
            134943.0,
            160695.0,
            207722.0,
            241764.0,
            261299.0,
            321987.0,
            423213.0,
            563702.0,
            652491.0
          ],
          "2": [
            98200.0,
            136643.0,
            162187.0,
            209100.0,
            247818.0,
            278239.0,
            335254.0,
            449529.0,
            553237.0,
            637760.0
          ],
          "3": [
            122636.0,
            149334.0,
            182122.0,
            223746.0,
            251839.0,
            300202.0,
            370377.0,
            504378.0,
            609183.0,
            726103.0
          ],
          "4": [
            124912.0,
            153897.0,
            183123.0,
            225049.0,
            243209.0,
            285709.0,
            362053.0,
            495996.0,
            624579.0,
            768502.0
          ],
          "5": [
            127175.0,
            157276.0,
            185584.0,
            215905.0,
            235618.0,
            278923.0,
            347830.0,
            455003.0,
            557894.0,
            706614.0
          ]
        },
        "Ph": {
          "1": [
            79300.0,
            117047.0,
            145346.0,
            187210.0,
            211177.0,
            224017.0,
            270145.0,
            339199.0,
            402888.0,
            463574.0
          ],
          "2": [
            84215.0,
            118108.0,
            142929.0,
            188756.0,
            214052.0,
            238994.0,
            281686.0,
            357020.0,
            395011.0,
            443876.0
          ],
          "3": [
            100073.0,
            129731.0,
            145311.0,
            194889.0,
            222506.0,
            261498.0,
            313472.0,
            402979.0,
            432766.0,
            536659.0
          ],
          "4": [
            105128.0,
            137813.0,
            146939.0,
            194401.0,
            212947.0,
            243757.0,
            297679.0,
            375476.0,
            429270.0,
            518764.0
          ],
          "5": [
            105412.0,
            138152.0,
            150876.0,
            190911.0,
            201695.0,
            229871.0,
            271851.0,
            357060.0,
            376662.0,
            464221.0
          ]
        },
        "Casa": {
          "1": [
            91732.0,
            148193.0,
            173727.0,
            223306.0,
            234676.0,
            249071.0,
            289066.0,
            370026.0,
            487638.0,
            552335.0
          ],
          "2": [
            95607.0,
            153103.0,
            179183.0,
            230939.0,
            243538.0,
            267071.0,
            306756.0,
            400581.0,
            482139.0,
            541059.0
          ],
          "3": [
            118621.0,
            158124.0,
            186173.0,
            231237.0,
            255624.0,
            300762.0,
            335654.0,
            412205.0,
            483049.0,
            581962.0
          ],
          "4": [
            122730.0,
            164250.0,
            188919.0,
            230016.0,
            249204.0,
            291931.0,
            345939.0,
            412416.0,
            493579.0,
            622911.0
          ],
          "5": [
            125290.0,
            168309.0,
            191974.0,
            220702.0,
            239192.0,
            287876.0,
            334633.0,
            392996.0,
            468189.0,
            571488.0
          ]
        }
      },
      "Belgrano": {
        "Departamento": {
          "1": [
            92278.0,
            131464.0,
            155413.0,
            199666.0,
            237957.0,
            270218.0,
            322551.0,
            427149.0,
            575577.0,
            694950.0
          ],
          "2": [
            97112.0,
            134727.0,
            158364.0,
            199808.0,
            243149.0,
            284278.0,
            336238.0,
            454245.0,
            565559.0,
            679496.0
          ],
          "3": [
            122221.0,
            151450.0,
            176767.0,
            217101.0,
            250734.0,
            301146.0,
            374797.0,
            508149.0,
            626077.0,
            749450.0
          ],
          "4": [
            124392.0,
            154507.0,
            177153.0,
            218729.0,
            245150.0,
            283535.0,
            366000.0,
            487828.0,
            630720.0,
            785844.0
          ],
          "5": [
            126131.0,
            157426.0,
            177331.0,
            209436.0,
            233062.0,
            276820.0,
            351431.0,
            456366.0,
            566266.0,
            713006.0
          ]
        },
        "Ph": {
          "1": [
            83413.0,
            119922.0,
            142251.0,
            185574.0,
            222328.0,
            248403.0,
            295190.0,
            385442.0,
            470637.0,
            556372.0
          ],
          "2": [
            89618.0,
            121613.0,
            140381.0,
            185942.0,
            225219.0,
            262053.0,
            307595.0,
            409733.0,
            462265.0,
            532103.0
          ],
          "3": [
            109544.0,
            135258.0,
            139728.0,
            189745.0,
            238262.0,
            270415.0,
            326232.0,
            438347.0,
            477153.0,
            560117.0
          ],
          "4": [
            112428.0,
            140894.0,
            144070.0,
            198754.0,
            235841.0,
            257614.0,
            323863.0,
            402320.0,
            468475.0,
            551535.0
          ],
          "5": [
            115117.0,
            144229.0,
            147232.0,
            196260.0,
            226859.0,
            251502.0,
            304240.0,
            388609.0,
            409558.0,
            466982.0
          ]
        },
        "Casa": {
          "1": [
            90272.0,
            144736.0,
            174236.0,
            216361.0,
            233499.0,
            257063.0,
            297263.0,
            383586.0,
            497008.0,
            583591.0
          ],
          "2": [
            98224.0,
            155284.0,
            186816.0,
            229281.0,
            248552.0,
            278667.0,
            322160.0,
            424089.0,
            501850.0,
            586189.0
          ],
          "3": [
            120865.0,
            159768.0,
            187964.0,
            227623.0,
            257781.0,
            311446.0,
            350750.0,
            429315.0,
            498101.0,
            598672.0
          ],
          "4": [
            124594.0,
            164220.0,
            190107.0,
            227647.0,
            254305.0,
            298327.0,
            358230.0,
            422505.0,
            510494.0,
            637877.0
          ],
          "5": [
            127129.0,
            168373.0,
            191967.0,
            218537.0,
            241179.0,
            294612.0,
            348562.0,
            408835.0,
            484683.0,
            590632.0
          ]
        }
      },
      "Boca": {
        "Departamento": {
          "1": [
            67295.0,
            84785.0,
            93865.0,
            117752.0,
            148490.0,
            169336.0,
            184061.0,
            203296.0,
            240080.0,
            288107.0
          ],
          "2": [
            75058.0,
            86250.0,
            93832.0,
            109688.0,
            146799.0,
            158242.0,
            163681.0,
            178010.0,
            213270.0,
            256446.0
          ],
          "3": [
            98438.0,
            95914.0,
            104475.0,
            122842.0,
            138892.0,
            163554.0,
            175302.0,
            206887.0,
            241163.0,
            296869.0
          ],
          "4": [
            100767.0,
            106941.0,
            108798.0,
            126668.0,
            145344.0,
            168256.0,
            170522.0,
            210107.0,
            250560.0,
            287913.0
          ],
          "5": [
            101827.0,
            112280.0,
            112875.0,
            121689.0,
            141023.0,
            166861.0,
            173009.0,
            198782.0,
            238823.0,
            277922.0
          ]
        },
        "Ph": {
          "1": [
            64794.0,
            88771.0,
            89260.0,
            116525.0,
            140118.0,
            150690.0,
            179415.0,
            185908.0,
            214837.0,
            280642.0
          ],
          "2": [
            72570.0,
            90280.0,
            90285.0,
            114276.0,
            140174.0,
            143792.0,
            159892.0,
            166903.0,
            195498.0,
            254368.0
          ],
          "3": [
            94999.0,
            101785.0,
            96411.0,
            120587.0,
            138984.0,
            153116.0,
            181953.0,
            184375.0,
            214800.0,
            276499.0
          ],
          "4": [
            97523.0,
            106889.0,
            97353.0,
            122803.0,
            145826.0,
            154376.0,
            171472.0,
            194004.0,
            228261.0,
            273549.0
          ],
          "5": [
            98267.0,
            111337.0,
            100284.0,
            118127.0,
            139513.0,
            150935.0,
            170288.0,
            186249.0,
            217113.0,
            256612.0
          ]
        },
        "Casa": {
          "1": [
            70406.0,
            90841.0,
            98149.0,
            120334.0,
            154844.0,
            161077.0,
            173657.0,
            194642.0,
            244630.0,
            284570.0
          ],
          "2": [
            76758.0,
            94294.0,
            100007.0,
            119700.0,
            151956.0,
            152696.0,
            157841.0,
            174559.0,
            220313.0,
            249597.0
          ],
          "3": [
            105828.0,
            111780.0,
            119706.0,
            136948.0,
            161700.0,
            175433.0,
            177071.0,
            191632.0,
            224416.0,
            268529.0
          ],
          "4": [
            106288.0,
            117892.0,
            123699.0,
            147927.0,
            168175.0,
            179660.0,
            183481.0,
            200085.0,
            233429.0,
            271857.0
          ],
          "5": [
            114753.0,
            132243.0,
            132438.0,
            147665.0,
            176075.0,
            196245.0,
            193473.0,
            198004.0,
            227168.0,
            254492.0
          ]
        }
      },
      "Boedo": {
        "Departamento": {
          "1": [
            70341.0,
            95700.0,
            110203.0,
            140313.0,
            167848.0,
            180552.0,
            211713.0,
            229149.0,
            262100.0,
            325374.0
          ],
          "2": [
            73178.0,
            97660.0,
            112989.0,
            137781.0,
            167872.0,
            177306.0,
            205909.0,
            219487.0,
            248441.0,
            306985.0
          ],
          "3": [
            98159.0,
            108712.0,
            125564.0,
            153716.0,
            175863.0,
            203027.0,
            238193.0,
            261969.0,
            288029.0,
            360789.0
          ],
          "4": [
            100774.0,
            108916.0,
            114919.0,
            157110.0,
            178253.0,
            205064.0,
            236060.0,
            262247.0,
            300198.0,
            347247.0
          ],
          "5": [
            98859.0,
            111013.0,
            115914.0,
            135680.0,
            173746.0,
            194250.0,
            229174.0,
            249373.0,
            273134.0,
            327259.0
          ]
        },
        "Ph": {
          "1": [
            67965.0,
            96307.0,
            102833.0,
            130224.0,
            157456.0,
            163883.0,
            197073.0,
            214032.0,
            238469.0,
            321757.0
          ],
          "2": [
            73653.0,
            96928.0,
            103369.0,
            127741.0,
            155562.0,
            162701.0,
            190496.0,
            208460.0,
            233035.0,
            308986.0
          ],
          "3": [
            95314.0,
            104035.0,
            105738.0,
            133252.0,
            160492.0,
            181229.0,
            214753.0,
            229514.0,
            250249.0,
            330221.0
          ],
          "4": [
            98973.0,
            106504.0,
            97912.0,
            135375.0,
            159732.0,
            181559.0,
            211830.0,
            243479.0,
            277273.0,
            334989.0
          ],
          "5": [
            98853.0,
            109963.0,
            100123.0,
            122608.0,
            158462.0,
            172864.0,
            205873.0,
            243504.0,
            253292.0,
            310302.0
          ]
        },
        "Casa": {
          "1": [
            71910.0,
            103040.0,
            114603.0,
            144888.0,
            181189.0,
            194786.0,
            205112.0,
            225080.0,
            259410.0,
            317696.0
          ],
          "2": [
            76320.0,
            106497.0,
            118968.0,
            146091.0,
            178495.0,
            192955.0,
            200864.0,
            219837.0,
            253569.0,
            306409.0
          ],
          "3": [
            100636.0,
            120813.0,
            130978.0,
            152578.0,
            187145.0,
            213097.0,
            225104.0,
            237096.0,
            261891.0,
            312305.0
          ],
          "4": [
            102832.0,
            122479.0,
            124426.0,
            164320.0,
            191932.0,
            221436.0,
            239546.0,
            249927.0,
            281930.0,
            324796.0
          ],
          "5": [
            111267.0,
            137693.0,
            132096.0,
            156251.0,
            205396.0,
            238319.0,
            252443.0,
            254838.0,
            272540.0,
            305342.0
          ]
        }
      },
      "Caballito": {
        "Departamento": {
          "1": [
            78689.0,
            108289.0,
            131299.0,
            161164.0,
            198771.0,
            213033.0,
            256253.0,
            301018.0,
            359610.0,
            407619.0
          ],
          "2": [
            79720.0,
            111523.0,
            136876.0,
            162936.0,
            203518.0,
            216375.0,
            251941.0,
            299047.0,
            332833.0,
            347323.0
          ],
          "3": [
            94137.0,
            119889.0,
            151757.0,
            187247.0,
            218672.0,
            252684.0,
            289032.0,
            354873.0,
            401461.0,
            430129.0
          ],
          "4": [
            98599.0,
            124841.0,
            155855.0,
            185713.0,
            213075.0,
            249772.0,
            292550.0,
            367042.0,
            442894.0,
            460644.0
          ],
          "5": [
            97107.0,
            123549.0,
            155321.0,
            174100.0,
            203460.0,
            232784.0,
            275087.0,
            336464.0,
            391029.0,
            428838.0
          ]
        },
        "Ph": {
          "1": [
            74498.0,
            104425.0,
            124059.0,
            154695.0,
            182449.0,
            194692.0,
            229901.0,
            274356.0,
            313263.0,
            357225.0
          ],
          "2": [
            78928.0,
            107370.0,
            127867.0,
            156516.0,
            186283.0,
            198814.0,
            226534.0,
            273165.0,
            300469.0,
            334161.0
          ],
          "3": [
            92994.0,
            114094.0,
            134015.0,
            166765.0,
            202285.0,
            225106.0,
            247532.0,
            306029.0,
            343013.0,
            401808.0
          ],
          "4": [
            97848.0,
            120608.0,
            140998.0,
            167293.0,
            195437.0,
            214732.0,
            247118.0,
            301937.0,
            367318.0,
            411369.0
          ],
          "5": [
            98707.0,
            121638.0,
            144675.0,
            165066.0,
            190063.0,
            201892.0,
            228920.0,
            281091.0,
            328241.0,
            378144.0
          ]
        },
        "Casa": {
          "1": [
            79577.0,
            119668.0,
            143873.0,
            163247.0,
            204670.0,
            224396.0,
            251026.0,
            283825.0,
            338495.0,
            409106.0
          ],
          "2": [
            80121.0,
            124397.0,
            150409.0,
            164847.0,
            203852.0,
            226783.0,
            247878.0,
            286208.0,
            319874.0,
            363088.0
          ],
          "3": [
            99884.0,
            133943.0,
            157916.0,
            180675.0,
            223080.0,
            247942.0,
            275923.0,
            303297.0,
            337399.0,
            390099.0
          ],
          "4": [
            102507.0,
            136579.0,
            162324.0,
            182391.0,
            223993.0,
            249137.0,
            292911.0,
            318244.0,
            370856.0,
            432789.0
          ],
          "5": [
            104859.0,
            140390.0,
            164330.0,
            175528.0,
            220621.0,
            247690.0,
            286098.0,
            314286.0,
            352389.0,
            410236.0
          ]
        }
      },
      "Catalinas": {
        "Departamento": {
          "1": [
            80786.0,
            107397.0,
            129628.0,
            159084.0,
            194479.0,
            207690.0,
            259086.0,
            308387.0,
            362976.0,
            414825.0
          ],
          "2": [
            81576.0,
            110243.0,
            134620.0,
            160112.0,
            198092.0,
            207327.0,
            254166.0,
            309196.0,
            337641.0,
            359638.0
          ],
          "3": [
            98215.0,
            119188.0,
            147229.0,
            181904.0,
            206541.0,
            237591.0,
            282479.0,
            356417.0,
            402058.0,
            439670.0
          ],
          "4": [
            104768.0,
            123675.0,
            150638.0,
            181522.0,
            200585.0,
            234193.0,
            281206.0,
            358885.0,
            426554.0,
            458521.0
          ],
          "5": [
            102611.0,
            121715.0,
            150417.0,
            168157.0,
            192221.0,
            214375.0,
            265913.0,
            316559.0,
            374094.0,
            422688.0
          ]
        },
        "Ph": {
          "1": [
            75845.0,
            100708.0,
            119885.0,
            151762.0,
            169380.0,
            179854.0,
            219009.0,
            243175.0,
            273504.0,
            337436.0
          ],
          "2": [
            78703.0,
            102835.0,
            123409.0,
            153219.0,
            172475.0,
            181576.0,
            214765.0,
            247211.0,
            268694.0,
            324918.0
          ],
          "3": [
            94675.0,
            114785.0,
            127613.0,
            162590.0,
            185437.0,
            208461.0,
            233698.0,
            274412.0,
            303280.0,
            373342.0
          ],
          "4": [
            100747.0,
            120306.0,
            131359.0,
            162888.0,
            182301.0,
            203616.0,
            227869.0,
            279979.0,
            332692.0,
            396557.0
          ],
          "5": [
            101092.0,
            120690.0,
            135351.0,
            157830.0,
            179820.0,
            188545.0,
            217213.0,
            264709.0,
            292125.0,
            359741.0
          ]
        },
        "Casa": {
          "1": [
            75361.0,
            98988.0,
            119332.0,
            142033.0,
            179875.0,
            186582.0,
            212831.0,
            269892.0,
            322960.0,
            380464.0
          ],
          "2": [
            75023.0,
            101388.0,
            123268.0,
            143077.0,
            179268.0,
            186256.0,
            208789.0,
            270600.0,
            300418.0,
            329848.0
          ],
          "3": [
            92255.0,
            111957.0,
            136900.0,
            166674.0,
            196569.0,
            216385.0,
            237746.0,
            291133.0,
            311943.0,
            368028.0
          ],
          "4": [
            99013.0,
            116881.0,
            140926.0,
            169231.0,
            194237.0,
            214943.0,
            245398.0,
            297640.0,
            329042.0,
            390001.0
          ],
          "5": [
            96974.0,
            115029.0,
            140719.0,
            156771.0,
            186138.0,
            201955.0,
            232431.0,
            270208.0,
            301146.0,
            357878.0
          ]
        }
      },
      "Centro / Microcentro": {
        "Departamento": {
          "1": [
            73458.0,
            98506.0,
            112904.0,
            143587.0,
            168089.0,
            180409.0,
            212780.0,
            223663.0,
            257803.0,
            322156.0
          ],
          "2": [
            76366.0,
            100990.0,
            118098.0,
            141061.0,
            167706.0,
            177409.0,
            207230.0,
            213783.0,
            243855.0,
            303312.0
          ],
          "3": [
            100347.0,
            111109.0,
            127428.0,
            156148.0,
            174045.0,
            206233.0,
            240917.0,
            265331.0,
            291418.0,
            366933.0
          ],
          "4": [
            102244.0,
            109587.0,
            114526.0,
            158495.0,
            178272.0,
            207212.0,
            236495.0,
            263771.0,
            299213.0,
            349617.0
          ],
          "5": [
            100216.0,
            111602.0,
            115249.0,
            136248.0,
            171569.0,
            196927.0,
            232015.0,
            247777.0,
            273182.0,
            329293.0
          ]
        },
        "Ph": {
          "1": [
            69494.0,
            95906.0,
            103511.0,
            128784.0,
            150390.0,
            158426.0,
            194201.0,
            199748.0,
            223593.0,
            304326.0
          ],
          "2": [
            75156.0,
            97953.0,
            108822.0,
            128048.0,
            151279.0,
            158678.0,
            188812.0,
            193330.0,
            215400.0,
            292055.0
          ],
          "3": [
            98923.0,
            106886.0,
            109372.0,
            134788.0,
            158345.0,
            179973.0,
            218121.0,
            218456.0,
            235090.0,
            313644.0
          ],
          "4": [
            101312.0,
            107295.0,
            99143.0,
            136740.0,
            166424.0,
            184992.0,
            219584.0,
            234066.0,
            263038.0,
            318076.0
          ],
          "5": [
            100961.0,
            110529.0,
            102490.0,
            124116.0,
            162551.0,
            177153.0,
            213371.0,
            230570.0,
            243547.0,
            301163.0
          ]
        },
        "Casa": {
          "1": [
            68289.0,
            90598.0,
            103162.0,
            125731.0,
            153485.0,
            162211.0,
            193235.0,
            203578.0,
            237028.0,
            295644.0
          ],
          "2": [
            70666.0,
            93653.0,
            109162.0,
            125734.0,
            152403.0,
            160647.0,
            187946.0,
            194328.0,
            225204.0,
            279592.0
          ],
          "3": [
            93714.0,
            103316.0,
            117295.0,
            142054.0,
            165031.0,
            190824.0,
            214405.0,
            223641.0,
            235692.0,
            312845.0
          ],
          "4": [
            97893.0,
            104470.0,
            108332.0,
            148812.0,
            172627.0,
            196522.0,
            222149.0,
            230375.0,
            248067.0,
            307026.0
          ],
          "5": [
            95951.0,
            106391.0,
            109015.0,
            128758.0,
            168029.0,
            193244.0,
            218296.0,
            222728.0,
            235618.0,
            289901.0
          ]
        }
      },
      "Chacarita": {
        "Departamento": {
          "1": [
            76256.0,
            104543.0,
            119759.0,
            146273.0,
            177698.0,
            190645.0,
            225500.0,
            255329.0,
            287723.0,
            329359.0
          ],
          "2": [
            77291.0,
            105077.0,
            123769.0,
            145508.0,
            180899.0,
            190404.0,
            222171.0,
            246480.0,
            274208.0,
            307436.0
          ],
          "3": [
            109483.0,
            118263.0,
            137009.0,
            168486.0,
            197946.0,
            227798.0,
            260134.0,
            311390.0,
            343971.0,
            390810.0
          ],
          "4": [
            112363.0,
            121277.0,
            131810.0,
            166799.0,
            191496.0,
            223585.0,
            258335.0,
            306118.0,
            349440.0,
            380717.0
          ],
          "5": [
            111675.0,
            120377.0,
            132744.0,
            150548.0,
            187346.0,
            207829.0,
            248895.0,
            278509.0,
            309569.0,
            354421.0
          ]
        },
        "Ph": {
          "1": [
            74777.0,
            102018.0,
            113512.0,
            143653.0,
            175560.0,
            185308.0,
            235596.0,
            269417.0,
            312224.0,
            366448.0
          ],
          "2": [
            81447.0,
            103804.0,
            116156.0,
            144139.0,
            178600.0,
            189030.0,
            232192.0,
            261132.0,
            298476.0,
            332362.0
          ],
          "3": [
            115286.0,
            121636.0,
            126313.0,
            154058.0,
            195469.0,
            222418.0,
            256768.0,
            297523.0,
            334104.0,
            387108.0
          ],
          "4": [
            115130.0,
            126709.0,
            125308.0,
            157706.0,
            196835.0,
            222065.0,
            259816.0,
            298438.0,
            345187.0,
            378476.0
          ],
          "5": [
            117891.0,
            128922.0,
            127364.0,
            151541.0,
            200127.0,
            213282.0,
            249277.0,
            277871.0,
            309441.0,
            336657.0
          ]
        },
        "Casa": {
          "1": [
            77027.0,
            103350.0,
            118348.0,
            144127.0,
            180746.0,
            187462.0,
            208787.0,
            234744.0,
            271236.0,
            309282.0
          ],
          "2": [
            79120.0,
            105397.0,
            120128.0,
            142701.0,
            176544.0,
            185716.0,
            203794.0,
            227736.0,
            259324.0,
            287154.0
          ],
          "3": [
            112848.0,
            122583.0,
            138327.0,
            162979.0,
            199815.0,
            221744.0,
            230965.0,
            251524.0,
            277751.0,
            315324.0
          ],
          "4": [
            114357.0,
            127972.0,
            138097.0,
            169522.0,
            199495.0,
            220361.0,
            244623.0,
            259062.0,
            288312.0,
            326764.0
          ],
          "5": [
            116785.0,
            130518.0,
            138372.0,
            158374.0,
            203763.0,
            221493.0,
            239627.0,
            252292.0,
            271886.0,
            305443.0
          ]
        }
      },
      "Coghlan": {
        "Departamento": {
          "1": [
            80747.0,
            110641.0,
            133825.0,
            164461.0,
            201320.0,
            214636.0,
            257203.0,
            304303.0,
            360825.0,
            406102.0
          ],
          "2": [
            82290.0,
            113446.0,
            138824.0,
            165058.0,
            206114.0,
            215362.0,
            253614.0,
            306668.0,
            337364.0,
            353884.0
          ],
          "3": [
            100527.0,
            121241.0,
            148963.0,
            189434.0,
            218453.0,
            246334.0,
            281736.0,
            354132.0,
            403659.0,
            435403.0
          ],
          "4": [
            107077.0,
            125620.0,
            152060.0,
            185851.0,
            209053.0,
            242080.0,
            284352.0,
            360714.0,
            438064.0,
            462451.0
          ],
          "5": [
            104785.0,
            123527.0,
            151710.0,
            172361.0,
            199456.0,
            221728.0,
            266514.0,
            324037.0,
            382481.0,
            426714.0
          ]
        },
        "Ph": {
          "1": [
            75441.0,
            103304.0,
            123868.0,
            154899.0,
            177247.0,
            189283.0,
            227702.0,
            268761.0,
            306855.0,
            348865.0
          ],
          "2": [
            80979.0,
            106919.0,
            128693.0,
            157542.0,
            183703.0,
            194327.0,
            225607.0,
            270235.0,
            295992.0,
            328192.0
          ],
          "3": [
            95726.0,
            116283.0,
            136224.0,
            166857.0,
            197451.0,
            216576.0,
            241432.0,
            298417.0,
            336294.0,
            401803.0
          ],
          "4": [
            100577.0,
            122262.0,
            141926.0,
            167531.0,
            192749.0,
            208819.0,
            241867.0,
            292648.0,
            357162.0,
            407378.0
          ],
          "5": [
            101817.0,
            123740.0,
            146140.0,
            165407.0,
            189580.0,
            197589.0,
            223409.0,
            268442.0,
            314557.0,
            366358.0
          ]
        },
        "Casa": {
          "1": [
            81307.0,
            121454.0,
            147170.0,
            166968.0,
            207015.0,
            228635.0,
            249356.0,
            283858.0,
            336428.0,
            403413.0
          ],
          "2": [
            82829.0,
            125717.0,
            152459.0,
            167208.0,
            203752.0,
            226151.0,
            244262.0,
            285180.0,
            315427.0,
            355227.0
          ],
          "3": [
            102646.0,
            136408.0,
            159337.0,
            182137.0,
            222567.0,
            242439.0,
            269998.0,
            303396.0,
            336938.0,
            392816.0
          ],
          "4": [
            105114.0,
            138247.0,
            163473.0,
            183105.0,
            221300.0,
            241142.0,
            285738.0,
            313378.0,
            366275.0,
            428640.0
          ],
          "5": [
            107576.0,
            142170.0,
            165571.0,
            176781.0,
            218868.0,
            240454.0,
            278164.0,
            305950.0,
            343798.0,
            399600.0
          ]
        }
      },
      "Colegiales": {
        "Departamento": {
          "1": [
            87034.0,
            116289.0,
            140004.0,
            172177.0,
            205126.0,
            223610.0,
            264875.0,
            319340.0,
            416083.0,
            464418.0
          ],
          "2": [
            89026.0,
            119509.0,
            146085.0,
            175529.0,
            213357.0,
            243078.0,
            278717.0,
            332151.0,
            397739.0,
            425861.0
          ],
          "3": [
            106739.0,
            126758.0,
            161314.0,
            199094.0,
            227258.0,
            279520.0,
            320860.0,
            396618.0,
            482492.0,
            532968.0
          ],
          "4": [
            110921.0,
            130698.0,
            161013.0,
            197124.0,
            217637.0,
            265966.0,
            314600.0,
            392726.0,
            508318.0,
            556042.0
          ],
          "5": [
            108990.0,
            129046.0,
            159773.0,
            184370.0,
            206707.0,
            247303.0,
            293233.0,
            358529.0,
            446696.0,
            500487.0
          ]
        },
        "Ph": {
          "1": [
            83041.0,
            114361.0,
            136229.0,
            173714.0,
            202732.0,
            220582.0,
            260839.0,
            316216.0,
            380818.0,
            465970.0
          ],
          "2": [
            89073.0,
            116906.0,
            135613.0,
            174812.0,
            204163.0,
            236463.0,
            271233.0,
            328479.0,
            371768.0,
            443102.0
          ],
          "3": [
            107824.0,
            127616.0,
            133854.0,
            179696.0,
            220275.0,
            251738.0,
            291604.0,
            367358.0,
            402790.0,
            497147.0
          ],
          "4": [
            110344.0,
            132084.0,
            136946.0,
            184874.0,
            217138.0,
            244284.0,
            291695.0,
            348118.0,
            414389.0,
            502501.0
          ],
          "5": [
            113031.0,
            135268.0,
            140012.0,
            183013.0,
            215879.0,
            236186.0,
            276078.0,
            327909.0,
            365830.0,
            433749.0
          ]
        },
        "Casa": {
          "1": [
            91191.0,
            137414.0,
            162149.0,
            201986.0,
            220635.0,
            237359.0,
            266302.0,
            312943.0,
            401730.0,
            476586.0
          ],
          "2": [
            93460.0,
            142999.0,
            168750.0,
            207138.0,
            225551.0,
            253700.0,
            279451.0,
            328058.0,
            391205.0,
            448729.0
          ],
          "3": [
            117289.0,
            147769.0,
            175667.0,
            214650.0,
            243700.0,
            290622.0,
            314657.0,
            352915.0,
            418555.0,
            494334.0
          ],
          "4": [
            120200.0,
            150466.0,
            176560.0,
            213666.0,
            240408.0,
            281124.0,
            325515.0,
            353418.0,
            442199.0,
            534288.0
          ],
          "5": [
            122697.0,
            154336.0,
            178362.0,
            205190.0,
            235441.0,
            278775.0,
            314584.0,
            347764.0,
            414304.0,
            489748.0
          ]
        }
      },
      "Congreso": {
        "Departamento": {
          "1": [
            69028.0,
            92909.0,
            105971.0,
            135838.0,
            161564.0,
            171825.0,
            204961.0,
            214931.0,
            249535.0,
            305557.0
          ],
          "2": [
            74730.0,
            97200.0,
            109257.0,
            134456.0,
            161921.0,
            165822.0,
            195539.0,
            201203.0,
            231170.0,
            288030.0
          ],
          "3": [
            99943.0,
            109296.0,
            123460.0,
            149921.0,
            164389.0,
            181213.0,
            221826.0,
            245178.0,
            276061.0,
            348762.0
          ],
          "4": [
            101524.0,
            110774.0,
            116702.0,
            153779.0,
            171132.0,
            184458.0,
            217443.0,
            244294.0,
            276923.0,
            331612.0
          ],
          "5": [
            99510.0,
            112810.0,
            117438.0,
            139417.0,
            162046.0,
            179419.0,
            213977.0,
            227844.0,
            259541.0,
            313162.0
          ]
        },
        "Ph": {
          "1": [
            65747.0,
            91167.0,
            92729.0,
            121688.0,
            148703.0,
            153149.0,
            186125.0,
            196865.0,
            222640.0,
            295294.0
          ],
          "2": [
            74166.0,
            93982.0,
            94493.0,
            120641.0,
            148347.0,
            150605.0,
            177883.0,
            188882.0,
            214325.0,
            283338.0
          ],
          "3": [
            97251.0,
            106095.0,
            102464.0,
            129026.0,
            150215.0,
            160778.0,
            198470.0,
            210547.0,
            234892.0,
            307738.0
          ],
          "4": [
            98992.0,
            109540.0,
            97553.0,
            131402.0,
            154605.0,
            163360.0,
            194499.0,
            222700.0,
            251133.0,
            309968.0
          ],
          "5": [
            99091.0,
            113348.0,
            99829.0,
            124425.0,
            148516.0,
            159611.0,
            190790.0,
            213897.0,
            234182.0,
            286064.0
          ]
        },
        "Casa": {
          "1": [
            65794.0,
            87200.0,
            97375.0,
            119949.0,
            150111.0,
            155761.0,
            179029.0,
            195475.0,
            229244.0,
            278560.0
          ],
          "2": [
            70061.0,
            91282.0,
            101082.0,
            121072.0,
            151129.0,
            152786.0,
            172150.0,
            184437.0,
            215290.0,
            264058.0
          ],
          "3": [
            95597.0,
            104617.0,
            115962.0,
            139653.0,
            162767.0,
            173571.0,
            202515.0,
            211950.0,
            226349.0,
            294436.0
          ],
          "4": [
            98386.0,
            107325.0,
            110729.0,
            146083.0,
            168304.0,
            180068.0,
            206126.0,
            216696.0,
            230600.0,
            292774.0
          ],
          "5": [
            97616.0,
            110638.0,
            111158.0,
            132253.0,
            160398.0,
            180298.0,
            204095.0,
            206645.0,
            224387.0,
            276209.0
          ]
        }
      },
      "Constitución": {
        "Departamento": {
          "1": [
            66377.0,
            83344.0,
            88031.0,
            113584.0,
            137161.0,
            154815.0,
            167541.0,
            192923.0,
            230255.0,
            281813.0
          ],
          "2": [
            73853.0,
            83366.0,
            88088.0,
            105449.0,
            137389.0,
            149080.0,
            151949.0,
            171352.0,
            207692.0,
            254707.0
          ],
          "3": [
            97651.0,
            92122.0,
            95989.0,
            109430.0,
            128469.0,
            151033.0,
            172048.0,
            203901.0,
            241986.0,
            295325.0
          ],
          "4": [
            97338.0,
            100729.0,
            97749.0,
            112678.0,
            125904.0,
            147774.0,
            163953.0,
            201556.0,
            242167.0,
            278030.0
          ],
          "5": [
            94058.0,
            101862.0,
            97583.0,
            106005.0,
            118327.0,
            135635.0,
            158175.0,
            181820.0,
            223114.0,
            261313.0
          ]
        },
        "Ph": {
          "1": [
            65087.0,
            87260.0,
            93549.0,
            111774.0,
            133484.0,
            150091.0,
            166451.0,
            176561.0,
            205829.0,
            269315.0
          ],
          "2": [
            74875.0,
            89044.0,
            96112.0,
            107332.0,
            134063.0,
            146818.0,
            150902.0,
            159004.0,
            188247.0,
            247008.0
          ],
          "3": [
            101204.0,
            102468.0,
            100774.0,
            115448.0,
            132045.0,
            153984.0,
            175816.0,
            182369.0,
            211442.0,
            272400.0
          ],
          "4": [
            105711.0,
            117837.0,
            106609.0,
            121213.0,
            143700.0,
            157491.0,
            172453.0,
            192617.0,
            227310.0,
            271039.0
          ],
          "5": [
            105294.0,
            122211.0,
            110847.0,
            120048.0,
            138749.0,
            150742.0,
            167428.0,
            184414.0,
            216155.0,
            258126.0
          ]
        },
        "Casa": {
          "1": [
            72365.0,
            103398.0,
            112232.0,
            131082.0,
            163992.0,
            179806.0,
            194440.0,
            217051.0,
            267196.0,
            310813.0
          ],
          "2": [
            78560.0,
            108427.0,
            116884.0,
            131933.0,
            160781.0,
            173902.0,
            179321.0,
            198531.0,
            247053.0,
            283217.0
          ],
          "3": [
            109282.0,
            124658.0,
            128784.0,
            140791.0,
            161685.0,
            183064.0,
            200149.0,
            214473.0,
            258879.0,
            299619.0
          ],
          "4": [
            108100.0,
            128728.0,
            129768.0,
            147975.0,
            164767.0,
            182307.0,
            212767.0,
            222786.0,
            265348.0,
            304319.0
          ],
          "5": [
            117353.0,
            146247.0,
            140927.0,
            150552.0,
            172076.0,
            194196.0,
            222887.0,
            228996.0,
            266343.0,
            293057.0
          ]
        }
      },
      "Flores": {
        "Departamento": {
          "1": [
            75068.0,
            101583.0,
            115609.0,
            137632.0,
            163140.0,
            176856.0,
            215142.0,
            247108.0,
            276688.0,
            314947.0
          ],
          "2": [
            76671.0,
            100708.0,
            118943.0,
            135671.0,
            164493.0,
            177518.0,
            210266.0,
            236298.0,
            259310.0,
            291934.0
          ],
          "3": [
            101682.0,
            110098.0,
            126123.0,
            156671.0,
            182755.0,
            213680.0,
            250000.0,
            290475.0,
            320266.0,
            356926.0
          ],
          "4": [
            106794.0,
            111986.0,
            128399.0,
            155721.0,
            174669.0,
            204840.0,
            247647.0,
            287884.0,
            324085.0,
            353051.0
          ],
          "5": [
            105765.0,
            111385.0,
            129576.0,
            144953.0,
            174040.0,
            188606.0,
            235904.0,
            261494.0,
            289206.0,
            332378.0
          ]
        },
        "Ph": {
          "1": [
            69707.0,
            97997.0,
            103553.0,
            128171.0,
            146932.0,
            156841.0,
            192365.0,
            211621.0,
            236432.0,
            289055.0
          ],
          "2": [
            73998.0,
            97157.0,
            106150.0,
            127103.0,
            148105.0,
            159214.0,
            187931.0,
            205184.0,
            224671.0,
            270832.0
          ],
          "3": [
            98772.0,
            105295.0,
            106092.0,
            137048.0,
            163548.0,
            186471.0,
            216440.0,
            221933.0,
            253426.0,
            303980.0
          ],
          "4": [
            103553.0,
            108252.0,
            108116.0,
            134375.0,
            158020.0,
            177950.0,
            210434.0,
            226920.0,
            264365.0,
            304801.0
          ],
          "5": [
            103716.0,
            108339.0,
            111628.0,
            129715.0,
            158272.0,
            164257.0,
            200613.0,
            214486.0,
            238805.0,
            283417.0
          ]
        },
        "Casa": {
          "1": [
            74895.0,
            104756.0,
            115772.0,
            141217.0,
            174799.0,
            189689.0,
            205059.0,
            234963.0,
            270161.0,
            304922.0
          ],
          "2": [
            77221.0,
            104680.0,
            119400.0,
            142243.0,
            170485.0,
            191149.0,
            203179.0,
            228706.0,
            259424.0,
            285653.0
          ],
          "3": [
            102865.0,
            119229.0,
            128265.0,
            155796.0,
            196416.0,
            218826.0,
            227194.0,
            248433.0,
            275957.0,
            307696.0
          ],
          "4": [
            105543.0,
            121007.0,
            134688.0,
            161565.0,
            193287.0,
            214942.0,
            242386.0,
            252296.0,
            280751.0,
            317152.0
          ],
          "5": [
            107672.0,
            123981.0,
            135576.0,
            155379.0,
            196547.0,
            213620.0,
            236581.0,
            249891.0,
            265424.0,
            297253.0
          ]
        }
      },
      "Floresta": {
        "Departamento": {
          "1": [
            71188.0,
            94476.0,
            107607.0,
            132086.0,
            159015.0,
            171656.0,
            206755.0,
            217057.0,
            252036.0,
            312936.0
          ],
          "2": [
            75098.0,
            96324.0,
            109498.0,
            129836.0,
            159573.0,
            174321.0,
            205249.0,
            210603.0,
            242251.0,
            299390.0
          ],
          "3": [
            100210.0,
            106586.0,
            121763.0,
            147218.0,
            169086.0,
            197182.0,
            231095.0,
            249039.0,
            278250.0,
            343762.0
          ],
          "4": [
            104076.0,
            116109.0,
            115819.0,
            153093.0,
            173680.0,
            201147.0,
            231711.0,
            252626.0,
            294412.0,
            342044.0
          ],
          "5": [
            101963.0,
            118187.0,
            116667.0,
            134354.0,
            170740.0,
            192164.0,
            225287.0,
            237403.0,
            267113.0,
            325819.0
          ]
        },
        "Ph": {
          "1": [
            68538.0,
            95576.0,
            98019.0,
            122690.0,
            145929.0,
            152597.0,
            189017.0,
            198991.0,
            224260.0,
            311987.0
          ],
          "2": [
            74926.0,
            96882.0,
            99247.0,
            122270.0,
            145765.0,
            157749.0,
            187782.0,
            197791.0,
            223883.0,
            305223.0
          ],
          "3": [
            99260.0,
            107763.0,
            104686.0,
            132497.0,
            156092.0,
            180474.0,
            212535.0,
            219571.0,
            244305.0,
            323602.0
          ],
          "4": [
            102204.0,
            109425.0,
            96675.0,
            134741.0,
            156292.0,
            179727.0,
            209342.0,
            233282.0,
            268432.0,
            331738.0
          ],
          "5": [
            102053.0,
            112949.0,
            98831.0,
            122329.0,
            156059.0,
            169198.0,
            200786.0,
            225099.0,
            244381.0,
            303957.0
          ]
        },
        "Casa": {
          "1": [
            73338.0,
            102829.0,
            110685.0,
            137926.0,
            170682.0,
            178328.0,
            199245.0,
            208633.0,
            247781.0,
            298867.0
          ],
          "2": [
            78376.0,
            107556.0,
            115199.0,
            140493.0,
            166442.0,
            182315.0,
            199722.0,
            207003.0,
            246295.0,
            293120.0
          ],
          "3": [
            105142.0,
            122892.0,
            128965.0,
            150900.0,
            183762.0,
            206490.0,
            222106.0,
            222486.0,
            255144.0,
            303247.0
          ],
          "4": [
            106780.0,
            125637.0,
            123072.0,
            162497.0,
            186388.0,
            210274.0,
            237355.0,
            233327.0,
            270777.0,
            316317.0
          ],
          "5": [
            115476.0,
            141166.0,
            132041.0,
            156007.0,
            200319.0,
            228031.0,
            249151.0,
            237322.0,
            261497.0,
            299560.0
          ]
        }
      },
      "Las Cañitas": {
        "Departamento": {
          "1": [
            100793.0,
            153551.0,
            174135.0,
            214473.0,
            263378.0,
            287141.0,
            329574.0,
            419771.0,
            575580.0,
            705024.0
          ],
          "2": [
            104361.0,
            160168.0,
            187754.0,
            220558.0,
            273072.0,
            317104.0,
            358934.0,
            462847.0,
            579127.0,
            705365.0
          ],
          "3": [
            129509.0,
            158483.0,
            180093.0,
            223878.0,
            273351.0,
            321261.0,
            392535.0,
            502948.0,
            619936.0,
            741794.0
          ],
          "4": [
            130696.0,
            159291.0,
            178213.0,
            222083.0,
            262168.0,
            304925.0,
            384499.0,
            482027.0,
            613648.0,
            778066.0
          ],
          "5": [
            132981.0,
            162862.0,
            179453.0,
            213018.0,
            247081.0,
            296291.0,
            381658.0,
            453917.0,
            560122.0,
            704311.0
          ]
        },
        "Ph": {
          "1": [
            85895.0,
            124501.0,
            152795.0,
            188142.0,
            222914.0,
            231643.0,
            269449.0,
            337718.0,
            406158.0,
            450812.0
          ],
          "2": [
            91639.0,
            128740.0,
            158258.0,
            196136.0,
            234011.0,
            258151.0,
            293362.0,
            368342.0,
            408280.0,
            445317.0
          ],
          "3": [
            111820.0,
            131388.0,
            146363.0,
            196468.0,
            238644.0,
            272734.0,
            325441.0,
            413923.0,
            448859.0,
            499064.0
          ],
          "4": [
            115674.0,
            136878.0,
            146342.0,
            196003.0,
            229106.0,
            254045.0,
            309415.0,
            380299.0,
            442398.0,
            491141.0
          ],
          "5": [
            116200.0,
            137467.0,
            150093.0,
            191581.0,
            214015.0,
            238993.0,
            292347.0,
            342200.0,
            386046.0,
            428183.0
          ]
        },
        "Casa": {
          "1": [
            94397.0,
            137811.0,
            158991.0,
            197933.0,
            250096.0,
            271255.0,
            290604.0,
            361778.0,
            468326.0,
            535451.0
          ],
          "2": [
            97665.0,
            142376.0,
            170337.0,
            205588.0,
            253784.0,
            297196.0,
            316493.0,
            398904.0,
            471212.0,
            535709.0
          ],
          "3": [
            121210.0,
            148694.0,
            165865.0,
            206704.0,
            260510.0,
            306618.0,
            340141.0,
            418460.0,
            481190.0,
            553092.0
          ],
          "4": [
            123624.0,
            150672.0,
            166474.0,
            207234.0,
            250523.0,
            292783.0,
            347327.0,
            406109.0,
            484799.0,
            586321.0
          ],
          "5": [
            125375.0,
            153546.0,
            166672.0,
            198832.0,
            235335.0,
            287806.0,
            344193.0,
            392983.0,
            457842.0,
            537508.0
          ]
        }
      },
      "Liniers": {
        "Departamento": {
          "1": [
            73371.0,
            101872.0,
            115973.0,
            142294.0,
            171657.0,
            180265.0,
            211294.0,
            223380.0,
            258764.0,
            314553.0
          ],
          "2": [
            76971.0,
            103309.0,
            120663.0,
            142892.0,
            174921.0,
            186432.0,
            212835.0,
            219560.0,
            251957.0,
            305041.0
          ],
          "3": [
            102175.0,
            115961.0,
            133246.0,
            159220.0,
            187036.0,
            218815.0,
            250920.0,
            278321.0,
            315987.0,
            370726.0
          ],
          "4": [
            105379.0,
            116534.0,
            123600.0,
            163700.0,
            186710.0,
            219575.0,
            252901.0,
            281163.0,
            327725.0,
            364793.0
          ],
          "5": [
            103288.0,
            114073.0,
            124564.0,
            142904.0,
            184887.0,
            206491.0,
            245461.0,
            261301.0,
            297284.0,
            346415.0
          ]
        },
        "Ph": {
          "1": [
            67512.0,
            98625.0,
            104014.0,
            128836.0,
            152785.0,
            158296.0,
            193712.0,
            201682.0,
            224137.0,
            293483.0
          ],
          "2": [
            73776.0,
            99205.0,
            106937.0,
            130302.0,
            155745.0,
            165117.0,
            193474.0,
            201098.0,
            221195.0,
            289003.0
          ],
          "3": [
            97681.0,
            109750.0,
            109218.0,
            135194.0,
            163634.0,
            187725.0,
            214046.0,
            214006.0,
            245173.0,
            305197.0
          ],
          "4": [
            100905.0,
            111913.0,
            101732.0,
            137901.0,
            160746.0,
            183583.0,
            215289.0,
            230419.0,
            270896.0,
            321043.0
          ],
          "5": [
            101006.0,
            111313.0,
            104259.0,
            125787.0,
            161893.0,
            173591.0,
            206697.0,
            220850.0,
            246541.0,
            299152.0
          ]
        },
        "Casa": {
          "1": [
            73821.0,
            101889.0,
            115469.0,
            140531.0,
            177859.0,
            180801.0,
            198994.0,
            212963.0,
            249279.0,
            301159.0
          ],
          "2": [
            77570.0,
            104226.0,
            118052.0,
            141289.0,
            173236.0,
            186500.0,
            199845.0,
            211351.0,
            246467.0,
            293976.0
          ],
          "3": [
            104800.0,
            123691.0,
            136365.0,
            155233.0,
            195061.0,
            219445.0,
            224235.0,
            231000.0,
            264985.0,
            308819.0
          ],
          "4": [
            105645.0,
            124825.0,
            129302.0,
            165484.0,
            192792.0,
            217037.0,
            239861.0,
            244145.0,
            282181.0,
            327059.0
          ],
          "5": [
            107702.0,
            127090.0,
            129337.0,
            149463.0,
            199004.0,
            220957.0,
            235882.0,
            243004.0,
            269919.0,
            310258.0
          ]
        }
      },
      "Mataderos": {
        "Departamento": {
          "1": [
            78436.0,
            105913.0,
            121487.0,
            144913.0,
            164904.0,
            178849.0,
            214341.0,
            250299.0,
            284851.0,
            317937.0
          ],
          "2": [
            79081.0,
            105778.0,
            126367.0,
            146535.0,
            169823.0,
            185303.0,
            216681.0,
            243487.0,
            270854.0,
            302754.0
          ],
          "3": [
            105152.0,
            114335.0,
            136082.0,
            170080.0,
            189479.0,
            222895.0,
            258751.0,
            312063.0,
            339598.0,
            372905.0
          ],
          "4": [
            110248.0,
            115703.0,
            136367.0,
            165382.0,
            184509.0,
            218855.0,
            249836.0,
            307233.0,
            343479.0,
            366503.0
          ],
          "5": [
            107864.0,
            113688.0,
            137951.0,
            154973.0,
            178366.0,
            201151.0,
            248487.0,
            272248.0,
            307716.0,
            349794.0
          ]
        },
        "Ph": {
          "1": [
            71483.0,
            101587.0,
            110084.0,
            133844.0,
            149784.0,
            159925.0,
            200860.0,
            221955.0,
            250504.0,
            303309.0
          ],
          "2": [
            75235.0,
            100682.0,
            111904.0,
            134603.0,
            153107.0,
            166175.0,
            201886.0,
            219635.0,
            240688.0,
            290111.0
          ],
          "3": [
            100375.0,
            108772.0,
            113821.0,
            142485.0,
            165226.0,
            189905.0,
            226091.0,
            237135.0,
            270682.0,
            321346.0
          ],
          "4": [
            105990.0,
            112410.0,
            114615.0,
            139732.0,
            164111.0,
            185009.0,
            214962.0,
            243277.0,
            285663.0,
            327063.0
          ],
          "5": [
            107069.0,
            113467.0,
            119356.0,
            136437.0,
            162135.0,
            173813.0,
            211954.0,
            224813.0,
            257920.0,
            308658.0
          ]
        },
        "Casa": {
          "1": [
            76078.0,
            107085.0,
            119184.0,
            145912.0,
            175679.0,
            188168.0,
            202911.0,
            236145.0,
            276806.0,
            306584.0
          ],
          "2": [
            78093.0,
            108102.0,
            123447.0,
            148795.0,
            172738.0,
            195125.0,
            207946.0,
            235839.0,
            270190.0,
            294758.0
          ],
          "3": [
            104091.0,
            120896.0,
            133252.0,
            161642.0,
            198443.0,
            220474.0,
            230526.0,
            257609.0,
            289676.0,
            316922.0
          ],
          "4": [
            106826.0,
            122877.0,
            138486.0,
            165386.0,
            197554.0,
            218667.0,
            238459.0,
            261632.0,
            293201.0,
            331089.0
          ],
          "5": [
            108982.0,
            125897.0,
            139398.0,
            160096.0,
            196452.0,
            218868.0,
            240807.0,
            251194.0,
            277090.0,
            310261.0
          ]
        }
      },
      "Monserrat": {
        "Departamento": {
          "1": [
            71750.0,
            96360.0,
            109085.0,
            137936.0,
            162769.0,
            172297.0,
            201632.0,
            213302.0,
            252672.0,
            311842.0
          ],
          "2": [
            76646.0,
            98565.0,
            112109.0,
            137256.0,
            164394.0,
            176293.0,
            202704.0,
            208988.0,
            242965.0,
            299785.0
          ],
          "3": [
            102444.0,
            111259.0,
            125631.0,
            151813.0,
            169219.0,
            197000.0,
            235071.0,
            259463.0,
            292018.0,
            356909.0
          ],
          "4": [
            103867.0,
            112520.0,
            117869.0,
            156696.0,
            173189.0,
            198664.0,
            231935.0,
            259930.0,
            292772.0,
            344634.0
          ],
          "5": [
            101806.0,
            114588.0,
            118612.0,
            140814.0,
            164992.0,
            189915.0,
            224708.0,
            242118.0,
            272727.0,
            328860.0
          ]
        },
        "Ph": {
          "1": [
            65045.0,
            91125.0,
            94044.0,
            121506.0,
            142618.0,
            149192.0,
            183014.0,
            186900.0,
            217003.0,
            289962.0
          ],
          "2": [
            72355.0,
            92526.0,
            96120.0,
            121724.0,
            145284.0,
            155176.0,
            183867.0,
            187230.0,
            213157.0,
            283055.0
          ],
          "3": [
            97084.0,
            104717.0,
            100933.0,
            127447.0,
            148896.0,
            166571.0,
            207885.0,
            206057.0,
            233405.0,
            297260.0
          ],
          "4": [
            98607.0,
            107479.0,
            94984.0,
            130239.0,
            154782.0,
            167958.0,
            204954.0,
            220119.0,
            249418.0,
            306876.0
          ],
          "5": [
            99865.0,
            112521.0,
            98341.0,
            122418.0,
            150041.0,
            163374.0,
            197383.0,
            213998.0,
            235315.0,
            291312.0
          ]
        },
        "Casa": {
          "1": [
            73943.0,
            95836.0,
            104706.0,
            129879.0,
            162653.0,
            164582.0,
            185270.0,
            201604.0,
            256183.0,
            298712.0
          ],
          "2": [
            79737.0,
            99161.0,
            107602.0,
            131726.0,
            161711.0,
            169243.0,
            186851.0,
            198568.0,
            249047.0,
            282178.0
          ],
          "3": [
            109917.0,
            116943.0,
            127581.0,
            148588.0,
            176610.0,
            193595.0,
            210610.0,
            220029.0,
            256531.0,
            297604.0
          ],
          "4": [
            109123.0,
            120434.0,
            122821.0,
            159758.0,
            179989.0,
            196030.0,
            219623.0,
            229447.0,
            263492.0,
            308138.0
          ],
          "5": [
            117713.0,
            134980.0,
            131386.0,
            156377.0,
            188783.0,
            213037.0,
            227655.0,
            227113.0,
            256137.0,
            292522.0
          ]
        }
      },
      "Monte Castro": {
        "Departamento": {
          "1": [
            70388.0,
            98385.0,
            113609.0,
            140529.0,
            167289.0,
            180380.0,
            209257.0,
            222554.0,
            263330.0,
            314471.0
          ],
          "2": [
            74636.0,
            99390.0,
            115578.0,
            138493.0,
            169247.0,
            184647.0,
            210465.0,
            218194.0,
            253171.0,
            302261.0
          ],
          "3": [
            99870.0,
            110353.0,
            127757.0,
            155186.0,
            177331.0,
            206895.0,
            238278.0,
            259182.0,
            291588.0,
            348042.0
          ],
          "4": [
            102207.0,
            110596.0,
            118478.0,
            160141.0,
            180423.0,
            208586.0,
            238134.0,
            258588.0,
            302693.0,
            346555.0
          ],
          "5": [
            100094.0,
            108169.0,
            119388.0,
            141643.0,
            177246.0,
            198806.0,
            231398.0,
            243222.0,
            274245.0,
            330675.0
          ]
        },
        "Ph": {
          "1": [
            67665.0,
            96663.0,
            102902.0,
            128815.0,
            152714.0,
            158351.0,
            192123.0,
            205052.0,
            235930.0,
            304766.0
          ],
          "2": [
            74277.0,
            97068.0,
            104059.0,
            128576.0,
            153114.0,
            164448.0,
            192721.0,
            205136.0,
            234667.0,
            299202.0
          ],
          "3": [
            97218.0,
            105859.0,
            105859.0,
            134262.0,
            160404.0,
            183595.0,
            217023.0,
            224141.0,
            251312.0,
            315199.0
          ],
          "4": [
            100325.0,
            107700.0,
            98414.0,
            137046.0,
            159079.0,
            182979.0,
            214789.0,
            237925.0,
            275160.0,
            328429.0
          ],
          "5": [
            100614.0,
            107324.0,
            101123.0,
            124419.0,
            158877.0,
            174534.0,
            207672.0,
            230899.0,
            250758.0,
            307738.0
          ]
        },
        "Casa": {
          "1": [
            73845.0,
            107192.0,
            118245.0,
            143029.0,
            179135.0,
            187996.0,
            207100.0,
            224600.0,
            275148.0,
            326125.0
          ],
          "2": [
            79094.0,
            112134.0,
            124015.0,
            145733.0,
            176689.0,
            194312.0,
            210512.0,
            225376.0,
            273810.0,
            321631.0
          ],
          "3": [
            104586.0,
            124330.0,
            132000.0,
            153847.0,
            191019.0,
            216116.0,
            237832.0,
            243479.0,
            284929.0,
            324270.0
          ],
          "4": [
            105942.0,
            125262.0,
            125654.0,
            164416.0,
            192125.0,
            220985.0,
            257002.0,
            255791.0,
            301827.0,
            341997.0
          ],
          "5": [
            114926.0,
            135707.0,
            134171.0,
            159911.0,
            207061.0,
            237921.0,
            267362.0,
            264786.0,
            294926.0,
            329097.0
          ]
        }
      },
      "Nuñez": {
        "Departamento": {
          "1": [
            91188.0,
            130731.0,
            152305.0,
            183451.0,
            220357.0,
            239300.0,
            296381.0,
            382810.0,
            507327.0,
            594500.0
          ],
          "2": [
            94409.0,
            133634.0,
            157329.0,
            187515.0,
            229589.0,
            264501.0,
            320272.0,
            413299.0,
            499722.0,
            578144.0
          ],
          "3": [
            121912.0,
            145149.0,
            176173.0,
            208906.0,
            246713.0,
            299412.0,
            367920.0,
            493517.0,
            583479.0,
            704674.0
          ],
          "4": [
            122910.0,
            146324.0,
            175482.0,
            207925.0,
            233748.0,
            280128.0,
            357521.0,
            476798.0,
            591118.0,
            730798.0
          ],
          "5": [
            124803.0,
            149298.0,
            176221.0,
            202644.0,
            228822.0,
            271443.0,
            341388.0,
            442218.0,
            530256.0,
            666656.0
          ]
        },
        "Ph": {
          "1": [
            84478.0,
            124124.0,
            142523.0,
            177204.0,
            210449.0,
            228212.0,
            268343.0,
            337051.0,
            407996.0,
            472196.0
          ],
          "2": [
            90882.0,
            125375.0,
            141939.0,
            180064.0,
            215724.0,
            254051.0,
            291907.0,
            370217.0,
            408533.0,
            462587.0
          ],
          "3": [
            111884.0,
            135897.0,
            140397.0,
            183595.0,
            233310.0,
            268013.0,
            321369.0,
            419675.0,
            442331.0,
            512944.0
          ],
          "4": [
            114733.0,
            140943.0,
            142928.0,
            189451.0,
            225503.0,
            255870.0,
            320730.0,
            385050.0,
            442353.0,
            511151.0
          ],
          "5": [
            117709.0,
            144564.0,
            146460.0,
            187235.0,
            223997.0,
            249660.0,
            300280.0,
            369585.0,
            386555.0,
            440383.0
          ]
        },
        "Casa": {
          "1": [
            91390.0,
            146881.0,
            169685.0,
            205957.0,
            224123.0,
            239614.0,
            271960.0,
            337026.0,
            452022.0,
            514826.0
          ],
          "2": [
            94358.0,
            152520.0,
            176382.0,
            213210.0,
            232918.0,
            265625.0,
            298177.0,
            373112.0,
            450919.0,
            511065.0
          ],
          "3": [
            121225.0,
            156347.0,
            183369.0,
            219777.0,
            255578.0,
            307901.0,
            342189.0,
            410209.0,
            480929.0,
            571641.0
          ],
          "4": [
            124300.0,
            159286.0,
            184186.0,
            216649.0,
            243712.0,
            292138.0,
            349791.0,
            403781.0,
            487310.0,
            610404.0
          ],
          "5": [
            127019.0,
            163558.0,
            186402.0,
            211523.0,
            238354.0,
            288958.0,
            338382.0,
            391243.0,
            463239.0,
            565176.0
          ]
        }
      },
      "Once": {
        "Departamento": {
          "1": [
            69825.0,
            94793.0,
            107493.0,
            134970.0,
            158613.0,
            169549.0,
            197860.0,
            209696.0,
            248415.0,
            296777.0
          ],
          "2": [
            75474.0,
            97737.0,
            110789.0,
            134763.0,
            160411.0,
            169716.0,
            194596.0,
            200996.0,
            233497.0,
            284311.0
          ],
          "3": [
            101526.0,
            109274.0,
            123410.0,
            150409.0,
            167046.0,
            183571.0,
            223244.0,
            240974.0,
            273959.0,
            333422.0
          ],
          "4": [
            103285.0,
            112121.0,
            118297.0,
            154034.0,
            171859.0,
            186423.0,
            219390.0,
            243047.0,
            277248.0,
            329225.0
          ],
          "5": [
            101163.0,
            114098.0,
            119043.0,
            143122.0,
            163681.0,
            178949.0,
            213481.0,
            225246.0,
            258776.0,
            314924.0
          ]
        },
        "Ph": {
          "1": [
            65639.0,
            91137.0,
            92092.0,
            119531.0,
            143629.0,
            150991.0,
            180404.0,
            191002.0,
            219971.0,
            293325.0
          ],
          "2": [
            74346.0,
            92620.0,
            93604.0,
            119270.0,
            144898.0,
            154187.0,
            177944.0,
            187954.0,
            215214.0,
            285718.0
          ],
          "3": [
            98608.0,
            106362.0,
            102002.0,
            128257.0,
            149992.0,
            163166.0,
            199499.0,
            209226.0,
            235735.0,
            302686.0
          ],
          "4": [
            100008.0,
            110219.0,
            97477.0,
            130767.0,
            153576.0,
            165041.0,
            194644.0,
            222648.0,
            252601.0,
            314537.0
          ],
          "5": [
            100048.0,
            113983.0,
            99763.0,
            123941.0,
            148514.0,
            158849.0,
            187991.0,
            212497.0,
            234932.0,
            289412.0
          ]
        },
        "Casa": {
          "1": [
            67361.0,
            90299.0,
            101988.0,
            124817.0,
            152286.0,
            161276.0,
            185580.0,
            195512.0,
            236797.0,
            272764.0
          ],
          "2": [
            73498.0,
            94030.0,
            105329.0,
            125658.0,
            152194.0,
            161637.0,
            182747.0,
            187635.0,
            222856.0,
            261634.0
          ],
          "3": [
            99562.0,
            107276.0,
            119604.0,
            141275.0,
            162855.0,
            179062.0,
            207915.0,
            216041.0,
            236093.0,
            290772.0
          ],
          "4": [
            103171.0,
            112118.0,
            116781.0,
            150676.0,
            172660.0,
            185193.0,
            212091.0,
            222045.0,
            238417.0,
            294296.0
          ],
          "5": [
            101050.0,
            114095.0,
            117517.0,
            140003.0,
            165734.0,
            185579.0,
            208042.0,
            211258.0,
            232226.0,
            280224.0
          ]
        }
      },
      "Palermo": {
        "Departamento": {
          "1": [
            93016.0,
            134683.0,
            154874.0,
            194426.0,
            231040.0,
            255781.0,
            308358.0,
            408804.0,
            560955.0,
            693107.0
          ],
          "2": [
            99433.0,
            137767.0,
            160268.0,
            200483.0,
            241057.0,
            281016.0,
            334287.0,
            447493.0,
            559769.0,
            687568.0
          ],
          "3": [
            127056.0,
            154082.0,
            178545.0,
            219469.0,
            258130.0,
            314005.0,
            386704.0,
            514303.0,
            628011.0,
            762603.0
          ],
          "4": [
            128922.0,
            155945.0,
            177997.0,
            221124.0,
            244232.0,
            290339.0,
            376167.0,
            494238.0,
            647015.0,
            807716.0
          ],
          "5": [
            130281.0,
            158354.0,
            177703.0,
            213959.0,
            237268.0,
            282184.0,
            359553.0,
            460358.0,
            586546.0,
            754381.0
          ]
        },
        "Ph": {
          "1": [
            83136.0,
            120231.0,
            142126.0,
            183923.0,
            216010.0,
            238854.0,
            279012.0,
            359844.0,
            450512.0,
            544000.0
          ],
          "2": [
            91850.0,
            123151.0,
            141482.0,
            188322.0,
            221956.0,
            263902.0,
            304180.0,
            396121.0,
            452096.0,
            530795.0
          ],
          "3": [
            115030.0,
            137756.0,
            141604.0,
            189450.0,
            235220.0,
            273698.0,
            327523.0,
            432064.0,
            472183.0,
            561501.0
          ],
          "4": [
            117922.0,
            143168.0,
            143675.0,
            197215.0,
            227234.0,
            257891.0,
            324867.0,
            388206.0,
            466929.0,
            559570.0
          ],
          "5": [
            119888.0,
            145520.0,
            145895.0,
            192808.0,
            223466.0,
            250628.0,
            304530.0,
            376422.0,
            401792.0,
            468900.0
          ]
        },
        "Casa": {
          "1": [
            105276.0,
            163744.0,
            187476.0,
            226859.0,
            249372.0,
            270638.0,
            322806.0,
            385045.0,
            504301.0,
            614723.0
          ],
          "2": [
            112392.0,
            171871.0,
            200469.0,
            243077.0,
            266024.0,
            304049.0,
            361048.0,
            434853.0,
            513196.0,
            621398.0
          ],
          "3": [
            141779.0,
            177489.0,
            209590.0,
            251965.0,
            296024.0,
            365192.0,
            426088.0,
            478948.0,
            561261.0,
            691018.0
          ],
          "4": [
            139351.0,
            173090.0,
            201086.0,
            239412.0,
            264716.0,
            317537.0,
            406616.0,
            445919.0,
            538624.0,
            703283.0
          ],
          "5": [
            141718.0,
            176883.0,
            202533.0,
            232538.0,
            255723.0,
            312826.0,
            375715.0,
            429844.0,
            512984.0,
            646937.0
          ]
        }
      },
      "Parque Avellaneda": {
        "Departamento": {
          "1": [
            70681.0,
            93273.0,
            107741.0,
            127805.0,
            157819.0,
            180002.0,
            202655.0,
            221495.0,
            260124.0,
            310793.0
          ],
          "2": [
            75837.0,
            92965.0,
            109240.0,
            122118.0,
            159025.0,
            183520.0,
            202778.0,
            216041.0,
            249513.0,
            297219.0
          ],
          "3": [
            100388.0,
            104135.0,
            119231.0,
            140421.0,
            168320.0,
            200717.0,
            228968.0,
            252441.0,
            283459.0,
            338503.0
          ],
          "4": [
            104694.0,
            114571.0,
            115393.0,
            145782.0,
            172208.0,
            207828.0,
            232625.0,
            260460.0,
            303788.0,
            348576.0
          ],
          "5": [
            102494.0,
            116537.0,
            116744.0,
            131413.0,
            168690.0,
            196876.0,
            223991.0,
            243623.0,
            274267.0,
            331858.0
          ]
        },
        "Ph": {
          "1": [
            66360.0,
            94700.0,
            100413.0,
            126764.0,
            147983.0,
            158293.0,
            187057.0,
            193795.0,
            222627.0,
            288475.0
          ],
          "2": [
            72730.0,
            95123.0,
            102035.0,
            127121.0,
            150299.0,
            164167.0,
            187388.0,
            193615.0,
            217916.0,
            282052.0
          ],
          "3": [
            96057.0,
            103797.0,
            103483.0,
            130009.0,
            157684.0,
            178466.0,
            211701.0,
            209364.0,
            233997.0,
            294291.0
          ],
          "4": [
            98417.0,
            105808.0,
            95647.0,
            131498.0,
            154747.0,
            175507.0,
            208475.0,
            222732.0,
            255446.0,
            308584.0
          ],
          "5": [
            98702.0,
            109693.0,
            98708.0,
            119934.0,
            154222.0,
            165641.0,
            199276.0,
            215164.0,
            233811.0,
            290358.0
          ]
        },
        "Casa": {
          "1": [
            74986.0,
            98795.0,
            112270.0,
            133189.0,
            166286.0,
            172892.0,
            189622.0,
            207999.0,
            262355.0,
            302843.0
          ],
          "2": [
            80429.0,
            101558.0,
            115493.0,
            135283.0,
            164588.0,
            176997.0,
            190389.0,
            203996.0,
            253755.0,
            286086.0
          ],
          "3": [
            108216.0,
            117943.0,
            133565.0,
            152723.0,
            186809.0,
            206986.0,
            218989.0,
            222838.0,
            257013.0,
            298388.0
          ],
          "4": [
            109367.0,
            119818.0,
            126914.0,
            163695.0,
            186842.0,
            207750.0,
            228391.0,
            233295.0,
            271556.0,
            311252.0
          ],
          "5": [
            117890.0,
            134192.0,
            134911.0,
            158772.0,
            201542.0,
            222331.0,
            235854.0,
            231192.0,
            258551.0,
            296074.0
          ]
        }
      },
      "Parque Centenario": {
        "Departamento": {
          "1": [
            79730.0,
            107337.0,
            128410.0,
            156122.0,
            187884.0,
            199109.0,
            241036.0,
            287915.0,
            346216.0,
            386550.0
          ],
          "2": [
            81262.0,
            109565.0,
            134301.0,
            159247.0,
            194507.0,
            208163.0,
            244099.0,
            295940.0,
            328278.0,
            342392.0
          ],
          "3": [
            96745.0,
            118695.0,
            145716.0,
            182345.0,
            211257.0,
            238969.0,
            279442.0,
            345744.0,
            394942.0,
            416148.0
          ],
          "4": [
            102924.0,
            124249.0,
            148894.0,
            180492.0,
            203166.0,
            235316.0,
            282582.0,
            355879.0,
            427021.0,
            446738.0
          ],
          "5": [
            100311.0,
            121682.0,
            150417.0,
            168838.0,
            194332.0,
            215489.0,
            263771.0,
            312781.0,
            377001.0,
            419882.0
          ]
        },
        "Ph": {
          "1": [
            74786.0,
            99466.0,
            119326.0,
            149203.0,
            167000.0,
            174300.0,
            209285.0,
            239742.0,
            274587.0,
            325919.0
          ],
          "2": [
            78557.0,
            101106.0,
            123810.0,
            153278.0,
            173698.0,
            185214.0,
            212921.0,
            245812.0,
            270521.0,
            311330.0
          ],
          "3": [
            91943.0,
            114030.0,
            128601.0,
            159014.0,
            192827.0,
            212104.0,
            239584.0,
            282841.0,
            318544.0,
            385059.0
          ],
          "4": [
            96932.0,
            121068.0,
            136062.0,
            161682.0,
            186490.0,
            203226.0,
            240420.0,
            283181.0,
            341288.0,
            399719.0
          ],
          "5": [
            97501.0,
            121749.0,
            140274.0,
            157267.0,
            181484.0,
            188399.0,
            217714.0,
            260556.0,
            300732.0,
            368102.0
          ]
        },
        "Casa": {
          "1": [
            82073.0,
            120346.0,
            142376.0,
            159854.0,
            198306.0,
            214203.0,
            235201.0,
            272757.0,
            327510.0,
            390999.0
          ],
          "2": [
            83660.0,
            124053.0,
            148416.0,
            161467.0,
            196782.0,
            221927.0,
            239410.0,
            282782.0,
            315068.0,
            354083.0
          ],
          "3": [
            102963.0,
            135592.0,
            155986.0,
            177638.0,
            220605.0,
            239602.0,
            261026.0,
            302061.0,
            338238.0,
            386292.0
          ],
          "4": [
            105728.0,
            137875.0,
            160432.0,
            179581.0,
            217493.0,
            237173.0,
            277188.0,
            312770.0,
            362908.0,
            422993.0
          ],
          "5": [
            107765.0,
            141211.0,
            162746.0,
            174668.0,
            215226.0,
            236097.0,
            268567.0,
            307960.0,
            344632.0,
            402172.0
          ]
        }
      },
      "Parque Chacabuco": {
        "Departamento": {
          "1": [
            74672.0,
            102758.0,
            114898.0,
            136129.0,
            163342.0,
            178025.0,
            206326.0,
            221557.0,
            260480.0,
            310088.0
          ],
          "2": [
            76820.0,
            102550.0,
            119469.0,
            137587.0,
            168418.0,
            185102.0,
            209316.0,
            219068.0,
            254028.0,
            299462.0
          ],
          "3": [
            108349.0,
            114226.0,
            130728.0,
            158389.0,
            191472.0,
            222265.0,
            250851.0,
            277081.0,
            319417.0,
            364158.0
          ],
          "4": [
            111688.0,
            117830.0,
            123776.0,
            156101.0,
            183289.0,
            217961.0,
            250736.0,
            279947.0,
            335434.0,
            369603.0
          ],
          "5": [
            108437.0,
            114251.0,
            124261.0,
            141848.0,
            177596.0,
            200426.0,
            241307.0,
            258676.0,
            302167.0,
            351466.0
          ]
        },
        "Ph": {
          "1": [
            69850.0,
            95829.0,
            104631.0,
            129837.0,
            149789.0,
            158486.0,
            188792.0,
            201078.0,
            227888.0,
            286088.0
          ],
          "2": [
            74979.0,
            96540.0,
            107869.0,
            132483.0,
            154139.0,
            168636.0,
            193066.0,
            204628.0,
            230574.0,
            282031.0
          ],
          "3": [
            101286.0,
            111432.0,
            113204.0,
            139191.0,
            170693.0,
            197334.0,
            222945.0,
            234479.0,
            266185.0,
            314255.0
          ],
          "4": [
            104708.0,
            119931.0,
            110735.0,
            139233.0,
            168379.0,
            193831.0,
            225766.0,
            248866.0,
            291168.0,
            335611.0
          ],
          "5": [
            105300.0,
            119842.0,
            113942.0,
            132290.0,
            166776.0,
            179396.0,
            210610.0,
            238825.0,
            264754.0,
            309889.0
          ]
        },
        "Casa": {
          "1": [
            74056.0,
            102087.0,
            112485.0,
            137746.0,
            171923.0,
            184091.0,
            190369.0,
            208157.0,
            251244.0,
            295093.0
          ],
          "2": [
            77124.0,
            102943.0,
            114352.0,
            137391.0,
            167880.0,
            189696.0,
            193865.0,
            209235.0,
            249060.0,
            287212.0
          ],
          "3": [
            108651.0,
            118322.0,
            127653.0,
            150206.0,
            193832.0,
            215530.0,
            219072.0,
            228630.0,
            267317.0,
            302433.0
          ],
          "4": [
            110169.0,
            123468.0,
            125205.0,
            154435.0,
            188974.0,
            211182.0,
            232810.0,
            238112.0,
            281102.0,
            324278.0
          ],
          "5": [
            112332.0,
            125728.0,
            125969.0,
            145614.0,
            191305.0,
            212247.0,
            227520.0,
            236474.0,
            269057.0,
            304256.0
          ]
        }
      },
      "Parque Chas": {
        "Departamento": {
          "1": [
            75593.0,
            106106.0,
            120704.0,
            143998.0,
            167100.0,
            182314.0,
            214787.0,
            241590.0,
            276587.0,
            307187.0
          ],
          "2": [
            77183.0,
            106967.0,
            126871.0,
            145528.0,
            172280.0,
            189546.0,
            217882.0,
            238858.0,
            267079.0,
            293551.0
          ],
          "3": [
            106824.0,
            113463.0,
            134463.0,
            163838.0,
            190208.0,
            223627.0,
            258573.0,
            304607.0,
            333182.0,
            367063.0
          ],
          "4": [
            109596.0,
            116806.0,
            130938.0,
            162445.0,
            187666.0,
            220887.0,
            260477.0,
            302868.0,
            340966.0,
            366522.0
          ],
          "5": [
            106991.0,
            113882.0,
            132175.0,
            147744.0,
            181934.0,
            203585.0,
            249803.0,
            277286.0,
            304427.0,
            350368.0
          ]
        },
        "Ph": {
          "1": [
            71561.0,
            101667.0,
            111837.0,
            138856.0,
            158416.0,
            167794.0,
            202091.0,
            238442.0,
            272730.0,
            314769.0
          ],
          "2": [
            76182.0,
            102750.0,
            115685.0,
            141766.0,
            163109.0,
            178589.0,
            206723.0,
            238215.0,
            268253.0,
            295395.0
          ],
          "3": [
            102899.0,
            110897.0,
            120382.0,
            146154.0,
            182378.0,
            207384.0,
            238499.0,
            275971.0,
            312540.0,
            358252.0
          ],
          "4": [
            103865.0,
            117284.0,
            119203.0,
            145008.0,
            178637.0,
            202296.0,
            239848.0,
            278767.0,
            322194.0,
            357252.0
          ],
          "5": [
            104737.0,
            117517.0,
            122990.0,
            138340.0,
            175559.0,
            187188.0,
            222474.0,
            252555.0,
            290271.0,
            326035.0
          ]
        },
        "Casa": {
          "1": [
            77290.0,
            114086.0,
            124483.0,
            148590.0,
            182029.0,
            198384.0,
            217034.0,
            249423.0,
            293824.0,
            324450.0
          ],
          "2": [
            79896.0,
            116837.0,
            129270.0,
            149546.0,
            179576.0,
            206460.0,
            222761.0,
            252689.0,
            290695.0,
            312437.0
          ],
          "3": [
            110275.0,
            123289.0,
            133596.0,
            158700.0,
            203892.0,
            229542.0,
            247722.0,
            275142.0,
            309856.0,
            336572.0
          ],
          "4": [
            112103.0,
            129615.0,
            135357.0,
            163366.0,
            200632.0,
            227284.0,
            267177.0,
            281472.0,
            317012.0,
            356354.0
          ],
          "5": [
            115057.0,
            132856.0,
            137418.0,
            154619.0,
            203318.0,
            227604.0,
            259022.0,
            282598.0,
            303898.0,
            339287.0
          ]
        }
      },
      "Parque Patricios": {
        "Departamento": {
          "1": [
            69798.0,
            96341.0,
            107714.0,
            132744.0,
            156555.0,
            173726.0,
            205405.0,
            216759.0,
            254562.0,
            306054.0
          ],
          "2": [
            74874.0,
            97462.0,
            110504.0,
            132091.0,
            159111.0,
            179068.0,
            207432.0,
            213348.0,
            246402.0,
            295549.0
          ],
          "3": [
            99159.0,
            107785.0,
            120662.0,
            145721.0,
            168714.0,
            198308.0,
            231591.0,
            253283.0,
            283868.0,
            341343.0
          ],
          "4": [
            100359.0,
            111662.0,
            113719.0,
            149537.0,
            172795.0,
            200353.0,
            232688.0,
            254605.0,
            296656.0,
            342272.0
          ],
          "5": [
            97760.0,
            113011.0,
            114242.0,
            131993.0,
            166523.0,
            189336.0,
            224591.0,
            237899.0,
            268076.0,
            326339.0
          ]
        },
        "Ph": {
          "1": [
            67982.0,
            93560.0,
            100322.0,
            126654.0,
            143985.0,
            153886.0,
            184366.0,
            194632.0,
            222704.0,
            289445.0
          ],
          "2": [
            75077.0,
            95530.0,
            103344.0,
            128954.0,
            147411.0,
            163769.0,
            188303.0,
            198330.0,
            225628.0,
            285546.0
          ],
          "3": [
            96840.0,
            110990.0,
            108287.0,
            133792.0,
            158275.0,
            181271.0,
            211160.0,
            220592.0,
            244698.0,
            302562.0
          ],
          "4": [
            96640.0,
            109594.0,
            99143.0,
            135312.0,
            157935.0,
            181064.0,
            208236.0,
            236043.0,
            269843.0,
            322769.0
          ],
          "5": [
            96468.0,
            113089.0,
            101097.0,
            123561.0,
            155464.0,
            169733.0,
            198503.0,
            226969.0,
            246574.0,
            300672.0
          ]
        },
        "Casa": {
          "1": [
            71943.0,
            105086.0,
            112705.0,
            140195.0,
            171499.0,
            187675.0,
            201995.0,
            213112.0,
            254085.0,
            294744.0
          ],
          "2": [
            77278.0,
            108039.0,
            116837.0,
            143088.0,
            169745.0,
            195061.0,
            206895.0,
            215454.0,
            254750.0,
            289969.0
          ],
          "3": [
            101237.0,
            119225.0,
            124501.0,
            146781.0,
            186005.0,
            210533.0,
            228345.0,
            229316.0,
            261088.0,
            297265.0
          ],
          "4": [
            101614.0,
            120997.0,
            118966.0,
            155145.0,
            186335.0,
            215245.0,
            244200.0,
            241696.0,
            277558.0,
            316737.0
          ],
          "5": [
            109708.0,
            135728.0,
            127948.0,
            149888.0,
            198009.0,
            231211.0,
            253887.0,
            245372.0,
            268196.0,
            301784.0
          ]
        }
      },
      "Paternal": {
        "Departamento": {
          "1": [
            71924.0,
            100693.0,
            114946.0,
            136481.0,
            162645.0,
            177205.0,
            205151.0,
            216325.0,
            254610.0,
            300276.0
          ],
          "2": [
            75772.0,
            102939.0,
            121596.0,
            138917.0,
            168476.0,
            186135.0,
            209658.0,
            215473.0,
            250134.0,
            294306.0
          ],
          "3": [
            98886.0,
            111431.0,
            129393.0,
            154465.0,
            180027.0,
            212274.0,
            240802.0,
            260125.0,
            288801.0,
            336530.0
          ],
          "4": [
            101299.0,
            111823.0,
            120811.0,
            156166.0,
            178947.0,
            214815.0,
            244000.0,
            265118.0,
            306026.0,
            339959.0
          ],
          "5": [
            98722.0,
            108836.0,
            121605.0,
            138360.0,
            173727.0,
            200542.0,
            237236.0,
            247129.0,
            276760.0,
            326216.0
          ]
        },
        "Ph": {
          "1": [
            67033.0,
            96873.0,
            102237.0,
            127276.0,
            150107.0,
            160661.0,
            193567.0,
            200813.0,
            231102.0,
            291866.0
          ],
          "2": [
            73675.0,
            97830.0,
            105543.0,
            129111.0,
            152295.0,
            169185.0,
            196613.0,
            203396.0,
            232726.0,
            288325.0
          ],
          "3": [
            96113.0,
            107367.0,
            107131.0,
            131968.0,
            159033.0,
            185209.0,
            213748.0,
            222979.0,
            249917.0,
            304684.0
          ],
          "4": [
            97832.0,
            108490.0,
            99507.0,
            132454.0,
            155413.0,
            183621.0,
            214983.0,
            238405.0,
            275086.0,
            320480.0
          ],
          "5": [
            97439.0,
            107367.0,
            102057.0,
            120323.0,
            154845.0,
            171176.0,
            206236.0,
            230099.0,
            249845.0,
            298771.0
          ]
        },
        "Casa": {
          "1": [
            72619.0,
            102726.0,
            116405.0,
            140415.0,
            174654.0,
            184014.0,
            197542.0,
            209841.0,
            256000.0,
            299887.0
          ],
          "2": [
            76193.0,
            104213.0,
            118636.0,
            140834.0,
            169782.0,
            189546.0,
            199566.0,
            209246.0,
            251752.0,
            291656.0
          ],
          "3": [
            101076.0,
            119100.0,
            131142.0,
            151370.0,
            189877.0,
            214065.0,
            220138.0,
            223353.0,
            257348.0,
            294776.0
          ],
          "4": [
            102625.0,
            121819.0,
            126905.0,
            159134.0,
            185139.0,
            213638.0,
            235372.0,
            236042.0,
            274546.0,
            316937.0
          ],
          "5": [
            104482.0,
            123862.0,
            127341.0,
            145316.0,
            190064.0,
            217214.0,
            231228.0,
            235710.0,
            263079.0,
            301140.0
          ]
        }
      },
      "Pompeya": {
        "Departamento": {
          "1": [
            66845.0,
            84971.0,
            85411.0,
            108644.0,
            133870.0,
            155593.0,
            178948.0,
            203895.0,
            238414.0,
            291754.0
          ],
          "2": [
            72881.0,
            85458.0,
            87100.0,
            104992.0,
            135667.0,
            159430.0,
            180443.0,
            200591.0,
            230662.0,
            281605.0
          ],
          "3": [
            93059.0,
            92592.0,
            92644.0,
            114267.0,
            145177.0,
            171797.0,
            200830.0,
            229465.0,
            256817.0,
            309923.0
          ],
          "4": [
            93095.0,
            98356.0,
            87076.0,
            116814.0,
            137672.0,
            176429.0,
            198632.0,
            231679.0,
            268496.0,
            310225.0
          ],
          "5": [
            88516.0,
            97165.0,
            85513.0,
            102212.0,
            130271.0,
            159512.0,
            191934.0,
            211391.0,
            237138.0,
            288217.0
          ]
        },
        "Ph": {
          "1": [
            66330.0,
            93523.0,
            99339.0,
            124342.0,
            140136.0,
            149400.0,
            181427.0,
            187391.0,
            213048.0,
            281728.0
          ],
          "2": [
            73457.0,
            95776.0,
            103316.0,
            125166.0,
            145037.0,
            158367.0,
            185763.0,
            189878.0,
            212920.0,
            278649.0
          ],
          "3": [
            97723.0,
            106770.0,
            105328.0,
            130293.0,
            158966.0,
            178860.0,
            216009.0,
            212644.0,
            227519.0,
            289411.0
          ],
          "4": [
            99218.0,
            107607.0,
            97675.0,
            132582.0,
            164042.0,
            183292.0,
            217395.0,
            229356.0,
            254981.0,
            306642.0
          ],
          "5": [
            99585.0,
            111649.0,
            100954.0,
            121141.0,
            160602.0,
            174143.0,
            208637.0,
            223677.0,
            235301.0,
            292127.0
          ]
        },
        "Casa": {
          "1": [
            69011.0,
            93945.0,
            106409.0,
            125567.0,
            152767.0,
            159237.0,
            174463.0,
            185628.0,
            245357.0,
            298884.0
          ],
          "2": [
            74387.0,
            97269.0,
            110396.0,
            126923.0,
            154349.0,
            166500.0,
            177126.0,
            184252.0,
            234876.0,
            279404.0
          ],
          "3": [
            94969.0,
            108086.0,
            123255.0,
            142652.0,
            172766.0,
            193517.0,
            213840.0,
            201690.0,
            232232.0,
            288964.0
          ],
          "4": [
            99457.0,
            113328.0,
            120072.0,
            152327.0,
            172454.0,
            195739.0,
            223015.0,
            211976.0,
            246919.0,
            302047.0
          ],
          "5": [
            97075.0,
            114927.0,
            118160.0,
            134219.0,
            169600.0,
            192585.0,
            210969.0,
            209302.0,
            228852.0,
            275895.0
          ]
        }
      },
      "Puerto Madero": {
        "Departamento": {
          "1": [
            132638.0,
            197023.0,
            233507.0,
            315771.0,
            310272.0,
            335794.0,
            494699.0,
            655528.0,
            814269.0,
            886437.0
          ],
          "2": [
            135834.0,
            203775.0,
            263827.0,
            307413.0,
            328564.0,
            369870.0,
            547892.0,
            703332.0,
            803683.0,
            895061.0
          ],
          "3": [
            176694.0,
            191656.0,
            244723.0,
            319505.0,
            350958.0,
            402191.0,
            599590.0,
            815719.0,
            929466.0,
            987437.0
          ],
          "4": [
            170089.0,
            184339.0,
            232046.0,
            279075.0,
            309871.0,
            348100.0,
            543970.0,
            658400.0,
            823634.0,
            962729.0
          ],
          "5": [
            172991.0,
            188393.0,
            234496.0,
            269281.0,
            286586.0,
            331403.0,
            459698.0,
            596036.0,
            715283.0,
            858428.0
          ]
        },
        "Ph": {
          "1": [
            121338.0,
            174750.0,
            213963.0,
            297841.0,
            291662.0,
            313349.0,
            470832.0,
            565730.0,
            618677.0,
            624807.0
          ],
          "2": [
            128927.0,
            180382.0,
            240029.0,
            291073.0,
            307713.0,
            347284.0,
            521436.0,
            606960.0,
            610609.0,
            616793.0
          ],
          "3": [
            166177.0,
            174554.0,
            210606.0,
            279973.0,
            326305.0,
            362814.0,
            534586.0,
            681812.0,
            671230.0,
            661410.0
          ],
          "4": [
            158553.0,
            167976.0,
            201262.0,
            255082.0,
            292349.0,
            316509.0,
            488189.0,
            519760.0,
            585232.0,
            611281.0
          ],
          "5": [
            162523.0,
            172141.0,
            206598.0,
            250014.0,
            274582.0,
            300520.0,
            403520.0,
            485750.0,
            482815.0,
            502726.0
          ]
        },
        "Casa": {
          "1": [
            129922.0,
            190683.0,
            225716.0,
            300845.0,
            294782.0,
            312264.0,
            419627.0,
            534994.0,
            657023.0,
            721089.0
          ],
          "2": [
            133369.0,
            200077.0,
            257378.0,
            297185.0,
            307458.0,
            342915.0,
            467032.0,
            576829.0,
            651669.0,
            731682.0
          ],
          "3": [
            173932.0,
            188659.0,
            237314.0,
            308260.0,
            338323.0,
            382654.0,
            516694.0,
            645774.0,
            718956.0,
            792460.0
          ],
          "4": [
            169215.0,
            183391.0,
            227420.0,
            272124.0,
            299516.0,
            332620.0,
            487837.0,
            536170.0,
            650592.0,
            780868.0
          ],
          "5": [
            172102.0,
            187424.0,
            229821.0,
            262574.0,
            277010.0,
            329200.0,
            422947.0,
            511681.0,
            587364.0,
            708669.0
          ]
        }
      },
      "Recoleta": {
        "Departamento": {
          "1": [
            95108.0,
            148529.0,
            166777.0,
            210080.0,
            247417.0,
            279487.0,
            311581.0,
            414932.0,
            565142.0,
            684789.0
          ],
          "2": [
            98601.0,
            151415.0,
            174536.0,
            213099.0,
            257730.0,
            311394.0,
            343359.0,
            462110.0,
            568542.0,
            686601.0
          ],
          "3": [
            120032.0,
            154443.0,
            172108.0,
            216788.0,
            258307.0,
            318622.0,
            379745.0,
            508434.0,
            614151.0,
            729906.0
          ],
          "4": [
            121913.0,
            156345.0,
            172800.0,
            213237.0,
            249335.0,
            297753.0,
            371728.0,
            478884.0,
            612193.0,
            767298.0
          ],
          "5": [
            123472.0,
            159113.0,
            173462.0,
            205621.0,
            229579.0,
            289224.0,
            357372.0,
            448219.0,
            556699.0,
            696801.0
          ]
        },
        "Ph": {
          "1": [
            85706.0,
            126790.0,
            149742.0,
            190339.0,
            218957.0,
            236167.0,
            279221.0,
            347734.0,
            444000.0,
            529285.0
          ],
          "2": [
            92210.0,
            128919.0,
            151356.0,
            194627.0,
            227740.0,
            261895.0,
            304031.0,
            378629.0,
            440717.0,
            505913.0
          ],
          "3": [
            116913.0,
            138593.0,
            143441.0,
            192674.0,
            238099.0,
            285513.0,
            335891.0,
            440739.0,
            484208.0,
            572805.0
          ],
          "4": [
            116777.0,
            140706.0,
            144435.0,
            198710.0,
            232508.0,
            264230.0,
            323990.0,
            400214.0,
            481396.0,
            558269.0
          ],
          "5": [
            118833.0,
            143148.0,
            147189.0,
            193842.0,
            218881.0,
            255877.0,
            302981.0,
            378798.0,
            414416.0,
            479581.0
          ]
        },
        "Casa": {
          "1": [
            95058.0,
            156348.0,
            185648.0,
            225550.0,
            237383.0,
            261011.0,
            285844.0,
            365686.0,
            485342.0,
            572926.0
          ],
          "2": [
            101363.0,
            169166.0,
            202905.0,
            241753.0,
            257773.0,
            300386.0,
            327960.0,
            424024.0,
            507099.0,
            593786.0
          ],
          "3": [
            122412.0,
            161144.0,
            187300.0,
            231436.0,
            266614.0,
            331551.0,
            361491.0,
            435664.0,
            506843.0,
            603932.0
          ],
          "4": [
            125460.0,
            165020.0,
            189089.0,
            225557.0,
            257532.0,
            310159.0,
            367083.0,
            422173.0,
            516833.0,
            643989.0
          ],
          "5": [
            127481.0,
            168492.0,
            190907.0,
            217439.0,
            237904.0,
            306652.0,
            354485.0,
            407348.0,
            490912.0,
            598210.0
          ]
        }
      },
      "Retiro": {
        "Departamento": {
          "1": [
            92034.0,
            126655.0,
            150392.0,
            181775.0,
            217682.0,
            239898.0,
            301975.0,
            384748.0,
            512271.0,
            594600.0
          ],
          "2": [
            94001.0,
            128692.0,
            153667.0,
            181186.0,
            222623.0,
            260996.0,
            321369.0,
            402349.0,
            499285.0,
            570963.0
          ],
          "3": [
            115108.0,
            134260.0,
            162794.0,
            197446.0,
            238121.0,
            292106.0,
            370567.0,
            489358.0,
            586517.0,
            702656.0
          ],
          "4": [
            116750.0,
            136456.0,
            163487.0,
            193325.0,
            224597.0,
            278291.0,
            356940.0,
            467390.0,
            595389.0,
            730165.0
          ],
          "5": [
            118474.0,
            139142.0,
            164433.0,
            185940.0,
            217508.0,
            268813.0,
            339473.0,
            428959.0,
            532693.0,
            674578.0
          ]
        },
        "Ph": {
          "1": [
            83379.0,
            116875.0,
            141688.0,
            176418.0,
            201282.0,
            216822.0,
            256229.0,
            301628.0,
            364065.0,
            414227.0
          ],
          "2": [
            86882.0,
            117355.0,
            140068.0,
            176337.0,
            204824.0,
            237218.0,
            274545.0,
            324418.0,
            367628.0,
            414159.0
          ],
          "3": [
            103545.0,
            124692.0,
            132054.0,
            176141.0,
            213692.0,
            256923.0,
            298829.0,
            372622.0,
            402710.0,
            476837.0
          ],
          "4": [
            107786.0,
            128681.0,
            131718.0,
            172828.0,
            194548.0,
            234995.0,
            277878.0,
            348123.0,
            411383.0,
            491756.0
          ],
          "5": [
            107516.0,
            128327.0,
            135883.0,
            165863.0,
            188370.0,
            219127.0,
            254954.0,
            327945.0,
            352705.0,
            431946.0
          ]
        },
        "Casa": {
          "1": [
            87035.0,
            118344.0,
            140352.0,
            164998.0,
            203793.0,
            219679.0,
            252586.0,
            314171.0,
            416354.0,
            442235.0
          ],
          "2": [
            88702.0,
            121438.0,
            144074.0,
            166121.0,
            204345.0,
            237196.0,
            268902.0,
            328658.0,
            405942.0,
            424804.0
          ],
          "3": [
            109867.0,
            128147.0,
            153814.0,
            183282.0,
            228172.0,
            272818.0,
            302691.0,
            373119.0,
            436758.0,
            498630.0
          ],
          "4": [
            112622.0,
            131631.0,
            156114.0,
            183418.0,
            218228.0,
            261036.0,
            303423.0,
            362074.0,
            442802.0,
            523675.0
          ],
          "5": [
            114286.0,
            134223.0,
            157018.0,
            176411.0,
            211340.0,
            258811.0,
            289044.0,
            342011.0,
            412286.0,
            481595.0
          ]
        }
      },
      "Saavedra": {
        "Departamento": {
          "1": [
            79521.0,
            106738.0,
            130822.0,
            158585.0,
            187247.0,
            204389.0,
            247637.0,
            277414.0,
            314412.0,
            367915.0
          ],
          "2": [
            79806.0,
            108707.0,
            135253.0,
            155104.0,
            189380.0,
            206343.0,
            244923.0,
            278618.0,
            292772.0,
            323794.0
          ],
          "3": [
            95375.0,
            112283.0,
            139744.0,
            175970.0,
            206691.0,
            232065.0,
            270295.0,
            326423.0,
            358411.0,
            398688.0
          ],
          "4": [
            99332.0,
            113396.0,
            139421.0,
            168456.0,
            195345.0,
            224640.0,
            268572.0,
            326844.0,
            380035.0,
            417395.0
          ],
          "5": [
            96915.0,
            111173.0,
            139239.0,
            155827.0,
            184952.0,
            206916.0,
            253113.0,
            293024.0,
            331755.0,
            388348.0
          ]
        },
        "Ph": {
          "1": [
            77468.0,
            105221.0,
            126712.0,
            159885.0,
            181041.0,
            192735.0,
            231848.0,
            269675.0,
            305871.0,
            338226.0
          ],
          "2": [
            81344.0,
            106948.0,
            129371.0,
            159470.0,
            185239.0,
            201310.0,
            232195.0,
            272466.0,
            293782.0,
            321004.0
          ],
          "3": [
            95353.0,
            114651.0,
            134160.0,
            165017.0,
            201010.0,
            220520.0,
            247118.0,
            307272.0,
            339570.0,
            391020.0
          ],
          "4": [
            98531.0,
            116318.0,
            139710.0,
            166158.0,
            194572.0,
            211310.0,
            247572.0,
            304624.0,
            362411.0,
            412768.0
          ],
          "5": [
            99516.0,
            117454.0,
            140929.0,
            162515.0,
            188613.0,
            200528.0,
            226995.0,
            270705.0,
            317454.0,
            373230.0
          ]
        },
        "Casa": {
          "1": [
            82831.0,
            118062.0,
            137400.0,
            162142.0,
            198748.0,
            219501.0,
            241078.0,
            277861.0,
            335351.0,
            390542.0
          ],
          "2": [
            83751.0,
            122231.0,
            142348.0,
            160320.0,
            194316.0,
            224714.0,
            243658.0,
            286331.0,
            319572.0,
            348313.0
          ],
          "3": [
            99964.0,
            126885.0,
            144620.0,
            174354.0,
            217298.0,
            237487.0,
            261108.0,
            306025.0,
            341574.0,
            381937.0
          ],
          "4": [
            103039.0,
            129856.0,
            150237.0,
            173902.0,
            215176.0,
            236237.0,
            277732.0,
            316762.0,
            367795.0,
            419594.0
          ],
          "5": [
            105310.0,
            133361.0,
            152566.0,
            168410.0,
            209548.0,
            236103.0,
            269854.0,
            311738.0,
            348805.0,
            398818.0
          ]
        }
      },
      "San Cristobal": {
        "Departamento": {
          "1": [
            67634.0,
            93709.0,
            107297.0,
            135548.0,
            158270.0,
            169056.0,
            197911.0,
            209168.0,
            246069.0,
            290380.0
          ],
          "2": [
            74529.0,
            98035.0,
            111629.0,
            134413.0,
            159760.0,
            169390.0,
            195232.0,
            201272.0,
            232854.0,
            278626.0
          ],
          "3": [
            99044.0,
            106794.0,
            120838.0,
            147211.0,
            166206.0,
            181155.0,
            220063.0,
            237778.0,
            269065.0,
            325977.0
          ],
          "4": [
            99119.0,
            108828.0,
            116099.0,
            149187.0,
            170029.0,
            183835.0,
            216173.0,
            239658.0,
            272750.0,
            321733.0
          ],
          "5": [
            96598.0,
            110196.0,
            116628.0,
            137088.0,
            159409.0,
            176549.0,
            210125.0,
            221736.0,
            253952.0,
            307575.0
          ]
        },
        "Ph": {
          "1": [
            64009.0,
            91273.0,
            95331.0,
            122818.0,
            145361.0,
            152173.0,
            185019.0,
            185121.0,
            210776.0,
            272862.0
          ],
          "2": [
            73113.0,
            94276.0,
            97606.0,
            121343.0,
            146809.0,
            154119.0,
            181880.0,
            179647.0,
            202077.0,
            263461.0
          ],
          "3": [
            96307.0,
            105735.0,
            101727.0,
            125110.0,
            148981.0,
            159190.0,
            199237.0,
            199235.0,
            220482.0,
            281816.0
          ],
          "4": [
            96746.0,
            108809.0,
            97625.0,
            126822.0,
            155886.0,
            161566.0,
            194713.0,
            210854.0,
            236483.0,
            292015.0
          ],
          "5": [
            97211.0,
            113021.0,
            100812.0,
            121099.0,
            147857.0,
            159227.0,
            189259.0,
            203110.0,
            222988.0,
            277803.0
          ]
        },
        "Casa": {
          "1": [
            71263.0,
            104116.0,
            109109.0,
            138514.0,
            171343.0,
            183205.0,
            203455.0,
            216485.0,
            265780.0,
            294893.0
          ],
          "2": [
            78944.0,
            107772.0,
            111756.0,
            137300.0,
            167020.0,
            183542.0,
            201847.0,
            212167.0,
            258322.0,
            285840.0
          ],
          "3": [
            103818.0,
            119680.0,
            122161.0,
            141831.0,
            175823.0,
            189787.0,
            221121.0,
            230255.0,
            269958.0,
            298223.0
          ],
          "4": [
            104378.0,
            125637.0,
            122370.0,
            150712.0,
            179566.0,
            196547.0,
            235136.0,
            241631.0,
            280610.0,
            319630.0
          ],
          "5": [
            112691.0,
            140933.0,
            131540.0,
            151956.0,
            186502.0,
            217426.0,
            244246.0,
            244295.0,
            277042.0,
            305550.0
          ]
        }
      },
      "San Nicolás": {
        "Departamento": {
          "1": [
            67958.0,
            95140.0,
            108644.0,
            137042.0,
            159677.0,
            170521.0,
            200670.0,
            212071.0,
            248283.0,
            292228.0
          ],
          "2": [
            75815.0,
            99569.0,
            111870.0,
            134501.0,
            160792.0,
            170446.0,
            197745.0,
            203850.0,
            234702.0,
            280105.0
          ],
          "3": [
            100129.0,
            108419.0,
            121555.0,
            147427.0,
            164990.0,
            180770.0,
            217071.0,
            238207.0,
            266740.0,
            322317.0
          ],
          "4": [
            100205.0,
            110110.0,
            117774.0,
            151105.0,
            170500.0,
            183713.0,
            216542.0,
            239745.0,
            275513.0,
            325167.0
          ],
          "5": [
            97645.0,
            111480.0,
            118296.0,
            139127.0,
            160655.0,
            176825.0,
            211768.0,
            221181.0,
            252212.0,
            309800.0
          ]
        },
        "Ph": {
          "1": [
            64829.0,
            90398.0,
            98979.0,
            124888.0,
            144552.0,
            153344.0,
            182717.0,
            184438.0,
            210550.0,
            268618.0
          ],
          "2": [
            73269.0,
            94580.0,
            103099.0,
            124144.0,
            145480.0,
            154976.0,
            179938.0,
            179713.0,
            201755.0,
            260995.0
          ],
          "3": [
            96590.0,
            105382.0,
            104745.0,
            126023.0,
            149551.0,
            160553.0,
            200981.0,
            199559.0,
            220058.0,
            281939.0
          ],
          "4": [
            97356.0,
            108394.0,
            101643.0,
            128625.0,
            158372.0,
            165928.0,
            201124.0,
            212521.0,
            237233.0,
            292435.0
          ],
          "5": [
            96533.0,
            111103.0,
            105099.0,
            122661.0,
            149709.0,
            160202.0,
            194185.0,
            206538.0,
            223753.0,
            278505.0
          ]
        },
        "Casa": {
          "1": [
            64374.0,
            89045.0,
            101560.0,
            123908.0,
            150161.0,
            159208.0,
            186135.0,
            195977.0,
            234331.0,
            265868.0
          ],
          "2": [
            71656.0,
            94107.0,
            105054.0,
            122930.0,
            149424.0,
            159138.0,
            183422.0,
            188380.0,
            221513.0,
            254838.0
          ],
          "3": [
            95705.0,
            103629.0,
            115012.0,
            136722.0,
            158928.0,
            171470.0,
            197911.0,
            205898.0,
            223977.0,
            275539.0
          ],
          "4": [
            97558.0,
            107202.0,
            113506.0,
            144350.0,
            167862.0,
            176406.0,
            205631.0,
            211352.0,
            231050.0,
            285176.0
          ],
          "5": [
            95066.0,
            108536.0,
            114009.0,
            132908.0,
            159410.0,
            175648.0,
            201424.0,
            200684.0,
            220955.0,
            270456.0
          ]
        }
      },
      "San Telmo": {
        "Departamento": {
          "1": [
            72910.0,
            103170.0,
            117640.0,
            143090.0,
            173211.0,
            185291.0,
            215529.0,
            231617.0,
            268614.0,
            318472.0
          ],
          "2": [
            76120.0,
            104950.0,
            121739.0,
            140944.0,
            174058.0,
            189038.0,
            215146.0,
            227526.0,
            258526.0,
            304529.0
          ],
          "3": [
            102304.0,
            112230.0,
            128803.0,
            155033.0,
            183940.0,
            213358.0,
            242732.0,
            271117.0,
            310954.0,
            359719.0
          ],
          "4": [
            104293.0,
            112243.0,
            118964.0,
            153611.0,
            181295.0,
            210737.0,
            242616.0,
            275642.0,
            328488.0,
            366459.0
          ],
          "5": [
            103217.0,
            110940.0,
            119777.0,
            136730.0,
            174826.0,
            199423.0,
            234996.0,
            253089.0,
            292397.0,
            346931.0
          ]
        },
        "Ph": {
          "1": [
            69365.0,
            99311.0,
            105129.0,
            133601.0,
            160091.0,
            169682.0,
            201387.0,
            207864.0,
            233602.0,
            300699.0
          ],
          "2": [
            75147.0,
            100820.0,
            108455.0,
            132487.0,
            160047.0,
            176325.0,
            202383.0,
            208626.0,
            233108.0,
            292962.0
          ],
          "3": [
            102821.0,
            110062.0,
            110160.0,
            136412.0,
            166951.0,
            192146.0,
            217641.0,
            232012.0,
            266348.0,
            327848.0
          ],
          "4": [
            104580.0,
            111131.0,
            101651.0,
            133401.0,
            162828.0,
            188470.0,
            215271.0,
            243395.0,
            291038.0,
            341507.0
          ],
          "5": [
            104730.0,
            110581.0,
            104771.0,
            121884.0,
            160753.0,
            176818.0,
            206246.0,
            232771.0,
            261292.0,
            312156.0
          ]
        },
        "Casa": {
          "1": [
            76961.0,
            119247.0,
            137972.0,
            164070.0,
            184225.0,
            193943.0,
            221256.0,
            236694.0,
            292636.0,
            352241.0
          ],
          "2": [
            81040.0,
            122910.0,
            142871.0,
            163744.0,
            182106.0,
            199911.0,
            224873.0,
            237691.0,
            289099.0,
            340744.0
          ],
          "3": [
            110770.0,
            132264.0,
            146722.0,
            166304.0,
            210636.0,
            237150.0,
            252274.0,
            255738.0,
            305663.0,
            359908.0
          ],
          "4": [
            112179.0,
            134230.0,
            140290.0,
            166649.0,
            205388.0,
            236070.0,
            272354.0,
            264794.0,
            323607.0,
            386348.0
          ],
          "5": [
            115307.0,
            137793.0,
            142402.0,
            153879.0,
            207976.0,
            240729.0,
            266694.0,
            269594.0,
            310940.0,
            368776.0
          ]
        }
      },
      "Tribunales": {
        "Departamento": {
          "1": [
            71326.0,
            97160.0,
            110244.0,
            136403.0,
            163086.0,
            172742.0,
            206125.0,
            220429.0,
            255612.0,
            310111.0
          ],
          "2": [
            75691.0,
            99828.0,
            114974.0,
            136258.0,
            166907.0,
            179368.0,
            210183.0,
            219294.0,
            250814.0,
            299404.0
          ],
          "3": [
            99024.0,
            110807.0,
            123275.0,
            151243.0,
            177123.0,
            201310.0,
            237174.0,
            258739.0,
            288310.0,
            346136.0
          ],
          "4": [
            100527.0,
            110357.0,
            114423.0,
            153835.0,
            175551.0,
            204078.0,
            234372.0,
            260282.0,
            302097.0,
            348810.0
          ],
          "5": [
            98458.0,
            112300.0,
            114010.0,
            134846.0,
            168905.0,
            188139.0,
            224589.0,
            238187.0,
            267446.0,
            328748.0
          ]
        },
        "Ph": {
          "1": [
            63475.0,
            81722.0,
            81339.0,
            105459.0,
            132688.0,
            151434.0,
            179526.0,
            186540.0,
            211781.0,
            273331.0
          ],
          "2": [
            70803.0,
            82581.0,
            83168.0,
            103942.0,
            133731.0,
            156517.0,
            180157.0,
            185254.0,
            206834.0,
            264781.0
          ],
          "3": [
            86632.0,
            85804.0,
            78702.0,
            102404.0,
            136472.0,
            162275.0,
            189295.0,
            200725.0,
            214181.0,
            272263.0
          ],
          "4": [
            87967.0,
            93624.0,
            75400.0,
            102321.0,
            132934.0,
            165010.0,
            189952.0,
            212047.0,
            237746.0,
            284608.0
          ],
          "5": [
            86266.0,
            94911.0,
            77223.0,
            94371.0,
            128162.0,
            152894.0,
            185353.0,
            205660.0,
            215287.0,
            267919.0
          ]
        },
        "Casa": {
          "1": [
            67779.0,
            91975.0,
            103047.0,
            123250.0,
            153215.0,
            161121.0,
            182853.0,
            199825.0,
            236657.0,
            282742.0
          ],
          "2": [
            71622.0,
            95616.0,
            108497.0,
            124831.0,
            155422.0,
            167808.0,
            186452.0,
            198795.0,
            232214.0,
            272980.0
          ],
          "3": [
            94446.0,
            105017.0,
            116698.0,
            141537.0,
            171159.0,
            192302.0,
            216909.0,
            223025.0,
            237657.0,
            296754.0
          ],
          "4": [
            97724.0,
            106504.0,
            110301.0,
            147668.0,
            173324.0,
            197672.0,
            223252.0,
            228821.0,
            249458.0,
            302234.0
          ],
          "5": [
            95713.0,
            108380.0,
            109903.0,
            129440.0,
            167745.0,
            188140.0,
            214697.0,
            216443.0,
            231702.0,
            285631.0
          ]
        }
      },
      "Velez Sarsfield": {
        "Departamento": {
          "1": [
            70431.0,
            99366.0,
            115314.0,
            142692.0,
            169813.0,
            184182.0,
            215913.0,
            228557.0,
            267288.0,
            311060.0
          ],
          "2": [
            75944.0,
            102556.0,
            119997.0,
            140791.0,
            171470.0,
            188720.0,
            217502.0,
            224630.0,
            258341.0,
            298209.0
          ],
          "3": [
            98991.0,
            111113.0,
            128751.0,
            155137.0,
            179989.0,
            205385.0,
            240307.0,
            263833.0,
            294151.0,
            344810.0
          ],
          "4": [
            100991.0,
            111857.0,
            120446.0,
            157931.0,
            181273.0,
            207624.0,
            242397.0,
            264481.0,
            306449.0,
            345535.0
          ],
          "5": [
            98738.0,
            109219.0,
            121564.0,
            139941.0,
            176623.0,
            196964.0,
            235628.0,
            246377.0,
            274513.0,
            328071.0
          ]
        },
        "Ph": {
          "1": [
            68613.0,
            97750.0,
            104977.0,
            132388.0,
            157558.0,
            168372.0,
            201918.0,
            208526.0,
            237340.0,
            305580.0
          ],
          "2": [
            75690.0,
            99489.0,
            107809.0,
            131330.0,
            157118.0,
            174192.0,
            202477.0,
            208836.0,
            236323.0,
            296890.0
          ],
          "3": [
            98874.0,
            109655.0,
            110113.0,
            134447.0,
            162603.0,
            188124.0,
            216259.0,
            229503.0,
            253104.0,
            316537.0
          ],
          "4": [
            100874.0,
            111057.0,
            102238.0,
            134496.0,
            159179.0,
            186838.0,
            217414.0,
            244186.0,
            279705.0,
            333831.0
          ],
          "5": [
            101018.0,
            110508.0,
            105377.0,
            123180.0,
            159136.0,
            175287.0,
            208975.0,
            234766.0,
            251439.0,
            305530.0
          ]
        },
        "Casa": {
          "1": [
            73234.0,
            109311.0,
            121864.0,
            143324.0,
            178910.0,
            194870.0,
            215666.0,
            231496.0,
            283953.0,
            324602.0
          ],
          "2": [
            78784.0,
            114400.0,
            127807.0,
            143091.0,
            173867.0,
            199022.0,
            217668.0,
            230856.0,
            279261.0,
            313890.0
          ],
          "3": [
            101222.0,
            122092.0,
            130868.0,
            147689.0,
            187378.0,
            212345.0,
            234193.0,
            245139.0,
            283743.0,
            316741.0
          ],
          "4": [
            104009.0,
            125717.0,
            127359.0,
            155959.0,
            185586.0,
            216494.0,
            257128.0,
            257591.0,
            304001.0,
            339294.0
          ],
          "5": [
            106909.0,
            129054.0,
            129277.0,
            143648.0,
            190068.0,
            220863.0,
            252711.0,
            263633.0,
            292476.0,
            324277.0
          ]
        }
      },
      "Versalles": {
        "Departamento": {
          "1": [
            78458.0,
            107196.0,
            131604.0,
            158038.0,
            193839.0,
            204956.0,
            248634.0,
            276559.0,
            317238.0,
            368136.0
          ],
          "2": [
            80348.0,
            110949.0,
            138212.0,
            157756.0,
            199475.0,
            210751.0,
            250121.0,
            279635.0,
            299390.0,
            327951.0
          ],
          "3": [
            94179.0,
            114941.0,
            142989.0,
            180725.0,
            208337.0,
            233186.0,
            268008.0,
            331707.0,
            371667.0,
            410840.0
          ],
          "4": [
            98991.0,
            116992.0,
            144008.0,
            174320.0,
            199656.0,
            231861.0,
            268902.0,
            330921.0,
            402784.0,
            432683.0
          ],
          "5": [
            97413.0,
            115685.0,
            145056.0,
            163238.0,
            189976.0,
            213283.0,
            257799.0,
            301357.0,
            353012.0,
            410535.0
          ]
        },
        "Ph": {
          "1": [
            74810.0,
            103934.0,
            124307.0,
            156620.0,
            174434.0,
            181904.0,
            216720.0,
            245128.0,
            283426.0,
            326235.0
          ],
          "2": [
            79611.0,
            106729.0,
            128924.0,
            157254.0,
            178225.0,
            190372.0,
            218567.0,
            248995.0,
            275694.0,
            311287.0
          ],
          "3": [
            92814.0,
            114536.0,
            133350.0,
            162146.0,
            196660.0,
            214929.0,
            241815.0,
            286842.0,
            324262.0,
            384392.0
          ],
          "4": [
            96809.0,
            120098.0,
            140179.0,
            162693.0,
            190210.0,
            207589.0,
            242252.0,
            284606.0,
            345658.0,
            403579.0
          ],
          "5": [
            97642.0,
            121103.0,
            144581.0,
            159426.0,
            182977.0,
            193149.0,
            220659.0,
            264352.0,
            304816.0,
            369481.0
          ]
        },
        "Casa": {
          "1": [
            81041.0,
            123178.0,
            149993.0,
            165469.0,
            203214.0,
            220941.0,
            245797.0,
            278909.0,
            336998.0,
            398249.0
          ],
          "2": [
            83539.0,
            127763.0,
            155258.0,
            163969.0,
            198909.0,
            226446.0,
            249119.0,
            287739.0,
            321508.0,
            355593.0
          ],
          "3": [
            99897.0,
            133758.0,
            156914.0,
            176204.0,
            219652.0,
            238912.0,
            273900.0,
            306156.0,
            343428.0,
            391004.0
          ],
          "4": [
            103106.0,
            137070.0,
            163522.0,
            176088.0,
            216270.0,
            238152.0,
            290284.0,
            317378.0,
            372557.0,
            433210.0
          ],
          "5": [
            105378.0,
            140770.0,
            166057.0,
            171417.0,
            211301.0,
            238017.0,
            281978.0,
            310502.0,
            350659.0,
            409789.0
          ]
        }
      },
      "Villa Crespo": {
        "Departamento": {
          "1": [
            75257.0,
            104161.0,
            120181.0,
            146445.0,
            177141.0,
            190810.0,
            229085.0,
            252857.0,
            280279.0,
            315814.0
          ],
          "2": [
            78076.0,
            105399.0,
            124553.0,
            144496.0,
            179889.0,
            195442.0,
            231135.0,
            250648.0,
            269545.0,
            296808.0
          ],
          "3": [
            105848.0,
            112580.0,
            132290.0,
            160008.0,
            191581.0,
            223337.0,
            264384.0,
            306310.0,
            331402.0,
            368993.0
          ],
          "4": [
            108230.0,
            116409.0,
            129329.0,
            158720.0,
            187139.0,
            219227.0,
            263488.0,
            306362.0,
            338638.0,
            376609.0
          ],
          "5": [
            106908.0,
            114838.0,
            129963.0,
            145333.0,
            180946.0,
            204110.0,
            253563.0,
            278068.0,
            299302.0,
            355713.0
          ]
        },
        "Ph": {
          "1": [
            72451.0,
            102585.0,
            115021.0,
            144667.0,
            173059.0,
            183624.0,
            221497.0,
            249046.0,
            277457.0,
            314444.0
          ],
          "2": [
            79067.0,
            104106.0,
            119016.0,
            144865.0,
            176944.0,
            193219.0,
            225462.0,
            247436.0,
            269420.0,
            296896.0
          ],
          "3": [
            106381.0,
            114294.0,
            124435.0,
            148856.0,
            188863.0,
            213661.0,
            246110.0,
            284460.0,
            313019.0,
            359389.0
          ],
          "4": [
            107648.0,
            120726.0,
            123566.0,
            148571.0,
            183409.0,
            210175.0,
            246768.0,
            286644.0,
            323491.0,
            365223.0
          ],
          "5": [
            108280.0,
            120662.0,
            126870.0,
            142134.0,
            182664.0,
            198553.0,
            232109.0,
            259443.0,
            289691.0,
            333316.0
          ]
        },
        "Casa": {
          "1": [
            76863.0,
            115024.0,
            124021.0,
            146654.0,
            184633.0,
            202010.0,
            222782.0,
            256526.0,
            295345.0,
            330620.0
          ],
          "2": [
            80522.0,
            117760.0,
            128459.0,
            144368.0,
            179134.0,
            207356.0,
            226999.0,
            257838.0,
            289900.0,
            314047.0
          ],
          "3": [
            110588.0,
            126294.0,
            133944.0,
            154923.0,
            202452.0,
            229208.0,
            250427.0,
            281108.0,
            309147.0,
            342845.0
          ],
          "4": [
            112468.0,
            132679.0,
            135754.0,
            158857.0,
            197005.0,
            228359.0,
            270156.0,
            287818.0,
            316981.0,
            363424.0
          ],
          "5": [
            115383.0,
            135940.0,
            137534.0,
            150799.0,
            200187.0,
            229619.0,
            263344.0,
            288615.0,
            303617.0,
            346090.0
          ]
        }
      },
      "Villa Del Parque": {
        "Departamento": {
          "1": [
            77346.0,
            106641.0,
            124814.0,
            151416.0,
            183766.0,
            200446.0,
            243882.0,
            272972.0,
            288895.0,
            335522.0
          ],
          "2": [
            80007.0,
            108631.0,
            130133.0,
            150311.0,
            187387.0,
            203757.0,
            244200.0,
            267411.0,
            274568.0,
            309053.0
          ],
          "3": [
            103820.0,
            114465.0,
            135388.0,
            164234.0,
            194700.0,
            228529.0,
            270186.0,
            311266.0,
            334065.0,
            374034.0
          ],
          "4": [
            108943.0,
            116472.0,
            137632.0,
            161640.0,
            189178.0,
            225855.0,
            268338.0,
            311527.0,
            354549.0,
            397865.0
          ],
          "5": [
            107170.0,
            115071.0,
            138514.0,
            152090.0,
            182086.0,
            209104.0,
            260247.0,
            280218.0,
            312625.0,
            376001.0
          ]
        },
        "Ph": {
          "1": [
            74057.0,
            104351.0,
            120762.0,
            152772.0,
            177715.0,
            188601.0,
            223372.0,
            256519.0,
            280577.0,
            318530.0
          ],
          "2": [
            79314.0,
            106090.0,
            125592.0,
            153971.0,
            182571.0,
            197079.0,
            225792.0,
            252028.0,
            269422.0,
            302237.0
          ],
          "3": [
            103175.0,
            114678.0,
            129004.0,
            156030.0,
            192071.0,
            216244.0,
            245030.0,
            288200.0,
            317717.0,
            368027.0
          ],
          "4": [
            106677.0,
            118963.0,
            132441.0,
            155584.0,
            189198.0,
            214394.0,
            244398.0,
            287845.0,
            341249.0,
            390032.0
          ],
          "5": [
            107540.0,
            119832.0,
            136186.0,
            152241.0,
            183867.0,
            202010.0,
            230321.0,
            258088.0,
            299862.0,
            356157.0
          ]
        },
        "Casa": {
          "1": [
            79402.0,
            122318.0,
            142311.0,
            158626.0,
            197854.0,
            218983.0,
            240732.0,
            274865.0,
            308816.0,
            362497.0
          ],
          "2": [
            82240.0,
            123491.0,
            146061.0,
            155345.0,
            195119.0,
            223529.0,
            243925.0,
            273582.0,
            297438.0,
            335077.0
          ],
          "3": [
            108596.0,
            130012.0,
            147687.0,
            165612.0,
            209433.0,
            238553.0,
            268481.0,
            296118.0,
            322641.0,
            368772.0
          ],
          "4": [
            111969.0,
            133094.0,
            154702.0,
            167308.0,
            208245.0,
            240125.0,
            281026.0,
            306951.0,
            347021.0,
            406604.0
          ],
          "5": [
            114399.0,
            136569.0,
            156965.0,
            162685.0,
            203626.0,
            238945.0,
            275132.0,
            297415.0,
            322210.0,
            392556.0
          ]
        }
      },
      "Villa Devoto": {
        "Departamento": {
          "1": [
            79181.0,
            111230.0,
            133841.0,
            163421.0,
            208162.0,
            217707.0,
            258069.0,
            307406.0,
            391691.0,
            432093.0
          ],
          "2": [
            80488.0,
            112911.0,
            138306.0,
            162408.0,
            211428.0,
            236928.0,
            276672.0,
            325611.0,
            373956.0,
            386023.0
          ],
          "3": [
            98258.0,
            118121.0,
            143802.0,
            178155.0,
            225264.0,
            268099.0,
            309616.0,
            384871.0,
            449754.0,
            479825.0
          ],
          "4": [
            102430.0,
            120157.0,
            145041.0,
            172712.0,
            211469.0,
            256527.0,
            303903.0,
            377732.0,
            488748.0,
            525130.0
          ],
          "5": [
            99611.0,
            117417.0,
            144378.0,
            160298.0,
            198178.0,
            235933.0,
            283465.0,
            333994.0,
            422671.0,
            488669.0
          ]
        },
        "Ph": {
          "1": [
            75037.0,
            107422.0,
            126941.0,
            158640.0,
            188749.0,
            192067.0,
            221194.0,
            274390.0,
            318734.0,
            350987.0
          ],
          "2": [
            81477.0,
            109271.0,
            130444.0,
            159135.0,
            191393.0,
            211028.0,
            236322.0,
            287594.0,
            311360.0,
            341752.0
          ],
          "3": [
            96601.0,
            117386.0,
            133811.0,
            159683.0,
            203246.0,
            231796.0,
            255098.0,
            327432.0,
            350570.0,
            413419.0
          ],
          "4": [
            99705.0,
            119426.0,
            140060.0,
            163688.0,
            192033.0,
            216168.0,
            250367.0,
            312066.0,
            371459.0,
            433929.0
          ],
          "5": [
            100030.0,
            119787.0,
            140339.0,
            159776.0,
            187246.0,
            203179.0,
            230031.0,
            281686.0,
            327993.0,
            393926.0
          ]
        },
        "Casa": {
          "1": [
            80423.0,
            127419.0,
            151404.0,
            178199.0,
            213225.0,
            228695.0,
            251441.0,
            285046.0,
            357645.0,
            420114.0
          ],
          "2": [
            82414.0,
            128399.0,
            154685.0,
            173074.0,
            212489.0,
            250051.0,
            272923.0,
            306758.0,
            348094.0,
            384200.0
          ],
          "3": [
            101498.0,
            133490.0,
            154213.0,
            182204.0,
            237649.0,
            276984.0,
            304937.0,
            334664.0,
            376610.0,
            430895.0
          ],
          "4": [
            103698.0,
            135945.0,
            160209.0,
            177625.0,
            229963.0,
            267005.0,
            308149.0,
            338353.0,
            412846.0,
            483821.0
          ],
          "5": [
            105664.0,
            139194.0,
            162203.0,
            172553.0,
            222412.0,
            264334.0,
            297979.0,
            325005.0,
            377936.0,
            459095.0
          ]
        }
      },
      "Villa General Mitre": {
        "Departamento": {
          "1": [
            73163.0,
            101614.0,
            116500.0,
            147387.0,
            177606.0,
            191179.0,
            219873.0,
            229866.0,
            263219.0,
            314060.0
          ],
          "2": [
            78949.0,
            104209.0,
            123180.0,
            145796.0,
            179506.0,
            196808.0,
            222628.0,
            226706.0,
            255297.0,
            302319.0
          ],
          "3": [
            104368.0,
            113382.0,
            129288.0,
            159004.0,
            189142.0,
            219634.0,
            254623.0,
            283734.0,
            317592.0,
            370568.0
          ],
          "4": [
            106985.0,
            113971.0,
            121187.0,
            157395.0,
            188463.0,
            222640.0,
            255855.0,
            286247.0,
            332334.0,
            372819.0
          ],
          "5": [
            104555.0,
            111237.0,
            122260.0,
            140442.0,
            180728.0,
            208769.0,
            248483.0,
            264798.0,
            298407.0,
            354362.0
          ]
        },
        "Ph": {
          "1": [
            74116.0,
            100300.0,
            105884.0,
            136498.0,
            165743.0,
            173972.0,
            206721.0,
            215348.0,
            236777.0,
            303715.0
          ],
          "2": [
            81233.0,
            101387.0,
            109841.0,
            135288.0,
            165445.0,
            180614.0,
            208110.0,
            216164.0,
            236305.0,
            295936.0
          ],
          "3": [
            110511.0,
            112745.0,
            110480.0,
            138960.0,
            175794.0,
            202424.0,
            225535.0,
            241464.0,
            268647.0,
            329516.0
          ],
          "4": [
            112513.0,
            114408.0,
            103352.0,
            135582.0,
            169234.0,
            199618.0,
            224257.0,
            253793.0,
            294130.0,
            351725.0
          ],
          "5": [
            112781.0,
            113950.0,
            106625.0,
            125340.0,
            168258.0,
            186906.0,
            214811.0,
            243035.0,
            263342.0,
            324500.0
          ]
        },
        "Casa": {
          "1": [
            73037.0,
            110698.0,
            121803.0,
            150945.0,
            188620.0,
            204497.0,
            215381.0,
            223096.0,
            258208.0,
            303775.0
          ],
          "2": [
            78150.0,
            109537.0,
            124427.0,
            146615.0,
            182942.0,
            208498.0,
            217558.0,
            222296.0,
            253732.0,
            293687.0
          ],
          "3": [
            103395.0,
            120839.0,
            128699.0,
            149977.0,
            195388.0,
            221841.0,
            237913.0,
            242596.0,
            273571.0,
            311981.0
          ],
          "4": [
            105082.0,
            122767.0,
            125181.0,
            153066.0,
            189695.0,
            223329.0,
            249996.0,
            256889.0,
            293870.0,
            335962.0
          ],
          "5": [
            107521.0,
            125452.0,
            126175.0,
            142176.0,
            192102.0,
            226085.0,
            246657.0,
            250848.0,
            274685.0,
            322615.0
          ]
        }
      },
      "Villa Lugano": {
        "Departamento": {
          "1": [
            60736.0,
            76861.0,
            77372.0,
            98003.0,
            120224.0,
            143341.0,
            156824.0,
            186611.0,
            215023.0,
            258065.0
          ],
          "2": [
            68962.0,
            77652.0,
            78236.0,
            95705.0,
            121337.0,
            141509.0,
            146143.0,
            169354.0,
            196734.0,
            235762.0
          ],
          "3": [
            85489.0,
            80707.0,
            77990.0,
            93691.0,
            114166.0,
            137291.0,
            158523.0,
            193982.0,
            226031.0,
            272758.0
          ],
          "4": [
            85662.0,
            89051.0,
            80537.0,
            93618.0,
            106928.0,
            132818.0,
            147553.0,
            196572.0,
            232584.0,
            268810.0
          ],
          "5": [
            82532.0,
            89143.0,
            80526.0,
            88869.0,
            95177.0,
            112714.0,
            136196.0,
            170161.0,
            206451.0,
            253887.0
          ]
        },
        "Ph": {
          "1": [
            64713.0,
            88953.0,
            92733.0,
            119735.0,
            136615.0,
            146869.0,
            171547.0,
            179102.0,
            208514.0,
            266407.0
          ],
          "2": [
            75665.0,
            92148.0,
            97220.0,
            121112.0,
            139687.0,
            148949.0,
            161832.0,
            166900.0,
            196471.0,
            248638.0
          ],
          "3": [
            99353.0,
            107152.0,
            99409.0,
            118918.0,
            136855.0,
            152563.0,
            176846.0,
            180977.0,
            214122.0,
            272176.0
          ],
          "4": [
            98561.0,
            109423.0,
            98883.0,
            118828.0,
            141082.0,
            152992.0,
            169523.0,
            190248.0,
            228605.0,
            277193.0
          ],
          "5": [
            99054.0,
            113680.0,
            103120.0,
            116374.0,
            130424.0,
            140093.0,
            159649.0,
            174320.0,
            207869.0,
            263573.0
          ]
        },
        "Casa": {
          "1": [
            71204.0,
            94979.0,
            100699.0,
            123325.0,
            152088.0,
            162613.0,
            177443.0,
            191484.0,
            245992.0,
            267186.0
          ],
          "2": [
            79372.0,
            96498.0,
            102208.0,
            122332.0,
            150996.0,
            159921.0,
            167453.0,
            176447.0,
            225564.0,
            241955.0
          ],
          "3": [
            106520.0,
            109506.0,
            114718.0,
            130859.0,
            151356.0,
            167955.0,
            180651.0,
            189920.0,
            233248.0,
            261862.0
          ],
          "4": [
            105231.0,
            114440.0,
            119085.0,
            136166.0,
            150423.0,
            165859.0,
            181737.0,
            199767.0,
            242137.0,
            275056.0
          ],
          "5": [
            113678.0,
            128447.0,
            128954.0,
            140534.0,
            153149.0,
            171777.0,
            184933.0,
            184674.0,
            223154.0,
            264847.0
          ]
        }
      },
      "Villa Luro": {
        "Departamento": {
          "1": [
            76013.0,
            101740.0,
            119903.0,
            145427.0,
            177402.0,
            191144.0,
            227629.0,
            257484.0,
            285843.0,
            323156.0
          ],
          "2": [
            79266.0,
            102591.0,
            127491.0,
            148235.0,
            183412.0,
            200677.0,
            232021.0,
            256876.0,
            278515.0,
            309951.0
          ],
          "3": [
            105165.0,
            114416.0,
            131972.0,
            163753.0,
            198817.0,
            231845.0,
            270315.0,
            320946.0,
            347352.0,
            387672.0
          ],
          "4": [
            108058.0,
            114435.0,
            130965.0,
            159201.0,
            188527.0,
            226236.0,
            269068.0,
            318542.0,
            351248.0,
            388538.0
          ],
          "5": [
            106817.0,
            112973.0,
            131704.0,
            146538.0,
            183905.0,
            204968.0,
            259120.0,
            289759.0,
            315399.0,
            366090.0
          ]
        },
        "Ph": {
          "1": [
            71153.0,
            100185.0,
            109513.0,
            140553.0,
            163420.0,
            173048.0,
            210315.0,
            224873.0,
            248280.0,
            297891.0
          ],
          "2": [
            77110.0,
            100166.0,
            114042.0,
            142221.0,
            167333.0,
            181565.0,
            211754.0,
            226722.0,
            242857.0,
            286067.0
          ],
          "3": [
            102049.0,
            109938.0,
            110934.0,
            141256.0,
            174971.0,
            199703.0,
            233022.0,
            242995.0,
            272450.0,
            325800.0
          ],
          "4": [
            104420.0,
            111117.0,
            110272.0,
            135861.0,
            167451.0,
            192913.0,
            228654.0,
            251648.0,
            285673.0,
            336489.0
          ],
          "5": [
            104057.0,
            110026.0,
            113565.0,
            128526.0,
            165006.0,
            176989.0,
            219507.0,
            239093.0,
            258825.0,
            313171.0
          ]
        },
        "Casa": {
          "1": [
            75909.0,
            109632.0,
            123097.0,
            150560.0,
            187471.0,
            207635.0,
            220347.0,
            242796.0,
            275719.0,
            303947.0
          ],
          "2": [
            79214.0,
            107938.0,
            126825.0,
            150010.0,
            184490.0,
            214816.0,
            223503.0,
            244109.0,
            270714.0,
            290127.0
          ],
          "3": [
            104040.0,
            119621.0,
            129422.0,
            155069.0,
            201959.0,
            229492.0,
            247004.0,
            268406.0,
            293345.0,
            323757.0
          ],
          "4": [
            106333.0,
            121603.0,
            135150.0,
            157186.0,
            195672.0,
            227373.0,
            259093.0,
            279677.0,
            302237.0,
            342554.0
          ],
          "5": [
            108718.0,
            124168.0,
            136120.0,
            150339.0,
            196286.0,
            224126.0,
            254002.0,
            271790.0,
            283352.0,
            326305.0
          ]
        }
      },
      "Villa Ortuzar": {
        "Departamento": {
          "1": [
            79407.0,
            105323.0,
            131986.0,
            160856.0,
            193762.0,
            210077.0,
            254883.0,
            282085.0,
            313810.0,
            374964.0
          ],
          "2": [
            81742.0,
            109298.0,
            141063.0,
            164782.0,
            202583.0,
            220747.0,
            257963.0,
            291157.0,
            302317.0,
            340985.0
          ],
          "3": [
            97035.0,
            118020.0,
            145937.0,
            185573.0,
            218912.0,
            245807.0,
            286613.0,
            352841.0,
            378877.0,
            430979.0
          ],
          "4": [
            101613.0,
            119677.0,
            147319.0,
            176848.0,
            207707.0,
            245960.0,
            286895.0,
            355170.0,
            404917.0,
            449813.0
          ],
          "5": [
            99950.0,
            118290.0,
            148328.0,
            165800.0,
            198080.0,
            224307.0,
            277856.0,
            323011.0,
            360110.0,
            425973.0
          ]
        },
        "Ph": {
          "1": [
            78405.0,
            104339.0,
            128638.0,
            163528.0,
            186839.0,
            198110.0,
            240568.0,
            280185.0,
            310917.0,
            349144.0
          ],
          "2": [
            84025.0,
            107505.0,
            133478.0,
            166104.0,
            192541.0,
            209620.0,
            240679.0,
            286468.0,
            302197.0,
            335326.0
          ],
          "3": [
            97134.0,
            116989.0,
            136091.0,
            167589.0,
            206302.0,
            228374.0,
            256621.0,
            320786.0,
            348273.0,
            408658.0
          ],
          "4": [
            100526.0,
            118875.0,
            142873.0,
            166334.0,
            197337.0,
            219461.0,
            257355.0,
            319414.0,
            371456.0,
            432911.0
          ],
          "5": [
            100699.0,
            119050.0,
            144255.0,
            163733.0,
            191271.0,
            204806.0,
            239240.0,
            284660.0,
            325902.0,
            390853.0
          ]
        },
        "Casa": {
          "1": [
            81575.0,
            118569.0,
            139604.0,
            167610.0,
            205879.0,
            225771.0,
            248650.0,
            274891.0,
            324588.0,
            386984.0
          ],
          "2": [
            84507.0,
            121966.0,
            145378.0,
            166926.0,
            205566.0,
            234618.0,
            251560.0,
            287235.0,
            313645.0,
            349971.0
          ],
          "3": [
            99539.0,
            128032.0,
            145367.0,
            177037.0,
            221133.0,
            243865.0,
            274553.0,
            312670.0,
            344082.0,
            391399.0
          ],
          "4": [
            102727.0,
            131190.0,
            152594.0,
            175049.0,
            216930.0,
            243058.0,
            286174.0,
            330947.0,
            374082.0,
            430824.0
          ],
          "5": [
            104947.0,
            134675.0,
            154895.0,
            170626.0,
            211960.0,
            240817.0,
            281369.0,
            317811.0,
            348822.0,
            413759.0
          ]
        }
      },
      "Villa Pueyrredón": {
        "Departamento": {
          "1": [
            80488.0,
            105580.0,
            130936.0,
            156301.0,
            188547.0,
            202123.0,
            248797.0,
            278757.0,
            307954.0,
            365879.0
          ],
          "2": [
            82896.0,
            110547.0,
            140040.0,
            159585.0,
            195203.0,
            210312.0,
            253044.0,
            284964.0,
            293831.0,
            329534.0
          ],
          "3": [
            98169.0,
            119244.0,
            147799.0,
            179105.0,
            207232.0,
            235720.0,
            279409.0,
            344902.0,
            370675.0,
            416996.0
          ],
          "4": [
            102800.0,
            120918.0,
            148586.0,
            174095.0,
            199328.0,
            236250.0,
            276423.0,
            343151.0,
            388444.0,
            434025.0
          ],
          "5": [
            101119.0,
            119517.0,
            149604.0,
            163219.0,
            191795.0,
            217282.0,
            269692.0,
            307476.0,
            350163.0,
            410459.0
          ]
        },
        "Ph": {
          "1": [
            76170.0,
            102521.0,
            126657.0,
            157956.0,
            183495.0,
            191557.0,
            233227.0,
            268208.0,
            297094.0,
            339295.0
          ],
          "2": [
            82245.0,
            106342.0,
            131722.0,
            160545.0,
            188271.0,
            201804.0,
            236567.0,
            274006.0,
            288534.0,
            325610.0
          ],
          "3": [
            95922.0,
            118095.0,
            137358.0,
            161558.0,
            199158.0,
            220736.0,
            250616.0,
            306446.0,
            334724.0,
            396050.0
          ],
          "4": [
            99272.0,
            122623.0,
            143611.0,
            164862.0,
            194622.0,
            217533.0,
            250220.0,
            306317.0,
            355539.0,
            418403.0
          ],
          "5": [
            99584.0,
            122979.0,
            148382.0,
            162515.0,
            192129.0,
            206262.0,
            237964.0,
            273442.0,
            317279.0,
            378544.0
          ]
        },
        "Casa": {
          "1": [
            81316.0,
            117412.0,
            137630.0,
            161499.0,
            201048.0,
            219989.0,
            245804.0,
            281271.0,
            330162.0,
            388255.0
          ],
          "2": [
            84307.0,
            121506.0,
            142794.0,
            160064.0,
            198780.0,
            226374.0,
            249905.0,
            291084.0,
            315973.0,
            347754.0
          ],
          "3": [
            99410.0,
            129482.0,
            146041.0,
            169029.0,
            212836.0,
            237996.0,
            268601.0,
            313590.0,
            345759.0,
            389377.0
          ],
          "4": [
            102594.0,
            132677.0,
            152673.0,
            170803.0,
            209986.0,
            238086.0,
            280850.0,
            328071.0,
            368591.0,
            427423.0
          ],
          "5": [
            104811.0,
            136201.0,
            154975.0,
            166487.0,
            207419.0,
            237895.0,
            276091.0,
            315049.0,
            348016.0,
            409931.0
          ]
        }
      },
      "Villa Real": {
        "Departamento": {
          "1": [
            71888.0,
            98280.0,
            112700.0,
            139050.0,
            170341.0,
            187171.0,
            216894.0,
            228920.0,
            260764.0,
            309161.0
          ],
          "2": [
            78780.0,
            102606.0,
            119997.0,
            139312.0,
            171662.0,
            192884.0,
            219419.0,
            225575.0,
            252693.0,
            297341.0
          ],
          "3": [
            105941.0,
            115518.0,
            129288.0,
            151507.0,
            182014.0,
            213160.0,
            244320.0,
            271804.0,
            306260.0,
            355172.0
          ],
          "4": [
            107918.0,
            116111.0,
            121933.0,
            152952.0,
            185673.0,
            218086.0,
            248535.0,
            276712.0,
            320055.0,
            358621.0
          ],
          "5": [
            105454.0,
            113312.0,
            122998.0,
            136952.0,
            180106.0,
            206474.0,
            244867.0,
            256289.0,
            292830.0,
            339043.0
          ]
        },
        "Ph": {
          "1": [
            70208.0,
            98511.0,
            112479.0,
            139814.0,
            170555.0,
            178229.0,
            214226.0,
            234130.0,
            259588.0,
            312139.0
          ],
          "2": [
            78858.0,
            102079.0,
            118520.0,
            141634.0,
            173072.0,
            188179.0,
            217501.0,
            232019.0,
            253902.0,
            301811.0
          ],
          "3": [
            103041.0,
            115942.0,
            123018.0,
            142609.0,
            183592.0,
            208034.0,
            233854.0,
            260510.0,
            290196.0,
            347181.0
          ],
          "4": [
            104118.0,
            118629.0,
            115842.0,
            143073.0,
            176948.0,
            206575.0,
            236472.0,
            269006.0,
            308515.0,
            356088.0
          ],
          "5": [
            104730.0,
            118566.0,
            119132.0,
            133760.0,
            178878.0,
            197652.0,
            227029.0,
            247555.0,
            282490.0,
            324797.0
          ]
        },
        "Casa": {
          "1": [
            71805.0,
            106964.0,
            120968.0,
            145838.0,
            183203.0,
            197489.0,
            207123.0,
            217572.0,
            252921.0,
            298995.0
          ],
          "2": [
            77307.0,
            107938.0,
            124243.0,
            142497.0,
            177536.0,
            202350.0,
            209846.0,
            217444.0,
            249284.0,
            289934.0
          ],
          "3": [
            102841.0,
            121535.0,
            131016.0,
            146917.0,
            191994.0,
            217389.0,
            228261.0,
            235517.0,
            268843.0,
            308881.0
          ],
          "4": [
            104519.0,
            123858.0,
            127202.0,
            151690.0,
            187225.0,
            218085.0,
            239786.0,
            250293.0,
            285706.0,
            331302.0
          ],
          "5": [
            106977.0,
            126605.0,
            128251.0,
            141622.0,
            192106.0,
            222313.0,
            240116.0,
            243334.0,
            270376.0,
            314452.0
          ]
        }
      },
      "Villa Riachuelo": {
        "Departamento": {
          "1": [
            68435.0,
            88263.0,
            104564.0,
            124991.0,
            151782.0,
            164901.0,
            185568.0,
            206487.0,
            240743.0,
            290356.0
          ],
          "2": [
            78238.0,
            93225.0,
            110173.0,
            121985.0,
            152286.0,
            165186.0,
            183715.0,
            199080.0,
            228259.0,
            279148.0
          ],
          "3": [
            99758.0,
            103386.0,
            115549.0,
            132135.0,
            146573.0,
            161323.0,
            183563.0,
            213764.0,
            247942.0,
            308510.0
          ],
          "4": [
            100818.0,
            113997.0,
            115719.0,
            135090.0,
            149946.0,
            169618.0,
            185990.0,
            224667.0,
            259537.0,
            317718.0
          ],
          "5": [
            97134.0,
            114114.0,
            114921.0,
            125815.0,
            135839.0,
            154862.0,
            177348.0,
            199543.0,
            235072.0,
            297088.0
          ]
        },
        "Ph": {
          "1": [
            65422.0,
            89637.0,
            97704.0,
            125246.0,
            144810.0,
            146646.0,
            176014.0,
            181815.0,
            206107.0,
            271222.0
          ],
          "2": [
            76594.0,
            94163.0,
            104080.0,
            126660.0,
            147002.0,
            150339.0,
            174989.0,
            178553.0,
            199638.0,
            266382.0
          ],
          "3": [
            98751.0,
            109082.0,
            108256.0,
            127348.0,
            147539.0,
            152438.0,
            187815.0,
            192300.0,
            216252.0,
            287023.0
          ],
          "4": [
            99339.0,
            112251.0,
            104268.0,
            131474.0,
            155218.0,
            163086.0,
            190039.0,
            208674.0,
            236996.0,
            301762.0
          ],
          "5": [
            98388.0,
            114926.0,
            108001.0,
            126382.0,
            144669.0,
            152765.0,
            182509.0,
            198279.0,
            220113.0,
            287644.0
          ]
        },
        "Casa": {
          "1": [
            70265.0,
            106812.0,
            118718.0,
            138781.0,
            170003.0,
            177134.0,
            197704.0,
            218148.0,
            265925.0,
            305921.0
          ],
          "2": [
            78726.0,
            111158.0,
            123129.0,
            136938.0,
            167972.0,
            178835.0,
            197672.0,
            215114.0,
            260054.0,
            298356.0
          ],
          "3": [
            104676.0,
            125790.0,
            131682.0,
            140889.0,
            169807.0,
            179492.0,
            204941.0,
            220244.0,
            266929.0,
            312933.0
          ],
          "4": [
            105886.0,
            133183.0,
            132910.0,
            150864.0,
            171705.0,
            187555.0,
            217001.0,
            238326.0,
            284222.0,
            342493.0
          ],
          "5": [
            115115.0,
            150437.0,
            144219.0,
            153938.0,
            177216.0,
            200705.0,
            223763.0,
            230688.0,
            270145.0,
            331940.0
          ]
        }
      },
      "Villa Santa Rita": {
        "Departamento": {
          "1": [
            75281.0,
            101636.0,
            120432.0,
            144993.0,
            175510.0,
            190753.0,
            222094.0,
            247374.0,
            274022.0,
            308364.0
          ],
          "2": [
            79538.0,
            106736.0,
            129425.0,
            146578.0,
            178725.0,
            197590.0,
            225731.0,
            244899.0,
            264952.0,
            293360.0
          ],
          "3": [
            106088.0,
            114609.0,
            138305.0,
            162451.0,
            193546.0,
            228302.0,
            261672.0,
            307384.0,
            333912.0,
            374742.0
          ],
          "4": [
            109049.0,
            118080.0,
            134507.0,
            160824.0,
            192042.0,
            228937.0,
            264463.0,
            308915.0,
            340523.0,
            374172.0
          ],
          "5": [
            106154.0,
            114795.0,
            135166.0,
            146708.0,
            186865.0,
            210734.0,
            258717.0,
            282222.0,
            308695.0,
            356541.0
          ]
        },
        "Ph": {
          "1": [
            71754.0,
            97939.0,
            113537.0,
            144306.0,
            166149.0,
            175354.0,
            208940.0,
            227522.0,
            248138.0,
            297473.0
          ],
          "2": [
            78325.0,
            101983.0,
            119835.0,
            145337.0,
            166997.0,
            183323.0,
            212486.0,
            230709.0,
            247720.0,
            285191.0
          ],
          "3": [
            105834.0,
            119068.0,
            123167.0,
            150059.0,
            183196.0,
            211743.0,
            233108.0,
            259988.0,
            287264.0,
            331659.0
          ],
          "4": [
            108380.0,
            125265.0,
            121091.0,
            147016.0,
            176601.0,
            208162.0,
            233655.0,
            270227.0,
            300725.0,
            347642.0
          ],
          "5": [
            107726.0,
            123717.0,
            124387.0,
            138519.0,
            177007.0,
            191212.0,
            225122.0,
            257320.0,
            274177.0,
            319192.0
          ]
        },
        "Casa": {
          "1": [
            75663.0,
            111865.0,
            126384.0,
            149629.0,
            186382.0,
            205023.0,
            223443.0,
            250492.0,
            286790.0,
            320346.0
          ],
          "2": [
            80281.0,
            115286.0,
            130999.0,
            146499.0,
            182661.0,
            211292.0,
            228385.0,
            252562.0,
            282383.0,
            305240.0
          ],
          "3": [
            108995.0,
            124201.0,
            135532.0,
            153678.0,
            200209.0,
            228783.0,
            252985.0,
            277816.0,
            308292.0,
            339110.0
          ],
          "4": [
            111046.0,
            130704.0,
            137588.0,
            157346.0,
            195700.0,
            228640.0,
            267111.0,
            290519.0,
            317047.0,
            357873.0
          ],
          "5": [
            113924.0,
            133917.0,
            139393.0,
            150164.0,
            201438.0,
            230286.0,
            264199.0,
            283798.0,
            302191.0,
            343705.0
          ]
        }
      },
      "Villa Soldati": {
        "Departamento": {
          "1": [
            66873.0,
            80213.0,
            84081.0,
            102462.0,
            128725.0,
            147943.0,
            160232.0,
            193431.0,
            221828.0,
            273209.0
          ],
          "2": [
            78129.0,
            84589.0,
            87799.0,
            101391.0,
            126402.0,
            143345.0,
            147377.0,
            175454.0,
            202855.0,
            249469.0
          ],
          "3": [
            99643.0,
            96133.0,
            92310.0,
            103616.0,
            127746.0,
            147358.0,
            161071.0,
            195912.0,
            229885.0,
            283097.0
          ],
          "4": [
            97350.0,
            102520.0,
            92952.0,
            106861.0,
            123335.0,
            144191.0,
            149512.0,
            198401.0,
            231866.0,
            275534.0
          ],
          "5": [
            93793.0,
            102626.0,
            92311.0,
            100022.0,
            113357.0,
            129875.0,
            142821.0,
            173210.0,
            210009.0,
            257643.0
          ]
        },
        "Ph": {
          "1": [
            67923.0,
            89422.0,
            101381.0,
            124138.0,
            142462.0,
            149989.0,
            171211.0,
            175255.0,
            203214.0,
            263645.0
          ],
          "2": [
            79707.0,
            95272.0,
            107964.0,
            124615.0,
            140534.0,
            148096.0,
            157913.0,
            161694.0,
            189021.0,
            244865.0
          ],
          "3": [
            103881.0,
            112395.0,
            109112.0,
            124329.0,
            141250.0,
            153626.0,
            173659.0,
            176242.0,
            209369.0,
            272106.0
          ],
          "4": [
            104882.0,
            115689.0,
            110496.0,
            127317.0,
            148747.0,
            158457.0,
            169489.0,
            186080.0,
            220874.0,
            272796.0
          ],
          "5": [
            103707.0,
            118252.0,
            114263.0,
            122200.0,
            139154.0,
            146992.0,
            162950.0,
            173928.0,
            206434.0,
            259404.0
          ]
        },
        "Casa": {
          "1": [
            67866.0,
            89606.0,
            101036.0,
            119970.0,
            150590.0,
            152990.0,
            159751.0,
            192099.0,
            241051.0,
            279984.0
          ],
          "2": [
            75115.0,
            92698.0,
            104214.0,
            118692.0,
            147167.0,
            149502.0,
            149516.0,
            178841.0,
            219987.0,
            249716.0
          ],
          "3": [
            97769.0,
            106344.0,
            112483.0,
            128627.0,
            147778.0,
            157463.0,
            168036.0,
            186233.0,
            218493.0,
            267371.0
          ],
          "4": [
            100076.0,
            109817.0,
            115082.0,
            135271.0,
            146996.0,
            159458.0,
            165129.0,
            197884.0,
            224125.0,
            271311.0
          ],
          "5": [
            98132.0,
            111883.0,
            114632.0,
            124850.0,
            139251.0,
            150785.0,
            157588.0,
            171214.0,
            207663.0,
            258378.0
          ]
        }
      },
      "Villa Urquiza": {
        "Departamento": {
          "1": [
            79615.0,
            108496.0,
            138945.0,
            163336.0,
            209275.0,
            224590.0,
            259084.0,
            303623.0,
            357910.0,
            403897.0
          ],
          "2": [
            84340.0,
            114478.0,
            147505.0,
            165780.0,
            208106.0,
            229625.0,
            258770.0,
            309008.0,
            336958.0,
            353166.0
          ],
          "3": [
            98586.0,
            126878.0,
            159521.0,
            188180.0,
            232087.0,
            268737.0,
            299666.0,
            356623.0,
            402592.0,
            425791.0
          ],
          "4": [
            102967.0,
            132168.0,
            166159.0,
            189663.0,
            230652.0,
            269527.0,
            307142.0,
            374714.0,
            441833.0,
            470172.0
          ],
          "5": [
            100686.0,
            129867.0,
            165065.0,
            180093.0,
            220924.0,
            248932.0,
            291434.0,
            335126.0,
            392378.0,
            437609.0
          ]
        },
        "Ph": {
          "1": [
            78212.0,
            105505.0,
            133369.0,
            161500.0,
            197572.0,
            212560.0,
            255373.0,
            284923.0,
            329262.0,
            373070.0
          ],
          "2": [
            86956.0,
            110536.0,
            138300.0,
            161773.0,
            192516.0,
            215105.0,
            253316.0,
            285957.0,
            316093.0,
            349866.0
          ],
          "3": [
            106607.0,
            129639.0,
            142786.0,
            166552.0,
            213067.0,
            242012.0,
            271696.0,
            320945.0,
            358888.0,
            406395.0
          ],
          "4": [
            108444.0,
            133861.0,
            153138.0,
            170692.0,
            213573.0,
            241500.0,
            274583.0,
            321340.0,
            379534.0,
            435519.0
          ],
          "5": [
            109653.0,
            135320.0,
            156074.0,
            170695.0,
            211223.0,
            231675.0,
            265383.0,
            296709.0,
            337375.0,
            388639.0
          ]
        },
        "Casa": {
          "1": [
            81057.0,
            123480.0,
            158410.0,
            169147.0,
            218593.0,
            241459.0,
            257320.0,
            285723.0,
            337823.0,
            413127.0
          ],
          "2": [
            85934.0,
            128604.0,
            163544.0,
            165702.0,
            211284.0,
            245229.0,
            258938.0,
            294000.0,
            323449.0,
            370197.0
          ],
          "3": [
            103321.0,
            138314.0,
            162557.0,
            180133.0,
            234341.0,
            262915.0,
            294758.0,
            315370.0,
            350689.0,
            407414.0
          ],
          "4": [
            107453.0,
            143384.0,
            173553.0,
            181794.0,
            234590.0,
            267414.0,
            309365.0,
            336438.0,
            386770.0,
            460034.0
          ],
          "5": [
            108684.0,
            145729.0,
            174418.0,
            177834.0,
            229479.0,
            261916.0,
            304287.0,
            322550.0,
            356289.0,
            434234.0
          ]
        }
      }
    }
  }
};