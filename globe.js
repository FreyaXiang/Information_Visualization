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
var data, data2;
$.ajax({
  type: "GET",
  url: "https://covid.ourworldindata.org/data/owid-covid-data.csv",
  dataType: "text",
  success: function (response) {
    data = $.csv.toArrays(response);
    data2 = $.csv.toObjects(response);
    drawBrush1(data2, "World");
    drawBrush2(data2, "World");
    // total cases and color scale
    var totalCasesCountries = {};
    data.forEach((col) => {
      totalCasesCountries[id[col[2]]] = +col[4];
    });
    delete totalCasesCountries[-100];
    delete totalCasesCountries[-101];
    delete totalCasesCountries[-102];
    start(totalCasesCountries, data, data2); // data is arrray, data2 is object
    // console.log(totalCasesCountries);
    // drawCharts(data);
  },
});

function start(totalCasesCountries, data, data2) {
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
  var colorGraticule = "#d0040b";
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
    div.transition().duration(200).style("opacity", 0);
    document.getElementById("brush1").innerHTML = "";
    document.getElementById("brush2").innerHTML = "";
    drawBrush1(data2, "World");
    drawBrush2(data2, "World");
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
    width = document.documentElement.clientWidth * 0.8;
    height = document.documentElement.clientHeight * 0.8;
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
    currentData = data.filter(function (d) {
      return d[2] == getKeyByValue(id, +currentCountry.id);
    });
    console.log(currentData[0]);
    div.transition().duration(200).style("opacity", 1.0);
    div
      .html(
        "<h3 style='margin:10px auto; opacity:1'><u>" +
          currentData[0][2] +
          "</u></h3><br/>" +
          "<h5><b>Population</b><br/>" +
          currentData[0][35] +
          "</h5>" +
          "<h5><b>GDP</b><br>" +
          currentData[0][40] +
          "</h5>"
      )
      .style("left", d3.event.pageX + "px")
      .style("top", d3.event.pageY - 28 + "px");
    stopRotation();
    render();
    enter(c);
    document.getElementById("brush1").innerHTML = "";
    document.getElementById("brush2").innerHTML = "";
    drawBrush1(data2, getKeyByValue(id, +currentCountry.id));
    drawBrush2(data2, getKeyByValue(id, +currentCountry.id));
    console.log(getKeyByValue(id, +currentCountry.id));
    // cases.selectAll("*").remove();
    // deaths.selectAll("*").remove();
    draw_charts(getKeyByValue(id, +currentCountry.id));
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
  var formatTime = d3.timeFormat("%B %d, %Y");
  data.forEach((d) => {
    d[3] = parseDate(d[3]);
    d[4] = parseInt(d[4]) || 0;
    d[5] = parseInt(d[5]) || 0;
    d[6] = parseFloat(d[6]) || 0;
    d[7] = parseInt(d[7]) || 0;
    d[8] = parseInt(d[8]) || 0;
    d[9] = parseFloat(d[9]) || 0;
    d[35] = parseInt(d[35]) || 0;
    d[40] = parseFloat(d[40]) || 0;
  });

  var div = d3
    .select("body")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);
  var svg = d3.select("#barChart");
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

  var filtered_data = data.filter(function (d) {
    return d[2] == "World";
  });

  var minDate = filtered_data[0][3],
    maxDate = filtered_data[filtered_data.length - 1][3];

  draw_charts("World");

  function draw_charts(country) {
    filtered_data = data.filter(function (d) {
      return d[2] == country;
    });
    (minDate = filtered_data[0][3]),
      (maxDate = filtered_data[filtered_data.length - 1][3]);
    if (this.value == "New") {
      cases.selectAll("*").remove();
      deaths.selectAll("*").remove();
      draw_new_cases();
      draw_new_deaths();
    } else if (this.value == "Cumulative") {
      cases.selectAll("*").remove();
      deaths.selectAll("*").remove();
      draw_total_cases();
      draw_total_deaths();
    } else {
      cases.selectAll("*").remove();
      deaths.selectAll("*").remove();
      draw_new_cases();
      draw_new_deaths();
    }

    //Radio Button
    d3.selectAll("input[name='chartSelection']").on("change", function () {
      if (this.value == "New") {
        cases.selectAll("*").remove();
        deaths.selectAll("*").remove();
        d3.select("#bre");
        draw_new_cases();
        draw_new_deaths();
        document.getElementById("brush1").innerHTML = "";
        document.getElementById("brush2").innerHTML = "";
        console.log(id);
        drawBrush3(
          data2,
          currentCountry ? getKeyByValue(id, +currentCountry.id) : "World"
        );
        drawBrush4(
          data2,
          currentCountry ? getKeyByValue(id, +currentCountry.id) : "World"
        );
      } else {
        cases.selectAll("*").remove();
        deaths.selectAll("*").remove();
        draw_total_cases();
        draw_total_deaths();
        document.getElementById("brush1").innerHTML = "";
        document.getElementById("brush2").innerHTML = "";
        drawBrush1(
          data2,
          currentCountry ? getKeyByValue(id, +currentCountry.id) : "World"
        );
        drawBrush2(
          data2,
          currentCountry ? getKeyByValue(id, +currentCountry.id) : "World"
        );
      }
    });
  }

  function draw_total_cases() {
    let xScale = d3.scaleTime().range([0, width]).domain([minDate, maxDate]);
    let xAxis_case = d3
      .axisBottom(xScale)
      .tickFormat(d3.timeFormat("%Y-%m-%d"));
    let yScale_total_case = d3
      .scaleLinear()
      .range([height1, 0])
      .domain([
        0,
        d3.max(filtered_data, function (d) {
          return d[4];
        }),
      ]);
    let yAxis_total_case = d3
      .axisLeft(yScale_total_case)
      .ticks(5)
      .tickSize(-width);
    cases
      .append("text")
      .attr("class", "y-label")
      .attr("transform", `translate(${40}, ${-5})`)
      .attr("text-anchor", "end")
      .attr("y", -80)
      .attr("dy", ".75em")
      .attr("transform", "rotate(-90)")
      .attr("font-size", "1 em")
      .text("Number of Total Cases");

    cases
      .append("g")
      .attr("transform", "translate(0, " + height1 + ")")
      .attr("class", "x-axis-case")
      .style("color", "white")
      .call(xAxis_case)
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-0.8em")
      .attr("dy", ".015em")
      .attr("transform", "rotate(-65)");

    cases
      .append("g")
      .attr("class", "y-axis")
      .style("color", "white")
      .call(yAxis_total_case);

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
        return yScale_total_case(d[4]);
      })
      .on("mouseover", function (d) {
        let date = d[3];
        div.transition().duration(200).style("opacity", 0.8);
        div
          .html("Date: " + formatTime(d[3]) + "<br/>" + "Total Cases: " + d[4])
          .style("left", d3.event.pageX + "px")
          .style("top", d3.event.pageY - 28 + "px");
        d3.select(this).transition().style("fill", "black");
        deaths.selectAll("point").each(function (d) {
          if (d[3] == date) d3.select(this).transition().style("fill", "black");
        });
      })
      .on("mouseout", function (d) {
        d3.select(this).transition().style("fill", "lightpink");
        div.transition().duration(200).style("opacity", 0);
        deaths.selectAll("point").each(function (d) {
          d3.select(this).transition().style("fill", "lightpink");
        });
      });

    var valueline = d3
      .line()
      .x(function (d) {
        return xScale(d[3]);
      })
      .y(function (d) {
        return yScale_total_case(d[4]);
      });

    cases
      .append("path")
      .data([filtered_data])
      .attr("class", "line")
      .attr("d", valueline);
  }

  function draw_new_cases() {
    let xScale = d3.scaleTime().range([0, width]).domain([minDate, maxDate]);
    let xAxis_case = d3
      .axisBottom(xScale)
      .tickFormat(d3.timeFormat("%Y-%m-%d"));
    let yScale_new_case = d3
      .scaleLinear()
      .range([height1, 0])
      .domain([
        0,
        d3.max(filtered_data, function (d) {
          return d[5];
        }),
      ]);
    let yAxis_new_case = d3.axisLeft(yScale_new_case).ticks(5).tickSize(-width);
    cases
      .append("text")
      .attr("class", "y-label")
      .attr("transform", `translate(${40}, ${-5})`)
      .attr("text-anchor", "end")
      .attr("y", -80)
      .attr("dy", ".75em")
      .attr("transform", "rotate(-90)")
      .attr("font-size", "0.5 em")
      .text("Number of New Cases");

    cases
      .append("g")
      .attr("transform", "translate(0, " + height1 + ")")
      .attr("class", "x-axis-case")
      .style("color", "white")
      .call(xAxis_case)
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-0.8em")
      .attr("dy", ".015em")
      .attr("transform", "rotate(-65)");

    cases
      .append("g")
      .attr("class", "y-axis")
      .style("color", "white")
      .call(yAxis_new_case);

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
        return yScale_new_case(d[5]);
      })
      .attr("width", width / filtered_data.length)
      .attr("height", (d) => {
        return height1 - yScale_new_case(d[5]);
      })
      .style("fill", "brown")
      .style("stroke", "black")
      .style("stroke-width", 0.5)
      .on("mouseover", function (d) {
        let date = d[3];
        div.transition().duration(200).style("opacity", 0.8);
        div
          .html("Date: " + formatTime(d[3]) + "<br/>" + "New Cases: " + d[5])
          .style("left", d3.event.pageX + "px")
          .style("top", d3.event.pageY - 28 + "px");
        d3.select(this).transition().style("fill", "salmon");
        deaths.selectAll("rect").each(function (d) {
          if (d[3] == date)
            d3.select(this).transition().style("fill", "salmon");
        });
      })
      .on("mouseout", function (d) {
        d3.select(this).transition().style("fill", "brown");
        div.transition().duration(200).style("opacity", 0);
        deaths.selectAll("rect").each(function (d) {
          d3.select(this).transition().style("fill", "brown");
        });
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
        return yScale_new_case(d[6]);
      });

    var valueline = d3
      .line()
      .x(function (d) {
        return xScale(d[3]);
      })
      .y(function (d) {
        return yScale_new_case(d[6]);
      });

    cases
      .append("path")
      .data([filtered_data])
      .attr("class", "line")
      .attr("d", valueline);
  }

  function draw_total_deaths() {
    let xScale = d3.scaleTime().range([0, width]).domain([minDate, maxDate]);
    let xAxis_death = d3
      .axisBottom(xScale)
      .tickFormat(d3.timeFormat("%Y-%m-%d"));
    let yScale_total_death = d3
      .scaleLinear()
      .range([height, height2])
      .domain([
        0,
        d3.max(filtered_data, function (d) {
          return d[7];
        }),
      ]);
    let yAxis_total_death = d3
      .axisLeft(yScale_total_death)
      .ticks(5)
      .tickSize(-width);
    deaths
      .append("g")
      .attr("transform", "translate(0, " + height + ")")
      .attr("class", "x-axis-death")
      .style("color", "white")
      .call(xAxis_death)
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-0.8em")
      .attr("dy", ".015em")
      .attr("transform", "rotate(-65)");
    deaths
      .append("text")
      .attr("class", "y-label")
      .attr("transform", `translate(${40}, ${-5})`)
      .attr("text-anchor", "end")
      .attr("y", -80)
      .attr("x", -height2 + 50)
      .attr("dy", ".75em")
      .attr("transform", "rotate(-90)")
      .attr("font-size", "1 em")
      .text("Number of Total Deaths");
    deaths
      .append("g")
      .attr("class", "y-axis")
      .style("color", "white")
      .call(yAxis_total_death);

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
        return yScale_total_death(d[7]);
      })
      .on("mouseover", function (d) {
        let date = d[3];
        div.transition().duration(200).style("opacity", 0.8);
        div
          .html("Date: " + formatTime(d[3]) + "<br/>" + "Total Deaths: " + d[7])
          .style("left", d3.event.pageX + "px")
          .style("top", d3.event.pageY - 28 + "px");
        d3.select(this).transition().style("fill", "black");
        cases.selectAll("point").each(function (d) {
          if (d[3] == date) d3.select(this).transition().style("fill", "black");
        });
      })
      .on("mouseout", function (d) {
        d3.select(this).transition().style("fill", "lightpink");
        div.transition().duration(200).style("opacity", 0);
        cases.selectAll("point").each(function (d) {
          d3.select(this).transition().style("fill", "lightpink");
        });
      });

    var valueline = d3
      .line()
      .x(function (d) {
        return xScale(d[3]);
      })
      .y(function (d) {
        return yScale_total_death(d[7]);
      });

    deaths
      .append("path")
      .data([filtered_data])
      .attr("class", "line")
      .attr("d", valueline);
  }

  function draw_new_deaths() {
    let xScale = d3.scaleTime().range([0, width]).domain([minDate, maxDate]);
    let xAxis_death = d3
      .axisBottom(xScale)
      .tickFormat(d3.timeFormat("%Y-%m-%d"));
    let yScale_new_death = d3
      .scaleLinear()
      .range([height, height2])
      .domain([
        0,
        d3.max(filtered_data, function (d) {
          return d[8];
        }),
      ]);
    let yAxis_new_death = d3
      .axisLeft(yScale_new_death)
      .ticks(5)
      .tickSize(-width);
    deaths
      .append("g")
      .attr("transform", "translate(0, " + height + ")")
      .attr("class", "x-axis-death")
      .style("color", "white")
      .call(xAxis_death)
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-0.8em")
      .attr("dy", ".015em")
      .attr("transform", "rotate(-65)");
    deaths
      .append("text")
      .attr("class", "y-label")
      .attr("transform", `translate(${40}, ${-5})`)
      .attr("text-anchor", "end")
      .attr("y", -80)
      .attr("x", -height2)
      .attr("dy", ".75em")
      .attr("transform", "rotate(-90)")
      .attr("font-size", "1 em")
      .text("Number of New Deaths");
    deaths
      .append("g")
      .attr("class", "y-axis")
      .style("color", "white")
      .call(yAxis_new_death);

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
        return yScale_new_death(d[8]);
      })
      .attr("width", width / filtered_data.length)
      .attr("height", (d) => {
        return height - yScale_new_death(d[8]);
      })
      .style("fill", "brown")
      .style("stroke", "black")
      .style("stroke-width", 0.5)
      .on("mouseover", function (d) {
        let date = d[3];
        div.transition().duration(200).style("opacity", 0.8);
        div
          .html("Date: " + formatTime(d[3]) + "<br/>" + "New Deaths: " + d[8])
          .style("left", d3.event.pageX + "px")
          .style("top", d3.event.pageY - 28 + "px");
        d3.select(this).transition().style("fill", "salmon");
        cases.selectAll("rect").each(function (d) {
          if (d[3] == date)
            d3.select(this).transition().style("fill", "salmon");
        });
      })
      .on("mouseout", function (d) {
        d3.select(this).transition().style("fill", "brown");
        div.transition().duration(200).style("opacity", 0);
        cases.selectAll("rect").each(function (d) {
          d3.select(this).transition().style("fill", "brown");
        });
      });

    deaths
      .selectAll(".point")
      .data(filtered_data)
      .enter()
      .append("circle")
      .attr("r", "2")
      .attr("class", "point")
      .attr("fill", "lightpink")
      .attr("stroke", "darkred")
      .attr("stroke-width", 0.5)
      .attr("cx", function (d) {
        return xScale(d[3]);
      })
      .attr("cy", function (d) {
        return yScale_new_death(d[9]);
      })
      .on("mouseover", function (d) {
        let date = d[3];
        div.transition().duration(200).style("opacity", 0.8);
        div
          .html(
            "Date: " +
              formatTime(d[3]) +
              "<br/>" +
              "Deaths 7-day Average: " +
              d[9]
          )
          .style("left", d3.event.pageX + "px")
          .style("top", d3.event.pageY - 28 + "px");
        d3.select(this).transition().style("fill", "black");
        cases.selectAll("point").each(function (d) {
          if (d[3] == date) d3.select(this).transition().style("fill", "black");
        });
      })
      .on("mouseout", function (d) {
        d3.select(this).transition().style("fill", "lightpink");
        div.transition().duration(200).style("opacity", 0);
        cases.selectAll("point").each(function (d) {
          d3.select(this).transition().style("fill", "lightpink");
        });
      });

    var valueline = d3
      .line()
      .x(function (d) {
        return xScale(d[3]);
      })
      .y(function (d) {
        return yScale_new_death(d[9]);
      });

    deaths
      .append("path")
      .data([filtered_data])
      .attr("class", "line")
      .attr("d", valueline);
  }
  ///////////////////////////////////////////////////

  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }
}

////////////////////////////////////////////

/////////////////////////////////////////////

function drawBrush1(dataUnhandled, country) {
  var data = dataUnhandled.filter((c) => c.location === country);
  var svg = d3.select("#brush1"),
    margin = { top: 20, right: 20, bottom: 110, left: 50 },
    margin2 = { top: 280, right: 20, bottom: 30, left: 50 },
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
    height2 = +svg.attr("height") - margin2.top - margin2.bottom;

  var parseDate = d3.timeParse("%Y-%m-%d");

  var x = d3.scaleTime().range([0, width]),
    x2 = d3.scaleTime().range([0, width]),
    y = d3.scaleLinear().range([height, 0]),
    y2 = d3.scaleLinear().range([height2, 0]);

  var xAxis = d3.axisBottom(x),
    xAxis2 = d3.axisBottom(x2),
    yAxis = d3.axisLeft(y);

  var brush = d3
    .brushX()
    .extent([
      [0, 0],
      [width, height2],
    ])
    .on("brush end", brushed);

  var zoom = d3
    .zoom()
    .scaleExtent([1, Infinity])
    .translateExtent([
      [0, 0],
      [width, height],
    ])
    .extent([
      [0, 0],
      [width, height],
    ])
    .on("zoom", zoomed);

  var area = d3
    .area()
    .curve(d3.curveMonotoneX)
    .x(function (d) {
      return x(parseDate(d.date));
    })
    .y0(height)
    .y1(function (d) {
      return y(+d.total_cases_per_million);
    });

  var area2 = d3
    .area()
    .curve(d3.curveMonotoneX)
    .x(function (d) {
      return x2(parseDate(d.date));
    })
    .y0(height2)
    .y1(function (d) {
      return y2(+d.total_cases_per_million);
    });

  svg
    .append("defs")
    .append("clipPath")
    .attr("id", "clip")
    .append("rect")
    .attr("width", width)
    .attr("height", height);

  var focus = svg
    .append("g")
    .attr("class", "focus")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var context = svg
    .append("g")
    .attr("class", "context")
    .attr("transform", "translate(" + margin2.left + "," + margin2.top + ")");

  x.domain(
    d3.extent(data, function (d) {
      return parseDate(d.date);
    })
  );
  y.domain([
    0,
    d3.max(data, function (d) {
      return +d.total_cases_per_million;
    }),
  ]);
  x2.domain(x.domain());
  y2.domain(y.domain());

  focus.append("path").datum(data).attr("class", "area").attr("d", area);

  focus
    .append("g")
    .attr("class", "axis axis--x")
    .attr("style", "color: white")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

  focus
    .append("g")
    .attr("class", "axis axis--y")
    .attr("style", "color: white")
    .call(yAxis);

  context.append("path").datum(data).attr("class", "area").attr("d", area2);

  context
    .append("g")
    .attr("class", "axis axis--x")
    .attr("transform", "translate(0," + height2 + ")")
    .attr("style", "color: white")
    .call(xAxis2);

  context
    .append("g")
    .attr("class", "brush")
    .call(brush)
    .call(brush.move, x.range());

  svg
    .append("rect")
    .attr("class", "zoom")
    .attr("width", width)
    .attr("height", height)
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    .call(zoom);

  svg
    .append("text")
    .attr("class", "y-label")
    .attr("x", 0)
    .attr("y", 80)
    .attr("style", "color: white")
    .attr("transform", "rotate(-90)")
    .attr("text-anchor", "end")
    .text("Total Cases Per Million");

  function brushed() {
    if (d3.event.sourceEvent && d3.event.sourceEvent.type === "zoom") return; // ignore brush-by-zoom
    var s = d3.event.selection || x2.range();
    x.domain(s.map(x2.invert, x2));
    focus.select(".area").attr("d", area);
    focus.select(".axis--x").call(xAxis);
    svg
      .select(".zoom")
      .call(
        zoom.transform,
        d3.zoomIdentity.scale(width / (s[1] - s[0])).translate(-s[0], 0)
      );

    var svg2 = d3.select("#brush2");
    svg2
      .select(".zoom")
      .call(
        zoom.transform,
        d3.zoomIdentity.scale(width / (s[1] - s[0])).translate(-s[0], 0)
      );
  }

  function zoomed() {
    if (d3.event.sourceEvent && d3.event.sourceEvent.type === "brush") return; // ignore zoom-by-brush
    var t = d3.event.transform;
    x.domain(t.rescaleX(x2).domain());
    focus.select(".area").attr("d", area);
    focus.select(".axis--x").call(xAxis);
    context.select(".brush").call(brush.move, x.range().map(t.invertX, t));
  }
}

function drawBrush2(dataUnhandled, country) {
  var data = dataUnhandled.filter((c) => c.location === country);
  var svg = d3.select("#brush2"),
    margin = { top: 20, right: 20, bottom: 110, left: 50 },
    margin2 = { top: 280, right: 20, bottom: 30, left: 50 },
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
    height2 = +svg.attr("height") - margin2.top - margin2.bottom;

  var parseDate = d3.timeParse("%Y-%m-%d");

  var x = d3.scaleTime().range([0, width]),
    x2 = d3.scaleTime().range([0, width]),
    y = d3.scaleLinear().range([height, 0]),
    y2 = d3.scaleLinear().range([height2, 0]);

  var xAxis = d3.axisBottom(x),
    xAxis2 = d3.axisBottom(x2),
    yAxis = d3.axisLeft(y);

  var brush = d3
    .brushX()
    .extent([
      [0, 0],
      [width, height2],
    ])
    .on("brush end", brushed);

  var zoom = d3
    .zoom()
    .scaleExtent([1, Infinity])
    .translateExtent([
      [0, 0],
      [width, height],
    ])
    .extent([
      [0, 0],
      [width, height],
    ])
    .on("zoom", zoomed);

  var area = d3
    .area()
    .curve(d3.curveMonotoneX)
    .x(function (d) {
      return x(parseDate(d.date));
    })
    .y0(height)
    .y1(function (d) {
      return y(+d.total_deaths_per_million);
    });

  var area2 = d3
    .area()
    .curve(d3.curveMonotoneX)
    .x(function (d) {
      return x2(parseDate(d.date));
    })
    .y0(height2)
    .y1(function (d) {
      return y2(+d.total_deaths_per_million);
    });

  svg
    .append("defs")
    .append("clipPath")
    .attr("id", "clip")
    .append("rect")
    .attr("width", width)
    .attr("height", height);

  var focus = svg
    .append("g")
    .attr("class", "focus")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var context = svg
    .append("g")
    .attr("class", "context")
    .attr("transform", "translate(" + margin2.left + "," + margin2.top + ")");

  x.domain(
    d3.extent(data, function (d) {
      return parseDate(d.date);
    })
  );
  y.domain([
    0,
    d3.max(data, function (d) {
      return +d.total_deaths_per_million;
    }),
  ]);
  x2.domain(x.domain());
  y2.domain(y.domain());

  focus.append("path").datum(data).attr("class", "area").attr("d", area);

  focus
    .append("g")
    .attr("class", "axis axis--x")
    .attr("transform", "translate(0," + height + ")")
    .attr("style", "color: white")
    .call(xAxis);

  focus
    .append("g")
    .attr("class", "axis axis--y")
    .attr("style", "color: white")
    .call(yAxis);

  context.append("path").datum(data).attr("class", "area").attr("d", area2);

  context
    .append("g")
    .attr("class", "axis axis--x")
    .attr("transform", "translate(0," + height2 + ")")
    .attr("style", "color: white")
    .call(xAxis2);

  context
    .append("g")
    .attr("class", "brush")
    .call(brush)
    .call(brush.move, x.range());

  svg
    .append("rect")
    .attr("class", "zoom")
    .attr("width", width)
    .attr("height", height)
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    .call(zoom);

  svg
    .append("text")
    .style("color", "white")
    .attr("class", "y-label")
    .attr("x", 0)
    .attr("y", 80)
    .attr("transform", "rotate(-90)")
    .attr("text-anchor", "end")
    .text("Total Deaths Per Million");

  function brushed() {
    if (d3.event.sourceEvent && d3.event.sourceEvent.type === "zoom") return; // ignore brush-by-zoom
    var s = d3.event.selection || x2.range();
    x.domain(s.map(x2.invert, x2));
    focus.select(".area").attr("d", area);
    focus.select(".axis--x").call(xAxis);
    svg
      .select(".zoom")
      .call(
        zoom.transform,
        d3.zoomIdentity.scale(width / (s[1] - s[0])).translate(-s[0], 0)
      );
    var svg2 = d3.select("#brush1");
    svg2
      .select(".zoom")
      .call(
        zoom.transform,
        d3.zoomIdentity.scale(width / (s[1] - s[0])).translate(-s[0], 0)
      );
  }

  function zoomed() {
    if (d3.event.sourceEvent && d3.event.sourceEvent.type === "brush") return; // ignore zoom-by-brush
    var t = d3.event.transform;
    x.domain(t.rescaleX(x2).domain());
    focus.select(".area").attr("d", area);
    focus.select(".axis--x").call(xAxis);
    context.select(".brush").call(brush.move, x.range().map(t.invertX, t));
  }
}

function drawBrush3(dataUnhandled, country) {
  var data = dataUnhandled.filter((c) => c.location === country);
  var svg = d3.select("#brush1"),
    margin = { top: 20, right: 20, bottom: 110, left: 50 },
    margin2 = { top: 280, right: 20, bottom: 30, left: 50 },
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
    height2 = +svg.attr("height") - margin2.top - margin2.bottom;

  var parseDate = d3.timeParse("%Y-%m-%d");

  var x = d3.scaleTime().range([0, width]),
    x2 = d3.scaleTime().range([0, width]),
    y = d3.scaleLinear().range([height, 0]),
    y2 = d3.scaleLinear().range([height2, 0]);

  var xAxis = d3.axisBottom(x),
    xAxis2 = d3.axisBottom(x2),
    yAxis = d3.axisLeft(y);

  var brush = d3
    .brushX()
    .extent([
      [0, 0],
      [width, height2],
    ])
    .on("brush end", brushed);

  var zoom = d3
    .zoom()
    .scaleExtent([1, Infinity])
    .translateExtent([
      [0, 0],
      [width, height],
    ])
    .extent([
      [0, 0],
      [width, height],
    ])
    .on("zoom", zoomed);

  var area = d3
    .area()
    .curve(d3.curveMonotoneX)
    .x(function (d) {
      return x(parseDate(d.date));
    })
    .y0(height)
    .y1(function (d) {
      return y(+d.new_cases_per_million);
    });

  var area2 = d3
    .area()
    .curve(d3.curveMonotoneX)
    .x(function (d) {
      return x2(parseDate(d.date));
    })
    .y0(height2)
    .y1(function (d) {
      return y2(+d.new_cases_per_million);
    });

  svg
    .append("defs")
    .append("clipPath")
    .attr("id", "clip")
    .append("rect")
    .attr("width", width)
    .attr("height", height);

  var focus = svg
    .append("g")
    .attr("class", "focus")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var context = svg
    .append("g")
    .attr("class", "context")
    .attr("transform", "translate(" + margin2.left + "," + margin2.top + ")");

  x.domain(
    d3.extent(data, function (d) {
      return parseDate(d.date);
    })
  );
  y.domain([
    0,
    d3.max(data, function (d) {
      return +d.new_cases_per_million;
    }),
  ]);
  x2.domain(x.domain());
  y2.domain(y.domain());

  focus.append("path").datum(data).attr("class", "area").attr("d", area);

  focus
    .append("g")
    .attr("class", "axis axis--x")
    .attr("style", "color: white")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

  focus
    .append("g")
    .attr("class", "axis axis--y")
    .attr("style", "color: white")
    .call(yAxis);

  context.append("path").datum(data).attr("class", "area").attr("d", area2);

  context
    .append("g")
    .attr("class", "axis axis--x")
    .attr("transform", "translate(0," + height2 + ")")
    .attr("style", "color: white")
    .call(xAxis2);

  context
    .append("g")
    .attr("class", "brush")
    .call(brush)
    .call(brush.move, x.range());

  svg
    .append("rect")
    .attr("class", "zoom")
    .attr("width", width)
    .attr("height", height)
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    .call(zoom);

  svg
    .append("text")
    .attr("class", "y-label")
    .attr("x", 0)
    .attr("y", 80)
    .attr("style", "color: white")
    .attr("transform", "rotate(-90)")
    .attr("text-anchor", "end")
    .text("New Cases Per Million");

  function brushed() {
    if (d3.event.sourceEvent && d3.event.sourceEvent.type === "zoom") return; // ignore brush-by-zoom
    var s = d3.event.selection || x2.range();
    x.domain(s.map(x2.invert, x2));
    focus.select(".area").attr("d", area);
    focus.select(".axis--x").call(xAxis);
    svg
      .select(".zoom")
      .call(
        zoom.transform,
        d3.zoomIdentity.scale(width / (s[1] - s[0])).translate(-s[0], 0)
      );

    var svg2 = d3.select("#brush2");
    svg2
      .select(".zoom")
      .call(
        zoom.transform,
        d3.zoomIdentity.scale(width / (s[1] - s[0])).translate(-s[0], 0)
      );
  }

  function zoomed() {
    if (d3.event.sourceEvent && d3.event.sourceEvent.type === "brush") return; // ignore zoom-by-brush
    var t = d3.event.transform;
    x.domain(t.rescaleX(x2).domain());
    focus.select(".area").attr("d", area);
    focus.select(".axis--x").call(xAxis);
    context.select(".brush").call(brush.move, x.range().map(t.invertX, t));
  }
}

function drawBrush4(dataUnhandled, country) {
  var data = dataUnhandled.filter((c) => c.location === country);
  var svg = d3.select("#brush2"),
    margin = { top: 20, right: 20, bottom: 110, left: 50 },
    margin2 = { top: 280, right: 20, bottom: 30, left: 50 },
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
    height2 = +svg.attr("height") - margin2.top - margin2.bottom;

  var parseDate = d3.timeParse("%Y-%m-%d");

  var x = d3.scaleTime().range([0, width]),
    x2 = d3.scaleTime().range([0, width]),
    y = d3.scaleLinear().range([height, 0]),
    y2 = d3.scaleLinear().range([height2, 0]);

  var xAxis = d3.axisBottom(x),
    xAxis2 = d3.axisBottom(x2),
    yAxis = d3.axisLeft(y);

  var brush = d3
    .brushX()
    .extent([
      [0, 0],
      [width, height2],
    ])
    .on("brush end", brushed);

  var zoom = d3
    .zoom()
    .scaleExtent([1, Infinity])
    .translateExtent([
      [0, 0],
      [width, height],
    ])
    .extent([
      [0, 0],
      [width, height],
    ])
    .on("zoom", zoomed);

  var area = d3
    .area()
    .curve(d3.curveMonotoneX)
    .x(function (d) {
      return x(parseDate(d.date));
    })
    .y0(height)
    .y1(function (d) {
      return y(+d.new_deaths_per_million);
    });

  var area2 = d3
    .area()
    .curve(d3.curveMonotoneX)
    .x(function (d) {
      return x2(parseDate(d.date));
    })
    .y0(height2)
    .y1(function (d) {
      return y2(+d.new_deaths_per_million);
    });

  svg
    .append("defs")
    .append("clipPath")
    .attr("id", "clip")
    .append("rect")
    .attr("width", width)
    .attr("height", height);

  var focus = svg
    .append("g")
    .attr("class", "focus")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var context = svg
    .append("g")
    .attr("class", "context")
    .attr("transform", "translate(" + margin2.left + "," + margin2.top + ")");

  x.domain(
    d3.extent(data, function (d) {
      return parseDate(d.date);
    })
  );
  y.domain([
    0,
    d3.max(data, function (d) {
      return +d.new_deaths_per_million;
    }),
  ]);
  x2.domain(x.domain());
  y2.domain(y.domain());

  focus.append("path").datum(data).attr("class", "area").attr("d", area);

  focus
    .append("g")
    .attr("class", "axis axis--x")
    .attr("style", "color: white")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

  focus
    .append("g")
    .attr("class", "axis axis--y")
    .attr("style", "color: white")
    .call(yAxis);

  context.append("path").datum(data).attr("class", "area").attr("d", area2);

  context
    .append("g")
    .attr("class", "axis axis--x")
    .attr("transform", "translate(0," + height2 + ")")
    .attr("style", "color: white")
    .call(xAxis2);

  context
    .append("g")
    .attr("class", "brush")
    .call(brush)
    .call(brush.move, x.range());

  svg
    .append("rect")
    .attr("class", "zoom")
    .attr("width", width)
    .attr("height", height)
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    .call(zoom);

  svg
    .append("text")
    .attr("class", "y-label")
    .attr("x", 0)
    .attr("y", 80)
    .attr("style", "color: white")
    .attr("transform", "rotate(-90)")
    .attr("text-anchor", "end")
    .text("New Deaths Per Million");

  function brushed() {
    if (d3.event.sourceEvent && d3.event.sourceEvent.type === "zoom") return; // ignore brush-by-zoom
    var s = d3.event.selection || x2.range();
    x.domain(s.map(x2.invert, x2));
    focus.select(".area").attr("d", area);
    focus.select(".axis--x").call(xAxis);
    svg
      .select(".zoom")
      .call(
        zoom.transform,
        d3.zoomIdentity.scale(width / (s[1] - s[0])).translate(-s[0], 0)
      );

    var svg2 = d3.select("#brush2");
    svg2
      .select(".zoom")
      .call(
        zoom.transform,
        d3.zoomIdentity.scale(width / (s[1] - s[0])).translate(-s[0], 0)
      );
  }

  function zoomed() {
    if (d3.event.sourceEvent && d3.event.sourceEvent.type === "brush") return; // ignore zoom-by-brush
    var t = d3.event.transform;
    x.domain(t.rescaleX(x2).domain());
    focus.select(".area").attr("d", area);
    focus.select(".axis--x").call(xAxis);
    context.select(".brush").call(brush.move, x.range().map(t.invertX, t));
  }
}
