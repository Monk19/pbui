import { useRouter } from "next/router";
import { useEffect } from "react";
function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(url);
      // Add your own logic here to check if the user is authenticated
      const userIsAuthenticated = checkUserAuthentication();

      if (!userIsAuthenticated && url === "/protected-page") {
        router.replace("/login");
      }
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);
  function checkauth() {
    const token = localStorage.getItem("tkn");
    if (token) {
      router.push("/login");
    }
  }
  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(url);
      // Add your own logic here to check if the user is authenticated
      const userIsAuthenticated = checkUserAuthentication();

      if (!userIsAuthenticated && url === "/protected-page") {
        router.replace("/login");
      }
    };
    checkauth;
    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
