# Notes

Hello! Thank you for considering my submission. To run it:

> `yarn && yarn build && yarn preview`

Please find below my notes on the development process.

- Ended up in peer dependency hell due to a slightly outdated version of `react-scripts` in the base CRA-bootstrapped project, so I lifted and shifted it all over to a fresh vite project
- Can see that the project has been set up with a yarn lockfile rather than npm, so to conform, I switched over to yarn for this challenge to avoid dual lockfiles
- Switched the apollo dependency over to `@apollo/client`, as [`apollo-boost` is now deprecated](https://www.apollographql.com/docs/react/migrating/apollo-client-3-migration/#apollo-boost)
- Implemented a more exhaustive eslint config based on `airbnb`, to demonstrate how I'd expect a modern TS/React repo to maintain code quality and uniformity across PRs
- Added an artificial delay to the product query result, to better demonstrate the 'loading' UI. This can of course be done via browser network throttling, but it's infinitely easier to show off this way
- Product subtitle colour (Power // Pack quantity) contrasts poorly against the background colour in the design. Users with visual impairments would find it more difficult to discern the text, so I've brightened this colour up a bit in the implementation
- It'd be prudent to create a generic Heading primitive component, for things like h1, h2, h3, etc. to keep design implementation consistent across the app. Currently there's some duplication on the ProductDetail headings, just to save time
- Had to take a shortcut with the QuantityField input. In the real world, we'd have the quantity selector use an actual `[type="number"]` input, or at the very least, do a vastly better job with the a11y attrs
- Contents of user's basket should be persisted via either `localStorage` or cookies
- I _really_ wanted to add some simple UI for the basket - perhaps an overlay - where the user could update the quantities in their basket, but simply ran out of time. The `BasketContextProvider` would be extended to support incrementing/decrementing existing products, as well as make use of the `removeProduct` function
