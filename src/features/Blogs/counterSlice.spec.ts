import counterReducer, { CounterState } from "./blogSlice";

describe("counter reducer", () => {
  const initialState: CounterState = {
    posts: [],
    status: "idle",
    blogComments: [],
    selectedBlog: {},
  };
  it("should handle initial state", () => {
    expect(counterReducer(undefined, { type: "unknown" })).toEqual({
      value: 0,
      status: "idle",
    });
  });

  // it('should handle increment', () => {
  //   const actual = counterReducer(initialState, increment());
  //   expect(actual.posts).toEqual(0);
  // });

  // it('should handle decrement', () => {
  //   const actual = counterReducer(initialState, decrement());
  //   expect(actual.value).toEqual(2);
  // });

  // it('should handle incrementByAmount', () => {
  //   const actual = counterReducer(initialState, incrementByAmount(2));
  //   expect(actual.value).toEqual(5);
  // });
});
