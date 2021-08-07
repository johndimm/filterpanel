This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# filterpanel

This is an npm package that exports a react component that generates a filter panel from a table of data.   Filter panels are used by Amazon, Walmart, and many other e-commerce sites.    

## Installation:

```
  npm install filterpanel --save
```

## Intro and examples

<https://filterpanel-csv.vercel.app/>

## Definitions

<i>Feature filters</i> are the blocks of checkboxes in the filter panel UI. 

The <i>filter panel</i> is the container for all the feature filters.

## The problem

This looks easy at first glance.  If nothing is checked, a feature filter passes everything.  If <i>any</i> categories are checked, it passes only the items that match one or more of them.  The features must <i>all</i> pass an item for it to be in the working set.    

So far, this can be handled by a straightforward SQL query.

The problem is due to other requirements.  The feature filters are not supposed to be static.  They react to the selections made on other filters.  Every click on a checkbox changes the working set, which means the counts in each feature filter must be updated.  

A subtle point is that the filter must not update itself.  Clicking on checkboxes within a feature filter should not change the filter's own display.  The same checkboxes need to remain on screen, allowing the user to combine the current selection with other values to increase the working set.

The solution here assigns some responsibilities to the panel, which contains the feature filters, and others to the filters themselves.  The panel is responsible for aggregating the results of the feature filters and updating them with the aggregated data.  The "no-self-update" requirement means that each filter needs to get its own version of the working set, leaving out any restrictions caused by that filter.  

The feature filters need to update counts using the data received from the panel.  They also need to scan the working set to add or remove items.

It would be possible, but awkward and probably slow, to do this using arrays of items.  Add or remove items from the array.  Make different arrays for each filter.  

Instead, it's done here using document masks, which are boolean arrays with one element for each input record.  The value is true if the item belongs in the working set, false if not.  This makes it quick to flip items on or off and easy to merge the results of several filters.  Each filter has one such array for logging its output, the output mask.  This array is managed by React useState, and sent up to the panel using a callback.  The panel has an array of arrays, one for each filter, also managed by useState. From the filter's point of view, these are the input masks.  When a filter's input mask changes, it will render the new counts.
