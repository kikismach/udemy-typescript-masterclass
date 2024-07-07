// To Discriminate Unions All the three types must have the state property
type NetworkLoadingState = {
  state: "loading";
};

type NetworkFailedState = {
  state: "failed";
  code: number;
};

type NetworkSuccessState = {
  state: "success";
  response: {
    title: string;
    duration: number;
    summary: string;
  };
};

// We Want to create a Network State with includes Loading, Failed and Success
// Create a type which represents only one of the above types
// but you aren't sure which it is yet.
type NetworkState = NetworkLoadingState | NetworkFailedState | NetworkSuccessState;

// Based on the types created now we can discriminate the network state and take action based on the state
// We need to create a logger function which logs the state of the network
function logger(state: NetworkState): string {
  // Right now TypeScript does not know which of the three
  // potential types state could be.

  // Trying to access a property which isn't shared
  // across all types will raise an error
  //! state.code;

  // By switching on state, TypeScript can narrow the union
  // down in code flow analysis
  switch (state.state) {
    case "loading":
      return "Downloading...";
    case "failed":
      // The type must be NetworkFailedState here,
      // so accessing the `code` field is safe
      return `Error ${state.code} downloading`;
    case "success":
      return `Downloaded ${state.response.title} - ${state.response.summary}`;
  }
}
