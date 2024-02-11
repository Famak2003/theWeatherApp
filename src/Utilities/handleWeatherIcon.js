import NA from "./../asset/not-available.png";

import RAINYICON from "./../asset/rainy-icon.png";
import TORNADOICON from "./../asset/tornado-icon.png";
import SAND from "./../asset/sand-icon.png";
import DRIZZLE from "./../asset/drizzle-icon.png";
import MIST from "./../asset/mist-icon.png";
import SNOW from "./../asset/snow-icon.png";
import THUNDERSTORMICON from "./../asset/thunderStorm-icon.png";
import CLOUDS from "./../asset/clouds-icon.png";
import CLEAR from "./../asset/clear-icon.png";

import DEFAULT from "./../asset/rainy.jpg";
import CLOUDSBG from "./../asset/clouds.jpg";
import SNOWBG from "./../asset/snow.jpg";
import MISTBG from "./../asset/mist.jpg";
import SUNNYBG from "./../asset/sunny.jpg";
import TORNADOBG from "./../asset/tornado.jpg";
import SANDBG from "./../asset/sand.jpg";

function handleWeatherIcon(value) {
  switch (value) {
    case "Rain":
      return { icon: RAINYICON, bg: DEFAULT };
    case "Clear":
      return { icon: CLEAR, bg: SUNNYBG };
    case "Clouds":
      return { icon: CLOUDS, bg: CLOUDSBG };
    case "Thunderstorm":
      return { icon: THUNDERSTORMICON, bg: DEFAULT };
    case "Drizzel":
      return { icon: DRIZZLE, bg: DEFAULT };
    case "Snow":
      return { icon: SNOW, bg: SNOWBG };
    case "Mist":
      return { icon: MIST, bg: MISTBG };
    case "Haze":
      return { icon: MIST, bg: MISTBG };
    case "Smoke":
      return { icon: MIST, bg: MISTBG };
    case "Fog":
      return { icon: MIST, bg: MISTBG };
    case "Dust":
      return { icon: MIST, bg: MISTBG };
    case "Ash":
      return { icon: MIST, bg: MISTBG };
    case "Tornado":
      return { icon: TORNADOICON, bg: TORNADOBG };
    case "Squall":
      return { icon: TORNADOICON, bg: DEFAULT };
    case "Sand":
      return { icon: SAND, bg: SANDBG };
    default:
      return { icon: NA, bg: DEFAULT };
  }
}

export default handleWeatherIcon;
