import React from "react";
import HomeLayout from "../../components/layouts/home-layout";
import { useRouter } from "next/router";
import { getCall } from "../../api/request";
import endpoint from "../../api/endPoints";
import { toast, ToastContainer } from "react-nextjs-toast";
import Loading from "../../components/loadingScreen";

const mockedData = {
  title: "You loan application is being processed",
  image: "/assets/images/loan/congrats.png",
  footer: {
    image: "/assets/images/loan/congrats-car.png",
  },
};

export default function LoanCongratulations() {
  const router = useRouter();
  React.useEffect(() => {
    verifyLoan();
  }, []);

  const [loading, setLoading] = React.useState(true);
  const verifyLoan = async () => {
    try {
      let headers = {
        "x-api-key": process.env.FINANCE_API_KEY,
      };
      let ref = window.location.search.split("?")[1];
      let res = await getCall(endpoint.verifyFinance(ref), headers);
      if (
        res.data?.message &&
        res.data?.message === "Verification successful"
      ) {
        setLoading(false);
      } else {
        router.push("/buy");
      }
    } catch (error) {
      toast.notify("Oops! Can not validate payment at the moment", {
        duration: 5,
        title: "An error occured",
        type: "error",
      });
      router.push("/buy");
    }
  };
  return (
    <HomeLayout>
      {loading && <Loading />}
      {!loading && (
        <div className="d-flex flex-column align-items-center justify-content-center">
          <img
            src={mockedData.image}
            alt="congratulations"
            style={{ height: "60vh" }}
          />
          <h2 className="my-4">{mockedData.title}</h2>
          <img
            src={mockedData.footer.image}
            alt="congrats car"
            className="align-self-start"
            style={{ height: "40vh" }}
          />
        </div>
      )}
      <ToastContainer align={"right"} position={"bottom"} />
    </HomeLayout>
  );
}
