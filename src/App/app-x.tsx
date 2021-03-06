import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";

import { persistCache } from "../apollo-setup";
import {
  ROOT_URL,
  PROJECTS_URL,
  TAG_URL,
  SOURCE_URL,
  SEARCH_QUOTES_URL,
  QUOTE_URL,
  AUTHOR_ROUTE_URL,
  USER_REG_URL,
  LOGIN_URL,
  PWD_RECOVERY_REQUEST_ROUTE
} from "./../routes/util";
import Loading from "./../components/Loading";
import AuthRequired from "../AuthRequired";
import { AppSidebarContext, State, initialState } from "./app";
import { logger } from "../utils";

const TagDetail = lazy(() => import("./../routes/TagDetail"));
const Source = lazy(() => import("./../routes/Source"));
const NewQuote = lazy(() => import("./../routes/NewQuote"));
const Quote = lazy(() => import("./../routes/Quote"));
const AuthorRoute = lazy(() => import("./../routes/Author"));
const LoginRoute = lazy(() => import("./../Login"));
const ProjectsRoute = lazy(() => import("./../routes/Projects"));
const PwdRecoveryRequest = lazy(() => import("../PwdRecoveryTokenRequest"));
const SearchQuotes = lazy(() => import("./../routes/SearchQuotes"));
const UserRegistration = lazy(() => import("./../UserRegistration"));

export interface Props {
  client: ApolloClient<{}>;
  cache: InMemoryCache;
}

export class App extends React.Component<Props, State> {
  state: State = initialState;

  async componentDidMount() {
    try {
      await persistCache(this.props.cache);
    } catch (error) {
      logger("error", "Error restoring Apollo cache", error);
    }

    this.setState({ cacheLoaded: true });
  }

  render() {
    const { cacheLoaded } = this.state;

    if (!cacheLoaded) {
      return <Loading />;
    }

    const { showSidebar } = this.state;

    return (
      <Suspense fallback={<Loading />}>
        <ApolloProvider client={this.props.client}>
          <AppSidebarContext.Provider
            value={{
              showSidebar,
              onShowClicked: this.toggleSidebar,
              onHide: this.handleSidebarHide
            }}
          >
            <BrowserRouter>
              <Switch>
                <AuthRequired
                  exact={true}
                  path={SOURCE_URL}
                  component={Source}
                />

                <AuthRequired exact={true} path={QUOTE_URL} component={Quote} />

                <AuthRequired
                  exact={true}
                  path={AUTHOR_ROUTE_URL}
                  component={AuthorRoute}
                />

                <AuthRequired
                  exact={true}
                  path={PROJECTS_URL}
                  component={ProjectsRoute}
                />

                <AuthRequired
                  exact={true}
                  path={SEARCH_QUOTES_URL}
                  component={SearchQuotes}
                />

                <AuthRequired
                  exact={true}
                  path={TAG_URL}
                  component={TagDetail}
                />

                <AuthRequired
                  exact={true}
                  path={ROOT_URL}
                  component={NewQuote}
                />

                <Route
                  exact={true}
                  path={USER_REG_URL}
                  render={routeProps => <UserRegistration {...routeProps} />}
                />

                <Route
                  exact={true}
                  path={LOGIN_URL}
                  render={routeProps => <LoginRoute {...routeProps} />}
                />

                <Route
                  exact={true}
                  path={PWD_RECOVERY_REQUEST_ROUTE}
                  render={routeProps => <PwdRecoveryRequest {...routeProps} />}
                />

                <Route render={routeProps => <LoginRoute {...routeProps} />} />
              </Switch>
            </BrowserRouter>
          </AppSidebarContext.Provider>
        </ApolloProvider>
      </Suspense>
    );
  }

  private toggleSidebar = () => {
    const { showSidebar } = this.state;
    this.setState({ showSidebar: !showSidebar });
  };

  private handleSidebarHide = () => this.setState({ showSidebar: false });
}

export default App;
