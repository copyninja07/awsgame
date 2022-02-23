import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import Win from "./pages/Win";
import MinePage from "./pages/MinePage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ResetPassword from "./pages/ResetPassword";
import AddAddress from "./pages/AddAddress";
import AddBankCard from "./pages/AddBankCard";
import Withdrawal from "./pages/Withdrawal";
import Orders from "./pages/Orders";
import ComplaintsSuggestions from "./pages/ComplaintsSuggestions";
import Promotion from "./pages/Promotion";
import Transactions from "./pages/Transactions";
import RiskDisclosureAgreement from "./pages/RiskDisclosureAgreement";
import Recharge from "./pages/Recharge";
import AuthUser from "./AuthUser";
import Home from "./pages/Home";
import AdminPage from "./pages/AdminPage";
import UserManagement from "./adminPages/UserManagement";
import Pages from "./adminPages/Pages";
import WinTwo from "./pages/WinTwo";
import Payment from "./pages/Payment";
import Error404 from "./pages/Error404";
import Order from "./adminPages/Order";
import GameResult from "./adminPages/GameResult";
import GameRules from "./adminPages/GameRules";
import Payments from "./adminPages/Payment";
import GameTC from "./adminPages/GameTC";
import Promotions from "./adminPages/Promotions";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="*" element={<Error404 />} />
        <Route exact path="/Win2" element={<WinTwo />} />
        <Route exact path="/register" element={<Register />} />
        {/* <Route path='/reset/password' element={<ResetPassword/>}/> */}
        <Route path="/home" element={<Home />} />
        <Route path="/win" element={<Win />} />
        {/* <Route path='/mine' element={<MinePage/>}/>
          <Route path='/privacy/policy' element={<PrivacyPolicy/>}/>
          <Route path='/add/address' element={<AddAddress/>}/>
          <Route path='/add/bank' element={<AddBankCard/>}/>
          <Route path='/withdrawal' element={<Withdrawal/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/ComplaintsSuggestions' element={<ComplaintsSuggestions/>}/>
          <Route path='/promotion' element={<Promotion/>}/>
          <Route path='/transactions' element={<Transactions/>}/>
          <Route path='/RiskDisclosure' element={<RiskDisclosureAgreement/>}/>
          <Route path='/recharge' element={<Recharge/>}/>
          <Route path='/payment' element={<Payment/>}/> */}

        {/* Admin pages */}

        <Route path="/admin" element={<AdminPage />} />
        <Route path="/user/management" element={<UserManagement />} />
        <Route path="/user/pages" element={<Pages />} />
        <Route path="/Promotions" element={<Promotions />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/GameResult" element={<GameResult />} />
        <Route path="/GameRules" element={<GameRules />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/GameTC" element={<GameTC />} />

        {/* User Auth */}

        {/* <Route path='/win' element={<AuthUser cmp={Win} />}/> */}
        <Route path="/mine" element={<AuthUser cmp={MinePage} />} />
        <Route
          path="/privacy/policy"
          element={<AuthUser cmp={PrivacyPolicy} />}
        />
        <Route
          path="/reset/password"
          element={<AuthUser cpm={ResetPassword} />}
        />
        <Route path="/add/address" element={<AuthUser cmp={AddAddress} />} />
        <Route path="/add/bank" element={<AuthUser cmp={AddBankCard} />} />
        <Route path="/withdrawal" element={<AuthUser cmp={Withdrawal} />} />
        <Route path="/orders" element={<AuthUser cmp={Orders} />} />
        <Route
          path="/ComplaintsSuggestions"
          element={<AuthUser cmp={ComplaintsSuggestions} />}
        />
        <Route path="/promotion" element={<AuthUser cmp={Promotion} />} />
        <Route path="/transactions" element={<AuthUser cmp={Transactions} />} />
        <Route
          path="/RiskDisclosure"
          element={<AuthUser cmp={RiskDisclosureAgreement} />}
        />
        <Route path="/recharge" element={<AuthUser cmp={Recharge} />} />
        <Route path="/payment" element={<AuthUser cmp={Payment} />} />
      </Routes>
    </>
  );
}

export default App;
