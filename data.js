var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.11808432484615139,
          "pitch": 0.054336620669271696,
          "rotation": 0,
          "target": "2-living-area-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5478127178601468,
          "pitch": 0.07275346859589504,
          "title": "Oneiro",
          "text": "Sikinou"
        }
      ]
    },
    {
      "id": "1-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7482261294587813,
          "pitch": 0.09924410893933278,
          "rotation": 0,
          "target": "2-living-area-1"
        },
        {
          "yaw": -3.0559510654500777,
          "pitch": 0.11247207615540233,
          "rotation": 0,
          "target": "3-living-area-2"
        },
        {
          "yaw": -1.7439935386769907,
          "pitch": 0.06605978217851316,
          "rotation": 0,
          "target": "4-living-area-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-living-area-1",
      "name": "Living Area (1)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.051022545043004,
          "pitch": 0.05249413882928877,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": 0.8273537220891178,
          "pitch": 0.08347760421778894,
          "rotation": 0,
          "target": "1-kitchen"
        },
        {
          "yaw": -0.3700573442494832,
          "pitch": 0.07928947411271459,
          "rotation": 0,
          "target": "3-living-area-2"
        },
        {
          "yaw": 0.45585409698288615,
          "pitch": 0.07738601095939757,
          "rotation": 0,
          "target": "4-living-area-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-living-area-2",
      "name": "Living Area (2)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.107109868639238,
          "pitch": 0.05679450565141764,
          "rotation": 0,
          "target": "2-living-area-1"
        },
        {
          "yaw": 2.3925444196271926,
          "pitch": 0.09880532723300028,
          "rotation": 0,
          "target": "1-kitchen"
        },
        {
          "yaw": 2.0491978809712235,
          "pitch": 0.1177351639493196,
          "rotation": 5.497787143782138,
          "target": "4-living-area-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-living-area-3",
      "name": "Living Area (3)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9600564661174307,
          "pitch": 0.11635492952437865,
          "rotation": 5.497787143782138,
          "target": "1-kitchen"
        },
        {
          "yaw": -2.897164925065802,
          "pitch": 0.08604633847640741,
          "rotation": 0,
          "target": "2-living-area-1"
        },
        {
          "yaw": -2.15825294254309,
          "pitch": 0.12277857498908062,
          "rotation": 0.7853981633974483,
          "target": "3-living-area-2"
        },
        {
          "yaw": 1.0073633159228752,
          "pitch": 0.14159041742158252,
          "rotation": 0,
          "target": "5-bedroom"
        },
        {
          "yaw": -0.5294361206868601,
          "pitch": 0.09466004336606915,
          "rotation": 0,
          "target": "5-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bedroom",
      "name": "Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.01053922807023433,
          "pitch": 0.04989078181126061,
          "rotation": 0,
          "target": "6-bedroom-2"
        },
        {
          "yaw": 2.899237711380156,
          "pitch": 0.19246447449676118,
          "rotation": 0,
          "target": "4-living-area-3"
        },
        {
          "yaw": 3.1067775677482175,
          "pitch": 0.20851517063433178,
          "rotation": 0.7853981633974483,
          "target": "1-kitchen"
        },
        {
          "yaw": 2.6212754514251717,
          "pitch": 0.21358248603793584,
          "rotation": 5.497787143782138,
          "target": "7-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bedroom-2",
      "name": "Bedroom (2)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.501088976410758,
          "pitch": 0.25071925883884916,
          "rotation": 0,
          "target": "5-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.10274949884022888,
          "pitch": 0.06135228435362272,
          "rotation": 0,
          "target": "8-bathroom-2"
        },
        {
          "yaw": 2.7341464072477226,
          "pitch": 0.147631868360115,
          "rotation": 5.497787143782138,
          "target": "4-living-area-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bathroom-2",
      "name": "Bathroom (2)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.2989361147177885,
          "pitch": 0.08669882108562277,
          "rotation": 0,
          "target": "7-bathroom"
        },
        {
          "yaw": -2.5288000106547575,
          "pitch": 0.0876659809264897,
          "rotation": 5.497787143782138,
          "target": "4-living-area-3"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
