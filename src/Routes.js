import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PrivateRoute, SignInPage } from "./auth";
import { ConversationsListPage, NewConversationPage } from "./conversations";
import { NavBar } from "./navigation";

const routes = [{
  path: '/sign-in',
  Component: SignInPage,
}, {
  path: '/',
  private: true,
  exact: true,
  Component: ConversationsListPage,
},{
  path: '/new-conversation',
  private: true,
  Component: NewConversationPage,
}
];

export const Routes = ({isLoading, user}) => (
  <Router> 
    <NavBar user={user}/>
    <Switch>
        {routes.map((route, index) => {
          const RouteType = route.private
          ? PrivateRoute : Route;

          return (
            <RouteType
                key={index}
                path={route.path}
                exact={route.exact}
                isLoading={isLoading}
                isAuthed={!!user}
            >
                <route.Component />
            </RouteType>);
          })}
    </Switch>
  </Router> 
);