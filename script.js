const roundsTotal = 5;

const difficultyConfig = {
  easy: {
    label: "Легкий",
    maxRoundPoints: 1000,
    winTarget: 2600,
    participationBonusPerRound: 220,
    maxDistanceKm: 9000,
    offsetMinKm: 0.1,
    offsetMaxKm: 0.6,
    zoom: 4,
    useHardPool: false,
  },
  medium: {
    label: "Средний",
    maxRoundPoints: 1200,
    winTarget: 3800,
    participationBonusPerRound: 280,
    maxDistanceKm: 7000,
    offsetMinKm: 0.2,
    offsetMaxKm: 0.9,
    zoom: 3,
    useHardPool: false,
  },
  hard: {
    label: "Сложный",
    maxRoundPoints: 1500,
    winTarget: 4900,
    participationBonusPerRound: 320,
    maxDistanceKm: 5000,
    offsetMinKm: 0.3,
    offsetMaxKm: 1.2,
    zoom: 3,
    useHardPool: true,
  },
};

/* Координаты — центры/главные улицы; панорама есть только там, где есть Google Street View. */
const russiaLocations = [
  {
    name: "Владивосток, Золотой мост",
    lat: 43.1155,
    lng: 131.8855,
    clue: "",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Golden_Bridge%2C_Vladivostok.jpg/1280px-Golden_Bridge%2C_Vladivostok.jpg",
  },
  {
    name: "Екатеринбург, центр города",
    lat: 56.8389,
    lng: 60.6057,
    clue: "",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Yekaterinburg_City_Center.jpg/1280px-Yekaterinburg_City_Center.jpg",
  },
  {
    name: "Новосибирск, центр",
    lat: 55.0287,
    lng: 82.9235,
    clue: "",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Novosibirsk_center.jpg/1280px-Novosibirsk_center.jpg",
  },
  {
    name: "Красноярск, центр",
    lat: 56.0153,
    lng: 92.8932,
    clue: "",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Krasnoyarsk_center.jpg/1280px-Krasnoyarsk_center.jpg",
  },
  {
    name: "Иркутск, центр",
    lat: 52.2869,
    lng: 104.305,
    clue: "",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Irkutsk_city_center.jpg/1280px-Irkutsk_city_center.jpg",
  },
  { name: "Москва, центр", lat: 55.7558, lng: 37.6176, clue: "" },
  { name: "Санкт-Петербург, Невский проспект", lat: 59.9343, lng: 30.3351, clue: "" },
  { name: "Казань, центр", lat: 55.7963, lng: 49.1088, clue: "" },
  { name: "Нижний Новгород, центр", lat: 56.3269, lng: 44.0058, clue: "" },
  { name: "Челябинск, центр", lat: 55.1644, lng: 61.4368, clue: "" },
  { name: "Самара, центр", lat: 53.1959, lng: 50.1002, clue: "" },
  { name: "Ростов-на-Дону, центр", lat: 47.2357, lng: 39.7015, clue: "" },
  { name: "Уфа, центр", lat: 54.7388, lng: 55.9721, clue: "" },
  { name: "Воронеж, центр", lat: 51.672, lng: 39.1843, clue: "" },
  { name: "Пермь, центр", lat: 58.0105, lng: 56.2294, clue: "" },
  { name: "Волгоград, центр", lat: 48.7194, lng: 44.5018, clue: "" },
  { name: "Краснодар, центр", lat: 45.0355, lng: 38.9753, clue: "" },
  { name: "Саратов, центр", lat: 51.5336, lng: 46.0342, clue: "" },
  { name: "Тюмень, центр", lat: 57.1522, lng: 65.5272, clue: "" },
  { name: "Тольятти, центр", lat: 53.5078, lng: 49.4204, clue: "" },
  { name: "Барнаул, центр", lat: 53.3476, lng: 83.7769, clue: "" },
  { name: "Ижевск, центр", lat: 56.8528, lng: 53.2115, clue: "" },
  { name: "Ульяновск, центр", lat: 54.3182, lng: 48.3838, clue: "" },
  { name: "Ярославль, центр", lat: 57.6261, lng: 39.8845, clue: "" },
  { name: "Иваново, центр", lat: 57.0004, lng: 40.9739, clue: "" },
  { name: "Тула, центр", lat: 54.1931, lng: 37.6174, clue: "" },
  { name: "Рязань, центр", lat: 54.6292, lng: 39.7365, clue: "" },
  { name: "Астрахань, центр", lat: 46.3497, lng: 48.0408, clue: "" },
  { name: "Пенза, центр", lat: 53.1951, lng: 45.0183, clue: "" },
  { name: "Липецк, центр", lat: 52.6102, lng: 39.5948, clue: "" },
  { name: "Киров, центр", lat: 58.6036, lng: 49.6679, clue: "" },
  { name: "Чебоксары, центр", lat: 56.1439, lng: 47.2489, clue: "" },
  { name: "Калининград, центр", lat: 54.7104, lng: 20.4522, clue: "" },
  { name: "Сочи, центр", lat: 43.5855, lng: 39.7231, clue: "" },
  { name: "Мурманск, центр", lat: 68.9585, lng: 33.0827, clue: "" },
  { name: "Махачкала, центр", lat: 42.9849, lng: 47.5047, clue: "" },
  { name: "Кемерово, центр", lat: 55.3331, lng: 86.0838, clue: "" },
  { name: "Новокузнецк, центр", lat: 53.7596, lng: 87.1216, clue: "" },
  { name: "Тверь, центр", lat: 56.8587, lng: 35.9176, clue: "" },
  { name: "Брянск, центр", lat: 53.2434, lng: 34.3654, clue: "" },
  { name: "Владимир, центр", lat: 56.1291, lng: 40.4066, clue: "" },
  { name: "Курск, центр", lat: 51.7373, lng: 36.1874, clue: "" },
  { name: "Тамбов, центр", lat: 52.7213, lng: 41.4523, clue: "" },
  { name: "Смоленск, центр", lat: 54.7826, lng: 32.0451, clue: "" },
  { name: "Белгород, центр", lat: 50.5954, lng: 36.5873, clue: "" },
  { name: "Вологда, центр", lat: 59.2181, lng: 39.8845, clue: "" },
  { name: "Архангельск, центр", lat: 64.5399, lng: 40.5158, clue: "" },
  { name: "Сургут, центр", lat: 61.2539, lng: 73.3962, clue: "" },
  { name: "Калуга, центр", lat: 54.5293, lng: 36.2754, clue: "" },
  { name: "Великий Новгород, центр", lat: 58.5228, lng: 31.2698, clue: "" },
];

const hardLocations = [
  { name: "Хабаровск, центр", lat: 48.4827, lng: 135.0838 },
  { name: "Омск, центр", lat: 54.9885, lng: 73.3242 },
  { name: "Томск, центр", lat: 56.4846, lng: 84.9477 },
  { name: "Чита, центр", lat: 52.0337, lng: 113.5007 },
  { name: "Улан-Удэ, центр", lat: 51.8345, lng: 107.5845 },
  { name: "Петропавловск-Камчатский, центр", lat: 53.0244, lng: 158.6433 },
  { name: "Южно-Сахалинск, центр", lat: 46.9591, lng: 142.738 },
  { name: "Магадан, центр", lat: 59.5684, lng: 150.8085 },
  { name: "Абакан, центр", lat: 53.7212, lng: 91.4424 },
  { name: "Кызыл, центр", lat: 51.7191, lng: 94.4378 },
  { name: "Грозный, центр", lat: 43.3178, lng: 45.6949 },
  { name: "Сыктывкар, центр", lat: 61.6688, lng: 50.8364 },
  { name: "Йошкар-Ола, центр", lat: 56.6316, lng: 47.8862 },
  { name: "Саранск, центр", lat: 54.1838, lng: 45.1749 },
  { name: "Орёл, центр", lat: 52.9703, lng: 36.0635 },
  { name: "Ставрополь, центр", lat: 45.0428, lng: 41.9734 },
];

const LOCATION_VARIANTS_PER_POINT = 12;
const expandedRussiaLocations = expandLocations(russiaLocations, LOCATION_VARIANTS_PER_POINT);
const expandedHardLocations = expandLocations(hardLocations, LOCATION_VARIANTS_PER_POINT);

const state = {
  round: 0,
  score: 0,
  selectedPoint: null,
  currentLocation: null,
  currentTarget: null,
  difficultyKey: null,
  pool: [],
};

const roundEl = document.querySelector("#round");
const scoreEl = document.querySelector("#score");
const panoramaFrameEl = document.querySelector("#panorama-frame");
const panoramaLinkEl = document.querySelector("#panorama-link");
const panoramaRetryBtn = document.querySelector("#panorama-retry-btn");
const clueTextEl = document.querySelector("#clue-text");
const messageEl = document.querySelector("#message");
const startBtn = document.querySelector("#start-btn");
const guessBtn = document.querySelector("#guess-btn");
const nextBtn = document.querySelector("#next-btn");
const endScreenEl = document.querySelector("#end-screen");
const endResultEl = document.querySelector("#end-result");
const overlayRestartBtn = document.querySelector("#overlay-restart-btn");
const overlayBackBtn = document.querySelector("#overlay-back-btn");
const difficultyInfoEl = document.querySelector("#difficulty-info");
const difficultyButtons = document.querySelectorAll(".difficulty-btn");
const citySearchInput = document.querySelector("#city-search");
const citySearchBtn = document.querySelector("#city-search-btn");
const mapSearchStatusEl = document.querySelector("#map-search-status");
let currentPanoramaUrl = "https://maps.google.com";

let citySearchDebounceTimer = null;
let citySearchAbort = null;

const map = L.map("map", {
  minZoom: 2,
  maxZoom: 11,
}).setView([61, 95], 3);

const osmLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "&copy; OpenStreetMap contributors",
});

osmLayer.addTo(map);

loadRussiaOutline();

L.control
  .layers(
    {
      "OpenStreetMap": osmLayer,
    },
    null,
    {
      position: "topright",
      // На мобильных свернутый контрол не закрывает часть карты.
      collapsed: window.matchMedia("(max-width: 900px)").matches,
    }
  )
  .addTo(map);

let guessMarker = null;
let answerMarker = null;
let connectionLine = null;

startBtn.disabled = true;
endScreenEl.hidden = true;
panoramaRetryBtn.disabled = true;

citySearchBtn.addEventListener("click", () => {
  clearTimeout(citySearchDebounceTimer);
  geocodeCityAndFly(citySearchInput.value);
});

citySearchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    clearTimeout(citySearchDebounceTimer);
    geocodeCityAndFly(citySearchInput.value);
  }
});

citySearchInput.addEventListener("input", () => {
  clearTimeout(citySearchDebounceTimer);
  const q = citySearchInput.value.trim();
  if (q.length < 2) {
    setMapSearchStatus("");
    return;
  }
  citySearchDebounceTimer = setTimeout(() => {
    geocodeCityAndFly(citySearchInput.value);
  }, 600);
});

map.on("click", (event) => {
  if (!state.currentLocation || guessBtn.disabled) {
    return;
  }

  state.selectedPoint = event.latlng;

  if (guessMarker) {
    guessMarker.setLatLng(event.latlng);
  } else {
    guessMarker = L.marker(event.latlng).addTo(map);
  }

  messageEl.textContent = "Точка выбрана. Теперь нажми «Подтвердить выбор».";
});

startBtn.addEventListener("click", () => {
  if (!state.difficultyKey) {
    messageEl.textContent = "Сначала выбери сложность: Легкий, Средний или Сложный.";
    return;
  }
  resetGame();
  setupNextRound();
  startBtn.disabled = true;
});

guessBtn.addEventListener("click", () => {
  if (!state.selectedPoint || !state.currentLocation) {
    messageEl.textContent = "Сначала кликни по карте и выбери место.";
    return;
  }

  const difficulty = getDifficulty();
  const actual = state.currentTarget;
  const guessed = state.selectedPoint;
  const distance = haversineKm(guessed.lat, guessed.lng, actual.lat, actual.lng);
  const roundScore = distanceToScore(distance, difficulty);
  const participationBonus = difficulty.participationBonusPerRound;

  state.score += roundScore + participationBonus;
  scoreEl.textContent = `Очки: ${state.score}`;

  answerMarker = L.circleMarker([actual.lat, actual.lng], {
    radius: 8,
    color: "#27d37d",
    fillOpacity: 0.85,
  }).addTo(map);

  connectionLine = L.polyline(
    [
      [guessed.lat, guessed.lng],
      [actual.lat, actual.lng],
    ],
    { color: "#ffd24d", weight: 2, dashArray: "6 6" }
  ).addTo(map);

  messageEl.textContent =
    `Правильный ответ: ${actual.name}. ` +
    `Расстояние: ${Math.round(distance)} км. ` +
    `Очки за раунд: ${roundScore} + бонус ${participationBonus}.`;

  guessBtn.disabled = true;
  nextBtn.disabled = false;
  updatePanoramaRetryAvailability();
});

nextBtn.addEventListener("click", () => {
  if (state.round >= roundsTotal) {
    resetForEnd();
    return;
  }

  setupNextRound();
});

overlayRestartBtn.addEventListener("click", () => {
  endScreenEl.hidden = true;
  resetGame();
  setupNextRound();
  startBtn.disabled = true;
});

overlayBackBtn.addEventListener("click", () => {
  endScreenEl.hidden = true;
  resetToDifficultySelection();
});

panoramaLinkEl.addEventListener("click", () => {
  window.open(currentPanoramaUrl, "_blank", "noopener,noreferrer");
});

panoramaRetryBtn.addEventListener("click", () => {
  if (!state.currentLocation || !nextBtn.disabled) {
    return;
  }

  if (guessMarker) {
    map.removeLayer(guessMarker);
    guessMarker = null;
  }
  state.selectedPoint = null;
  state.currentTarget = withRandomOffset(state.currentLocation, getDifficulty());
  applyPanoramaToFrame();
  messageEl.textContent =
    "Панорама перезагружена с новой точкой рядом. Поставь метку на карте заново.";
});

function updatePanoramaRetryAvailability() {
  const inRound = Boolean(state.currentLocation);
  const roundLocked = !nextBtn.disabled;
  panoramaRetryBtn.disabled = !inRound || roundLocked;
}

function applyPanoramaToFrame() {
  currentPanoramaUrl = buildGoogleStreetViewUrl(
    state.currentTarget.lat,
    state.currentTarget.lng
  );
  const url = currentPanoramaUrl;
  panoramaFrameEl.src = "about:blank";
  requestAnimationFrame(() => {
    panoramaFrameEl.src = url;
  });
}

difficultyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.difficultyKey = button.dataset.difficulty;
    difficultyButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    const config = getDifficulty();
    difficultyInfoEl.textContent =
      `Выбрано: ${config.label}. Победа: от ${config.winTarget} очков за 5 раундов ` +
      `(каждый раунд +${config.participationBonusPerRound} бонусных баллов за попытку).`;
    messageEl.textContent =
      `${config.label} режим выбран. Нажми «Начать игру».`;
    startBtn.disabled = false;
  });
});

function setupNextRound() {
  clearRoundMarkers();
  state.round += 1;
  state.selectedPoint = null;

  if (state.round > roundsTotal) {
    resetForEnd();
    return;
  }

  const nextLocation = state.pool.pop();
  state.currentLocation = nextLocation;
  state.currentTarget = withRandomOffset(nextLocation, getDifficulty());

  applyPanoramaToFrame();
  clueTextEl.textContent = "Режим без подсказок: осмотри местность и угадай точку на карте.";
  roundEl.textContent = `Раунд ${state.round} / ${roundsTotal}`;
  messageEl.textContent = "Поставь метку на карте и подтверди выбор.";

  guessBtn.disabled = false;
  nextBtn.disabled = true;

  if (state.round === roundsTotal) {
    nextBtn.textContent = "Показать итог";
  } else {
    nextBtn.textContent = "Следующий раунд";
  }

  updatePanoramaRetryAvailability();
}

function resetGame() {
  const config = getDifficulty();
  clearRoundMarkers();
  state.round = 0;
  state.score = 0;
  state.selectedPoint = null;
  state.currentLocation = null;
  state.pool = buildPool(config);

  scoreEl.textContent = "Очки: 0";
  roundEl.textContent = `Раунд 0 / ${roundsTotal}`;
  currentPanoramaUrl = "https://maps.google.com";
  panoramaFrameEl.src = "";
  clueTextEl.textContent = "";
  map.setView([61, 95], config.zoom);
  messageEl.textContent = "Нажми «Начать игру», чтобы получить первую локацию.";
  endScreenEl.hidden = true;
  guessBtn.disabled = true;
  nextBtn.disabled = true;

  nextBtn.textContent = "Следующий раунд";
  updatePanoramaRetryAvailability();
}

function resetForEnd() {
  const difficulty = getDifficulty();
  const isWin = state.score >= difficulty.winTarget;
  clearRoundMarkers();
  guessBtn.disabled = true;
  nextBtn.disabled = true;
  startBtn.disabled = false;
  state.currentLocation = null;
  state.selectedPoint = null;
  state.currentTarget = null;
  roundEl.textContent = `Раунд ${roundsTotal} / ${roundsTotal}`;
  messageEl.textContent = "";
  endResultEl.textContent = isWin ? "WIN" : "LOSE";
  endResultEl.classList.toggle("win", isWin);
  endResultEl.classList.toggle("lose", !isWin);
  endScreenEl.hidden = false;
  updatePanoramaRetryAvailability();
}

function clearRoundMarkers() {
  if (guessMarker) {
    map.removeLayer(guessMarker);
    guessMarker = null;
  }
  if (answerMarker) {
    map.removeLayer(answerMarker);
    answerMarker = null;
  }
  if (connectionLine) {
    map.removeLayer(connectionLine);
    connectionLine = null;
  }
}

function distanceToScore(distanceKm, difficulty) {
  const normalized = Math.min(distanceKm, difficulty.maxDistanceKm) / difficulty.maxDistanceKm;
  return Math.max(0, Math.round(difficulty.maxRoundPoints * (1 - normalized)));
}

function haversineKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRad(value) {
  return (value * Math.PI) / 180;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function buildGoogleStreetViewUrl(lat, lng) {
  return `https://maps.google.com/maps?q=&layer=c&cbll=${lat},${lng}&cbp=11,0,0,0,0&output=svembed`;
}

function setMapSearchStatus(text, isError = false) {
  mapSearchStatusEl.textContent = text;
  mapSearchStatusEl.classList.toggle("map-search-status--error", Boolean(isError && text));
}

function zoomForPlaceType(type, placeClass) {
  if (type === "city" || type === "administrative") {
    return 9;
  }
  if (type === "town" || type === "village") {
    return 11;
  }
  if (placeClass === "place") {
    return 10;
  }
  return 8;
}

function flyMapToNominatimResult(hit) {
  const lat = Number.parseFloat(hit.lat);
  const lon = Number.parseFloat(hit.lon);
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
    return false;
  }

  const bboxRaw = hit.boundingbox;
  if (
    Array.isArray(bboxRaw) &&
    bboxRaw.length >= 4 &&
    bboxRaw.every((v) => v !== "" && Number.isFinite(Number.parseFloat(v)))
  ) {
    const south = Number.parseFloat(bboxRaw[0]);
    const north = Number.parseFloat(bboxRaw[1]);
    const west = Number.parseFloat(bboxRaw[2]);
    const east = Number.parseFloat(bboxRaw[3]);
    const bounds = L.latLngBounds(L.latLng(south, west), L.latLng(north, east));
    map.fitBounds(bounds, { padding: [28, 28], maxZoom: 10 });
  } else {
    const z = zoomForPlaceType(hit.type, hit.class);
    map.setView([lat, lon], z);
  }
  return true;
}

async function geocodeCityAndFly(rawQuery) {
  const query = rawQuery.trim();
  if (query.length < 2) {
    setMapSearchStatus("Введите хотя бы 2 символа.", true);
    return;
  }

  if (citySearchAbort) {
    citySearchAbort.abort();
  }
  citySearchAbort = new AbortController();

  setMapSearchStatus("Ищем…", false);

  try {
    const url = new URL("https://nominatim.openstreetmap.org/search");
    url.searchParams.set("format", "json");
    url.searchParams.set("q", query);
    url.searchParams.set("countrycodes", "ru");
    url.searchParams.set("limit", "5");
    url.searchParams.set("addressdetails", "0");

    const response = await fetch(url.toString(), {
      signal: citySearchAbort.signal,
      headers: {
        Accept: "application/json",
        "Accept-Language": "ru",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const results = await response.json();
    if (!Array.isArray(results) || results.length === 0) {
      setMapSearchStatus("Ничего не найдено в России. Попробуй другое название.", true);
      return;
    }

    const hit = results[0];
    flyMapToNominatimResult(hit);
    const label = hit.display_name ? hit.display_name.split(",").slice(0, 2).join(",").trim() : query;
    setMapSearchStatus(`Показано: ${label}`, false);
  } catch (error) {
    if (error.name === "AbortError") {
      return;
    }
    setMapSearchStatus("Не удалось выполнить поиск. Проверь соединение.", true);
  }
}

async function loadRussiaOutline() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/johan/world.geo.json/master/countries/RUS.geo.json"
    );
    if (!response.ok) {
      throw new Error(`Failed to load Russia border: ${response.status}`);
    }

    const geoJson = await response.json();
    const russiaOutline = L.geoJSON(geoJson, {
      style: {
        color: "#3aa0ff",
        weight: 2,
        dashArray: "8 6",
        fill: false,
        interactive: false,
      },
    }).addTo(map);

    russiaOutline.bringToBack();
  } catch (error) {
    console.warn("Russia outline is unavailable.", error);
  }
}

function withRandomOffset(location, difficulty) {
  const maxExtraKm = Math.min(0.14, difficulty.offsetMaxKm * 0.28);
  const minKm = Math.max(0.02, maxExtraKm * 0.25);
  const distanceKm = minKm + Math.random() * Math.max(0.02, maxExtraKm - minKm);
  const bearing = Math.random() * 2 * Math.PI;
  const latCos = Math.max(0.25, Math.cos((location.lat * Math.PI) / 180));
  const deltaLat = (distanceKm / 111) * Math.cos(bearing);
  const deltaLng = (distanceKm / (111 * latCos)) * Math.sin(bearing);

  return {
    ...location,
    lat: location.lat + deltaLat,
    lng: location.lng + deltaLng,
  };
}

function buildPool(difficulty) {
  const source = difficulty.useHardPool
    ? [...expandedRussiaLocations, ...expandedHardLocations]
    : [...expandedRussiaLocations];
  const pool = [];
  while (pool.length < roundsTotal) {
    pool.push(...shuffle([...source]));
  }
  return pool.slice(0, roundsTotal);
}

function getDifficulty() {
  return difficultyConfig[state.difficultyKey || "medium"];
}

function expandLocations(locations, variantsPerLocation) {
  const expanded = [];
  const radiusStepsKm = [0.05, 0.08, 0.11, 0.14, 0.17, 0.2, 0.22, 0.24, 0.26, 0.27, 0.28, 0.3];

  locations.forEach((location) => {
    const latCos = Math.max(0.25, Math.cos((location.lat * Math.PI) / 180));

    for (let i = 0; i < variantsPerLocation; i += 1) {
      const radiusKm = radiusStepsKm[i % radiusStepsKm.length];
      const bearing = ((i * 137.5) % 360) * (Math.PI / 180);
      const deltaLat = (radiusKm / 111) * Math.cos(bearing);
      const deltaLng = (radiusKm / (111 * latCos)) * Math.sin(bearing);

      expanded.push({
        ...location,
        name: `${location.name} • ${i + 1}`,
        lat: location.lat + deltaLat,
        lng: location.lng + deltaLng,
      });
    }
  });

  return expanded;
}

function resetToDifficultySelection() {
  clearRoundMarkers();
  state.round = 0;
  state.score = 0;
  state.selectedPoint = null;
  state.currentLocation = null;
  state.currentTarget = null;
  state.pool = [];
  state.difficultyKey = null;

  difficultyButtons.forEach((button) => button.classList.remove("active"));
  difficultyInfoEl.textContent = "Сложность не выбрана.";
  messageEl.textContent = "Выбери сложность перед стартом.";
  clueTextEl.textContent = "";
  roundEl.textContent = `Раунд 0 / ${roundsTotal}`;
  scoreEl.textContent = "Очки: 0";
  panoramaFrameEl.src = "";
  currentPanoramaUrl = "https://maps.google.com";
  map.setView([61, 95], 3);

  startBtn.disabled = true;
  guessBtn.disabled = true;
  nextBtn.disabled = true;
  nextBtn.textContent = "Следующий раунд";
  updatePanoramaRetryAvailability();
}
