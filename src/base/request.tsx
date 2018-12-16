import axios from "axios";

const getLocation = () => {
  return axios.get(
    "/ws/location/v1/ip?callback=fun&key=BRHBZ-EJ5CO-MLHWC-ST77T-Z2T2S-PNFSO&output=jsonp"
  );
};

export { getLocation };
