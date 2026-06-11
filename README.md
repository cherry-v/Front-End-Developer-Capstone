# Little Lemon Capstone

A React web app for the Little Lemon restaurant.
It includes a home page, booking flow, API-driven time slots, client-side validation, unit tests, and an accessibility-focused semantic layout.

## Project Location

The app source code is in the `capstone` folder.

## Run Locally

1. Install dependencies:
   - `cd capstone`
   - `npm install`
2. Start development server:
   - `npm start`
3. Open:
   - [http://localhost:3000](http://localhost:3000)

## Test

- Run all tests once:
  - `cd capstone`
  - `npm test -- --watchAll=false`
- Unit tests are grouped under:
  - `capstone/src/tests/app`
  - `capstone/src/tests/components`
  - `capstone/src/tests/reducers`
- Example (run only booking form tests):
  - `npm test -- BookingForm.test.js --watchAll=false`

## Build

- `cd capstone`
- `npm run build`

## Key Features

- Semantic page structure with landmarks and section labeling
- Navigation and routing with `react-router-dom`
- Booking form with:
  - HTML5 validation attributes
  - React client-side validation with field-level errors
  - API-driven available time slots (`fetchAPI`)
  - Submit flow with confirmation routing (`submitAPI`)
- Unit tests for:
  - booking form rendering and validation states
  - reducer initialization and updates

## Source Structure

`capstone/src` is organized by feature:

- `components/layout` - header, nav, footer
- `components/home` - homepage sections
- `components/booking` - booking form
- `pages` - route-level pages
- `styles` - shared and page/component styles
- `tests` - unit tests grouped by scope