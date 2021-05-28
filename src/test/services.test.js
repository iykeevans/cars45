import {
  $_createBooking,
  $_createCarSwapInspection,
  $_createInspection,
  $_getBanks,
  $_getBodyType,
  $_getCenters,
  $_getCities,
  $_getLocations,
  $_getMake,
  $_getModel,
  $_getRelatedCars,
  $_getSearch,
  $_getSingleCar,
  $_getSlot,
  $_getTrim,
  $_getYear,
  $_leads,
  $_payMoneyDown,
  $_preOrder,
  $_reserveCar,
  $_validateCarPayment,
} from "../api/services";

describe("test car45 endpoints", () => {
  test("should return all car makes", () => {
    return $_getMake().then((response) => {
      expect(response.status).toBe(200);
      expect(response.data.data.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe("test all car models", () => {
    test("should not return any car models", () => {
      return $_getModel().then((response) => {
        expect(response.status).toBe(200);
        expect(response.data.data.length).toBe(0);
      });
    });

    test("should return car models", () => {
      const payload = "toyota";

      return $_getModel(payload).then((response) => {
        expect(response.status).toBe(200);
        expect(response.data.data.length).toBeGreaterThanOrEqual(1);
      });
    });
  });

  describe("test car years", () => {
    test("should not return any car without make and model years", () => {
      return $_getYear(null, null).then((response) => {
        expect(response.status).toBe(200);
        expect(response.data.data.length).toBe(0);
      });
    });

    test("should return car with make and model years", () => {
      return $_getYear("toyota", "4runner").then((response) => {
        expect(response.status).toBe(200);
        expect(response.data.data.length).toBeGreaterThanOrEqual(1);
      });
    });
  });

  describe("test car trims", () => {
    test("should not return any car without make and model trims", () => {
      return $_getTrim(null, null).then((response) => {
        expect(response.status).toBe(200);
        expect(response.data.data.length).toBe(0);
      });
    });

    test("should return car with make and model trims", () => {
      return $_getTrim("toyota", "4runner").then((response) => {
        expect(response.status).toBe(200);
        expect(response.data.data.length).toBeGreaterThanOrEqual(1);
      });
    });
  });

  describe("test car search", () => {
    test("should return searched car(s)", () => {
      const payload = {
        make: "Toyota",
        model: "4Runner",
        year: "2010",
        minYear: "",
        maxYear: "",
        maxPrice: "",
        minPrice: "",
        transmission: "",
        financeable: "",
        type: "",
        grade: "",
        condition: "",
      };
      return $_getSearch(payload).then((response) => {
        //console.log(response.data.data);

        expect(response.status).toBe(200);
        expect(
          Number(response.data.data.totalCars[0].total)
        ).toBeGreaterThanOrEqual(1);
        expect(response.data.data["0"]).toHaveProperty("make", payload.make);
        expect(response.data.data["0"]).toHaveProperty("model", payload.model);
        expect(response.data.data["0"]).toHaveProperty("year", payload.year);
      });
    });
  });

  describe("test single car", () => {
    test("should not return car if sku is invalid", () => {
      return $_getSingleCar("NG-83072").then((data) => {
        const response = data;

        expect(response.status).toBe(200);
        expect(response.data.data).toBe("Car not found");
      });
    });

    test("should return car if sku is valid", () => {
      return $_getSingleCar("NG-830729").then((data) => {
        const response = data;

        expect(response.status).toBe(200);
        expect(response.data.data).toHaveProperty("make");
        expect(response.data.data).toHaveProperty("model");
        expect(response.data.data).toHaveProperty("year");
      });
    });
  });

  describe("test centers", () => {
    test("should return centers if city exists", () => {
      return $_getCenters("lagos").then((data) => {
        const response = data;

        expect(response.status).toBe(200);
        expect(response.data.data.length).toBeGreaterThanOrEqual(1);
        expect(response.data.data[0]).toHaveProperty("city");
      });
    });
  });

  describe("test slots", () => {
    test("should return slots if place-id exists", () => {
      const placeId = "436794e4-bc06-46e4-acb7-d3afc001cb8d";

      return $_getSlot(placeId).then((response) => {
        // console.log(response.data.data);
        expect(response.status).toBe(200);
        expect(response.data.data.length).toBeGreaterThanOrEqual(1);
      });
    });
  });
  describe("test locations", () => {
    test("should return location(s)", () => {
      return $_getLocations().then((response) => {
        //console.log(response.data.data);
        expect(response.status).toBe(200);
        expect(response.data.data.length).toBeGreaterThanOrEqual(1);
        expect(response.data.data[0]).toHaveProperty("location");
      });
    });
  });

  describe("test cities", () => {
    test("should return city(s)", () => {
      return $_getCities().then((response) => {
        expect(response.status).toBe(200);
        expect(response.data.data.length).toBeGreaterThanOrEqual(1);
        expect(response.data.data).toContain("Lagos");
      });
    });
  });

  describe("test banks", () => {
    test("should return all bank(s)", () => {
      return $_getBanks().then((response) => {
        // console.log(response.data.data);
        expect(response.status).toBe(200);
        expect(response.data.data).toHaveProperty("banks");
        expect(response.data.data.banks.length).toBeGreaterThanOrEqual(1);
        expect(response.data.data.banks).toContain("Guaranty Trust Bank");
      });
    });
  });

  describe("test booking", () => {
    test("should create a booking", () => {
      const payload1 = {
        user: "ac285ce0-4bde-11ea-8a14-4ae19d7096be",
        name: "test",
        email: "test@deom.com",
        phone: "07012345678",
        make: "Toyota",
        model: "Corolla",
        year: "2019",
        city: "Lagos",
        address: "Lagos",
        booking_date: "20-05-2021",
      };

      const payload = {
        name: "james carnegy",
        phone: "07053052005",
        email: "jamescarny@gmail.com",
        comment: "no comment",
        make: "Toyota",
        model: "4Runner",
        year: "2010",
        trim: "Automatic",
        placeId: "436794e4-bc06-46e4-acb7-d3afc001cb8d",
        date: "2021-05-26",
        time: "08:00:00",
        city: "Lagos",
      };

      return $_createBooking(payload).then((response) => {
        expect(response.status).toBe(200);
      });
    });
  });

  describe("test inspection", () => {
    test("should create inspection", () => {
      const payload = {
        user: "ac285ce0-4bde-11ea-8a14-4ae19d7096be",
        name: "test",
        email: "test@deom.com",
        phone: "07012345678",
        make: "Toyota",
        model: "Corolla",
        year: "2019",
        city: "Lagos",
        address: "Lagos",
        booking_date: "20-05-2021",
      };

      return $_createInspection(payload).then((response) => {
        expect(response.status).toBe(200);
        expect(response.data.success).toBeTruthy();
        expect(response.data.message).toBe("Record created.");
      });
    });
  });

  describe("test car swap inspection", () => {
    test("should create car swap inspection", () => {
      const payload = {
        make: "Toyota",
        model: "Camry",
        year: "2008",
        trim: "Automatic",
        budget: 3489340,
        swap1: {
          make: "Toyota",
          model: "Camry",
          year: "2008",
          trim: "Automatic",
        },
        swap2: {
          make: "Toyota",
          model: "Camry",
          year: "2008",
          trim: "Automatic",
        },
        name: "Jane Doe",
        email: "olalekan.a@cars45.com",
        phone: "O8181244813",
        city: "Lagos",
        location: "Cars45 Ikeja",
        bookingDate: "23/03/2021",
        bookingTime: "04:19",
        leadType: "website",
        leadSource: "cars45.com",
        user: "a3e55e7c-84c2-4a9c-bdd4-c44a3070fb20",
      };

      return $_createCarSwapInspection(payload).then((response) => {
        expect(response.status).toBe(200);
        expect(response.data.success).toBeTruthy();
        expect(response.data.message).toBe("Record created.");
      });
    });
  });

  describe("test validate car payment", () => {
    test("should validate car payment", () => {
      const payload = {
        ref: "cars45_ng-807090_07065350169-1594-wh7xe627zj",
        url: "http://staging-buy.cars45.ng/toyota-avalon-2014-automatic-ng-807090",
      };

      return $_validateCarPayment(payload).then((response) => {
        expect(response.status).toBe(200);
      });
    });
  });

  describe("test pay money down", () => {
    test("should not pay money down because car does not exist for paydown", () => {
      const payload = {
        customerEmail: "iamkesington@gmail.com",
        phone: "07065350169",
        customerName: "iam kesington",
        sku: "ng-807090",
        make: "Toyota",
        model: "Corolla",
        year: "2020",
        url: "http://buy-demo.cars45.development/cars/acura-mdx-2001-automatic-ng-763674",
      };

      return $_payMoneyDown(payload).then((response) => {
        expect(response.status).toBe(200);
        expect(response.data.success).toBeTruthy();
        expect(response.data.data).toHaveProperty("message", "Car not found");
        // console.log(response.data.data)
      });
    });
    test("should pay money down for a car", () => {
      const payload = {
        customerEmail: "lan@g.com",
        customerName: "olanrewaju olanipekun",
        make: "Toyota",
        model: "4Runner",
        phone: "08161702919",
        sku: "NG-837261",
        url: "http://localhost:3000/buy/car/Toyota_NG-837261",
        year: "2004",
      };

      return $_payMoneyDown(payload).then((response) => {
        expect(response.status).toBe(200);
        expect(response.data.success).toBeTruthy();
        expect(response.data.data).toHaveProperty("reference");
        // console.log(response.data.data)
      });
    });
  });

  describe("test related cars ", () => {
    test("should return related cars", () => {
      return $_getRelatedCars("NG-807265", "Toyota", "2015").then(
        (response) => {
          expect(response.status).toBe(200);
          expect(response.data.success).toBeTruthy();
        }
      );
    });
  });

  describe("test car body type ", () => {
    test("should return car body type", () => {
      return $_getBodyType().then((response) => {
        expect(response.status).toBe(200);
        expect(response.data.success).toBeTruthy();
        expect(response.data.data.length).toBeGreaterThanOrEqual(1);
      });
    });
  });

  describe("test car preoder ", () => {
    test("should preorder car", () => {
      const payload = {
        user: "ac285ce0-4bde-11ea-8a14-4ae19d7096be",
        name: "test",
        email: "test@deom.com",
        phone: "07012345678",
        make: "Toyota",
        model: "Corolla",
        year: "2019",
        city: "Lagos",
        address: "Lagos",
        booking_date: "20-05-2021",
      };

      return $_preOrder(payload).then((response) => {
        expect(response.status).toBe(200);
        expect(response.data.success).toBeTruthy();
        expect(response.data.message).toBe("Record created.");
      });
    });
  });

  describe("test car reservation ", () => {
    test("should reserve a car", () => {
      const payload = {
        user: "ac285ce0-4bde-11ea-8a14-4ae19d7096be",
        name: "test",
        email: "test@deom.com",
        phone: "07012345678",
        make: "Toyota",
        model: "Corolla",
        year: "2019",
        city: "Lagos",
        address: "Lagos",
        booking_date: "20-05-2021",
      };

      return $_reserveCar(payload).then((response) => {
        expect(response.status).toBe(200);
        expect(response.data.success).toBeTruthy();
        expect(response.data.message).toBe("Record created.");
      });
    });
  });

  describe("test go mechanic ", () => {
    test("should book a repair", () => {
      const payload = {
        user: "ac285ce0-4bde-11ea-8a14-4ae19d7096be",
        name: "test",
        email: "test@deom.com",
        phone: "07012345678",
        make: "Toyota",
        model: "Corolla",
        year: "2019",
        city: "Lagos",
        address: "Lagos",
        booking_date: "20-05-2021",
      };

      return $_reserveCar(payload).then((response) => {
        expect(response.status).toBe(200);
        expect(response.data.success).toBeTruthy();
        expect(response.data.message).toBe("Record created.");
      });
    });
  });
});
