import { ApolloError } from "apollo-client/errors/ApolloError";
import { WithApolloClient } from "react-apollo";
import { GraphqlQueryControls } from "react-apollo";
import { ApolloQueryResult } from "apollo-client";

import { TagsMinimal as TagsMinimalQuery } from "../../graphql/gen.types";
import { RouteComponentProps } from "react-router-dom";
import { CreateQuoteInput } from "../../graphql/gen.types";
import { TagFrag } from "../../graphql/gen.types";
import { VolumeIssueType } from "./form-volume-issue-control.component";
import { PageType } from "./form-page-start-end-control.component";
import { DateType } from "./date.component";
import { SourceFullFrag } from "../../graphql/gen.types";
import { Sources1 as Sources1Query } from "../../graphql/gen.types";
import { Source1 as Source1Query } from "../../graphql/gen.types";

export interface FormValues {
  tags: TagFrag[];
  source: SourceFullFrag | null;
  quote: string;
  date: DateType | null;
  page: PageType | null;
  volumeIssue: VolumeIssueType | null;
  extras: string;
}

export type OwnProps = WithApolloClient<{}> & {
  sourceId?: string;
} & TagsMinimalQuery &
  RouteComponentProps<{ sourceId?: string }>;

export type NewQuoteProps = OwnProps & GraphqlQueryControls;

export interface NewQuoteState {
  initialFormValues: FormValues;
  formOutputs: CreateQuoteInput;
  sourceId?: string;
  queryResult?: ApolloQueryResult<Sources1Query & Source1Query>;
  graphqlError?: ApolloError;
  submittedSourceId?: string;
  selectedTags: TagFrag[]; // from form
}

export const initialFormValues: FormValues = {
  tags: [],
  source: null,
  quote: "",
  date: null,
  page: null,
  volumeIssue: null,
  extras: ""
};

export const formOutputs: CreateQuoteInput = {
  date: "",
  sourceId: "",
  tags: [],
  text: ""
};

export enum ShouldReUseSource {
  RE_USE_SOURCE = "re-use source",
  DO_NOT_RE_USE_SOURCE = "do not re-use source"
}
