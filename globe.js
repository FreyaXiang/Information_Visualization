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
  url: "https://covid.ourworldindata.org/data/owid-covid-data.csv",
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
    start(totalCasesCountries, data);
    // console.log(totalCasesCountries);
    // drawCharts(data);
  },
});

function start(totalCasesCountries, data) {
  // Rotating globe
  // ms to wait after dragging before auto-rotating
  var rotationDelay = 3000;
  // scale of the globe (not the canvas element)
  var scaleFactor = 1.0;
  // autorotation speed
  var degPerSec = 9;
  // start angles
  var angles = { x: -20, y: 40, z: 0 };
  // 5 colors
  const colorScale = d3.schemeRdYlBu[9];
  // find max and min total cases
  var maxTotalCase = 0;
  var minTotalCase = Number.MAX_SAFE_INTEGER;
  for (var country in totalCasesCountries) {
    if (country === "840" || country === "356") {
      continue;
    }
    if (totalCasesCountries[country] > maxTotalCase) {
      maxTotalCase = totalCasesCountries[country];
    }
    if (totalCasesCountries[country] < minTotalCase) {
      minTotalCase = totalCasesCountries[country];
    }
  }
  var range = maxTotalCase - minTotalCase;
  var unit = range / 7.0;
  var color1 = "#4b000f";
  var color2 = "#600010";
  var color3 = "#750011";
  var color4 = "#8d0111";
  var color5 = "#a50110";
  var color6 = "#bd030d";
  var color7 = "#d0040b";

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
    current.text("World");
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
    width = document.documentElement.clientWidth * 0.9;
    height = document.documentElement.clientHeight * 0.9;
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
      if (
        totalCasesCountries[+c.id] >= minTotalCase &&
        totalCasesCountries[+c.id] < minTotalCase + unit
      ) {
        fill(c.geometry, color1);
        stroke(c.geometry, color3);
      } else if (
        totalCasesCountries[+c.id] >= minTotalCase + unit &&
        totalCasesCountries[+c.id] < minTotalCase + unit * 2
      ) {
        fill(c.geometry, color2);
        stroke(c.geometry, color3);
      } else if (
        totalCasesCountries[+c.id] >= minTotalCase + unit * 2 &&
        totalCasesCountries[+c.id] < minTotalCase + unit * 3
      ) {
        fill(c.geometry, color3);
        stroke(c.geometry, color3);
      } else if (
        totalCasesCountries[+c.id] >= minTotalCase + unit * 3 &&
        totalCasesCountries[+c.id] < minTotalCase + unit * 4
      ) {
        fill(c.geometry, color4);
        stroke(c.geometry, color3);
      } else if (
        totalCasesCountries[+c.id] >= minTotalCase + unit * 4 &&
        totalCasesCountries[+c.id] <= minTotalCase + unit * 5
      ) {
        fill(c.geometry, color5);
        stroke(c.geometry, color3);
      } else if (
        totalCasesCountries[+c.id] >= minTotalCase + unit * 4 &&
        totalCasesCountries[+c.id] <= minTotalCase + unit * 6
      ) {
        fill(c.geometry, color6);
        stroke(c.geometry, color3);
      } else if (
        totalCasesCountries[+c.id] >= minTotalCase + unit * 4 &&
        totalCasesCountries[+c.id] <= minTotalCase + unit * 7
      ) {
        fill(c.geometry, color7);
        stroke(c.geometry, color3);
      }
      // united states
      if (+c.id === 840) {
        fill(c.geometry, "#ff0800");
      }
      // india
      if (+c.id === 356) {
        fill(c.geometry, "#e30507");
      }
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
    // d3.select("g").remove();
    // draw_new_cases(getKeyByValue(id, +currentCountry.id));
    // draw_new_deaths(getKeyByValue(id, +currentCountry.id));
    // console.log(getKeyByValue(id, +currentCountry.id));
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
    // console.log(countries.features);
    // console.log(countryList);

    window.addEventListener("resize", scale);
    scale();
    autorotate = d3.timer(rotate);
  });

  ///////////////////////////////////////////////////

  var parseDate = d3.timeParse("%Y-%m-%d");

  data.forEach((d) => {
    d[3] = parseDate(d[3]);
    d[4] = parseInt(d[4]) || 0;
    d[5] = parseInt(d[5]) || 0;
    d[6] = parseFloat(d[6]) || 0;
    d[7] = parseInt(d[7]) || 0;
    d[8] = parseInt(d[8]) || 0;
    d[9] = parseFloat(d[9]) || 0;
  });

  var div = d3
    .select("body")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);
  var svg = d3.select("svg");
  var margin = 180;
  var gap_between_views = 150;
  var width = svg.attr("width") - margin;
  var height = svg.attr("height") - margin;
  var height1 = 0.5 * height - 0.5 * gap_between_views;
  var height2 = 0.5 * height + 0.5 * gap_between_views;
  let cases = svg
    .append("g")
    .attr("class", "casesChart")
    .attr("transform", "translate(" + 100 + "," + 100 + ")");

  let deaths = svg
    .append("g")
    .attr("class", "deathsChart")
    .attr("transform", "translate(" + 100 + "," + 100 + ")");
  filtered_data = data.filter(function (d) {
    return d[2] == current.text();
  });
  var minDate = filtered_data[0][3],
  maxDate = filtered_data[filtered_data.length - 1][3];
  let xScale = d3.scaleTime().range([0, width]).domain([minDate, maxDate]);
  let xAxis = d3.axisBottom(xScale).tickFormat(d3.timeFormat("%Y-%m-%d"));

  //Radio Button
  var radios = document.getElementsByName("chartSelection");
  if (radios[0].checked) {
    d3.selectAll(".point").remove();
    d3.selectAll(".line").remove();
    draw_new_cases();
    draw_new_deaths();
  } else if(radios[1].checkt) {
    d3.selectAll(".point").remove();
    d3.selectAll(".line").remove();
    d3.selectAll(".bar").remove();
    draw_total_cases();
    draw_total_deaths();
  }

  //Change of charts after zooming
  function zoom(beginDate, endDate) {

    xScale.domain([beginDate, endDate]);

    var t1 = cases.transition().duration(500);
    var t2 = deaths.transition().duration(500);
    var size = endDate.getTime() - beginDate.getTime();
    var step = size / 10;
    var ticks = [];
    for (var i = 0; i <= 10; i++) {
      var tick = new Date(beginDate.getTime() + step * i);
      ticks.push(tick);
    }

    xAxis.tickValues(ticks).tickFormat(d3.timeFormat("%Y-%m-%d"));
    draw_new_cases();
    draw_new_deaths();

  }
  //Slider for changing the domain of the x-axis
  $(function() {
        $( "#slider-range" ).slider({
            range: true,
            min: 0,
            max: filtered_data.length,
            values: [0, filtered_data.length],
            slide: function(event, ui ) {
              var beginDate = new Date(minDate.getTime()+d3.min([ui.values[0], filtered_data.length])* 86400000);
              var endDate = new Date(minDate.getTime()+d3.max([ui.values[1], 0])*86400000);

              zoom(beginDate, endDate);
            }
        });
    });
  
  draw_new_cases();
  draw_new_deaths();
  

  function draw_total_cases() {
   
    let yScale = d3
      .scaleLinear()
      .range([height1, 0])
      .domain([
        0, 
        d3.max(filtered_data, function (d) {
          return d[4];
        }),
      ]);
    let yAxis = d3.axisLeft(yScale).ticks(5);

    cases
      .append("text")
      .attr("class", "y-label")
      .attr("text-anchor", "end")
      .attr("y", 6)
      .attr("dy", ".75em")
      .attr("transform", "rotate(-90)")
      .text("count");

    function make_y_grid() {
      return d3.axisLeft(yScale).ticks(5);
    }
    cases
      .attr("class", "grid")
      .style("color", "lightgrey")
      .call(make_y_grid().tickSize(-width, 0, 0).tickFormat(""));
    cases
      .append("g")
      .attr("transform", "translate(0, " + height1 + ")")
      .attr("class", "x-axis")
      .style("color", "darkred")
      .call(xAxis)
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-0.8em")
      .attr("dy", ".015em")
      .attr("transform", "rotate(-65)");
    cases
      .append("g")
      .attr("class", "y-axis")
      .style("color", "darkred")
      .call(yAxis);

    cases
      .selectAll(".point")
      .data(filtered_data)
      .enter()
      .append("circle")
      .attr("class", "point")
      .attr("r", "2")
      .attr("fill", "lightcoral")
      .attr("stroke", "darkred")
      .attr("stroke-width", 0.5)
      .attr("cx", function (d) {
        return xScale(d[3]);
      })
      .attr("cy", function (d) {
        return yScale(d[4]);
      });

    var valueline = d3
      .line()
      .x(function (d) {
        return xScale(d[3]);
      })
      .y(function (d) {
        return yScale(d[4]);
      });

    cases
      .append("path")
      .data([filtered_data])
      .attr("class", "line")
      .attr("d", valueline);
  }

  function draw_new_cases() {
    
    let yScale = d3
      .scaleLinear()
      .range([height1, 0])
      .domain([
        0,
        d3.max(filtered_data, function (d) {
          return d[5];
        }),
      ]);
    let yAxis = d3.axisLeft(yScale).ticks(5);
    function make_y_grid() {
      return d3.axisLeft(yScale).ticks(5);
    }
    cases
      .attr("class", "grid")
      .style("color", "lightgrey")
      .call(make_y_grid().tickSize(-width, 0, 0).tickFormat(""));
    cases
      .append("g")
      .attr("transform", "translate(0, " + height1 + ")")
      .attr("class", "x-axis")
      .style("color", "darkred")
      .call(xAxis)
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-0.8em")
      .attr("dy", ".015em")
      .attr("transform", "rotate(-65)");
    cases
      .append("g")
      .attr("class", "y-axis")
      .style("color", "darkred")
      .call(yAxis);
    cases
      .append("g")
      .attr("transform", `translate(${40}, ${-5})`)
      .append("text")
      .style("text-anchor", "middle")
      .attr("x", -10)
      .attr("y", 0)
      .text("count");
    cases
      .selectAll(".bar")
      .data(filtered_data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", function (d) {
        return xScale(d[3]);
      })
      .attr("y", function (d) {
        return yScale(d[5]);
      })
      .attr("width", width / filtered_data.length)
      .attr("height", (d) => {
        return height1 - yScale(d[5]);
      })
      .style("fill", "steelblue")
      .style("stroke", "black")
      .style("stroke-width", 0.5)
      .on("mouseover", function (event, d) {
        d3.select(this).transition().style("fill", "red");
      })
      .on("mouseout", function (d) {
        d3.select(this).transition().style("fill", "steelblue");
      });

    cases
      .selectAll(".point")
      .data(filtered_data)
      .enter()
      .append("circle")
      .attr("r", "2")
      .attr("class", "point")
      .attr("fill", "lightcoral")
      .attr("stroke", "darkred")
      .attr("stroke-width", 0.5)
      .attr("cx", function (d) {
        return xScale(d[3]);
      })
      .attr("cy", function (d) {
        return yScale(d[6]);
      });

    var valueline = d3
      .line()
      .x(function (d) {
        return xScale(d[3]);
      })
      .y(function (d) {
        return yScale(d[6]);
      });

    cases
      .append("path")
      .data([filtered_data])
      .attr("class", "line")
      .attr("d", valueline);
  }

  function draw_total_deaths() {

    let yScale = d3
      .scaleLinear()
      .range([height, height2])
      .domain([
        0,
        d3.max(filtered_data, function (d) {
          return d[7];
        }),
      ]);
    let yAxis = d3.axisLeft(yScale).ticks(5);

    deaths
      .append("text")
      .attr("class", "y-label")
      .attr("text-anchor", "end")
      .attr("x", height2)
      .attr("y", 6)
      .attr("dy", ".75em")
      .attr("transform", "rotate(-90)")
      .text("count");

    function make_y_grid() {
      return d3.axisLeft(yScale).ticks(5);
    }
    deaths
      .attr("class", "grid")
      .style("color", "lightgrey")
      .call(make_y_grid().tickSize(-width, 0, 0).tickFormat(""));
    deaths
      .append("g")
      .attr("transform", "translate(0, " + height + ")")
      .attr("class", "x-axis")
      .style("color", "darkred")
      .call(xAxis)
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-0.8em")
      .attr("dy", ".015em")
      .attr("transform", "rotate(-65)");
    deaths
      .append("g")
      .attr("class", "y-axis")
      .style("color", "darkred")
      .call(yAxis);

    deaths
      .selectAll(".point")
      .data(filtered_data)
      .enter()
      .append("circle")
      .attr("class", "point")
      .attr("r", "2")
      .attr("fill", "lightcoral")
      .attr("stroke", "darkred")
      .attr("stroke-width", 0.5)
      .attr("cx", function (d) {
        return xScale(d[3]);
      })
      .attr("cy", function (d) {
        return yScale(d[7]);
      });

    var valueline = d3
      .line()
      .x(function (d) {
        return xScale(d[3]);
      })
      .y(function (d) {
        return yScale(d[7]);
      });

    deaths
      .append("path")
      .data([filtered_data])
      .attr("class", "line")
      .attr("d", valueline);
  }

  function draw_new_deaths() {
    
    let yScale = d3
      .scaleLinear()
      .range([height, height2])
      .domain([
        0,
        d3.max(filtered_data, function (d) {
          return d[8];
        }),
      ]);
    let yAxis = d3.axisLeft(yScale).ticks(5);
    function make_y_grid() {
      return d3.axisLeft(yScale).ticks(5);
    }
    deaths
      .attr("class", "grid")
      .style("color", "lightgrey")
      .call(make_y_grid().tickSize(-width, 0, 0).tickFormat(""));
    deaths
      .append("g")
      .attr("transform", "translate(0, " + height + ")")
      .attr("class", "x-axis")
      .style("color", "darkred")
      .call(xAxis)
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-0.8em")
      .attr("dy", ".015em")
      .attr("transform", "rotate(-65)");
    deaths
      .append("g")
      .attr("class", "y-axis")
      .style("color", "darkred")
      .call(yAxis);
    deaths
      .append("g")
      .attr("transform", `translate(${40}, ${-5})`)
      .append("text")
      .style("text-anchor", "middle")
      .attr("x", -10)
      .attr("y", 0)
      .text("count");
    deaths
      .selectAll(".bar")
      .data(filtered_data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", function (d) {
        return xScale(d[3]);
      })
      .attr("y", function (d) {
        return yScale(d[8]);
      })
      .attr("width", width / filtered_data.length)
      .attr("height", (d) => {
        return height - yScale(d[8]);
      })
      .style("fill", "steelblue")
      .style("stroke", "black")
      .style("stroke-width", 0.5)
      .on("mouseover", function (event, d) {
        d3.select(this).transition().style("fill", "red");
      })
      .on("mouseout", function (d) {
        d3.select(this).transition().style("fill", "steelblue");
      });

    deaths
      .selectAll(".point")
      .data(filtered_data)
      .enter()
      .append("circle")
      .attr("r", "2")
      .attr("class", "point")
      .attr("fill", "lightcoral")
      .attr("stroke", "darkred")
      .attr("stroke-width", 0.5)
      .attr("cx", function (d) {
        return xScale(d[3]);
      })
      .attr("cy", function (d) {
        return yScale(d[9]);
      });

    var valueline = d3
      .line()
      .x(function (d) {
        return xScale(d[3]);
      })
      .y(function (d) {
        return yScale(d[9]);
      });

    deaths
      .append("path")
      .data([filtered_data])
      .attr("class", "line")
      .attr("d", valueline);
  }
}

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}
