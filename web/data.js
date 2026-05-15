const RESULTS_DATA = {
  "metrics": {
    "r2": 0.7078,
    "mae": 244.8,
    "n_train": 16663,
    "n_test": 4166,
    "total_data": 20829,
    "mae_pct": 27.4
  },
  "intercept": 894.53,
  "coeficientes_numericos": [
    {
      "feature": "superficie",
      "coef": 12.49
    },
    {
      "feature": "ambientes",
      "coef": 89.67
    },
    {
      "feature": "dormitorios",
      "coef": -67.18
    },
    {
      "feature": "banos",
      "coef": 9.12
    },
    {
      "feature": "expenses_ars",
      "coef": -0.0
    }
  ],
  "coeficientes_amenities": [
    {
      "feature": "amoblado",
      "coef": 225.63
    },
    {
      "feature": "cochera",
      "coef": 175.5
    },
    {
      "feature": "gimnasio",
      "coef": 158.59
    },
    {
      "feature": "pileta",
      "coef": 124.77
    },
    {
      "feature": "balcon",
      "coef": 28.62
    },
    {
      "feature": "sum",
      "coef": 7.02
    },
    {
      "feature": "terraza",
      "coef": -0.08
    },
    {
      "feature": "aire_acondicionado",
      "coef": -15.62
    },
    {
      "feature": "ascensor",
      "coef": -31.74
    },
    {
      "feature": "laundry",
      "coef": -84.09
    }
  ],
  "coeficientes_barrio": [
    {
      "barrio": "Puerto Madero",
      "coef": 1195.98
    },
    {
      "barrio": "Colegiales",
      "coef": 614.16
    },
    {
      "barrio": "Núñez",
      "coef": 294.93
    },
    {
      "barrio": "Palermo",
      "coef": 229.6
    },
    {
      "barrio": "Barrio Norte",
      "coef": 191.44
    },
    {
      "barrio": "Belgrano",
      "coef": 187.05
    },
    {
      "barrio": "Recoleta",
      "coef": 183.07
    },
    {
      "barrio": "Saavedra",
      "coef": 152.48
    },
    {
      "barrio": "Villa Crespo",
      "coef": 147.03
    },
    {
      "barrio": "Coghlan",
      "coef": 125.83
    },
    {
      "barrio": "Villa Urquiza",
      "coef": 99.18
    },
    {
      "barrio": "Balvanera",
      "coef": 88.2
    },
    {
      "barrio": "Caballito",
      "coef": 66.33
    },
    {
      "barrio": "Villa Del Parque",
      "coef": 47.89
    },
    {
      "barrio": "Parque Patricios",
      "coef": 5.81
    }
  ],
  "precio_por_barrio": [
    {
      "barrio": "Villa Lugano",
      "precio_promedio": 523,
      "precio_m2": 11.5,
      "n": 127
    },
    {
      "barrio": "Villa Del Parque",
      "precio_promedio": 535,
      "precio_m2": 12.8,
      "n": 974
    },
    {
      "barrio": "Centro",
      "precio_promedio": 537,
      "precio_m2": 11.6,
      "n": 80
    },
    {
      "barrio": "Parque Patricios",
      "precio_promedio": 556,
      "precio_m2": 12.2,
      "n": 1306
    },
    {
      "barrio": "San Nicolás",
      "precio_promedio": 558,
      "precio_m2": 11.8,
      "n": 429
    },
    {
      "barrio": "San Cristobal",
      "precio_promedio": 585,
      "precio_m2": 13.0,
      "n": 9
    },
    {
      "barrio": "Boedo",
      "precio_promedio": 609,
      "precio_m2": 12.4,
      "n": 424
    },
    {
      "barrio": "Flores",
      "precio_promedio": 627,
      "precio_m2": 11.9,
      "n": 943
    },
    {
      "barrio": "Villa Urquiza",
      "precio_promedio": 631,
      "precio_m2": 14.3,
      "n": 626
    },
    {
      "barrio": "Constitucion",
      "precio_promedio": 632,
      "precio_m2": 13.6,
      "n": 205
    },
    {
      "barrio": "Almagro",
      "precio_promedio": 665,
      "precio_m2": 14.3,
      "n": 838
    },
    {
      "barrio": "Parque Chacabuco",
      "precio_promedio": 674,
      "precio_m2": 12.0,
      "n": 600
    },
    {
      "barrio": "Villa Crespo",
      "precio_promedio": 677,
      "precio_m2": 15.0,
      "n": 670
    },
    {
      "barrio": "Barracas",
      "precio_promedio": 684,
      "precio_m2": 11.1,
      "n": 483
    },
    {
      "barrio": "La Boca",
      "precio_promedio": 693,
      "precio_m2": 12.5,
      "n": 271
    },
    {
      "barrio": "Caballito",
      "precio_promedio": 769,
      "precio_m2": 13.7,
      "n": 951
    },
    {
      "barrio": "Villa Devoto",
      "precio_promedio": 772,
      "precio_m2": 15.4,
      "n": 9
    },
    {
      "barrio": "Coghlan",
      "precio_promedio": 782,
      "precio_m2": 14.7,
      "n": 1353
    },
    {
      "barrio": "Balvanera",
      "precio_promedio": 793,
      "precio_m2": 13.3,
      "n": 743
    },
    {
      "barrio": "Saavedra",
      "precio_promedio": 796,
      "precio_m2": 14.1,
      "n": 586
    },
    {
      "barrio": "San Telmo",
      "precio_promedio": 803,
      "precio_m2": 14.7,
      "n": 375
    },
    {
      "barrio": "Monserrat",
      "precio_promedio": 833,
      "precio_m2": 13.9,
      "n": 377
    },
    {
      "barrio": "Palermo",
      "precio_promedio": 966,
      "precio_m2": 17.2,
      "n": 1437
    },
    {
      "barrio": "Retiro",
      "precio_promedio": 976,
      "precio_m2": 14.4,
      "n": 296
    },
    {
      "barrio": "Recoleta",
      "precio_promedio": 999,
      "precio_m2": 16.0,
      "n": 1231
    },
    {
      "barrio": "Núñez",
      "precio_promedio": 1021,
      "precio_m2": 19.9,
      "n": 1207
    },
    {
      "barrio": "Belgrano",
      "precio_promedio": 1057,
      "precio_m2": 16.3,
      "n": 1123
    },
    {
      "barrio": "Barrio Norte",
      "precio_promedio": 1147,
      "precio_m2": 14.9,
      "n": 1023
    },
    {
      "barrio": "Colegiales",
      "precio_promedio": 1557,
      "precio_m2": 25.1,
      "n": 656
    },
    {
      "barrio": "Puerto Madero",
      "precio_promedio": 2597,
      "precio_m2": 30.7,
      "n": 886
    }
  ],
  "moneda": "USD",
  "tipo": "alquiler_mensual"
};