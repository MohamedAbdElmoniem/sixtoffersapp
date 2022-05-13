import MockAdapter from "axios-mock-adapter";
import AxiosClient from "../AxiosClient";
import { BASE_URL, ROUTES } from "../routes";
import { getOffers } from "./api";

const testData = {
  info: {
    rentalInformationUrl:
      "https://www.sixt.de/php/terms/view?language=de_DE\u0026view=EPP\u0026liso=DE\u0026uci=11\u0026style=typo3",
    termsAndConditionsUrl:
      "https://www.sixt.de/fileadmin/sys/agb/sixt_DE_de.pdf",
    dataPrivacyUrl: "https://www.sixt.de/fileadmin/sys/agb/DSGVO_DE_de.pdf",
    taxInformation: "Preisübersicht",
    specialApplied: false,
    corporateDiscountNumber: 0,
    corporateCustomerNumber: 0,
    pickupStationId: "11",
    returnStationId: "11",
    pickupDate: "2021-02-09T12:30:00Z",
    returnDate: "2021-02-12T08:30:00Z",
    vehicleType: "car",
  },
  offers: [
    {
      id: "2436432a-e1d5-4649-bece-f98834f6ee1d-CCCC",
      status: "available",
      onRequest: false,
      unlimited: false,
      description: "Lucky Dip Car oder ähnlich",
      carGroupInfo: {
        bodyStyleKey: "Limousine",
        bodyStyle: "Limousine",
        airCondition: true,
        automatic: false,
        navigationSystem: false,
        modelGuaranteed: false,
        maxPassengers: 4,
        doors: 2,
        driverRequirements: {
          minAge: 18,
          licenseCategory: "",
          licenseMinYears: 0,
          youngDriverAge: 23,
        },
        modelExample: {
          name: "Lucky Dip Car",
          imageUrl:
            "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/e1e538fba31d34825135e5b3cd82ce8e5e0c4c98.jpg",
        },
        premium: false,
        luxury: false,
        baggage: {
          bags: 1,
          suitcases: 1,
        },
      },
      vehicleType: "car",
      vehicleGroupInfo: {
        bodyStyleKey: "Limousine",
        bodyStyle: "Limousine",
        airCondition: true,
        automatic: false,
        navigationSystem: false,
        modelGuaranteed: false,
        maxPassengers: 4,
        doors: 2,
        driverRequirements: {
          minAge: 18,
          licenseCategory: "",
          licenseMinYears: 0,
          youngDriverAge: 23,
        },
        modelExample: {
          name: "Lucky Dip Car",
          imageUrl:
            "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/e1e538fba31d34825135e5b3cd82ce8e5e0c4c98.jpg",
        },
        premium: false,
        luxury: false,
        baggage: {
          bags: 1,
          suitcases: 1,
        },
      },
      acrissCode: "CCCC",
      prices: {
        basePrice: {
          prefix: "",
          amount: {
            value: 137.48,
            display: "137,48",
            currency: "EUR",
          },
          unit: "gesamt",
          taxInfo: "inklusive Steuern",
          tracking: 137.48,
          trackingNet: 115.53,
        },
        totalPrice: {
          prefix: "",
          amount: {
            value: 173.94,
            display: "173,94",
            currency: "EUR",
          },
          unit: "gesamt",
          taxInfo: "inklusive Steuern",
          tracking: 173.94,
          trackingNet: 146.17,
        },
        dayPrice: {
          prefix: "",
          amount: {
            value: 57.98,
            display: "57,98",
            currency: "EUR",
          },
          unit: "Tag",
          taxInfo: "inklusive Steuern",
          tracking: 57.98,
          trackingNet: 48.72,
        },
        crossedOutTotalPrice: {
          prefix: "",
          amount: {
            value: 196.95,
            display: "196,95",
            currency: "EUR",
          },
          unit: "gesamt",
          taxInfo: "inklusive Steuern",
          tracking: 196.95,
          trackingNet: 165.5,
        },
        crossedOutDayPrice: {
          prefix: "",
          amount: {
            value: 65.65,
            display: "65,65",
            currency: "EUR",
          },
          unit: "Tag",
          taxInfo: "inklusive Steuern",
          tracking: 65.65,
          trackingNet: 55.17,
        },
        promoLabel: "Frühbucher Special",
        youngDriverFeeApplied: false,
        isHourlyBooking: false,
      },
      images: {
        small:
          "//fileadmin/files/global/user_upload/fleet/png/350x200/gluecksauto.png",
        medium:
          "//fileadmin/files/global/user_upload/fleet/png/630x360/gluecksauto.png",
        large:
          "//fileadmin/files/global/user_upload/fleet/png/1050x600/gluecksauto.png",
      },
      includedCharges: [
        {
          title: "Haftpflichtversicherung",
        },
        {
          title: "Wintertaugliche Bereifung",
        },
        {
          title: "900 Kilometer, 0,25 EUR je extra Kilometer",
        },
      ],
      payment: {
        selectedPaymentOption: "prepaid",
        paymentOptions: [
          {
            id: "prepaid",
            price: {
              prefix: "",
              amount: {
                value: 173.94,
                display: "173,94",
                currency: "EUR",
              },
              unit: "gesamt",
              taxInfo: "inklusive Steuern",
              tracking: 173.94,
              trackingNet: 146.17,
            },
            diffPrice: {
              prefix: "",
              amount: {
                value: 0,
                display: "0,00",
                currency: "EUR",
              },
              unit: "gesamt",
              taxInfo: "",
              tracking: 0,
              trackingNet: 0,
            },
            priceBreakdown: [
              {
                reference: "rental_period",
                title: "Mietdauer (3 Tage x 45,83)",
                type: "single",
                price: {
                  prefix: "",
                  amount: {
                    value: 137.48,
                    display: "137,48",
                    currency: "EUR",
                  },
                  unit: "gesamt",
                  taxInfo: "inklusive Steuern",
                  tracking: 137.48,
                  trackingNet: 115.53,
                },
              },
              {
                reference: "fees",
                title: "Gebühren",
                type: "group",
                items: [
                  {
                    reference: "U",
                    title: "WLTP Zuschlag",
                    type: "single",
                    price: {
                      prefix: "",
                      amount: {
                        value: 1.79,
                        display: "1,79",
                        currency: "EUR",
                      },
                      unit: "gesamt",
                      taxInfo: "inklusive Steuern",
                      tracking: 1.79,
                      trackingNet: 1.5,
                    },
                  },
                  {
                    reference: "Y",
                    title: "Standortzuschlag",
                    type: "single",
                    price: {
                      prefix: "",
                      amount: {
                        value: 34.68,
                        display: "34,68",
                        currency: "EUR",
                      },
                      unit: "gesamt",
                      taxInfo: "inklusive Steuern",
                      tracking: 34.68,
                      trackingNet: 29.14,
                    },
                  },
                ],
              },
              {
                reference: "total_price",
                title: "Gesamtpreis",
                type: "single",
                price: {
                  prefix: "",
                  amount: {
                    value: 173.94,
                    display: "173,94",
                    currency: "EUR",
                  },
                  unit: "gesamt",
                  taxInfo: "inklusive Steuern",
                  tracking: 173.94,
                  trackingNet: 146.17,
                },
              },
            ],
            crossedOutTotalPrice: {
              prefix: "",
              amount: {
                value: 196.95,
                display: "196,95",
                currency: "EUR",
              },
              unit: "gesamt",
              taxInfo: "inklusive Steuern",
              tracking: 196.95,
              trackingNet: 165.5,
            },
            cancellationNote: "Günstigster Preis!",
          },
          {
            id: "pay_on_arrival",
            price: {
              prefix: "",
              amount: {
                value: 211.97,
                display: "211,97",
                currency: "EUR",
              },
              unit: "gesamt",
              taxInfo: "inklusive Steuern",
              tracking: 211.97,
              trackingNet: 178.13,
            },
            diffPrice: {
              prefix: "",
              amount: {
                value: 38.03,
                display: "38,03",
                currency: "EUR",
              },
              unit: "gesamt",
              taxInfo: "inklusive Steuern",
              tracking: 38.03,
              trackingNet: 31.96,
            },
            priceBreakdown: [
              {
                reference: "rental_period",
                title: "Mietdauer (3 Tage x 55,98)",
                type: "single",
                price: {
                  prefix: "",
                  amount: {
                    value: 167.93,
                    display: "167,93",
                    currency: "EUR",
                  },
                  unit: "gesamt",
                  taxInfo: "inklusive Steuern",
                  tracking: 167.93,
                  trackingNet: 141.12,
                },
              },
              {
                reference: "fees",
                title: "Gebühren",
                type: "group",
                items: [
                  {
                    reference: "Y",
                    title: "Standortzuschlag",
                    type: "single",
                    price: {
                      prefix: "",
                      amount: {
                        value: 42.26,
                        display: "42,26",
                        currency: "EUR",
                      },
                      unit: "gesamt",
                      taxInfo: "inklusive Steuern",
                      tracking: 42.26,
                      trackingNet: 35.51,
                    },
                  },
                  {
                    reference: "U",
                    title: "WLTP Zuschlag",
                    type: "single",
                    price: {
                      prefix: "",
                      amount: {
                        value: 1.79,
                        display: "1,79",
                        currency: "EUR",
                      },
                      unit: "gesamt",
                      taxInfo: "inklusive Steuern",
                      tracking: 1.79,
                      trackingNet: 1.5,
                    },
                  },
                ],
              },
              {
                reference: "total_price",
                title: "Gesamtpreis",
                type: "single",
                price: {
                  prefix: "",
                  amount: {
                    value: 211.97,
                    display: "211,97",
                    currency: "EUR",
                  },
                  unit: "gesamt",
                  taxInfo: "inklusive Steuern",
                  tracking: 211.97,
                  trackingNet: 178.13,
                },
              },
            ],
            cancellationNote: "Jederzeit flexibel umbuchen!",
          },
        ],
        paymentRequired: true,
      },
      sortIndexes: {
        name: 44,
        price: 4,
        popularity: 224,
        datascience: 0,
        subscription: 0,
      },
      mileageInfo: {
        display: "inkl. 900 km",
      },
      rentalDays: 3,
      rentalHours: 0,
      headlines: {
        description: "Lucky Dip Car",
        shortSubline: "oder ähnlich | Limousine",
        longSubline: "Lucky Dip Car oder ähnlich | Limousine",
      },
    },
  ],
  recommendations: null,
  recommendations_v2: null,
};

describe("fetch offers", () => {
  let mock;

  beforeAll(() => {
    mock = new MockAdapter(AxiosClient);
  });

  afterEach(() => {
    mock.reset();
  });

  test("when API call is successful", async () => {
    const URL = `${BASE_URL}${ROUTES.OFFERS}`;
    mock.onGet(URL).reply(200, testData);
    const result = await getOffers();
    expect(result).toHaveProperty("offers");
  });

  test("when API call fails", async () => {
    const URL = ROUTES.OFFERS;
    mock.onGet(URL).networkErrorOnce();
    const result = await getOffers();
    expect(result.message).toEqual("Network Error");
  });
});
