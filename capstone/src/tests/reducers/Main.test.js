import { initializeTimes, updateTimes } from "../../Main";

afterEach(() => {
    jest.restoreAllMocks();
});

test("initializeTimes returns available times from fetchAPI", () => {
    const expectedTimes = ["17:00", "18:00", "19:00"];
    window.fetchAPI = jest.fn(() => expectedTimes);

    expect(initializeTimes()).toEqual(expectedTimes);
});

test("updateTimes returns times from fetchAPI for selected date dispatch", () => {
    const expectedTimes = ["18:00", "19:00", "20:00"];
    window.fetchAPI = jest.fn(() => expectedTimes);

    expect(
        updateTimes([], { type: "date_changed", date: "2026-06-11" })
    ).toEqual(expectedTimes);
});
