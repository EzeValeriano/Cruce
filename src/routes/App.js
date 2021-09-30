import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import OrdersList from '../components/Tables/OrdersList';
import Order from '../components/Order';
import Branches from '../components/Tables/Branches';
import Branch from '../components/Branch';
import NewOrder from '../components/NewOrder';
import Couriers from '../components/Tables/Couriers';
import Courier from '../components/Courier';
import Reports from '../components/Reports';
import Messengers from '../components/Tables/Messengers';
import NewMessenger from '../components/NewMessenger';
import NotAssigned from '../components/Tables/NotAssignedOrders';
import Messenger from '../components/Messenger';
import LoginForm from '../components/Forms/LoginForm';
import BranchCreationForm from '../components/Forms/BranchCreationForm';
import CourierCreationForm from '../components/Forms/CourierCreationForm';
import UserCreationForm from '../components/Forms/UserCreationForm';
import Sidebar from '../components/Sidebar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Route exact path="/" render={() => <LoginForm />} /> */}
        <Route exact path="/orders" render={() => <OrdersList />} />
        <Route
          exact
          path="/orders/notassigned"
          render={() => <NotAssigned />}
        />
        <Route exact path="/order" render={() => <NewOrder />} />
        <Route path="/order/:id" render={() => <Order />} />
        <Route exact path="/branches" render={() => <Branches />} />
        <Route exact path="/branch" render={() => <BranchCreationForm />} />
        <Route exact path="/branch/:id" render={() => <Branch />} />
        <Route exact path="/couriers" render={() => <Couriers />} />
        <Route exact path="/courier" render={() => <CourierCreationForm />} />
        <Route exact path="/courier/:id" render={() => <Courier />} />
        <Route exact path="/reports" render={() => <Reports />} />
        <Route exact path="/messengers" render={() => <Messengers />} />
        <Route exact path="/messenger" render={() => <NewMessenger />} />
        <Route exact path="/messenger/:id" render={() => <Messenger />} />
        <Route exact path="/user" render={() => <UserCreationForm />} />
        <Route path="/" render={() => <Sidebar />} />

      </BrowserRouter>
    </div>
  );
}

export default App;
