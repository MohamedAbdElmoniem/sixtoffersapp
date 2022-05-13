import { generalActions } from "../../../redux/store";
import AxiosClient from "../AxiosClient";
import { ROUTES } from "../routes";

const getOffers = async () => {
  try {
    generalActions.setLoading(true);
    const { data, status } = await AxiosClient.get(ROUTES.OFFERS);
    if (status === 200) {
      generalActions.saveOffers(data);
      return data;
    } else {
      return "error";
    }
  } catch (error) {
    return error;
  } finally {
    generalActions.setLoading(false);
  }
};

export { getOffers };
