var APP_DATA = {
  "scenes": [
    {
      "id": "0-sala",
      "name": "sala",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.45018738113541446,
          "pitch": 0.044528851692490434,
          "rotation": 0,
          "target": "1-fregadero"
        },
        {
          "yaw": -0.43767502842158024,
          "pitch": -0.00007695569533261448,
          "rotation": 0,
          "target": "2-nevera"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-fregadero",
      "name": "fregadero",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.25752316619285587,
          "pitch": 0.017975902958436762,
          "rotation": 0,
          "target": "2-nevera"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-nevera",
      "name": "nevera",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.32570667329023273,
          "pitch": -0.04400525747839801,
          "rotation": 0,
          "target": "1-fregadero"
        },
        {
          "yaw": 1.5398748747687705,
          "pitch": 0.011755750597837178,
          "rotation": 0,
          "target": "0-sala"
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
