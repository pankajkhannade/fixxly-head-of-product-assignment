import { AppProvider, useApp } from "./context/AppContext";
import { BottomNav } from "./components/BottomNav";
import { LoginScreen } from "./screens/LoginScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { BrowseScreen } from "./screens/BrowseScreen";
import { ProductScreen } from "./screens/ProductScreen";
import { CartScreen } from "./screens/CartScreen";
import { CheckoutScreen } from "./screens/CheckoutScreen";
import { OrdersScreen, OrderDetailScreen } from "./screens/OrdersScreen";

function Router() {
  const { screen } = useApp();

  switch (screen) {
    case "login":
      return <LoginScreen />;
    case "home":
      return <HomeScreen />;
    case "browse":
      return <BrowseScreen />;
    case "product":
      return <ProductScreen />;
    case "cart":
      return <CartScreen />;
    case "checkout":
      return <CheckoutScreen />;
    case "orders":
      return <OrdersScreen />;
    case "order-detail":
      return <OrderDetailScreen />;
    default:
      return <HomeScreen />;
  }
}

export default function App() {
  return (
    <AppProvider>
      <div className="h-full">
        <Router />
        <BottomNav />
      </div>
    </AppProvider>
  );
}
