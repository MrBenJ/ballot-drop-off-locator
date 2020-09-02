Ballot Drop off Locator Design documentation
============================================

Get my thoughts in order before coding this out.

## Deployment strategies

* S3 bucket, served through Cloudfront CDN.
  * S3 bucket permissions should allow for CORS and read only access
* create-react-app boilerplate
* react-router for routing
  * Use hash router for simplicity
* react-i18n for Internationalization
  * Maybe ask for help from the open source community to help with translations?
* Scss for styling


## Challenges to address

### Keep bundle small

React has a terrible reputation for bundling too much stuff in here. I am proposing we break out the data into smaller chunks so the initial load of the page isn't 5MB, since we're looking at over 3,000+ counties in the USA.

```
<root> (public)
|--data
   |--[state_abbreviation].json (list of counties)
   |--[state_abbreviation]
      |--[county_name].json (list of polling places in county)
```

We can use `React.lazy` to code-split each page, and depending on the state and county selected, we can have that fetch the data from the S3 bucket.