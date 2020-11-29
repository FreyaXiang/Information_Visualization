const id = {
  Afghanistan: 4,
  Albania: 8,
  Algeria: 12,
  Andorra: 20,
  Angola: 24,
  Anguilla: 660,
  "Antigua and Barbuda": 28,
  Argentina: 32,
  Armenia: 51,
  Aruba: 533,
  Australia: 36,
  Austria: 40,
  Azerbaijan: 31,
  Bahamas: 44,
  Bahrain: 48,
  Bangladesh: 50,
  Barbados: 52,
  Belarus: 112,
  Belgium: 56,
  Belize: 84,
  Benin: 204,
  Bermuda: 60,
  Bhutan: 64,
  Bolivia: 68,
  "Bonaire Sint Eustatius and Saba": 535,
  "Bosnia and Herzegovina": 70,
  Botswana: 72,
  Brazil: 76,
  "British Virgin Islands": 92,
  Brunei: 96,
  Bulgaria: 100,
  "Burkina Faso": 854,
  Burundi: 108,
  Cambodia: 116,
  Cameroon: 120,
  Canada: 124,
  "Cape Verde": 132,
  "Cayman Islands": 136,
  "Central African Republic": 140,
  Chad: 148,
  Chile: 152,
  China: 156,
  Colombia: 170,
  Comoros: 174,
  Congo: 178,
  "Costa Rica": 188,
  "Cote d'Ivoire": 384,
  Croatia: 191,
  Cuba: 192,
  Curacao: 531,
  Cyprus: 196,
  "Czech Republic": 203,
  "Democratic Republic of Congo": 180,
  Denmark: 208,
  Djibouti: 262,
  Dominica: 212,
  "Dominican Republic": 214,
  Ecuador: 218,
  Egypt: 818,
  "El Salvador": 222,
  "Equatorial Guinea": 226,
  Eritrea: 232,
  Estonia: 233,
  Ethiopia: 231,
  "Faeroe Islands": 234,
  "Falkland Islands": 238,
  Fiji: 242,
  Finland: 246,
  France: 250,
  "French Polynesia": 258,
  Gabon: 266,
  Gambia: 270,
  Georgia: 268,
  Germany: 276,
  Ghana: 288,
  Gibraltar: 292,
  Greece: 300,
  Greenland: 304,
  Grenada: 308,
  Guam: 316,
  Guatemala: 320,
  Guernsey: 831,
  Guinea: 324,
  "Guinea-Bissau": 624,
  Guyana: 328,
  Haiti: 332,
  Honduras: 340,
  "Hong Kong": 344,
  Hungary: 348,
  Iceland: 352,
  India: 356,
  Indonesia: 360,
  Iran: 364,
  Iraq: 368,
  Ireland: 372,
  "Isle of Man": 833,
  Israel: 376,
  Italy: 380,
  Jamaica: 388,
  Japan: 392,
  Jersey: 832,
  Jordan: 400,
  Kazakhstan: 398,
  Kenya: 404,
  Kosovo: -2,
  Kuwait: 414,
  Kyrgyzstan: 417,
  Laos: 418,
  Latvia: 428,
  Lebanon: 422,
  Lesotho: 426,
  Liberia: 430,
  Libya: 434,
  Liechtenstein: 438,
  Lithuania: 440,
  Luxembourg: 442,
  Macedonia: 807,
  Madagascar: 450,
  Malawi: 454,
  Malaysia: 458,
  Maldives: 462,
  Mali: 466,
  Malta: 470,
  "Marshall Islands": 584,
  Mauritania: 478,
  Mauritius: 480,
  Mexico: 484,
  Moldova: 498,
  Monaco: 492,
  Mongolia: 496,
  Montenegro: 499,
  Montserrat: 500,
  Morocco: 504,
  Mozambique: 508,
  Myanmar: 104,
  Namibia: 516,
  Nepal: 524,
  Netherlands: 528,
  "New Caledonia": 540,
  "New Zealand": 554,
  Nicaragua: 558,
  Niger: 562,
  Nigeria: 566,
  "Northern Mariana Islands": 580,
  Norway: 578,
  Oman: 512,
  Pakistan: 586,
  Palestine: 275,
  Panama: 591,
  "Papua New Guinea": 598,
  Paraguay: 600,
  Peru: 604,
  Philippines: 608,
  Poland: 616,
  Portugal: 620,
  "Puerto Rico": 630,
  Qatar: 634,
  Romania: 642,
  Russia: 643,
  Rwanda: 646,
  "Saint Kitts and Nevis": 659,
  "Saint Lucia": 662,
  "Saint Vincent and the Grenadines": 670,
  "San Marino": 674,
  "Sao Tome and Principe": 678,
  "Saudi Arabia": 682,
  Senegal: 686,
  Serbia: 688,
  Seychelles: 690,
  "Sierra Leone": 694,
  Singapore: 702,
  "Sint Maarten (Dutch part)": 534,
  Slovakia: 703,
  Slovenia: 705,
  "Solomon Islands": 90,
  Somalia: 706,
  "South Africa": 710,
  "South Korea": 408,
  "South Sudan": 728,
  Spain: 724,
  "Sri Lanka": 144,
  Sudan: 729,
  Suriname: 740,
  Swaziland: 748,
  Sweden: 752,
  Switzerland: 756,
  Syria: 760,
  Taiwan: 158,
  Tajikistan: 762,
  Tanzania: 834,
  Thailand: 764,
  Timor: 626,
  Togo: 768,
  "Trinidad and Tobago": 780,
  Tunisia: 788,
  Turkey: 792,
  "Turks and Caicos Islands": 796,
  Uganda: 800,
  Ukraine: 804,
  "United Arab Emirates": 784,
  "United Kingdom": 826,
  "United States": 840,
  "United States Virgin Islands": 850,
  Uruguay: 858,
  Uzbekistan: 860,
  Vanuatu: 548,
  Vatican: 379,
  Venezuela: 862,
  Vietnam: 704,
  "Wallis and Futuna": 876,
  "Western Sahara": 732,
  Yemen: 887,
  Zambia: 894,
  Zimbabwe: 716,
  World: -100,
  International: -101,
  location: -102,
};

// Loading data
var data;
$.ajax({
  type: "GET",
  url: "covid19.csv",
  dataType: "text",
  success: function (response) {
    data = $.csv.toArrays(response);
    // total cases and color scale
    var totalCasesCountries = {};
    data.forEach((col) => {
      totalCasesCountries[id[col[2]]] = +col[4];
    });
    delete totalCasesCountries[-100];
    delete totalCasesCountries[-101];
    delete totalCasesCountries[-102];
    startGlobe(totalCasesCountries);
    // console.log(totalCasesCountries);
  },
});

function startGlobe(totalCasesCountries) {
  // Rotating globe
  // ms to wait after dragging before auto-rotating
  var rotationDelay = 3000;
  // scale of the globe (not the canvas element)
  var scaleFactor = 0.85;
  // autorotation speed
  var degPerSec = 9;
  // start angles
  var angles = { x: -20, y: 40, z: 0 };
  // 5 colors
  const colorScale = d3.schemeReds[9];
  // find max and min total cases
  var maxTotalCase = 0;
  var minTotalCase = Number.MAX_SAFE_INTEGER;
  for (var country in totalCasesCountries) {
    if (totalCasesCountries[country] > maxTotalCase) {
      maxTotalCase = totalCasesCountries[country];
    }
    if (totalCasesCountries[country] < minTotalCase) {
      minTotalCase = totalCasesCountries[country];
    }
  }
  var range = maxTotalCase - minTotalCase;
  // var color0 = colorScale[4];
  // var color1 = colorScale[5];
  // var color2 = colorScale[6];
  // var color3 = colorScale[7];
  // var color4 = colorScale[8];

  var colorWater = "black";
  var colorLand = "#a00";
  var colorGraticule = "black";
  var colorCountry = "#FFFF66";

  //
  // Handler
  //

  function enter(country) {
    var country = countryList.find(function (c) {
      return parseInt(c.id, 10) === parseInt(country.id, 10);
    });
    current.text((country && country.name) || "");
  }

  function leave(country) {
    current.text("");
  }

  //
  // Variables
  //

  // console.log(d3.interpolateGreens(0.5));

  var current = d3.select("#current");
  var canvas = d3.select("#globe");
  var context = canvas.node().getContext("2d");
  var water = { type: "Sphere" };
  var projection = d3.geoOrthographic().precision(0.1);
  var graticule = d3.geoGraticule10();
  var path = d3.geoPath(projection).context(context);
  var v0; // Mouse position in Cartesian coordinates at start of drag gesture.
  var r0; // Projection rotation as Euler angles at start.
  var q0; // Projection rotation as versor at start.
  var lastTime = d3.now();
  var degPerMs = degPerSec / 1000;
  var width, height;
  var land, countries;
  var countryList;
  var autorotate, now, diff, roation;
  var currentCountry;

  //
  // Functions
  //

  function setAngles() {
    var rotation = projection.rotate();
    rotation[0] = angles.y;
    rotation[1] = angles.x;
    rotation[2] = angles.z;
    projection.rotate(rotation);
  }

  function scale() {
    width = document.documentElement.clientWidth * 1.0;
    height = document.documentElement.clientHeight * 1.0;
    canvas.attr("width", width).attr("height", height);
    projection
      .scale((scaleFactor * Math.min(width, height)) / 2)
      .translate([width / 2, height / 2]);
    render();
  }

  function startRotation(delay) {
    autorotate.restart(rotate, delay || 0);
  }

  function stopRotation() {
    autorotate.stop();
  }

  function dragstarted() {
    v0 = versor.cartesian(projection.invert(d3.mouse(this)));
    r0 = projection.rotate();
    q0 = versor(r0);
    stopRotation();
  }

  function dragged() {
    var v1 = versor.cartesian(projection.rotate(r0).invert(d3.mouse(this)));
    var q1 = versor.multiply(q0, versor.delta(v0, v1));
    var r1 = versor.rotation(q1);
    projection.rotate(r1);
    render();
  }

  function dragended() {
    startRotation(rotationDelay);
  }

  function render() {
    context.clearRect(0, 0, width, height);
    fill(water, colorWater);
    stroke(graticule, colorGraticule);
    fill(land, colorLand);
    // var china = plot();
    countries.features.forEach((c) => {
      // if (
      //   totalCasesCountries[+c.id] >= minTotalCase &&
      //   totalCasesCountries[+c.id] < minTotalCase + unit
      // ) {
      //   fill(c.geometry, color0);
      // } else if (
      //   totalCasesCountries[+c.id] >= minTotalCase + unit &&
      //   totalCasesCountries[+c.id] < minTotalCase + unit * 2
      // ) {
      //   fill(c.geometry, color1);
      // } else if (
      //   totalCasesCountries[+c.id] >= minTotalCase + unit * 2 &&
      //   totalCasesCountries[+c.id] < minTotalCase + unit * 3
      // ) {
      //   fill(c.geometry, color2);
      // } else if (
      //   totalCasesCountries[+c.id] >= minTotalCase + unit * 3 &&
      //   totalCasesCountries[+c.id] < minTotalCase + unit * 4
      // ) {
      //   fill(c.geometry, color3);
      // } else if (
      //   totalCasesCountries[+c.id] >= minTotalCase + unit * 4 &&
      //   totalCasesCountries[+c.id] <= maxTotalCase
      // ) {
      //   fill(c.geometry, color4);
      //   stroke(c.geometry, "white");
      // }
      fill(
        c.geometry,
        d3.interpolateReds((totalCasesCountries[+c.id] - minTotalCase) / range)
      );
    });
    if (currentCountry) {
      fill(currentCountry, colorCountry);
    }
  }

  function fill(obj, color) {
    context.beginPath();
    path(obj);
    context.fillStyle = color;
    context.fill();
  }

  function stroke(obj, color) {
    context.beginPath();
    path(obj);
    context.strokeStyle = color;
    context.stroke();
  }

  function rotate(elapsed) {
    now = d3.now();
    diff = now - lastTime;
    if (diff < elapsed) {
      rotation = projection.rotate();
      rotation[0] += diff * degPerMs;
      projection.rotate(rotation);
      render();
    }
    lastTime = now;
  }

  function loadData(cb) {
    d3.json(
      "https://unpkg.com/world-atlas@1/world/110m.json",
      function (error, world) {
        if (error) throw error;
        d3.tsv(
          "https://gist.githubusercontent.com/mbostock/4090846/raw/07e73f3c2d21558489604a0bc434b3a5cf41a867/world-country-names.tsv",
          function (error, countries) {
            if (error) throw error;
            cb(world, countries);
          }
        );
      }
    );
  }

  // https://github.com/d3/d3-polygon
  function polygonContains(polygon, point) {
    var n = polygon.length;
    var p = polygon[n - 1];
    var x = point[0],
      y = point[1];
    var x0 = p[0],
      y0 = p[1];
    var x1, y1;
    var inside = false;
    for (var i = 0; i < n; ++i) {
      (p = polygon[i]), (x1 = p[0]), (y1 = p[1]);
      if (y1 > y !== y0 > y && x < ((x0 - x1) * (y - y1)) / (y0 - y1) + x1)
        inside = !inside;
      (x0 = x1), (y0 = y1);
    }
    return inside;
  }

  function mouseclick() {
    var c = getCountry(this);
    if (!c) {
      if (currentCountry) {
        leave(currentCountry);
        currentCountry = undefined;
        startRotation(1000);
        render();
      }
      return;
    }
    if (c === currentCountry) {
      return;
    }
    currentCountry = c;
    stopRotation();
    render();
    enter(c);
  }

  function getCountry(event) {
    var pos = projection.invert(d3.mouse(event));
    // var pos = [120, 30];
    return countries.features.find(function (f) {
      return f.geometry.coordinates.find(function (c1) {
        return (
          polygonContains(c1, pos) ||
          c1.find(function (c2) {
            return polygonContains(c2, pos);
          })
        );
      });
    });
  }

  //
  // Initialization
  //

  setAngles();

  canvas
    .call(
      d3
        .drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended)
    )
    .on("click", mouseclick);

  $("#current").click(function () {
    alert("The paragraph was clicked.");
  });

  loadData(function (world, cList) {
    land = topojson.feature(world, world.objects.land);
    countries = topojson.feature(world, world.objects.countries);
    countryList = cList;
    console.log(countries.features);
    console.log(countryList);

    window.addEventListener("resize", scale);
    scale();
    autorotate = d3.timer(rotate);
  });
}
